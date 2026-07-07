# Glitch Portfolio

A personal staff and community portfolio for Glitch built with Vite and React. The site focuses on past Minecraft server staff experience, moderation, player support, server operations, community work, and how to get in contact.

Published site:

```text
https://ponasytfun.github.io/portfolio/
```

## Features

- Dark futuristic interface with purple and pink accents
- Animated CSS quantum orb with three rotating rings
- Responsive hero with round profile image, staff experience cards, skills, about notes, contact, and footer
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
- Staff experience cards
- Skills
- Server history
- Contact text

## Lanyard Discord Status

The contact section includes a Lanyard-powered Discord card. To connect it,
edit `src/data/portfolioData.js` and set:

```js
contact: {
  lanyard: {
    enabled: true,
    userId: 'YOUR_NUMERIC_DISCORD_USER_ID',
    kvKeys: ['status', 'role', 'availability', 'location'],
  },
}
```

The portfolio only reads public data from
`https://api.lanyard.rest/v1/users/:user_id`. Keep the Lanyard API key out of
frontend code; use it only privately to update KV values.

The visible site no longer renders a screenshots/gallery section.

## Verification

Passed:

- `npm.cmd install`
- `npm.cmd run lint`
- `npm.cmd run build`
- Browser DOM check at `http://127.0.0.1:5174/`
- Mobile viewport metrics at 390px width
