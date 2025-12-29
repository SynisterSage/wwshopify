# Wicked Works Custom Storefront - Development Roadmap

**Project**: Shopify Hydrogen custom storefront for Wicked Works
**Store Domain**: https://wicked-works-3.myshopify.com/
**Runtime/Hosting**: Shopify Oxygen (worker runtime)

---

## Architecture Overview

```
┌───────────────────────────┐
│ Hydrogen (React Router 7) │
│ + Vite                    │
│ + Oxygen runtime          │
└──────────────┬────────────┘
               │ Storefront API (GraphQL)
┌──────────────▼────────────┐
│ Shopify Store (backend)   │
└───────────────────────────┘
```

### Key Decisions Made

| Decision | Choice | Reasoning |
|----------|--------|-----------|
| **Framework** | Hydrogen + React Router 7 | Official headless stack for Shopify |
| **Auth** | Customer Account API (`/account`) | Supported customer login/account pages |
| **Checkout** | Shopify hosted checkout | Secure payments, no custom checkout |
| **Analytics** | Shopify Admin (separate) | Friend already loves it, no duplication needed |
| **Notifications** | Shopify Default (stock) | Standard transactional emails from Shopify |
| **Product Sync** | Auto-sync via API | Real-time data from Shopify backend |
| **Customer Accounts** | Enabled | `/account` routes are present |
| **Domain** | TBD | Can run on Oxygen and later add custom domain |

---

## Phase 1: Foundation Setup (Weeks 1-2)
**Goal**: Keep Shopify wiring stable while restarting the UI/design system

### 1.1 Environment & Project Setup
- [x] Hydrogen project scaffolded
- [x] `.env.example` added
- [ ] Confirm `.env` values locally (not committed)

### 1.2 Shopify Integration
- [x] Storefront API connectivity working (GraphQL queries returning data)

### 1.3 Core Pages & Components
Create the following pages:
- [ ] **Home Page** - Hero, featured products, collections
- [ ] **Products Page** - All products with filtering (price, tags, etc.)
- [ ] **Product Detail Page** - Individual product with variants, images, description
- [ ] **Cart Page** - View/edit cart items, cart totals
- [ ] **Checkout** - Redirect button to Shopify hosted checkout

Create reusable components:
- [ ] Product Card component
- [ ] Product Grid component
- [ ] Filter sidebar component
- [ ] Cart drawer/modal component
- [ ] Navigation/Header component
- [ ] Footer component

### 1.4 Cart Functionality
- [ ] Implement cart state management (local storage + context)
- [ ] Add to cart functionality
- [ ] Remove from cart functionality
- [ ] Update quantities
- [ ] Calculate totals & taxes (via Shopify API)
- [ ] Persist cart across page reloads

### 1.5 Styling & Branding
- [ ] Create design system (colors, typography, spacing)
- [ ] Implement responsive design (mobile-first)
- [ ] Wait for moodboard from friend for specific styling preferences
- [ ] Apply brand colors and fonts

**Deliverable**: Functional storefront with product browsing, cart, and checkout redirect

**Environment Variables Needed**:
```env
PUBLIC_STOREFRONT_API_TOKEN=your_public_token_here
PUBLIC_STORE_DOMAIN=wicked-works-3.myshopify.com
SESSION_SECRET=your_session_secret_here
```

---

## Phase 2: Product Filtering & Auto-Sync (Weeks 3-4)
**Goal**: Advanced product discovery and real-time inventory updates

### 2.1 Product Filtering
- [ ] Filter by price range
- [ ] Filter by product type/tags
- [ ] Filter by availability
- [ ] Sort by (price, newest, bestselling)
- [ ] Clear filters functionality
- [ ] Active filter display/tags

### 2.2 Search Functionality
- [ ] Implement product search via Shopify Storefront API
- [ ] Search suggestions/autocomplete (optional)
- [ ] Search results page with filters

### 2.3 Collections Page
- [ ] Fetch and display all collections from Shopify
- [ ] Collection detail pages showing filtered products
- [ ] Breadcrumb navigation

### 2.4 Auto-Sync Implementation
- [ ] Set up revalidation strategy for product data (ISR or polling)
- [ ] Cache product data appropriately
- [ ] Handle inventory changes in real-time
- [ ] Handle price updates in real-time

### 2.5 Performance Optimization
- [ ] Image optimization (lazy loading, responsive images)
- [ ] Code splitting for routes
- [ ] Minification and bundling
- [ ] Caching strategy for static assets

**Deliverable**: Full-featured product browsing with filtering, search, and real-time sync

---

## Phase 3: Enhanced UX & Notifications (Weeks 5-6)
**Goal**: Polish user experience and integrate notifications

### 3.1 User Experience Enhancements
- [ ] Loading states and skeletons
- [ ] Empty states for cart/search
- [ ] Error boundaries and error messages
- [ ] Toast notifications (success/error feedback)
- [ ] Accessibility improvements (ARIA labels, keyboard nav)
- [ ] Page transitions/animations

### 3.2 Guest Checkout Flow (No Profiles)
- [ ] Implement guest-only checkout (no account required)
- [ ] Simple form for checkout info (name, email, address)
- [ ] Secure checkout redirect to Shopify
- [ ] Order confirmation email from Shopify

### 3.3 Notification System
- [ ] Confirm Shopify's default transactional emails work correctly
- [ ] Test order confirmation emails
- [ ] Test inventory/stock notification integration
- [ ] Document notification flow for friend

### 3.4 Mobile & Responsive Design
- [ ] Full mobile responsiveness testing
- [ ] Mobile navigation (hamburger menu)
- [ ] Touch-friendly UI elements
- [ ] Test on actual devices (iOS & Android)

**Deliverable**: Polished, accessible storefront ready for public use

---

## Phase 4: Deployment & Launch (Week 7)
**Goal**: Get the site live and accessible

### 4.1 Domain Setup
- [ ] Register domain (if needed) or use custom domain
- [ ] Configure DNS to point to Vercel
- [ ] Set up SSL certificate (Vercel handles this)

### 4.2 Production Deployment
- [ ] Deploy to Vercel production environment
- [ ] Environment variables configured in Vercel dashboard
- [ ] CI/CD pipeline set up (auto-deploy on git push)
- [ ] Monitor error tracking (Sentry or similar)

### 4.3 Testing Before Launch
- [ ] Full site functionality test
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Performance testing (Lighthouse audit)
- [ ] Security audit (no exposed tokens, HTTPS, etc.)
- [ ] Test Shopify checkout redirect flow end-to-end

### 4.4 Analytics & Monitoring
- [ ] Set up Vercel analytics
- [ ] Monitor API call errors
- [ ] Set up alerts for common issues
- [ ] Document monitoring process for friend

### 4.5 Launch & Documentation
- [ ] Hand off to friend with documentation
- [ ] Create user guide for friend
- [ ] Document how to manage products (via Shopify admin only)
- [ ] Document how to monitor analytics (Shopify admin)
- [ ] Provide emergency contact info for support

**Deliverable**: Live, working storefront with monitoring in place

---

## Phase 5: Future Enhancements (Post-Launch)
**Goal**: Add features based on feedback and if store grows

### 5.1 User Accounts (Only if store gets "surprisingly populated")
- [ ] Optional customer account creation
- [ ] Order history for returning customers
- [ ] Wishlist functionality
- [ ] Loyalty/rewards program

### 5.2 Advanced Analytics Dashboard (Optional)
- [ ] Custom dashboard pulling from Admin API
- [ ] Sales metrics
- [ ] Customer insights
- [ ] Inventory reports
- [ ] Requires Node.js backend

### 5.3 Email Integration (Optional)
- [ ] Newsletter signup integration
- [ ] Marketing email campaigns
- [ ] Abandoned cart recovery emails

### 5.4 SEO Optimization (Optional)
- [ ] Meta tags optimization
- [ ] Structured data markup
- [ ] Sitemap generation
- [ ] Open Graph tags for social sharing

### 5.5 Marketing Features (Optional)
- [ ] Discount code functionality
- [ ] Product reviews/ratings
- [ ] Email recommendations
- [ ] Social media integration

---

## Tech Stack Summary

### Frontend
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite (or Next.js if SSR needed)
- **State Management**: Zustand or Context API
- **Styling**: Tailwind CSS (or preferred CSS framework)
- **UI Components**: Shadcn/ui or Headless UI
- **HTTP Client**: Apollo Client (GraphQL) or TanStack Query
- **Routing**: React Router v6+
- **Form Handling**: React Hook Form
- **Validation**: Zod or Yup

### Backend (Minimal for MVP)
- **Not needed for Phase 1-3**
- **If added later**: Node.js + Express on Vercel Functions

### APIs
- **Shopify Storefront API** (GraphQL)
- **Shopify Admin API** (for Phase 2+ if analytics dashboard added)

### Hosting & Deployment
- **Frontend Hosting**: Vercel
- **Database**: None (all data from Shopify)
- **CDN**: Vercel Edge Network
- **Analytics**: Vercel Analytics + Shopify admin

---

## Environment Setup Checklist

### Before Starting Development
- [ ] Node.js 18+ installed
- [ ] npm/yarn/pnpm installed
- [ ] Git configured and repository created
- [ ] Vercel account created and connected to GitHub
- [ ] Shopify Headless channel created
- [ ] Public token extracted from Headless channel
- [ ] Private token saved securely (for future backend use)
- [ ] Store domain confirmed: `wicked-works-3.myshopify.com`

### Environment Files

**`.env.example`** (commit to git)
```env
VITE_SHOPIFY_STOREFRONT_TOKEN=your_public_token_here
VITE_SHOPIFY_STORE_DOMAIN=wicked-works-3.myshopify.com
```

**`.env.local`** (DO NOT commit - add to .gitignore)
```env
VITE_SHOPIFY_STOREFRONT_TOKEN=[INSERT_PUBLIC_TOKEN]
VITE_SHOPIFY_STORE_DOMAIN=wicked-works-3.myshopify.com
```

**Vercel Production Variables**
- Set same env vars in Vercel dashboard under project settings
- These will be used when deployed to production

---

## Key Milestones

| Phase | Duration | Key Deliverable | Status |
|-------|----------|-----------------|--------|
| Phase 1 | Weeks 1-2 | Basic storefront with products, cart, checkout | ⏳ TODO |
| Phase 2 | Weeks 3-4 | Filtering, search, real-time sync | ⏳ TODO |
| Phase 3 | Weeks 5-6 | Polish UX, mobile responsive, notifications | ⏳ TODO |
| Phase 4 | Week 7 | Deploy to production with domain | ⏳ TODO |
| Phase 5 | Post-launch | Enhanced features based on feedback | ⏳ TODO |

---

## Support & Maintenance Plan

### Post-Launch
- **Week 1 after launch**: Daily monitoring and bug fixes
- **Weeks 2-4**: 2-3x per week check-ins
- **Month 2+**: Weekly status updates and ongoing support
- **Critical bugs**: Immediate response

### Friend's Responsibilities
- Monitor Shopify admin for orders, inventory, analytics
- Add/remove products via Shopify admin (custom site auto-syncs)
- Report any issues with storefront

### Your Responsibilities (Ongoing)
- Monitor Vercel deployment health
- Fix any bugs reported
- Keep dependencies up-to-date
- Monitor error tracking
- Perform security updates

---

## Notes & Questions for Friend

- [ ] Waiting for moodboard/design inspiration
- [ ] Confirm domain name when ready
- [ ] Decide if customer login is needed (for Phase 3 or later)
- [ ] Get feedback on filtering options and search behavior
- [ ] Test checkout process thoroughly before launch
- [ ] Provide product images and descriptions for featured section

---

**Document Version**: 1.0
**Last Updated**: December 1, 2025
**Next Review**: When Phase 1 is complete
