# Latents & Logs

Public study garden of **Wanning He** — working notes on diffusion & video generation (Latents), distributed & ML systems (Logs), and agentic systems (Loops).

Live at **https://latents-and-logs.vercel.app**

## Stack

- [Astro 5](https://astro.build) + MDX + Tailwind CSS 4, deployed on Vercel
- KaTeX for math, Shiki for code, Mermaid for diagrams (lazy-loaded client-side)
- No trackers, no analytics, self-hosted fonts

## Writing

Posts live in `src/content/posts/*.mdx`. Frontmatter:

```yaml
title: 'Post Title'
description: 'One-sentence summary shown in lists and meta tags.'
date: 2026-07-24            # updated: for later tending
track: generative            # generative | systems | agents
type: note                   # note | essay
status: seed                 # seed 🌱 | growing 🌿 | evergreen 🌲
series: 'MIT 6.824'          # optional, + seriesOrder: 1
tags: [diffusion, attention]
draft: true                  # hidden in production builds
```

MDX components: `<Callout emoji="💡" tone="iris|amber|teal">`, `<Toggle title="...">`, `<Figure src alt caption>`.

### Reading Log

Daily entries live in `src/content/log/YYYY-MM-DD.md` and render at `/log`. Frontmatter is just `date` plus an optional `papers` list (`title`, optional `url`); the body is 1-3 sentences on what stuck, optionally ending with an open question. It's an anti-forgetting trace, not a streak — gaps are invisible, accumulation is visible.

## Develop

```sh
pnpm install
pnpm dev        # localhost:4321
pnpm build      # static build to dist/
```

Pushing to `main` deploys to production via Vercel.
