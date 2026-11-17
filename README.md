# Personal Website

Evan Mindanao's personal portfolio website.

## Tech stack
- React 19 + Vite 6
- Tailwind CSS v4
- Framer Motion (animations)
- Vercel (hosting, free Hobby tier)

## Edit content
Almost everything lives in **`src/data.js`** — About, projects, experience, education, skills, and contact links. Each project is one block with a title and bullet points. Content that's not known yet is left out rather than invented.

## Run it locally
```bash
cd personal-website
npm install
npm run dev
```
Then open the localhost link it prints.

## Deploy to Vercel (free)
1. Push this folder to GitHub (e.g. `github.com/memindanao/memindanao`).
2. Go to vercel.com → Add New → Project → import that repo.
3. Vercel auto-detects Vite — leave Build Command `npm run build` and Output Directory `dist` as-is (also set in `vercel.json`).
4. Deploy. Every `git push` after that redeploys automatically.
5. Optional: add a custom domain later in Vercel → Settings → Domains.
