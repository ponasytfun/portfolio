# Testing Checklist

## Completed Checks

- Desktop layout test: Passed. Hero, orb, build-interest cards, skills, about/experience notes, contact, and footer rendered.
- Mobile layout test: Passed by browser metrics at 390px width. No horizontal overflow, cards stacked, and hero buttons wrapped cleanly.
- Nav button test: Passed by link contract. Hero buttons point to `#projects`, `#skills`, and `#contact`, and each target section exists.
- Build-interest button test: Passed by link contract. Card links point to existing page sections and no screenshot/code evidence buttons render.
- Screenshots/gallery test: Not applicable. The visible site no longer renders a gallery section.
- Skills section test: Passed. Skill groups render with honest labels: Learning, Comfortable, Strong, and Advanced support in styles.
- Contact links test: Passed. Contact section displays Discord as `mr. zap` with no extra placeholder cards.
- Reduced motion test: Passed by CSS inspection. `prefers-reduced-motion: reduce` disables long animations and hover movement.
- Build command test: Passed. `npm.cmd run build` completed successfully.
- Lint command test: Passed. `npm.cmd run lint` completed successfully.
- GitHub Pages workflow test: Added `.github/workflows/deploy.yml`; remote deployment runs after push to `main`.
- No broken images test: Passed. The visible site uses the profile image and does not render the archived screenshot gallery.
- No console errors test: Passed. Browser dev logs returned no errors during desktop and mobile checks.

## Notes

- Dev server ran at `http://127.0.0.1:5174/` because port `5173` was already in use.
- The in-app browser captured one desktop clip successfully. Later screenshot attempts timed out in the browser automation layer, but DOM, console, and responsive metrics checks still passed.
