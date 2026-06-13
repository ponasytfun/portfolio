# Testing Checklist

## Completed Checks

- Desktop layout test: Passed. Hero, orb, project cards, gallery placeholders, skills, experience, contact, and footer rendered.
- Mobile layout test: Passed by browser metrics at 390px width. No horizontal overflow, project cards stacked, gallery stacked, and hero buttons wrapped to full width.
- Nav button test: Passed by link contract. Hero buttons point to `#projects`, `#screenshots`, and `#skills`, and each target section exists.
- Projects button test: Passed by link contract. Project detail links point to existing page sections, screenshots links point to the gallery, and missing code links are disabled.
- Screenshots/gallery test: Passed. No images existed, so four placeholder cards render without broken image icons.
- Skills section test: Passed. Skill groups render with honest labels: Learning, Comfortable, Strong, and Advanced support in styles.
- Contact links test: Passed. Missing GitHub, Discord, and email links are rendered as disabled placeholders.
- Reduced motion test: Passed by CSS inspection. `prefers-reduced-motion: reduce` disables long animations and hover movement.
- Build command test: Passed. `npm.cmd run build` completed successfully.
- Lint command test: Passed. `npm.cmd run lint` completed successfully.
- No broken images test: Passed. Gallery uses placeholder cards because no screenshot assets exist.
- No console errors test: Passed. Browser dev logs returned no errors during desktop and mobile checks.

## Notes

- Dev server ran at `http://127.0.0.1:5174/` because port `5173` was already in use.
- The in-app browser captured one desktop clip successfully. Later screenshot attempts timed out in the browser automation layer, but DOM, console, and responsive metrics checks still passed.
