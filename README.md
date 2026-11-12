# DineTap

**Scan. Order. Dine.**

DineTap is a QR-based restaurant ordering and management platform. Guests scan a table QR code to explore a digital menu and place orders, while restaurant teams manage menus, tables, orders, and kitchen operations from one workspace.

> **Status:** Initial scaffold. Features in the roadmap are planned until implemented and tested.

## Product vision

Make dine-in ordering simpler for guests and restaurant operations clearer for staff.

## Planned capabilities

### Guest experience
- Table-specific QR menu access
- Browse menu categories, item details, variants, and add-ons
- Shopping cart and order placement
- Live order progress
- Online payment integration
- Split-bill support

### Restaurant workspace
- Restaurant onboarding and team roles
- Menu and availability management
- Table management and QR generation
- Order queue and order status controls
- Sales and menu analytics

### Kitchen display
- Incoming order queue
- Preparation status updates
- Ready-for-pickup workflow

## Technology

- Next.js App Router, React, TypeScript
- Tailwind CSS
- PostgreSQL and Prisma (planned)
- Auth.js (planned)
- Socket.IO (planned)
- Razorpay integration (planned; India-first)
- Vitest and Playwright (planned)

## Current demo routes

- `/` — Product landing page
- `/menu/demo` — Interactive sample QR menu with category filters, cart quantity controls, and demo checkout confirmation
- `/dashboard` — Restaurant operations dashboard preview with sample metrics and order queue

The menu and dashboard currently use sample/local data. Authentication, database persistence, live order updates, and payment processing are not implemented yet.

## Local development

Requirements: Node.js 24 LTS (or a compatible supported Node.js release) and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/          # App Router routes and layouts
  components/   # Shared UI components
  lib/          # Utilities and shared configuration
  modules/      # Business-domain modules
  store/        # Client state
  types/        # Shared TypeScript types
 prisma/        # Database schema and seed data (planned)
docs/           # Architecture and product documentation
```

## Engineering principles

- Enforce restaurant/tenant ownership on the server.
- Validate all incoming data.
- Treat verified payment webhooks as the source of truth for payment state.
- Make order and payment operations idempotent.
- Preserve item names and prices as order-time snapshots.
- Never commit secrets or real customer data.

## Roadmap

1. App scaffold and design system
2. Database schema and authentication
3. Restaurant onboarding, menus, and tables
4. QR-based guest ordering
5. Orders and kitchen display
6. Real-time updates
7. Payments and split bills
8. Analytics, tests, CI, and deployment

## License

MIT. A license file will be added before the first public release.
