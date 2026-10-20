import { Link } from "react-router"

import { PageHeader } from "@/components/PageHeader"
import { buttonVariants } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <>
      <PageHeader title="Page not found" />
      <div className="px-4 py-6 md:px-6 lg:px-8">
        <p className="text-base text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className={buttonVariants({ variant: "secondary", className: "mt-4" })}>
          Go to Dashboard
        </Link>
      </div>
    </>
  )
}
