---
name: verify-frontend
description: Run the Frontend's lint and type-check/build and report the real results. Use after any code change in Frontend/, or when the user asks to verify, check, lint, or build the frontend.
---

# Verify the frontend

Run from `Frontend/`:

1. `npm run lint`
2. `npm run build` (runs `tsc -b` then `vite build`; this is the type-check)

## Reporting
- Report each command as passed or failed.
- On failure, quote the relevant error lines (file, line, message) — do not paraphrase them away.
- Separate failures caused by the current change from pre-existing ones (check whether the failing file appears in `git diff`).
- Never say a check passed unless it ran in this session and exited successfully.
- Do not "fix" failures by disabling lint rules, adding `// @ts-ignore`, `any`, or loosening `tsconfig`. Fix the cause or report it.
