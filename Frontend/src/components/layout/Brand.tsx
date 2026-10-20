export function Brand() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/finaura-icon.png"
        alt=""
        width={36}
        height={36}
        className="size-9 rounded-md object-contain"
      />
      <span className="text-lg font-medium text-foreground">Finaura</span>
    </div>
  )
}
