# TextTool

TextTool is a lightweight web app for writing, formatting, and keeping notes. It runs in your browser without an account or server-side synchronization.

**Version:** 0.2.0  
**Live app:** [plkamilpawlik.github.io/TextTool](https://plkamilpawlik.github.io/TextTool)

## Features

- Rich-text editor with headings, lists, block quotes, and text formatting.
- Copy and paste formatted HTML, or copy plain text.
- Word, character, and selection counts.
- Automatic note saving in the browser, with bookmarks for notes you want to keep.
- Polish and English interface, plus light and dark themes.
- Installable Progressive Web App (PWA) in supported browsers.

### Data storage

Notes are stored locally in your browser's IndexedDB database. Language and theme preferences are saved in `localStorage`. Data is not synchronized between browsers or devices. Unbookmarked notes older than 7 days are automatically deleted; bookmarked notes are kept.

## Getting started

Install a Node.js and npm version supported by Vite 8, then run:

```sh
npm ci
npm run dev
```

The development server starts at `http://localhost:3000`.

## Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Starts the development server.           |
| `npm run build`     | Builds the app into `dist/client`.       |
| `npm run serve`     | Locally previews the production build.   |
| `npm run task:lint` | Lints files in `src` with Oxlint.        |
| `npm run task:fmt`  | Formats all files with Oxfmt.            |
| `npm run deploy`    | Publishes `dist/client` with `gh-pages`. |

## Technology

SolidJS, TypeScript, Vite, TipTap, Tailwind CSS, and IndexedDB.

## Changelog

### 0.2.1 — 2026-10-20

- Minor UI updates to improve usability on phones, especially those running iOS 27.

### 0.2.0 — 2026-10-19

- Set the project version to `0.2.0` and display it in the notes sidebar.
- Added this README with product, setup, and data-storage information.
- Added shared instructions for Copilot and other coding agents.

Record future releases and changes in this section.
