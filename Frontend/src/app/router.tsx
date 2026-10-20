import type { ReactElement } from "react"
import { createBrowserRouter, type RouteObject } from "react-router"

import { NAV_ITEMS, type NavId } from "@/app/nav"
import { AppLayout } from "@/components/layout/AppLayout"
import { NotFoundPage } from "@/components/layout/NotFoundPage"
import { CustomersPage } from "@/features/customers/CustomersPage"
import { NewCustomerPage } from "@/features/customers/NewCustomerPage"
import { CUSTOMER_PATHS } from "@/features/customers/paths"
import { DashboardPage } from "@/features/dashboard/DashboardPage"
import { LoansPage } from "@/features/loans/LoansPage"
import { RepaymentsPage } from "@/features/repayments/RepaymentsPage"
import { SettingsPage } from "@/features/settings/SettingsPage"

const PAGES: Record<NavId, ReactElement> = {
  dashboard: <DashboardPage />,
  customers: <CustomersPage />,
  loans: <LoansPage />,
  repayments: <RepaymentsPage />,
  settings: <SettingsPage />,
}

const navRoutes: RouteObject[] = NAV_ITEMS.map((item) =>
  item.path === "/"
    ? { index: true, element: PAGES[item.id] }
    : { path: item.path, element: PAGES[item.id] }
)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      ...navRoutes,
      { path: CUSTOMER_PATHS.new, element: <NewCustomerPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])
