# Copilot instructions

TextTool: a client-only rich-text notes PWA (SolidJS **2.0 RC** + TipTap + Tailwind 4/daisyUI + IndexedDB). Deployed to GitHub Pages (`base: "/TextTool/"`).

## Commands

- `npm ci` / `npm run dev` — dev server at http://localhost:3000
- `npm run build` — outputs to `dist/client`; `npm run serve` previews it
- `npm run task:lint` — Oxlint on `src` (with `eslint-plugin-solid` v2 rules); lint a single file with `npx oxlint src/path/file.tsx`
- `npm run task:fmt` — Oxfmt (tabs, print width 96, sorted imports)
- `npm run deploy` — publishes `dist/client` via gh-pages
- There is no test suite.

## Architecture

- `src/contexts/app.tsx` nests providers: Theme → Locale → Notes → Editor. Components consume them via `useNotes()`, `useLocale()`, etc. Each context file exports `XContext`, `XProvider`, and a `useX()` hook.
- **Notes** (`contexts/notes.tsx`) holds the current `draft` and the sorted `notes` list; all persistence goes through `src/database/notes.ts` (`idb`, object store `notes`, keyPath `_id`, index `by-date` on `timestamp`). After every mutation the context calls `refresh()` to reload from IndexedDB. On startup, notes older than 7 days that aren't bookmarked are deleted, and the newest note is reopened if edited within 2 minutes. Changing the DB schema requires bumping `DB_VERSION` in `database/index.ts`.
- The global `Note`/`NoteOptions` types live in `src/types/note.d.ts` (ambient, no import needed). `EmptyNote` in `utils/note.ts` creates new drafts.
- **i18n** is custom (no library): `src/i18n/lang/{en,pl}.ts`. `en` defines the `TranslationKey` type and `pl` must satisfy `Translation`, so add every key to both. Use `t(key, { count })`; placeholders are `{name}`. Language/theme prefs persist in `localStorage`.
- UI components live in `src/components/<Name>/index.tsx`; private sub-components of a component are siblings prefixed with `_` (e.g. `Sidebar/_drafts.tsx`).
- Import `src` files with the `~` alias (`~/contexts/notes`).

## Conventions

- Solid 2.0 APIs differ from 1.x (e.g. `onSettled`, `createEffect(source, effect)` split form, `<NotesContext value=...>` instead of `.Provider`, imports from `@solidjs/web`). Follow existing code rather than Solid 1.x patterns from memory.
- Don't destructure props (Solid reactivity); `solid/no-innerhtml` is intentionally disabled for `.tsx`.
- Styling is Tailwind utility classes plus daisyUI components (`drawer`, etc.).
- When releasing, bump `version` in `package.json` (shown in the sidebar) and add an entry to the Changelog section in `README.md`.
