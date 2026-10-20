// Mirrors CustomerResponse in Backend/app/schemas/customer.py
export type Customer = {
  id: number
  name: string
  phone: string
  address: string | null
  description: string | null
  email: string | null
  // ISO 8601
  created_at: string
}
