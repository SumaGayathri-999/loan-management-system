import { NavLink } from "react-router"
import { cn } from "cn"

import { NAV_ITEMS, type NavItem } from "@/app/nav"
import { Brand } from "@/components/layout/Brand"

type SidebarNavProps = {
  onNavigate?: () => void
}

export function SidebarNav({ onNavigate }: SidebarNavProps) {
  const mainItems = NAV_ITEMS.filter((item) => item.group === "main")
  const footerItems = NAV_ITEMS.filter((item) => item.group === "footer")

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border px-2 pb-4">
        <Brand />
      </div>
      <nav aria-label="Primary" className="mt-4 flex flex-1 flex-col">
        <NavList items={mainItems} onNavigate={onNavigate} />
        <div className="mt-auto pt-4">
          <NavList items={footerItems} onNavigate={onNavigate} />
        </div>
      </nav>
    </div>
  )
}

type NavListProps = {
  items: NavItem[]
  onNavigate?: () => void
}

function NavList({ items, onNavigate }: NavListProps) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map(({ label, path, icon: Icon }) => (
        <li key={path}>
          <NavLink
            to={path}
            // Dashboard ("/") would otherwise match every route
            end={path === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                "flex h-11 items-center gap-3 rounded-sm px-3 text-base font-ui outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none",
                isActive
                  ? "bg-card text-primary shadow-xs"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            <Icon aria-hidden className="size-5" />
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
