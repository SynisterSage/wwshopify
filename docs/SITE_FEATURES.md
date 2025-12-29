# Wicked Works Storefront – Feature Notes

This document captures design/UX decisions gathered during planning. Use it as the source of truth for what the new Hydrogen UI needs to support.

## Accounts & Orders

- Enable Shopify Customer Account API so `/account` (login/profile/orders) works.
- The account dashboard must show past orders and expose tracking links (pulled from `customerAccount` order data).
- Returns are handled manually: link users to the contact form (FormSubmit) or support email—no automated return portal for MVP.

## Tracking

- Customers view their order status and tracking numbers inside the account pages.
- For guests, provide a “Track order” entry point that leads to the same account login (or support form if they checked out as guest).

## Navigation (Header)

- Top navigation items:
  - `Shop` (aka “Shop All”) – goes to `/collections/all` or equivalent catalog.
  - `Collections` – drop-down / mega-menu for specific collections.
  - `Archives` – special landing page containing tagged drops; hovering should surface quick links to tag-filtered sections.
- Profile icon leads to `/account`.
- Search and cart CTAs stay in the header.

## Footer Content

Include the following columns/links:

1. **Shop**
   - New Arrivals
   - Shop All
2. **Support**
   - Tracking (links to Account → Orders)
   - Returns (links to contact form or support instructions)
   - Sizing Guide (future page or PDF)
   - Contact
3. **About**
   - About Us
   - (Add social/legal links as needed)

## Misc

- Apply the dark glass + neon red aesthetic across header/footer and account UI.
- Keep checkout on Shopify’s hosted checkout—no custom mockups needed.
