# Specification

## Summary
**Goal:** Refresh the frontend with a premium dark cyberpunk UI, improve text readability across the site, and replace the hero/banner and logo assets without breaking existing flows.

**Planned changes:**
- Redesign UI styling across Header, Section Navigation, Hero, Dashboard, Panels, Pricing Table, Contact, and Payment modal to use a cohesive darker cyberpunk palette (dark black/dark gray/dark blue) with consistent spacing and typography.
- Improve site-wide readability by adjusting contrast, font sizing, line-height, and overlays where text sits on images/glass panels (including hero text over the banner).
- Replace the current logo and hero banner with new premium versions and update frontend references to the new asset filenames under `frontend/public/assets/generated`.
- Audit and remove/resolve conflicting or unused global theme styling so the app renders consistently in a dark-only theme (no accidental light-theme tokens).

**User-visible outcome:** The site appears consistently darker and more premium, text is clearly readable across all sections (including the hero), and the header logo + hero banner are updated—while the existing purchase flow and section navigation continue to work as before.
