# DineTap architecture

## Current implementation

The first increment is a Next.js App Router application with:
- A public product landing page at `/`
- An interactive sample restaurant menu at `/menu/demo`
- A sample restaurant operations dashboard at `/dashboard`

The menu currently demonstrates local client-side cart state only. The demo checkout does not create a server order and does not collect payment. Dashboard figures are illustrative sample data.

## Target architecture

DineTap will start as a modular monolith:
- Next.js App Router for customer, restaurant, and kitchen surfaces
- Server-side domain modules and route handlers for business operations
- PostgreSQL with Prisma for persistent data
- Auth.js for identity and session management
- Socket.IO for live order updates
- Razorpay for India-first online payments

## Domain boundaries

- Identity and restaurant membership
- Restaurant and settings
- Menu, categories, variants, and add-ons
- Tables and table sessions
- Orders and order status history
- Payments and payment allocations
- Analytics and audit events

## Non-negotiable invariants

1. Every restaurant-owned record is scoped to a restaurant on the server.
2. A table QR code identifies a table context, not an authenticated staff identity.
3. Prices are recalculated on the server; client totals are never trusted.
4. Order items retain snapshots of names and prices at purchase time.
5. Payment state is confirmed by verified provider webhooks.
6. Order creation and payment operations are idempotent.
7. Secrets and real customer data never enter source control.

## Next engineering increments

1. Add Prisma schema and local PostgreSQL development setup.
2. Add authentication and tenant-aware authorization.
3. Implement menu and table CRUD endpoints.
4. Replace demo menu data with database-backed restaurant menus.
5. Persist orders and publish status events to customer and kitchen views.
6. Add payment provider integration and verified webhooks.
