# S. Mohammed Riyaz — Portfolio

A premium, animated personal portfolio built with React 19, Vite, TypeScript, Tailwind CSS,
Framer Motion, GSAP-ready structure, React Three Fiber, Lenis smooth scroll and EmailJS.

All content (name, education, experience, skills, projects, certifications, achievements)
is pulled from `src/data/portfolio.ts`, extracted directly from the provided resume — no
placeholder content is used anywhere.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Visit the URL Vite prints (usually `http://localhost:5173`).

## 3. Configure the contact form (optional but recommended)

The contact form uses [EmailJS](https://www.emailjs.com) so messages land straight in your
inbox with no backend server needed.

1. Create a free EmailJS account.
2. Create an Email Service and an Email Template (map `user_name`, `user_email`, `message`
   fields to your template).
3. Copy `.env.example` to `.env` and fill in your Service ID, Template ID and Public Key.
4. Restart `npm run dev`.

Until this is configured, the form will show a friendly fallback pointing visitors to your
email address directly, so the site never appears broken.

## 4. Update your content

Everything text-based lives in one place: `src/data/portfolio.ts`. Update that file and every
section of the site (hero, about, skills, projects, experience, certifications, achievements,
services, gallery, contact) updates automatically.

Photos live in `public/images/`. Swap files there (keep the same filenames, or update the
paths in `portfolio.ts`) to change the images shown.

## 5. Build for production

```bash
npm run build
```

This outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## 6. Deploy

### Vercel
1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Add your `VITE_EMAILJS_*` environment variables in the Vercel project settings.
5. Deploy.

### Netlify
1. Push this project to a GitHub repo.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Add your `VITE_EMAILJS_*` environment variables under **Site settings → Environment variables**.
5. Deploy.

### GitHub Pages
1. Install the Pages helper: `npm install -D gh-pages`.
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`.
3. In `vite.config.ts`, set `base: '/your-repo-name/'`.
4. Run `npm run build && npm run deploy`.
5. In your repo settings, set Pages source to the `gh-pages` branch.

## Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS (custom cyberpunk red/black theme)
- Framer Motion (scroll reveals, hover states, page-load animation)
- Lenis (smooth inertial scrolling)
- EmailJS (contact form, no backend required)
- React Icons

## Project Structure

```
src/
  components/     All UI sections (Hero, About, Skills, Projects, ...)
  data/           portfolio.ts — single source of truth for all content
  hooks/          useLenis.ts — smooth scroll setup
  index.css       Design tokens & global styles
  App.tsx         Page assembly
public/
  images/         Personal photos used across the site
  resume.pdf      Downloadable resume (linked from the Hero section)
```
