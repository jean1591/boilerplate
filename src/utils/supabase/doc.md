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

For instance, if your website is hosted at `https://jeanrobertou.com`, use this as `Site URL`.

In order to work in development, you can add `Redirect URLs`. For instance, if your app is running locally on port 3000, you can use `http://localhost:3000/**`.

## Database

### Types

Create at least one table (there is no need to input data at this stage), and once done, run the following command each time your DB is updated (new table or column, column type update, ...)

```
npx supabase gen types typescript --project-id <your supabase projectId> ./src/utils/supabase/database.types.ts
```
