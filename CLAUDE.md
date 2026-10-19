# Loan Management System

Monorepo for a loan management product (brand: Finaura).

## Layout
- `Frontend/` — React SPA (Vite, TypeScript, Tailwind, shadcn/ui). See `Frontend/CLAUDE.md` for frontend standards.
- `Backend/` — FastAPI + SQLAlchemy + Alembic.
  - `app/models/` SQLAlchemy models, `app/schemas/` Pydantic schemas, `app/routers/` API routes, `app/db.py` session setup.
  - `migrations/` Alembic migrations.
  - Backend standards: not written yet. Follow the existing patterns in `app/` and ask before introducing new ones.

## Repo-wide rules
- Never edit or delete anything in `Frontend/.cursor/`. Cursor is still used on this project; those rules stay as they are.
- Never read, print, or commit `.env` files. Use `.env.example` for documenting variables.
- The backend Pydantic schemas are the contract for the frontend. When they change, update the matching frontend types.
- Work only on the requested task. Explain and get approval before touching files outside its expected scope.
- Do not commit unless asked. If on `main`, create a branch first.
