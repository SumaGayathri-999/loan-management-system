import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"

import { PageHeader } from "@/components/PageHeader"
import { buttonVariants } from "@/components/ui/button"
import { CUSTOMER_PATHS } from "@/features/customers/paths"

export function NewCustomerPage() {
  return (
    <>
      <PageHeader title="Add customer" />
      <div className="flex flex-col items-start gap-4 px-4 py-6 md:px-6 lg:px-8">
        <p className="text-muted-foreground">The customer form is coming soon.</p>
        <Link
          to={CUSTOMER_PATHS.list}
          className={buttonVariants({ variant: "secondary", size: "lg", className: "md:h-10" })}
        >
          <ArrowLeft data-icon="inline-start" />
          Back to customers
        </Link>
      </div>
    </>
  )
}
