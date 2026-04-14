# AGENTS.md — jShamsul.com

## Project Overview

Personal blog/portfolio for J. Shamsul (@jibone). A **Next.js 16 App Router** application
in **TypeScript** with **Tailwind CSS**. Content is written in **MDX** with frontmatter,
stored in `web/contents/`. Deployed to **Vercel**.

The application code lives entirely inside the `web/` directory. There is no monorepo
setup — this is a single-package project.

---

## Build / Lint / Test Commands

All commands must be run from the `web/` directory:

```bash
cd web

# Install dependencies (npm only — no yarn/pnpm/bun)
npm install

# Development server (uses Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint (ESLint via Next.js)
npm run lint
```

**There is no test framework or test suite.** No Jest, Vitest, Playwright, or Cypress.
If you add tests, choose Vitest (recommended for Next.js App Router projects) and add a
`test` script to `web/package.json`.

---

## Project Structure

```
web/
  contents/
    books/          # MDX book entries (frontmatter + content)
    essays/         # MDX essay entries (date-prefixed filenames)
  src/
    app/            # Next.js App Router pages and layouts
      (api)/api/    # API route handlers (OG image generation)
    components/     # React components (barrel-exported via index.ts)
      og/           # OpenGraph image generation components
    fonts/          # Local iA Writer font files (.ttf)
    models/         # Data access classes (EssayCollection, BookCollection)
    styles/         # Syntax highlighting CSS themes
    utils/          # Utility classes (MDX processor, metadata helpers)
```

---

## Code Style Guidelines

### TypeScript

- **Strict mode** is enabled (`"strict": true` in tsconfig.json).
- Target is **ES2017** with **bundler** module resolution.
- Path alias: `@/*` maps to `./src/*`. Always use `@/` imports for project code.
- Use `import type { ... }` for type-only imports.

### Imports

- **Order**: Framework imports (`next`, `react`) first, then third-party libraries,
  then project imports (`@/components`, `@/models`, `@/utils`), then relative imports.
- **Barrel exports**: Each module directory (`components/`, `models/`, `utils/`) has an
  `index.ts` that re-exports public items. Import from the barrel:
  ```typescript
  import { Layout, EssayList } from "@/components";
  import { EssayCollection } from "@/models";
  import { MDX, generateSiteMetadata } from "@/utils";
  ```
- For sub-modules like OG components, import directly:
  ```typescript
  import { OGImageGen } from "@/components/og";
  ```

### Formatting

- **No Prettier or Biome config exists.** The default formatter is whatever the editor
  provides. Maintain consistency with existing files: 2-space indentation, double quotes
  for strings in TypeScript, semicolons at end of statements.
- ESLint config extends only `next/core-web-vitals` (see `web/.eslintrc.json`).

### Components

- Use **function declarations** with `export default`:
  ```typescript
  export default function ComponentName({ prop }: { prop: string }) {
    return <div>{prop}</div>;
  }
  ```
- Do NOT use arrow functions for component definitions.
- **Server Components** are the default. Only add `"use client"` when truly needed
  (event handlers, browser APIs, hooks).
- Async server components are used for data fetching — no `useEffect` or client-side
  fetching patterns.
- Props can be typed inline in the function signature for simple cases, or with a
  named type alias above the component for complex cases:
  ```typescript
  type BookBoxProps = { slug: string; };
  export default async function BookBox({ slug }: BookBoxProps) { ... }
  ```

### Naming Conventions

| Element | Convention | Examples |
|---------|-----------|----------|
| Component files | PascalCase `.tsx` | `Header.tsx`, `BookBox.tsx`, `EssayList.tsx` |
| Utility/model files | PascalCase `.ts` | `MDXProcessor.ts`, `EssayCollection.ts` |
| Utility helper files | camelCase `.ts` | `metadataUtil.ts`, `booksImg.ts` |
| Components | PascalCase functions | `function Header()`, `function BookBox()` |
| Classes | PascalCase (static methods) | `EssayCollection.list()`, `MDX.process()` |
| Types/Interfaces | PascalCase with suffix | `BookFrontmatter`, `PostProps`, `EssayListProps` |
| Variables/functions | camelCase | `getPageContents`, `getBaseUrl`, `genRand` |
| Essay content files | date-prefixed kebab-case | `2026-04-12-brainrot-industrial-complex.mdx` |
| Book content files | author-title kebab-case | `william-gibson-neuromancer.mdx` |

### Data Access Pattern

- Data access uses **static class methods** (not instances):
  ```typescript
  export default class EssayCollection {
    static readonly essaypath = `${process.cwd()}/contents/essays`;
    static async list() { ... }
    static slugList() { ... }
  }
  ```
- Content files are read synchronously with `fs.readFileSync`, then processed with
  `@mdx-js/mdx`'s `evaluate()`.
- Frontmatter is parsed with `gray-matter`.

### Error Handling

- Use try/catch with bare `catch` (no error parameter) and re-throw with descriptive
  `new Error(...)` messages:
  ```typescript
  try {
    fileList = fs.readdirSync(this.essaypath).reverse();
  } catch {
    throw new Error(`Fail to read directory ${this.essaypath}`);
  }
  ```
- No global error boundaries or custom error pages currently exist.
- No logging framework — avoid adding `console.log` in production code.

### Styling

- **Tailwind CSS v3.4** with the `@tailwindcss/typography` plugin.
- Use Tailwind utility classes in JSX `className` attributes.
- Custom font families: `font-iaWriterDuo`, `font-iaWriterQuattro`, `font-iaWriterMono`
  (plus italic variants), defined in `tailwind.config.ts`.
- A custom `.prose-custom` class is defined in `globals.css` for content typography.
- OG image components use inline `style` objects (not Tailwind) due to `@vercel/og`
  constraints.

### Next.js Specifics

- **App Router** only — no `pages/` directory.
- Metadata: use the Next.js Metadata API (`generateMetadata()`, `export const metadata`).
- OG images: use `opengraph-image.tsx` / `twitter-image.tsx` convention files with
  `@vercel/og`'s `ImageResponse`.
- Edge runtime is set for OG/API image routes: `export const runtime = "edge"`.
- MDX is configured via `@next/mdx` in `next.config.mjs` with `remark-gfm` and
  `rehype-highlight` plugins.
- Image remote patterns allow `m.media-amazon.com` for book covers.
- A permanent redirect exists: `/blog/:slug` -> `/essays/:slug`.

---

## Git Conventions

- **Commit messages**: Short imperative descriptions, often with PR numbers.
  Examples: `add brainrot post (#139)`, `update next dependencies (#138)`.
- **Branch naming**: kebab-case descriptive names (e.g., `improve-caching`,
  `add-spiders-and-their-web`).
- **Default branch**: `master`.

---

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` ^16.2.3 | Framework (App Router) |
| `react` ^19.2.5 | UI library (React 19) |
| `@mdx-js/mdx` ^3.1.0 | MDX processing |
| `gray-matter` ^4.0.3 | Frontmatter parsing |
| `date-fns` ^3.6.0 | Date formatting |
| `rehype-highlight` ^7.0.0 | Code syntax highlighting |
| `remark-gfm` ^4.0.0 | GitHub-flavored markdown |
| `@vercel/og` ^0.11.1 | OG image generation |
| `tailwindcss` ^3.4.1 | Utility-first CSS |
