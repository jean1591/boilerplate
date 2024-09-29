1. Copy full repo into its own folder
1. npm i
1. Update .env vars with:
   1. `DATABASE_URL`
      1. In coolify, use internal
      1. In local, use external
   1. `NEXTAUTH_SECRET`
      1. Generate new secret via `openssl rand -base64 32`
   1. `NEXTAUTH_URL`
      1. In coolify, use `https://your-app.rb2.fr`
      1. In local, use `http://localhost:3000`
1. Run `npx prisma migrate dev` to create DB tables
1. Run `ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts` to seed data

Changer port App > Network > Ports Exposes > incrémente 1 ?
