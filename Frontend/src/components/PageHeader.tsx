import type { ReactNode } from "react"

type PageHeaderProps = {
  title: string
  actions?: ReactNode
}

export function PageHeader({ title, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 px-4 pt-6 md:flex-row md:items-center md:justify-between md:px-6 lg:border-b lg:border-border lg:px-8 lg:py-6">
      <title>{`${title} · Finaura`}</title>
      <h1 className="text-2xl font-medium text-foreground">{title}</h1>
      {actions}
    </div>
  )
}
