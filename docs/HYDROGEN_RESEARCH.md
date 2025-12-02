# Shopify Hydrogen Deep Dive - Research & Analysis

**Date**: December 1, 2025
**Project**: Wicked Works Custom Storefront
**Research Focus**: Is Hydrogen the right choice? What are dependencies? How does it work?

---

## TL;DR - Quick Answer

**YES, you should use Hydrogen.** Here's why:

- ✅ Built specifically for Shopify storefronts (opinionated, faster development)
- ✅ Pre-wired Shopify API clients (less boilerplate)
- ✅ Server-side rendering (SSR) by default (better SEO, performance)
- ✅ Pre-built components for common e-commerce patterns
- ✅ Can deploy to Oxygen (Shopify's edge hosting) OR self-host on Vercel
- ✅ Built on React Router (familiar framework if you know React)
- ✅ TypeScript support out of the box

**Alternative**: Plain React + Storefront API (more control, more work)

---

## What is Hydrogen?

### The Hydrogen Stack (Three Layers)

```
┌─────────────────────────────────────┐
│  Hydrogen (App Layer)               │
│  - Components                       │
│  - Utilities                        │
│  - Design Patterns                  │
│  - CLI Tools                        │
└─────────────────────────────────────┘
           ↓ (Built on)
┌─────────────────────────────────────┐
│  React Router (Framework Layer)      │
│  - Routing                          │
│  - Data Fetching                    │
│  - Server-Side Rendering (SSR)      │
│  - Progressive Enhancement          │
└─────────────────────────────────────┘
           ↓ (Deployed on)
┌─────────────────────────────────────┐
│  Oxygen (Hosting/CDN Layer)         │
│  - Global Edge Network              │
│  - Deployment Management            │
│  - Environment Variables            │
│  - Caching                          │
│  - Optional (can use Vercel too)    │
└─────────────────────────────────────┘
```

### What Hydrogen Provides

| Feature | Benefit |
|---------|---------|
| **Pre-built Components** | ProductCard, AddToCart, Image optimization, ShopPayButton, etc. |
| **API Clients** | Handles Storefront API authentication, queries, mutations |
| **SSR (Server-Side Rendering)** | Better SEO, faster initial page load, less client-side JS |
| **Data Fetching** | React Router loaders fetch data server-side before rendering |
| **Caching Strategies** | Built-in cache headers for performance |
| **Routing** | File-based routing similar to Next.js |
| **CLI Tools** | `shopify hydrogen dev`, `shopify hydrogen deploy` |
| **TypeScript Support** | Full TypeScript support out of the box |

---

## Hydrogen vs. Plain React + Storefront API

### Scenario: Use Hydrogen
- ✅ Building a production e-commerce storefront
- ✅ Want best SEO practices by default
- ✅ Need server-side rendering
- ✅ Want Shopify's recommended approach
- ✅ Need pre-built components for common patterns
- ✅ Team is comfortable with React Router

### Scenario: Use Plain React + Storefront API
- ✅ Building a custom app (not a storefront) - e.g., customer dashboard, inventory tool
- ✅ Need full control over routing and rendering
- ✅ Don't need server-side rendering
- ✅ Prefer minimal framework overhead
- ✅ Prefer traditional client-side only React

**Your Project**: USE HYDROGEN ✅
(It's a custom storefront for Wicked Works - perfect use case)

---

## Hydrogen Architecture: How It Works

### File Structure

```
hydrogen-quickstart/
├── app/
│   ├── assets/              # Images, videos, etc.
│   ├── components/          # React components
│   │   ├── Product.jsx
│   │   ├── ProductCard.jsx
│   │   └── ...
│   ├── graphql/             # GraphQL queries (stored as files)
│   │   ├── products.graphql
│   │   ├── cart.graphql
│   │   └── ...
│   ├── lib/                 # Utility functions
│   ├── routes/              # File-based routing (like Next.js)
│   │   ├── index.jsx        # Home page /
│   │   ├── products.$handle.jsx  # /products/:handle
│   │   ├── collections.jsx       # /collections
│   │   └── cart.jsx
│   ├── styles/              # CSS/Tailwind
│   ├── entry.client.jsx     # Client-side entry point
│   ├── entry.server.jsx     # Server-side entry point
│   └── root.jsx             # Root layout component
├── public/                  # Static files
├── vite.config.js           # Build configuration
├── server.js                # Development server
├── package.json             # Dependencies
└── env.example              # Environment template
```

### How Data Flows (Server-Side Rendering)

```
1. User visits /products/cool-shirt
   ↓
2. React Router matches route: products.$handle.jsx
   ↓
3. Route's LOADER function runs on SERVER
   - Queries Shopify Storefront API
   - Returns data object
   ↓
4. React component renders on SERVER with fetched data
   ↓
5. HTML is sent to browser
   ↓
6. Client-side React hydrates (attaches interactivity)
   ↓
7. User sees fully rendered page with data
```

This approach is:
- **Fast**: Data loaded server-side, HTML sent to client
- **SEO-friendly**: Search engines see rendered HTML
- **Progressive**: Works without JavaScript (forms submit)

---

## Key Dependencies

### Core Packages (Automatically Installed)

```json
{
  "@shopify/hydrogen": "^2025.1.0",           // Main Hydrogen package
  "@shopify/hydrogen-react": "^2025.1.0",     // Framework-agnostic components
  "@shopify/remix-oxygen": "^3.0.0",          // Oxygen deployment adapter
  "@shopify/mini-oxygen": "^3.0.0",           // Local dev server
  "react": "18.3.1",                          // React library
  "react-dom": "18.3.1",                      // React DOM
  "react-router": "7.9.2",                    // Routing library
  "react-router-dom": "7.9.2"                 // DOM-specific routing
}
```

### What Each Does

| Package | Purpose | Used For |
|---------|---------|----------|
| `@shopify/hydrogen` | Main Hydrogen package with React Router integration | Everything in your app |
| `@shopify/hydrogen-react` | Framework-agnostic components/hooks/utilities | Can be used in any React app |
| `@shopify/remix-oxygen` | Adapter to run Hydrogen on Oxygen hosting | Only if deploying to Oxygen |
| `@shopify/mini-oxygen` | Local development server that mimics Oxygen | `npm run dev` command |
| `react` | React library | Core React functionality |
| `react-router` | Routing framework | Page navigation and data loading |

### Development Dependencies (For Building)

```json
{
  "vite": "^5.0.0",                           // Build tool (faster than Webpack)
  "@vitejs/plugin-react": "^4.0.0",           // React plugin for Vite
  "typescript": "^5.0.0",                     // TypeScript support
  "@types/react": "^18.0.0",                  // React type definitions
  "@types/react-dom": "^18.0.0",              // React DOM type definitions
  "tailwindcss": "^3.0.0",                    // CSS utility framework
  "postcss": "^8.0.0"                         // CSS processing
}
```

---

## Hydrogen Packages Deep Dive

### 1. `@shopify/hydrogen`

**The Main Package** - React Router + Shopify integrations

```javascript
// What it provides:
import {
  // API Clients
  createStorefrontClient,
  
  // Components (pre-built)
  ShopPayButton,
  Image,
  Link,
  
  // Hooks (reusable logic)
  useCart,
  useMoney,
  useProduct,
  useQuery,
  useFetcher,
  
  // Utilities
  getStorefrontHeaders,
  flattenConnection,
  parseMetafield,
  cartGetIdFromGid
} from '@shopify/hydrogen';
```

**Key Features**:
- Built on React Router
- SSR (Server-Side Rendering)
- API client for Storefront API
- Pre-built e-commerce components
- Caching utilities
- Type safety with TypeScript

### 2. `@shopify/hydrogen-react`

**Framework-Agnostic** - Can be used with ANY React framework

```javascript
import {
  ShopPayButton,
  Image,
  createStorefrontClient,
  useMoney,
  flattenConnection
} from '@shopify/hydrogen-react';
```

**Key Difference**:
- NO React Router integration
- Framework-independent
- Same components/hooks as Hydrogen
- Used inside Hydrogen, but also standalone

**When to use**:
- If you're building plain React (without React Router)
- If you're adding Shopify components to existing React app

### 3. `@shopify/remix-oxygen`

**Oxygen Deployment** - Makes Hydrogen work on Oxygen hosting

```javascript
// In server.js or remix config
import { createRequestHandler } from '@shopify/remix-oxygen';
```

**When to use**:
- Deploying to Oxygen (Shopify's edge hosting)
- NOT needed for Vercel deployment

**Your Project**: Probably won't use this (using Vercel instead)

### 4. `@shopify/mini-oxygen`

**Local Development** - Mimics Oxygen locally

```bash
npm run dev  # Uses mini-oxygen under the hood
```

**What it does**:
- Runs a local server that mimics Oxygen environment
- Allows testing cache headers, request/response handling
- Used automatically when you run `npm run dev`

**Your Project**: YES, you'll use this (automatic with `npm run dev`)

---

## How Hydrogen Connects to Shopify APIs

### Authentication Flow

```javascript
// server.js or entry.server.jsx

import { createStorefrontClient } from '@shopify/hydrogen';

// Create API client with tokens
const { storefront } = createStorefrontClient({
  cache,
  waitUntil,
  storeDomain: 'wicked-works-3.myshopify.com',
  publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
  privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN,
  storefrontId: process.env.PUBLIC_STOREFRONT_ID,
});

// In route loaders, query Shopify
export async function loader() {
  const response = await storefront.query(GET_PRODUCTS_QUERY);
  return response.data.products;
}
```

### The Two Tokens (from Headless Channel)

| Token | Scope | Use Case | Safety |
|-------|-------|----------|--------|
| **PUBLIC_STOREFRONT_API_TOKEN** | Client-side (public) | Browser queries, cart operations | ✅ Safe to expose |
| **PRIVATE_STOREFRONT_API_TOKEN** | Server-side (secret) | Admin queries, sensitive data | ❌ Keep secret |

**Your Project Setup**:
```env
# .env.local (don't commit)
PUBLIC_STOREFRONT_API_TOKEN=your_public_token_here
PRIVATE_STOREFRONT_API_TOKEN=your_private_token_here
PUBLIC_STORE_DOMAIN=wicked-works-3.myshopify.com
PUBLIC_STOREFRONT_ID=your_storefront_id
```

---

## Hydrogen Components

### Pre-built for E-commerce

```javascript
// Product Display
import { Image, ProductCard, AddToCart } from '@shopify/hydrogen';

// Pricing
import { Money } from '@shopify/hydrogen';

// Payments
import { ShopPayButton } from '@shopify/hydrogen';

// Cart
import { CartForm } from '@shopify/hydrogen';

// Forms
import { Form } from '@shopify/hydrogen';

// Utilities
import { flattenConnection, parseMetafield } from '@shopify/hydrogen';
```

### Example Component

```javascript
// app/components/ProductDetails.jsx
import { Image, ShopPayButton, useMoney } from '@shopify/hydrogen';

export function ProductDetails({ product }) {
  const { currencyCode, amount } = useMoney(
    product.priceRange.minVariantPrice
  );

  return (
    <div>
      <h1>{product.title}</h1>
      
      <Image
        data={product.featuredImage}
        alt={product.title}
        sizes="(min-width: 768px) 50vw, 100vw"
        loading="lazy"
      />
      
      <p>
        {currencyCode} {amount}
      </p>
      
      <ShopPayButton
        variantIds={[product.variants.edges[0].node.id]}
        storeDomain="wicked-works-3.myshopify.com"
      />
    </div>
  );
}
```

---

## GraphQL Queries in Hydrogen

### Store Queries as Files

```graphql
# app/graphql/products.graphql

query GetProducts($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        title
        handle
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        featuredImage {
          id
          url
          altText
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
}
```

### Use in Loaders

```javascript
// app/routes/products.jsx
import { useLoaderData } from 'react-router-dom';
import { json } from '@shopify/remix-oxygen';
import { PRODUCTS_QUERY } from '~/graphql/products.graphql';

export async function loader({ context }) {
  const { storefront } = context;
  
  const { data } = await storefront.query(PRODUCTS_QUERY, {
    variables: { first: 12 }
  });
  
  return json({ products: data.products.edges });
}

export default function ProductsPage() {
  const { products } = useLoaderData();
  
  return (
    <div className="grid">
      {products.map(({ node: product }) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

---

## Hydrogen for Your Project: Decision Tree

```
┌─ Do you need full e-commerce storefront?
│  YES → Use Hydrogen ✅
│
├─ Do you care about SEO?
│  YES → Use Hydrogen ✅
│  NO → Could use plain React
│
├─ Do you need server-side rendering?
│  YES → Use Hydrogen ✅
│  NO → Could use plain React
│
├─ Do you want pre-built Shopify components?
│  YES → Use Hydrogen ✅
│  NO → Use plain React
│
└─ Do you prefer opinionated framework?
   YES → Use Hydrogen ✅
   NO → Use plain React
```

**Your Project**: ALL checkboxes point to Hydrogen ✅

---

## Hydrogen Deployment Options

### Option 1: Deploy to Oxygen (Shopify's Edge Hosting)

```bash
npx shopify hydrogen deploy
```

**Pros**:
- Optimized for Hydrogen
- Automatic environment variable syncing
- Edge hosting (fast globally)
- Free with Shopify plan

**Cons**:
- Limited to Shopify's infrastructure
- Some Node.js APIs not available
- 10 MB max bundle size

### Option 2: Deploy to Vercel (What You Want)

```bash
# Push to GitHub
git push origin main

# Vercel auto-deploys from GitHub
# OR manually: vercel deploy
```

**Pros**:
- Full Node.js API support
- Larger bundle size allowed
- More flexibility
- Easy integration with GitHub

**Cons**:
- Need to manage environment variables yourself
- Need to set up GitHub integration

**Your Project**: Using Vercel ✅

---

## Hydrogen + Vercel Setup

### What You Need to Do

1. **Initialize Hydrogen project**
   ```bash
   npm create @shopify/hydrogen@latest -- --quickstart
   cd hydrogen-quickstart
   ```

2. **Link to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Deploy to Vercel**
   - Go to vercel.com
   - Import GitHub repo
   - Set environment variables in Vercel dashboard
   - Deploy!

### Environment Variables for Vercel

Set these in Vercel project settings:

```
PUBLIC_STOREFRONT_API_TOKEN=your_public_token
PRIVATE_STOREFRONT_API_TOKEN=your_private_token
PUBLIC_STORE_DOMAIN=wicked-works-3.myshopify.com
PUBLIC_STOREFRONT_ID=your_storefront_id
SESSION_SECRET=generate_random_string_here
```

---

## Package Dependencies Summary

### Installation Command

```bash
npm create @shopify/hydrogen@latest -- --quickstart
```

This automatically installs:

**Production Dependencies**:
- `@shopify/hydrogen` - Main package
- `@shopify/hydrogen-react` - Components library
- `react` - React library
- `react-router-dom` - Routing
- `@shopify/remix-oxygen` - Oxygen adapter

**Dev Dependencies**:
- `vite` - Build tool
- `typescript` - Type checking
- `tailwindcss` - CSS framework
- Various build and test tools

**You DON'T need to manually install** - the quickstart does it all!

---

## What Hydrogen Provides vs. What You Build

### Hydrogen Provides ✅
- Routing system
- SSR infrastructure
- Storefront API client
- Pre-built components
- Development server
- Build/deployment tooling
- TypeScript support
- Caching strategies
- GraphQL integration

### You Build ✅
- Custom components (Product details, Filters, etc.)
- Page layouts
- Styling/design system
- Custom business logic
- GraphQL queries
- Cart/checkout flow
- Search implementation
- Customer authentication (optional)

---

## Migration Path: Plain React → Hydrogen

If you started with plain React and wanted to convert:

```
Plain React App
    ↓
1. Create new Hydrogen project
2. Copy your components to /app/components
3. Convert pages to React Router routes
4. Move GraphQL queries to /app/graphql
5. Update imports (use @shopify/hydrogen instead of custom client)
6. Deploy to Vercel
```

**But since you're starting fresh** - just use Hydrogen from the start! 🚀

---

## Performance Benefits of Hydrogen

### SSR (Server-Side Rendering)

```
Old way (Plain React):
1. Browser loads HTML skeleton
2. Browser downloads JavaScript
3. Browser executes JavaScript
4. React renders components
5. Components fetch data from API
6. Components re-render with data
SLOW: 5-6 network round trips

Hydrogen way (SSR):
1. Browser loads full HTML with data already rendered
2. Browser downloads JavaScript
3. React hydrates (attaches interactivity)
FAST: 1-2 network round trips
```

### Results
- **Faster FCP** (First Contentful Paint)
- **Faster LCP** (Largest Contentful Paint)
- **Better SEO** (HTML with content indexed)
- **Works without JS** (Progressive enhancement)

---

## Is Hydrogen Overkill?

**No.** Here's why:

- ✅ Shopify's official recommendation for storefronts
- ✅ Same effort to set up plain React + Storefront API
- ✅ Better SEO out of the box
- ✅ Better performance (SSR)
- ✅ Pre-built components save time
- ✅ Active maintenance and community
- ✅ Future-proof (Shopify invests heavily)

---

## Quick Comparison Table

| Feature | Hydrogen | Plain React |
|---------|----------|-----------|
| Setup Complexity | Easy (quickstart) | Medium (configure everything) |
| Learning Curve | Medium (React Router) | Low (familiar React) |
| Performance | Excellent (SSR) | Good (client-side) |
| SEO | Excellent | Good |
| Components | Pre-built | Build yourself |
| Bundle Size | Larger | Smaller |
| Deployment | Easy | Easy |
| Maintenance | Official support | DIY |

---

## Next Steps

1. ✅ Confirm you want to use Hydrogen for this project
2. ⏳ Initialize Hydrogen project locally
3. ⏳ Set up GitHub repository
4. ⏳ Configure Vercel deployment
5. ⏳ Pull in your tokens from Headless channel
6. ⏳ Start building Phase 1 pages

---

## Resources

- **Official Docs**: https://shopify.dev/docs/custom-storefronts/hydrogen
- **Getting Started**: https://shopify.dev/docs/custom-storefronts/hydrogen/getting-started
- **GitHub**: https://github.com/shopify/hydrogen
- **API Reference**: https://shopify.dev/docs/api/hydrogen
- **Components**: https://shopify.dev/docs/api/hydrogen-react

---

**Recommendation**: Use Hydrogen. It's the right tool for this job. Let's proceed with Phase 1 initialization! 🚀
