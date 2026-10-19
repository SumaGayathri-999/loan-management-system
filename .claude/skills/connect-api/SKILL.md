---
name: connect-api
description: Connect a frontend feature to a FastAPI endpoint in Backend/ — derive TypeScript types from the Pydantic schemas, write a typed API client, and handle loading/error states. Use when a page needs to fetch or submit backend data (customers, loans, etc.).
---

# Connect a feature to the backend API

## 1. Read the contract
- Router: `Backend/app/routers/<resource>.py` — note the prefix, paths, methods, status codes, and `response_model`.
- Schemas: `Backend/app/schemas/<resource>.py` — these define request and response shapes.
- `Backend/app/main.py` — check whether CORS middleware is configured.

## 2. Check frontend prerequisites
- `VITE_API_URL` is defined (in `Frontend/.env.example` and used via `import.meta.env.VITE_API_URL`), or a Vite dev proxy exists.
- A shared client exists in `Frontend/src/lib/` (e.g. `api-client.ts`).
- If the backend has no CORS setup and there is no Vite proxy, tell the user — the browser will block requests. Propose the fix (CORS middleware for the dev origin, or a Vite proxy) and wait for approval; it changes config.
- If no shared client exists, propose a minimal one (fetch wrapper: base URL, JSON headers, non-2xx → typed error) before creating it.

## 3. Write types
In `Frontend/src/features/<feature>/types.ts`, mirror the schemas exactly:
- `str | None = None` → optional or `string | null` as the response actually returns it (responses return `null`, create payloads may omit).
- `datetime` → `string` (ISO 8601).
- `EmailStr` → `string`.
- Keep names recognisable (`CustomerCreate`, `Customer`).

## 4. Write the API functions
In `Frontend/src/features/<feature>/api.ts`: one named, typed function per endpoint (e.g. `listCustomers`, `createCustomer`). No `any`. Surface FastAPI validation errors (422 `detail`) so forms can show field-level messages.

## 5. Use in the UI
- Represent request state with a discriminated union (`idle | loading | success | error`) or the approved data library if one is added later.
- Show loading, empty, and error states; disable submit while submitting.
- Do not add TanStack Query or similar without approval.

## 6. Verify
Run the `verify-frontend` skill. If the backend is running, mention how the user can test the call; do not claim the integration works unless a request was actually made.
