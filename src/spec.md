# Specification

## Summary
**Goal:** Replace the QR-based payment flow with a copyable UPI ID payment step, and standardize all Discord links to the updated invite URL.

**Planned changes:**
- Set `DISCORD_INVITE_URL` to `https://discord.gg/black-exe` and update all Discord navigation points (Contact section, Dashboard Support, Payment panel) to use this constant (no hardcoded URLs).
- Remove the QR-code payment UI from the Dashboard Payment panel and replace it with an English-only UPI payment UI showing `9352000693@axl` plus a copy-to-clipboard action and “copied” confirmation.
- Change the “BUY NOW” / panel-card click flow to open an in-app payment step (showing UPI + copy) and present WhatsApp + Discord confirmation options, without auto-opening WhatsApp.

**User-visible outcome:** Users clicking “BUY NOW” see a payment screen with a copyable UPI ID and buttons to confirm via WhatsApp or Discord, and all Discord links across the site go to `https://discord.gg/black-exe`.
