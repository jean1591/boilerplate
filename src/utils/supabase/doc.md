# Supabase

## Authentication

### Providers

If using Supabase as Authentication Provider, you'll need to define which provider to use.

#### Magic Link

This app is already setup to work with Magic Link. You'll need to update some parameters directly in Supabase for it to work.

##### Email Template

Go to `https://supabase.com/dashboard/project/<your supabase projectId>/auth/templates` and select Magic Link tab. Use the following as template:

```
<h2>Magic Link</h2>

<p>Follow this link to login:</p>
<p><a href="{{ .SiteURL }}/api/auth/confirm?token_hash={{ .TokenHash }}&type=magiclink">Log In</a></p>
```

The `a.href` must be setup as specified, the rest can be updated.

### Site URLs

Go to `https://supabase.com/dashboard/project/<your supabase projectId>/auth/url-configuration` and change `Site URL` to your custom url.

You can leave http://localhost:3000 while in development but you **must** update it before deployment to production.

For instance, if your website is hosted at `https://jeanrobertou.com`, use this as `Site URL`.

In order to work in development, you can add `Redirect URLs`. For instance, if your app is running locally on port 3000, you can use `http://localhost:3000/**`.

If you want to be redirected to a specific page of your app, update `next` variable from `src/app/api/auth/confirm/route.ts`.

For instance, to be redirected to `my-page`, change:

```typescript
const next = searchParams.get('next') ?? '/'
```

To:

```typescript
const next = searchParams.get('next') ?? '/my-page'
```

## Database

### Types

Create at least one table (there is no need to input data at this stage), and once done, run the following command each time your DB is updated (new table or column, column type update, ...)

```
npx supabase gen types --lang=typescript --project-id "<your supabase projectId>" --schema public > ./src/utils/supabase/database.types.ts

```
