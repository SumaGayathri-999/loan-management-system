import type { Customer } from "@/features/customers/types"
import { apiClient } from "@/lib/api-client"

export async function listCustomers(signal?: AbortSignal): Promise<Customer[]> {
  // Trailing slash matches the FastAPI route and avoids a 307 redirect
  const { data } = await apiClient.get<Customer[]>("/customers/", { signal })
  return data
}
