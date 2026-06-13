# Glitch Portfolio

A serious developer portfolio for Glitch built with Vite and React. The site focuses on plugins, tools, systems, automation, UI experiments, and practical coding projects.

## Features

- Dark futuristic interface with purple, blue, and cyan accents
- Animated CSS quantum orb with three rotating rings
- Responsive hero, project cards, screenshot placeholders, skills, experience, contact, and footer
- Data-driven portfolio text in `src/data/portfolioData.js`
- Reduced-motion support
- No paid assets or copyrighted images

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
- Projects
- Gallery items
- Skills
- Experience items
- Contact placeholders and links

## Add Screenshots

Add images to `public/screenshots/`, then add entries to the `gallery` array in `src/data/portfolioData.js`.

Example:

```js
gallery: [
  {
    src: '/screenshots/plugin-preview.png',
    alt: 'Plugin interface preview',
    caption: 'Plugin interface preview',
  },
]
```

## Verification

Passed:

- `npm.cmd install`
- `npm.cmd run lint`
- `npm.cmd run build`
- Browser DOM check at `http://127.0.0.1:5174/`
- Mobile viewport metrics at 390px width
