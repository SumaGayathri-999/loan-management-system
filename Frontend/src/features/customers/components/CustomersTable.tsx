import { useState } from "react"
import {
  createColumnHelper,
  createSortedRowModel,
  flexRender,
  rowSortingFeature,
  sortFn_basic,
  sortFn_text,
  tableFeatures,
  useTable,
  type SortDirection,
  type SortingState,
} from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import { Link } from "react-router"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CUSTOMER_PATHS } from "@/features/customers/paths"
import type { Customer } from "@/features/customers/types"

const dateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: "medium" })

const linkClassName =
  "rounded-sm outline-none underline-offset-4 hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"

// Long free text wraps instead of pushing the table wider than the viewport
const wrapClassName = "whitespace-normal [overflow-wrap:anywhere]"

const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: { basic: sortFn_basic, text: sortFn_text },
})

const columnHelper = createColumnHelper<typeof features, Customer>()

const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Name",
    sortFn: "text",
    cell: ({ getValue }) => (
      <Link to={CUSTOMER_PATHS.detail} className={`${linkClassName} text-primary`}>
        {getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("phone", {
    header: "Phone",
    enableSorting: false,
  }),
  columnHelper.accessor("email", {
    header: "Email",
    enableSorting: false,
    cell: ({ getValue }) => getValue() ?? "—",
  }),
  columnHelper.accessor("address", {
    header: "Address",
    enableSorting: false,
    cell: ({ getValue }) => getValue() ?? "—",
  }),
  columnHelper.accessor("created_at", {
    header: "Added",
    // ISO 8601 strings sort chronologically as plain strings
    sortFn: "basic",
    cell: ({ getValue }) => dateFormatter.format(new Date(getValue())),
  }),
])

const WRAPPING_COLUMNS = new Set(["name", "email", "address"])

const ARIA_SORT = {
  asc: "ascending",
  desc: "descending",
} as const

function SortIcon({ direction }: { direction: SortDirection | false }) {
  if (direction === "asc") return <ArrowUp />
  if (direction === "desc") return <ArrowDown />
  return <ArrowUpDown className="opacity-50" />
}

type CustomersTableProps = {
  customers: Customer[]
}

export function CustomersTable({ customers }: CustomersTableProps) {
  // Matches the backend's default order (newest first)
  const [sorting, setSorting] = useState<SortingState>([
    { id: "created_at", desc: true },
  ])

  const table = useTable({
    features,
    columns,
    data: customers,
    state: { sorting },
    onSortingChange: setSorting,
  })

  return (
    <Table className="[&_td:first-child]:pl-8 [&_td:last-child]:pr-8 [&_th:first-child]:pl-8 [&_th:last-child]:pr-8">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const direction = header.column.getIsSorted()
              const label = flexRender(header.column.columnDef.header, header.getContext())
              return (
                <TableHead
                  key={header.id}
                  aria-sort={
                    header.column.getCanSort()
                      ? direction
                        ? ARIA_SORT[direction]
                        : "none"
                      : undefined
                  }
                >
                  {header.column.getCanSort() ? (
                    <button
                      type="button"
                      onClick={header.column.getToggleSortingHandler()}
                      className="inline-flex items-center gap-1.5 rounded-sm uppercase outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:size-3.5"
                    >
                      {label}
                      <SortIcon direction={direction} />
                    </button>
                  ) : (
                    label
                  )}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getAllCells().map((cell) => (
              <TableCell
                key={cell.id}
                className={WRAPPING_COLUMNS.has(cell.column.id) ? wrapClassName : undefined}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
