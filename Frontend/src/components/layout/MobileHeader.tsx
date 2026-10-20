import { useState } from "react"
import { Menu } from "lucide-react"

import { Brand } from "@/components/layout/Brand"
import { SidebarNav } from "@/components/layout/SidebarNav"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-2 bg-card px-2 shadow-xs lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={<Button variant="ghost" size="icon-lg" aria-label="Open navigation" />}
        >
          <Menu aria-hidden className="size-5" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-background p-4">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SidebarNav onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
      <Brand />
    </header>
  )
}
