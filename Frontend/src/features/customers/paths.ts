export const CUSTOMER_PATHS = {
  list: "/customers",
  new: "/customers/new",
  // Temporary: customer names link to the dashboard until a detail page exists
  detail: "/",
} as const

// Keep digits and a leading "+" so the dialer gets a clean number
export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`
}
