<div align="center">
  <img src="public/resources/images/profile.webp" alt="Samuel Oberger Rockenbach" width="160" />

  <h1>rockberpro.github.io</h1>

  <p>Personal portfolio of <strong>Samuel Oberger Rockenbach</strong>, software engineer from Brazil.</p>

  <p><a href="https://rockberpro.github.io"><strong>rockberpro.github.io</strong></a></p>
</div>

## Highlights

- **Three languages:** English, Português and Latina. Portuguese browsers get `pt` on the first visit, Latin is opt-in, and the pick is saved in a cookie.
- **Search** across projects and skills.
- **Sticker art:** die-cut character stickers with a baked-in white border.
- Dark mode by default, glass panels, fully static.

## Stack

[Nuxt 4](https://nuxt.com) · [Vue 3](https://vuejs.org) · [Nuxt UI](https://ui.nuxt.com) · [Tailwind CSS 4](https://tailwindcss.com) · [Bun](https://bun.sh)

## Run locally

```bash
bun install
bun run dev        # http://localhost:3000
```

Preview the static build that GitHub Pages serves:

```bash
bun run generate:pages
npx serve .output/public
```

## Layout

```
app/
  app.vue        the whole page: data (links, hobbies, projects) and template
  locales/       en.ts, pt.ts, la.ts — every visible string
  assets/css/    global styles
public/resources/images/   optimized *.sticker.webp images served by the site
originals/                 full-size sources the stickers are made from
```

## Editing content

- **Text:** edit `app/locales/*.ts`. `en.ts` defines the shape, so `pt` and `la` must have the same keys.
- **Projects, hobbies, links:** edit the arrays at the top of `app/app.vue`. Project descriptions stay in English in every language, because the cards link to English repos.
- **New sticker:** keep the source in `originals/` and export a `<name>.sticker.webp` (about 400px, transparent background, white outline baked in) to `public/resources/images/`. Then reference it with `img("<name>")`. If an image is a square crop with no transparency, set `framed: true` instead, and CSS draws the border.

## Deploy

Every push to `main` runs [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which builds with `nuxt generate --preset github_pages` and publishes to GitHub Pages.
