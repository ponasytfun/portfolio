# Changelog

## 2026-06-13

- Created a Vite + React portfolio site for Glitch.
- Added a dark futuristic design system with purple, blue, cyan, green, and amber accents.
- Added a CSS quantum orb background with a central glow, three animated rings, and particles.
- Added portfolio sections for hero, projects, screenshots/gallery, skills, experience, contact, and footer.
- Added data-driven content in `src/data/portfolioData.js`.
- Added gallery placeholders because no existing screenshots were found.
- Replaced gallery placeholders with the Prism SMP lore screenshot.
- Added a round profile image in the hero from `public/profile/glitch-pfp.png`.
- Updated Discord contact to `mr.zap`.
- Updated server hosting skill level to Strong.
- Renamed the GitHub repository from `Jarvis` to `portfolio`.
- Added GitHub Pages deployment workflow.
- Set Vite base path to `/portfolio/` for GitHub Pages.
- Added an All Rights Reserved license.
- Added two Prism plugin ability visual screenshots to the gallery.
- Replaced the top-left `G` brand mark with the round profile image.
- Added a round profile-image favicon and Apple touch icon.
- Added staggered card, row, hover, shimmer, and level-pill animations to the skills section.
- Added larger site-wide animations for the background grid, aurora glow, navigation, hero content, buttons, project cards, gallery items, modal previews, experience timeline, and contact cards.
- Refined the animation system by removing noisy infinite pulses/shimmers, toning down hover movement, and keeping the quantum orb as the main animated visual.
- Redesigned the skills section with summary tiles, category descriptions, numbered skill panels, and honest level meters.
- Replaced the sticky skills-card glint sweep with a static ambient glow so mobile hover states do not freeze a vertical highlight.
- Shifted the site toward an about-me portfolio by removing the rendered screenshots/gallery section and screenshot/code evidence buttons.
- Updated the visible contact section to only show Discord as `mr. zap`.
- Updated the color system from blue/cyan-heavy accents to a purple/pink palette.
- Added accessibility basics including semantic sections, heading order, focus states, disabled placeholder buttons, image alt support, and reduced-motion styles.
- Added project documentation, audit notes, testing checklist, and handoff message.
- Added `.gitignore` for dependencies, build output, logs, and generated workspace folders.
- Installed required local toolchain with `winget`: Node.js LTS, Git, and GitHub CLI.
- Installed npm dependencies and verified lint/build.
