import {
  HandCoins,
  LayoutDashboard,
  ReceiptText,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react"

export type NavId = "dashboard" | "customers" | "loans" | "repayments" | "settings"

export type NavItem = {
  id: NavId
  label: string
  path: string
  icon: LucideIcon
  // "footer" items are pinned to the bottom of the sidebar
  group: "main" | "footer"
}

export const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", path: "/", icon: LayoutDashboard, group: "main" },
  { id: "customers", label: "Customers", path: "/customers", icon: Users, group: "main" },
  { id: "loans", label: "Loans", path: "/loans", icon: HandCoins, group: "main" },
  { id: "repayments", label: "Repayments", path: "/repayments", icon: ReceiptText, group: "main" },
  { id: "settings", label: "Settings", path: "/settings", icon: Settings, group: "footer" },
]
