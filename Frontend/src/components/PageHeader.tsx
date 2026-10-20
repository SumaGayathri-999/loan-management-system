type PageHeaderProps = {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="px-4 pt-6 md:px-6 lg:border-b lg:border-border lg:px-8 lg:py-6">
      <title>{`${title} · Finaura`}</title>
      <h1 className="text-2xl font-medium text-foreground">{title}</h1>
    </div>
  )
}
