# Setup

## npm and nextJS

- Delete if exist:
  - .next
  - dist
  - package-lock.json
- npm i

## Env vars

- Update .env vars with:
  - `DATABASE_URL`
    - In coolify, use internal
    - In local, use external
  - `NEXTAUTH_SECRET`
    - Generate new secret via `openssl rand -base64 32`
  - `NEXTAUTH_URL`
    - In coolify, use `https://your-app.rb2.fr`
    - In local, use `http://localhost:3000`

## Database

- Run `npx prisma migrate dev` to create DB tables
- Run `ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts` to seed data

## Analytics

- Go to the Umami dashboard, add your website and get your `data-website-id` from the settings tab
- Go to `.env`
- Update `UMAMI_URL` and `UMAMI_SITE_ID`

## Sitemap.xml and Robots.txt

- Update `src/app/sitemap.ts` with your pages
- Update `src/app/robots.ts` with your data

## Package.json

- Update the package.json file with the proper name and author.url

## Stripe

### Config

Find the `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` in the Stripe / [Project] / Home Get started with Stripe

### Cards

| Label               | Number           | Exp. Date | CVC |
| ------------------- | ---------------- | --------- | --- |
| Valid               | 4242424242424242 | 1234      | 123 |
| Stolen              | 4000000000009979 | 1234      | 123 |
| Insufficient funds  | 4000000000009995 | 1234      | 123 |
| Lost                | 4000000000009987 | 1234      | 123 |
| High risk fraud     | 4000000000004954 | 1234      | 123 |
| Elevated risk fraud | 4000000000009235 | 1234      | 123 |

### Webhook

To get a webhook from Stripe, run:

```
stripe listen --forward-to localhost:3000/api/stripe-webhook
```

Copy and paste the webhook in your .env under `STRIPE_WEBHOOK_SECRET`

### Triggering events

**Pre-requisites:**

- The application running
- `stripe listen ...` is running

**Triggers**

In a terminal, run one of the following:

- `stripe trigger payment_intent.succeeded`
- `stripe trigger checkout.session.completed`
