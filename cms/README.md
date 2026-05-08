# NEHLA CMS

A small admin CMS for managing The Strata Edit insights. Two parts:

- `cms/server` — Node + Express + MySQL backend (auth, CRUD, image upload, public API).
- `cms/admin` — Vite + React admin UI (login + insights list + editor).

The public site (`../src`) reads published posts from the server's public API at
runtime; the static `src/blogData.js` continues to act as a build-time fallback
so prerendering keeps working.

## Insight states

Each post has a `published_at` datetime:

- **Draft** — `published_at` is null. Hidden from the public site.
- **Scheduled** — `published_at` is in the future. Hidden until that moment.
- **Published** — `published_at` is in the past or now. Visible.

There is no cron or background job. The public API simply filters by
`published_at IS NOT NULL AND published_at <= NOW()` on every request.

## First-time setup

### 1. Install MySQL

If you don't already have a MySQL server running locally, install one:

```bash
brew install mysql
brew services start mysql
```

### 2. Create the database

```bash
mysql -u root -e "CREATE DATABASE nehla_cms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

### 3. Configure the server

```bash
cd cms/server
cp .env.example .env
# edit .env — fill in DB credentials and a JWT_SECRET
npm install
npm run migrate       # creates the admins + insights tables
npm run seed:admin    # creates your first admin (prompts for email + password)
```

You can also seed non-interactively:

```bash
SEED_ADMIN_EMAIL=you@example.com SEED_ADMIN_PASSWORD='strong-password' npm run seed:admin
```

### 4. Install the admin UI

```bash
cd ../admin
npm install
```

### 5. Configure the public site (optional)

Tell the Vite public site where to find the API:

```bash
cd ../..   # back to project root
cp .env.example .env
# defaults to http://localhost:4000 — change for production
```

## Day-to-day: running everything

Open three terminals:

```bash
# Terminal 1 — API server
cd cms/server && npm run dev
# → http://localhost:4000

# Terminal 2 — admin UI
cd cms/admin && npm run dev
# → http://localhost:5180

# Terminal 3 — public site
npm run dev
# → http://localhost:5173 (or next free port)
```

Sign in at http://localhost:5180/login with the admin you seeded.

## Authoring a post

1. Click **+ New post**.
2. Fill in title, category, excerpt, and content (markdown).
3. Click the file picker to upload an image (or paste a URL).
4. Choose how to publish:
   - **Save** — keeps the post as-is (draft if no publication date set).
   - **Publish now** — sets the publication date to right now.
   - Set a future **Publication date** and click **Save** — the post is
     scheduled and stays hidden until that moment.
5. **Unpublish** clears the publication date and reverts the post to a draft.

## Production deployment notes

- Run the API behind HTTPS and put the admin UI on a separate hostname
  (`cms.nehla.com.au`) or path. Restrict by `CORS_ORIGINS`.
- Set `JWT_SECRET` to a long random string.
- Mount a persistent volume for `cms/server/uploads/` (or migrate to S3 by
  swapping `cms/server/src/routes/uploads.js`).
- Set `VITE_CMS_API_URL` on the public site's build environment to the
  deployed API URL before running `npm run build`.

## API surface

Public (no auth):

| Method | Path                              | Returns                    |
|-------:|-----------------------------------|----------------------------|
| GET    | `/api/public/insights`            | All published posts        |
| GET    | `/api/public/insights/:slug`      | One published post by slug |

Admin (requires `Authorization: Bearer <token>`):

| Method | Path                  | Purpose                       |
|-------:|-----------------------|-------------------------------|
| POST   | `/api/auth/login`     | Returns JWT token             |
| GET    | `/api/auth/me`        | Verify token                  |
| GET    | `/api/insights`       | List all (drafts + scheduled) |
| POST   | `/api/insights`       | Create                        |
| GET    | `/api/insights/:id`   | Read                          |
| PUT    | `/api/insights/:id`   | Update                        |
| DELETE | `/api/insights/:id`   | Delete                        |
| POST   | `/api/uploads`        | Upload an image (multipart)   |
