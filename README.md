```
chenchu-site/
├─ content/posts/*.md            # blog posts (markdown + frontmatter)
├─ public/static/sources/
│  ├─ CHYS_Resume.pdf            # LaTeX output, served as-is
│  └─ CHYS_CV.pdf
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx              # Header + Footer + theme script (wraps every page)
│  │  ├─ page.tsx                # Home: intro text + Resume and CV download links
│  │  └─ blog/
│  │     ├─ page.tsx             # post list
│  │     └─ [slug]/page.tsx      # single post
│  ├─ components/                # Header, Footer, ThemeToggle
│  └─ lib/
│     ├─ site.ts                 # links, email, PDF paths
│     └─ posts.ts                # reads and renders markdown at build time
└─ next.config.ts                # output: "export" (static HTML in ./out)
```


Static site built with Next.js (App Router), TypeScript and Tailwind CSS. `next build` exports plain HTML/CSS/JS to `out/`, which Cloudflare serves. There is no server runtime.

### Routes

| URL | Source |
| --- | --- |
| `/` | `src/app/page.tsx` (intro, Resume and CV download links) |
| `/blog/` | `src/app/blog/page.tsx` (post list) |
| `/blog/<slug>/` | `src/app/blog/[slug]/page.tsx` (one page per `.md` file) |
| `/static/sources/CHYS_Resume.pdf` | `public/static/sources/` (static file) |
| `/static/sources/CHYS_CV.pdf` | `public/static/sources/` (static file) |

### Data flow

- **Blog:** `content/posts/*.md` is read by `src/lib/posts.ts` at build time, rendered to HTML (GFM, KaTeX math, syntax highlighting) and written out as static pages. The filename becomes the URL slug. Posts with `draft: true` are excluded from production builds.
- **PDFs:** the resume and CV are compiled from LaTeX and committed to `public/static/sources/`. They are served as-is, and the home page links to both from `src/lib/site.ts`. To update one, recompile, overwrite the file and push.
- **Shared config:** links, email and PDF paths live in `src/lib/site.ts` and are used by the header, footer and home page.
- **Theme:** colors are CSS variables at the top of `src/app/globals.css`. Dark mode is a `dark` class on `<html>`, set by an inline script in `layout.tsx` (before first paint) and by `ThemeToggle`.