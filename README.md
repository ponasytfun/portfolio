# Glitch Portfolio

A personal about-me portfolio for Glitch built with Vite and React. The site focuses on interests, skills, Minecraft plugin work, server systems, automation, UI experiments, and how to get in contact.

Published site:

```text
https://ponasytfun.github.io/portfolio/
```

## Features

- Dark futuristic interface with purple and pink accents
- Animated CSS quantum orb with three rotating rings
- Responsive hero with round profile image, build-interest cards, skills, about/experience notes, contact, and footer
- Data-driven portfolio text in `src/data/portfolioData.js`
- Reduced-motion support
- No paid assets
- GitHub Pages deployment through GitHub Actions
- All Rights Reserved license; this is not an open-source project

## License

All rights reserved. Viewing this repository does not grant permission to copy,
modify, distribute, host, reuse, or create derivative works from the code,
assets, design, or content.

## Run Locally

```bash
npm run dev
```

PowerShell may block `npm.ps1` on this machine. If that happens, use:

```bash
npm.cmd run dev
```

## Build

```bash
npm run build
```

PowerShell-safe version:

```bash
npm.cmd run build
```

## Deploy

Push to `main`. GitHub Actions builds the Vite app and deploys `dist` to GitHub Pages.

## Lint

```bash
npm run lint
```

PowerShell-safe version:

```bash
npm.cmd run lint
```

## Edit Portfolio Content

Edit `src/data/portfolioData.js` to update:

- Hero text
- Build-interest cards
- Skills
- Experience items
- Contact text

The visible site no longer renders a screenshots/gallery section.

## Verification

Passed:

- `npm.cmd install`
- `npm.cmd run lint`
- `npm.cmd run build`
- Browser DOM check at `http://127.0.0.1:5174/`
- Mobile viewport metrics at 390px width
