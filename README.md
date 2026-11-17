# Evan's Portfolio — React + Vite + Tailwind (same stack as Soham's site)

First draft. Navy theme, centred hero, navy project cards, subtle animations only.

## Your picks (locked in)
- **Hero 2** — centred, circular photo, big Resume / Contact buttons
- **Cards 2** — navy cards, hover lift + subtle border glow
- **Fonts** — Courier New for body (your favourite), Anton for headings
  (Persona 3-inspired bold condensed — free lookalike, the exact P3 fonts
  BM Space / Faktos aren't freely licensed), VT323 pixel font for the
  little `// labels` (Moondrop Blessing 3 pixel-lettering vibe).
  Swap any font in `src/index.css` + the Google Fonts link in `index.html`.
- **Hero heading** — "Hey, I'm Evan!" — one line, regular-weight Courier New (not bold)
- **Home button** — top-left reads "memindanao"
- **Photo** — Evan's waterfront photo, cropped with him on the right like his Instagram profile pic, in `public/photo.jpg` (512×512, full version is `public/photo-full.jpg`)

## Edit your content
Almost everything lives in **`src/data.js`** — intro, projects, experience,
education, skills, email / GitHub / LinkedIn. Each project is one block
with title / description / tech / link. Anything not known yet is left out
rather than invented — the remaining details to add are tracked as a
task to fill in whenever, not as markers on the site.

## Photo + resume
- Photo: `public/photo.jpg` — already in place, see above.
- Resume: `public/Evan_Mindanao_Resume.pdf` — already in place, copied
  from `workspace/user/files/Evan_Mindanao_Resume_General.pdf`.

## Run it locally
```bash
cd evan-portfolio
npm install
npm run dev
```
Then open the localhost link it prints.

## Deploy to Vercel (free)
1. Push this folder to GitHub (e.g. `github.com/memindanao/evan-portfolio`).
2. Go to vercel.com → Add New → Project → import that repo.
3. Vercel auto-detects Vite — leave Build Command `npm run build`
   and Output Directory `dist` as-is (also set in `vercel.json`).
4. Deploy. Every `git push` after that redeploys automatically.
5. Optional: add a custom domain later in Vercel → Settings → Domains.

## Files
- `index.html` — page title + font links
- `src/main.jsx` — entry point (don't need to edit)
- `src/App.jsx` — page layout, section by section (labelled comments)
- `src/index.css` — fonts + navy colours + subtle fade-up animation
- `src/data.js` — **all your content, edit here first**
- `vite.config.js`, `vercel.json` — build / deploy config
