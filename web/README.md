# jShamsul.com

Personal site and writing archive of J. Shamsul (@jibone), with essays, the Code & Codex archive, book notes, an about page, and contact links.

## Stack

- Next.js 16 App Router with React 19 and TypeScript
- Tailwind CSS 3.4
- MDX content with YAML frontmatter, GitHub-flavored Markdown, and code highlighting
- Open Graph images generated with `@vercel/og`

## Local development

Run these commands from `web/`:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build (run `npm run build` first) |
| `npm run lint` | Run the lint script defined in `package.json` |

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Home page and essay lists |
| `/essays/[slug]` | Essay pages |
| `/code-and-codex` | Code & Codex introduction and essay archive |
| `/code-and-codex/manifesto` | Code & Codex manifesto |
| `/bookshelf` | Books marked as read |
| `/bookshelf/[slug]` | Book notes |
| `/about` | About J. Shamsul and the site |
| `/connect` | Social and contact links |
| `/api/og`, `/api/ogbook` | Open Graph image endpoints |

The legacy `/blog/:slug` path permanently redirects to `/essays/:slug`.

## Content

Essays live in `contents/essays/` and use date-prefixed filenames such as `YYYY-MM-DD-essay-slug.mdx`; the filename becomes the `/essays/[slug]` URL. Essay frontmatter includes `title`, `type`, `date`, `summary`, `ogTitle`, and `ogSubtitle`. Related essay links use full date-prefixed slugs in `relatedEssays`.

Book entries live in `contents/books/`; the filename becomes the `/bookshelf/[slug]` URL. Use the existing frontmatter field names, including `title`, `subtitle`, `author`, `translator`, `cover_img`, `read`, and `filed_under`. The bookshelf listing currently shows entries with `read: true`.

MDX bodies support GitHub-flavored Markdown and syntax-highlighted code blocks. See [`contents/essays/`](contents/essays/) and [`contents/books/`](contents/books/) for examples.

## Project layout

- `contents/` — essay and book MDX files
- `public/imgs/essays/` — essay images
- `src/app/` — pages, route handlers, and metadata images
- `src/components/` — shared UI components
- `src/models/` — essay and book data access
- `src/utils/` — MDX processing and metadata helpers
