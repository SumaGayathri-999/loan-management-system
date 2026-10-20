import axios from "axios"

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
})

type FastApiErrorBody = { detail?: unknown }

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError<FastApiErrorBody>(error)) {
    if (!error.response) {
      return "Can't reach the server. Check your connection and try again."
    }
    const detail = error.response.data?.detail
    if (typeof detail === "string") return detail
  } else if (error instanceof Error) {
    return error.message
  }
  return "Something went wrong. Please try again."
}
