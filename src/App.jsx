// ============================================================
// App.jsx — the whole page, section by section.
// Layout choices Evan picked:
//   Hero 2 — centred, circular photo, big Resume / Contact buttons
//   Cards 2 — navy project cards, hover lift + subtle border glow
//   Animation — subtle only (fade-up on scroll, hover lift)
//   Theme — navy blue, casual + friendly tone
// To edit content, go to data.js — you rarely need to touch this file.
// To change a section's look, find its <section> below; each one is
// labelled with a comment like {/* --- PROJECTS --- */}.
// ============================================================
import { motion } from 'framer-motion'
import { profile, projects, experience, education, skillGroups, favouriteAlbums, albumHonourableMentions, favouriteGames, gameHonourableMentions } from './data.js'

// Subtle reveal: fade + rise 12px, once, when scrolled into view.
// 1.2s, and it only starts once half the section is visible —
// Evan's call (2026-11-12): it should kick in when the section is
// about halfway through the page, not the moment it peeks in.
const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 1.2, ease: 'easeOut' },
}

// About bullets: slide in from the left on load, staggered.
// Slowed again at Evan's request (2026-11-12): 0.9s, 0.15s stagger.
const slideInLeft = (delay) => ({
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, delay, ease: 'easeOut' },
})

// Games section: slides in from the right on scroll (Evan's choice,
// 2026-11-12); every other section fades in with fadeUp.
// Starts fully hidden (opacity 0) and 64px to the right, so the slide
// is actually noticeable — Evan (2026-11-12) said the old 24px
// transform-only slide was barely visible and the section showed
// before its trigger. Same halfway trigger and 1.2s timing as fadeUp.
const slideInRight = {
  initial: { opacity: 0, x: 64 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 1.2, ease: 'easeOut' },
}

// Music (albums) section: slides in from the left on scroll — the
// mirror of the games slide from the right (Evan's choice, 2026-11-12:
// it was fading up from the bottom, he wants it coming in from the
// left). Starts fully hidden, 64px to the left. Same halfway trigger
// and 1.2s timing as the games slide.
const slideInLeftSection = {
  initial: { opacity: 0, x: -64 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 1.2, ease: 'easeOut' },
}

const navLinks = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Education', '#education'],
  ['Skills', '#skills'],
  ['Resume', '#resume'],
  ['Contact', '#contact'],
]

function SectionHeading({ children }) {
  return (
    <h2 className="font-heading text-4xl md:text-5xl text-white">
      {children}
    </h2>
  )
}

// Small line icons for the contact buttons (Feather-style stroke icons,
// plus simplified Steam and Discord marks).
function ContactIcon({ children }) {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-cream">
      {/* Animated background — Evan's pick (2026-11-16): the dark
          low-poly loop from the Overwatch login screen, compressed
          to 53 KB. Fixed video + dark overlay; a still poster
          shows on phones / reduced motion (see index.css). */}
      <video className="bg-video" autoPlay muted loop playsInline poster="/bg-poly-poster.jpg">
        <source src="/bg-poly.mp4" type="video/mp4" />
      </video>
      <div className="bg-overlay" aria-hidden="true" />
      {/* --- NAV (sticky, simple) --- */}
      <header className="sticky top-0 z-20 border-b border-navy-700 bg-navy-900">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3">
          <a href="#top" className="font-body text-xl lowercase tracking-wide text-white">
            memindanao
          </a>
          <div className="flex flex-wrap gap-4 font-body text-sm">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="font-body hover:text-sky-300">
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top" className="relative z-10 mx-auto max-w-5xl px-4">
        {/* --- 1. ABOUT / HERO (Hero 2: centred) --- */}
        <motion.section id="about" {...fadeUp} className="py-16 text-center md:py-24">
          {/* Hero heading — Evan's exact wording, one line, regular weight
              (not bold). Surname added 2026-11-11. */}
          <h1 className="font-body text-5xl font-normal tracking-wide text-white md:text-6xl">
            Hey, I&apos;m Evan Mindanao!
          </h1>
          {/* Tagline removed at Evan's request (2026-11-11):
              "Computer Science Student · Carleton University · Ottawa"
              was a duplicate of the About bullets. */}
          <p className="mt-1 text-sky-300">{profile.seeking}</p>
          {/* About — bullet points, not a paragraph (Evan's choice).
              Order: Based in, Languages, Ethnicity, Age at the top,
              then the rest. Age is computed from profile.birthdate
              when it's set, so it updates on its own every birthday. */}
          {/* About — bullets on the left, profile photo on the right
              (Evan's choice, 2026-11-11). Photo sits below the bullets
              on phones. */}
          <div className="mx-auto mt-10 flex max-w-4xl flex-col-reverse items-center gap-8 md:flex-row md:items-center md:text-left">
          {/* About list box — same navy-800 card as the other sections
              (matches the preview's .about-list-wrap; Evan, 2026-11-17).
              The photo stays outside the box. */}
          <div className="min-w-0 flex-1 rounded-2xl border border-navy-700 bg-navy-800 p-6">
          <ul className="list-disc space-y-2 pl-6 text-left leading-relaxed">
            {profile.aboutBullets.slice(0, 3).map((b, i) => (
              <motion.li key={b.label} {...slideInLeft(i * 0.15)}>
                <span className="font-bold text-sky-300">{b.label}:</span> {b.value}
              </motion.li>
            ))}
            {profile.birthdate ? (
              <motion.li {...slideInLeft(3 * 0.15)}>
                <span className="font-bold text-sky-300">Age:</span>{' '}
                {(() => {
                  const dob = new Date(profile.birthdate)
                  const now = new Date()
                  let age = now.getFullYear() - dob.getFullYear()
                  if (
                    now.getMonth() < dob.getMonth() ||
                    (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())
                  ) {
                    age -= 1
                  }
                  return age
                })()}
              </motion.li>
            ) : null}
            {profile.aboutBullets.slice(3).map((b, i) => (
              <motion.li key={b.label} {...slideInLeft((i + 4) * 0.15)}>
                <span className="font-bold text-sky-300">{b.label}:</span> {b.value}
              </motion.li>
            ))}
          </ul>
          </div>
          {/* Photo: Evan's waterfront photo, fixed up 2026-11-11 —
              cropped square, lightly enhanced. File is public/photo.jpg. */}
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            className="h-48 w-48 shrink-0 rounded-full border-4 border-sky-300 object-cover md:h-80 md:w-80"
          />
          </div>
          {/* Hero buttons removed at Evan's request (2026-11-11):
              no Download Resume / Get in touch buttons here anymore.
              The resume download still lives in the Resume section
              below, and contact links still live in Contact. */}
        </motion.section>

        {/* --- 1b + 1c. FAVOURITES — albums left, games right ---
            Dual column on desktop (Evan's choice, 2026-11-11),
            stacked on phones. Cards go horizontal inside each
            column so the stack doesn't get too tall.
            The albums column is wider (1.3fr vs 1fr) so the longest
            honourable-mention chip ("Three Cheers for Sweet Revenge
            — My Chemical Romance") fits on one line instead of
            wrapping — Evan flagged it 2026-11-17. */}
        <div className="grid gap-y-12 gap-x-8 lg:grid-cols-[1.3fr_1fr]">
        <motion.section id="favourites" {...slideInLeftSection} className="py-12">
          <SectionHeading>My top 3 albums</SectionHeading>
          <p className="mt-3 max-w-2xl">The three albums I keep coming back to, and my favorite track from it:</p>
          <div className="mt-8 grid gap-6">
            {favouriteAlbums.map((a) => (
              <a
                key={a.title}
                href={a.spotify}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 rounded-2xl border border-navy-700 bg-navy-800 p-5 transition duration-200 hover:-translate-y-1 hover:border-sky-300"
              >
                <img
                  src={a.image}
                  alt={a.imageAlt}
                  className="h-28 w-28 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="font-pixel text-xl text-sky-300">#{a.rank}</p>
                  <h3 className="mt-1 font-heading text-2xl uppercase tracking-wide text-white">{a.title}</h3>
                  <p className="mt-1 opacity-80">{a.artist}</p>
                  <p className="mt-2 text-sm text-sky-300">♪ Favourite song: {a.favouriteSong}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-6 leading-relaxed">Honourable mentions:</p>
          <div className="mt-2 flex flex-col items-start gap-2">
            {albumHonourableMentions.map((m) => (
              <a
                key={m.title}
                href={m.spotify}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-navy-700 bg-navy-900 px-3 py-1 transition hover:border-sky-300"
              >
                <span className="whitespace-nowrap">
                  <em>{m.title}</em>
                </span>{' '}
                <span className="whitespace-nowrap">— {m.artist}</span>
              </a>
            ))}
          </div>
        </motion.section>

        {/* --- 1c. FAVOURITES — top 3 games, in About ---
            Evan's picks (2026-11-11). Text-only cards for now, no box art. */}
        <motion.section id="games" {...slideInRight} className="py-12">
          <SectionHeading>My top 3 games</SectionHeading>
          {/* Invisible spacer matching the albums subtitle, so the game
              cards start at exactly the same height as the album cards
              and the two columns stay level. Same text/classes, so it
              wraps to the same height at every screen width. */}
          <p className="mt-3 max-w-2xl invisible" aria-hidden="true">The three albums I keep coming back to, and my favorite track from it:</p>
          <div className="mt-8 grid gap-6">
            {favouriteGames.map((g) => (
              <article
                key={g.title}
                className="flex items-center gap-5 rounded-2xl border border-navy-700 bg-navy-800 p-5 transition duration-200 hover:-translate-y-1 hover:border-sky-300"
              >
                {/* Logos are transparent, so they blend with the card background — no white tile. */}
                <div className="flex h-28 w-28 shrink-0 items-center justify-center">
                  <img src={g.image} alt={g.imageAlt} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="font-pixel text-xl text-sky-300">#{g.rank}</p>
                  <h3 className="mt-1 font-heading text-2xl uppercase tracking-wide text-white">{g.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 leading-relaxed">Honourable mentions:</p>
          <div className="mt-2 flex flex-col items-start gap-2">
            {gameHonourableMentions.map((m) => (
              <a
                key={m.title}
                href={m.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-navy-700 bg-navy-900 px-3 py-1 transition hover:border-sky-300"
              >
                <span className="whitespace-nowrap">
                  <em>{m.title}</em>
                </span>
              </a>
            ))}
          </div>
        </motion.section>
        </div>{/* end favourites dual column */}

        {/* --- 2. PROJECTS (Cards 2: navy cards, hover lift + glow) --- */}
        <motion.section id="projects" {...fadeUp} className="py-12">
          <SectionHeading>Things I&apos;ve built</SectionHeading>
          <p className="mt-3 max-w-2xl">A few course projects and side builds.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-navy-700 bg-navy-800 p-6 transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-300/10"
              >
                {/* Titles render as written (no forced uppercase) so
                    "reCASHa" keeps its casing — changed 2026-11-15. */}
                <h3 className="font-heading text-2xl tracking-wide text-white">{p.title}</h3>
                {p.bullets ? (
                  <ul className="mt-3 list-disc space-y-1 pl-6 leading-relaxed">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : p.description ? (
                  <p className="mt-3 leading-relaxed">{p.description}</p>
                ) : null}
                {p.tech.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-navy-700 bg-navy-900 px-3 py-1 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
                {p.link ? (
                  <a href={p.link} className="mt-4 inline-block text-sky-300 underline hover:text-white">
                    {p.linkLabel || 'View project →'}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </motion.section>

        {/* --- 3. EXPERIENCE ---
            Matches the preview (2026-11-17): heading "Experience",
            role title on its own line in title case, org + location
            below it, dates on the right. */}
        <motion.section id="experience" {...fadeUp} className="py-12">
          <SectionHeading>Experience</SectionHeading>
          <div className="mt-8 space-y-6">
            {experience.map((job) => (
              <article key={job.role} className="rounded-2xl border border-navy-700 bg-navy-800 p-6">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="font-heading text-2xl text-white">
                    {job.role}
                  </h3>
                  <span className="text-sm text-sky-300">{job.dates}</span>
                </div>
                {job.org ? <p className="text-sm opacity-70">{job.org}{job.location ? ` · ${job.location}` : ''}</p> : null}
                {job.description ? <p className="mt-3 leading-relaxed">{job.description}</p> : null}
              </article>
            ))}
          </div>
        </motion.section>

        {/* --- 4. EDUCATION --- */}
        <motion.section id="education" {...fadeUp} className="py-12">
          <SectionHeading>School</SectionHeading>
          <div className="mt-8 space-y-6">
            {education.map((e) => (
              <article key={e.school} className="rounded-2xl border border-navy-700 bg-navy-800 p-6">
                <h3 className="font-heading text-2xl uppercase tracking-wide text-white">{e.school}</h3>
                {e.degree ? <p className="mt-1">{e.degree}</p> : null}
                {e.dates ? <p className="text-sm text-sky-300">{e.dates}</p> : null}
                {e.details ? <p className="mt-3 leading-relaxed">{e.details}</p> : null}
                {e.courses ? (
                  <>
                    <p className="mt-4 font-bold text-sky-300">Relevant courses:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-6 leading-relaxed">
                      {e.courses.map((c) => (
                        <li key={c.code}>
                          {c.code} — {c.name} · {c.status}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </article>
            ))}
          </div>
        </motion.section>

        {/* --- 5. SKILLS ---
            Boxed cards (2026-11-17), matching the preview: three cards
            side by side, each with its group title and skill chips. */}
        <motion.section id="skills" {...fadeUp} className="py-12">
          <SectionHeading>Skills</SectionHeading>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.group} className="rounded-2xl border border-navy-700 bg-navy-800 p-6">
                <h3 className="text-lg font-bold">{g.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s} className="rounded-full border border-navy-700 bg-navy-900 px-4 py-2">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- 6. RESUME DOWNLOAD ---
            Boxed card (2026-11-17), matching the preview. */}
        <motion.section id="resume" {...fadeUp} className="py-12 text-center">
          <div className="rounded-2xl border border-navy-700 bg-navy-800 px-6 py-12">
            <SectionHeading>Resume</SectionHeading>
            <p className="mx-auto mt-3 max-w-xl">
              Everything above, condensed into one PDF.
            </p>
            <a
              href={profile.resumeUrl}
              className="mt-6 inline-block rounded-full bg-sky-300 px-8 py-3 font-bold text-navy-900 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Download my resume (PDF)
            </a>
          </div>
        </motion.section>

        {/* --- 7. CONTACT ---
            Boxed card with icon buttons (2026-11-17), matching the
            preview: heading "Contact", two rows of three buttons. */}
        <motion.section id="contact" {...fadeUp} className="py-12 text-center">
          <div className="rounded-2xl border border-navy-700 bg-navy-800 px-6 py-12">
            <SectionHeading>Contact</SectionHeading>
            <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a href={`mailto:${profile.email}`} className="flex items-center justify-center gap-2 rounded-xl border border-navy-700 bg-navy-900 px-4 py-3 transition hover:-translate-y-0.5 hover:border-sky-300">
                <ContactIcon><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></ContactIcon>
                {profile.email}
              </a>
              <a href={profile.github} className="flex items-center justify-center gap-2 rounded-xl border border-navy-700 bg-navy-900 px-4 py-3 transition hover:-translate-y-0.5 hover:border-sky-300">
                <ContactIcon><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></ContactIcon>
                github.com/memindanao
              </a>
              <a href={profile.linkedin} className="flex items-center justify-center gap-2 rounded-xl border border-navy-700 bg-navy-900 px-4 py-3 transition hover:-translate-y-0.5 hover:border-sky-300">
                <ContactIcon><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></ContactIcon>
                LinkedIn
              </a>
              <a href={profile.instagram} className="flex items-center justify-center gap-2 rounded-xl border border-navy-700 bg-navy-900 px-4 py-3 transition hover:-translate-y-0.5 hover:border-sky-300">
                <ContactIcon><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></ContactIcon>
                Instagram · @memindanao
              </a>
              <a href={profile.steam} className="flex items-center justify-center gap-2 rounded-xl border border-navy-700 bg-navy-900 px-4 py-3 transition hover:-translate-y-0.5 hover:border-sky-300">
                <ContactIcon><circle cx="9" cy="15" r="5.5" /><path d="M13 11.5 18.5 6" /><circle cx="19.5" cy="5" r="1.8" /></ContactIcon>
                Steam · memindanao
              </a>
              {/* Discord: no public profile URL by username alone, so this
                  is shown as text, not a link. */}
              <span title="Discord" className="flex items-center justify-center gap-2 rounded-xl border border-navy-700 bg-navy-900 px-4 py-3">
                <ContactIcon><path d="M7 5h10a5 5 0 0 1 5 5v3a5 5 0 0 1-5 5h-2l-1.2-1.5H10.2L9 18H7a5 5 0 0 1-5-5v-3a5 5 0 0 1-5-5z" /><circle cx="9.5" cy="11.5" r="0.6" fill="currentColor" /><circle cx="14.5" cy="11.5" r="0.6" fill="currentColor" /></ContactIcon>
                Discord: {profile.discord}
              </span>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 border-t border-navy-700 py-6 text-center text-sm opacity-70">
        © 2026 Evan Mindanao
      </footer>
    </div>
  )
}
