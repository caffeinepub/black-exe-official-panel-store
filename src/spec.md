# Specification

## Summary
**Goal:** Update panel pricing so INTERNAL and AIMBOT VISIBLE match BASIC across all supported durations, and add a new panel “SILENT AIM KRIPTON” with the user-provided pricing (with duplicate duration resolved).

**Planned changes:**
- In `frontend/src/data/panels.ts`, set the INTERNAL panel prices to exactly match BASIC for all BASIC durations (1 DAY, 2 DAYS, 7 DAYS, 1 MONTH, PERMANENT).
- In `frontend/src/data/panels.ts`, set the AIMBOT VISIBLE panel prices to exactly match BASIC for all BASIC durations (1 DAY, 2 DAYS, 7 DAYS, 1 MONTH, PERMANENT).
- Add a new panel entry named “SILENT AIM KRIPTON” in `frontend/src/data/panels.ts` and ensure it appears everywhere panels are rendered (Available Panels grid, search/filter, Pricing Table).
- Resolve the conflicting “7 DAY” prices for “SILENT AIM KRIPTON” by implementing a single 7-day duration entry (using the site’s duration label format, e.g., “7 DAYS”) and ensuring no duplicate duration labels exist in its prices list.

**User-visible outcome:** INTERNAL and AIMBOT VISIBLE show the same price range and per-duration prices as BASIC, and users can find and view the new “SILENT AIM KRIPTON” panel in both the panels list and pricing table with consistent, non-duplicated durations.
