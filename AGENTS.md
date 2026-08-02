# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the application code.
- `src/main.tsx` bootstraps the app, `src/App.tsx` holds the main UI, and `src/index.css` / `src/App.css` contain global and component styles.
- Static assets live in `src/assets/` and `public/`.
- Root config files include `vite.config.ts`, `tsconfig*.json`, and `eslint.config.js`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Vite development server with hot reload.
- `npm run build` runs TypeScript project checks and produces a production build.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint across the repository.

## Coding Style & Naming Conventions
- Use TypeScript and React function components.
- Follow the existing ESLint rules in `eslint.config.js`; fix lint issues before merging.
- Prefer 2-space indentation, single-purpose components, and descriptive camelCase names for variables and functions.
- Use PascalCase for component names and keep file names aligned with their primary export when practical, such as `GameBoard.tsx`.

## Testing Guidelines
- This repository does not currently include a test runner or test files.
- If you add tests, place them near the code or under a dedicated `tests/` directory and document the command here.
- Prefer clear, behavior-focused test names, such as `shows_error_when_balance_is_empty`.

## Commit & Pull Request Guidelines
- No formal commit convention is enforced yet. Keep commit messages short, imperative, and scoped, for example `Add game header layout`.
- Pull requests should summarize the change, note any new commands or configuration, and include screenshots for UI updates.
- Call out any manual verification steps, especially for changes affecting `src/App.tsx`, styling, or build output.

## Agent-Specific Instructions
- Keep changes minimal and consistent with the existing Vite template unless the task explicitly requires broader refactoring.
- Update this guide if you introduce tests, new scripts, or new top-level directories.

# ExecPlans
When writing complex features or significant refactors, use an ExecPlan (as described in ./PLANS.md) from design to implementation.