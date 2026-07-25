## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Content conventions

- Posts: `src/content/posts/*.mdx`, schema in `src/content.config.ts`, site constants in `src/site.ts`.
- This is a digital garden: posts carry `status: seed|growing|evergreen` and are published early. `draft: true` hides a post in production but shows it in dev.
- All site content is English-only — no Chinese anywhere on the site (her rule, 2026-07-24).
- When converting a note from ~/Desktop/科研手记 into a post: strip private sections (questions for collaborators, 汇报内容, unpublished research design details), verify all external links, and keep claims faithful to the source note.
- Dates are formatted with `timeZone: 'UTC'` — keep it that way to avoid off-by-one dates.
