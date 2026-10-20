import { Phone } from "lucide-react"
import { Link } from "react-router"

import { buttonVariants } from "@/components/ui/button"
import { CUSTOMER_PATHS, toTelHref } from "@/features/customers/paths"
import type { Customer } from "@/features/customers/types"

type CustomerCardListProps = {
  customers: Customer[]
}

export function CustomerCardList({ customers }: CustomerCardListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {customers.map((customer) => (
        <li key={customer.id} className="flex items-center gap-3 rounded-md bg-card p-4">
          <div className="min-w-0 flex-1">
            <Link
              to={CUSTOMER_PATHS.detail}
              className="block truncate rounded-sm py-0.5 font-ui text-foreground outline-none underline-offset-4 hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {customer.name}
            </Link>
            <p className="mt-1 truncate text-sm text-muted-foreground">{customer.phone}</p>
          </div>
          <a
            href={toTelHref(customer.phone)}
            aria-label={`Call ${customer.name}`}
            className={buttonVariants({ variant: "secondary", size: "icon-lg" })}
          >
            <Phone />
          </a>
        </li>
      ))}
    </ul>
  )
}
