import { useEffect, useState } from "react"
import { Plus } from "lucide-react"
import { Link } from "react-router"

import { PageHeader } from "@/components/PageHeader"
import { Button, buttonVariants } from "@/components/ui/button"
import { listCustomers } from "@/features/customers/api"
import { CustomerCardList } from "@/features/customers/components/CustomerCardList"
import { CustomersTable } from "@/features/customers/components/CustomersTable"
import { CUSTOMER_PATHS } from "@/features/customers/paths"
import type { Customer } from "@/features/customers/types"
import { getErrorMessage } from "@/lib/api-client"

type CustomersState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; customers: Customer[] }

// Panels sit on the canvas on mobile and on the white main surface on desktop
const panelClassName = "rounded-md bg-card lg:mx-8 lg:my-6 lg:bg-muted"

export function CustomersPage() {
  const [state, setState] = useState<CustomersState>({ status: "loading" })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    listCustomers(controller.signal)
      .then((customers) => setState({ status: "success", customers }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        setState({ status: "error", message: getErrorMessage(error) })
      })
    return () => controller.abort()
  }, [attempt])

  function retry() {
    setState({ status: "loading" })
    setAttempt((count) => count + 1)
  }

  return (
    <>
      <PageHeader
        title="Customers"
        actions={
          <Link
            to={CUSTOMER_PATHS.new}
            className={buttonVariants({ size: "lg", className: "md:h-10 md:px-5" })}
          >
            <Plus data-icon="inline-start" />
            Add customer
          </Link>
        }
      />
      <section aria-label="Customer list" className="px-4 py-6 md:px-6 lg:p-0">
        <CustomersContent state={state} onRetry={retry} />
      </section>
    </>
  )
}

type CustomersContentProps = {
  state: CustomersState
  onRetry: () => void
}

function CustomersContent({ state, onRetry }: CustomersContentProps) {
  if (state.status === "loading") {
    return (
      <div aria-busy="true" className="flex flex-col gap-2 lg:mx-8 lg:my-6">
        <span className="sr-only">Loading customers…</span>
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="h-[4.5rem] animate-pulse rounded-md bg-card motion-reduce:animate-none lg:h-12 lg:bg-muted"
          />
        ))}
      </div>
    )
  }

  if (state.status === "error") {
    return (
      <div role="alert" className={`${panelClassName} flex flex-col items-start gap-4 p-6`}>
        <div className="flex flex-col gap-1">
          <p className="font-ui text-foreground">Couldn't load customers</p>
          <p className="text-sm text-muted-foreground">{state.message}</p>
        </div>
        <Button variant="secondary" size="lg" className="md:h-10" onClick={onRetry}>
          Try again
        </Button>
      </div>
    )
  }

  if (state.customers.length === 0) {
    return (
      <div className={`${panelClassName} flex flex-col items-center gap-4 p-10 text-center`}>
        <div className="flex flex-col gap-1">
          <p className="font-ui text-foreground">No customers yet</p>
          <p className="text-sm text-muted-foreground">
            Add your first customer to start recording their loans.
          </p>
        </div>
        <Link
          to={CUSTOMER_PATHS.new}
          className={buttonVariants({ variant: "secondary", size: "lg", className: "md:h-10" })}
        >
          Add customer
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="lg:hidden">
        <CustomerCardList customers={state.customers} />
      </div>
      <div className="hidden lg:block">
        <CustomersTable customers={state.customers} />
      </div>
    </>
  )
}
