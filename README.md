[![Website](https://img.shields.io/website?url=https%3A%2F%2Fchenchu.dev)](https://chenchu.dev)
![Next.js](https://img.shields.io/badge/Next.js-16.4.2-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.3.0-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)


# Chenchu.Dev

A personal website and blog built with Next.js. It introduces my physics research and projects, and includes my resume and blog posts.

## Features

- Personal homepage and contact links
- Resume page with a downloadable PDF
- Blog index and individual post pages
- Markdown blog posts loaded from the separate [blog content repository](https://github.com/ChenchuH/cdev2.0_blog_repo)
- Responsive styling with Tailwind CSS

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Markdown

## Run locally

You’ll need Node.js and npm.

```bash
git clone https://github.com/ChenchuH/cdev2.0.git
cd cdev2.0
npm install
npm run dev


src/
├── app/
│   ├── Blog/       # Blog index and individual post pages
│   ├── Resume/     # Resume page
│   ├── page.tsx    # Homepage
│   └── globals.css # Global styles
├── components/     # Shared header and footer
└── lib/            # Blog data fetching
public/             # Static files, including the resume PDF and favicons
