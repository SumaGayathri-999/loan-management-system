import { Outlet } from "react-router"

import { MobileHeader } from "@/components/layout/MobileHeader"
import { SidebarNav } from "@/components/layout/SidebarNav"

export function AppLayout() {
  return (
    <div className="min-h-dvh bg-background lg:flex lg:h-dvh lg:gap-2 lg:p-2">
      <MobileHeader />
      <aside className="hidden lg:flex lg:w-60 lg:shrink-0 lg:flex-col lg:px-2 lg:py-4">
        <SidebarNav />
      </aside>
      <main className="min-w-0 flex-1 lg:overflow-y-auto lg:rounded-lg lg:border lg:border-border lg:bg-card">
        <Outlet />
      </main>
    </div>
  )
}
