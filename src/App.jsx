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
// (Framer Motion — same animation library Soham's site uses.)
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
    <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide text-white">
      {children}
    </h2>
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
      <header className="sticky top-0 z-10 border-b border-navy-700 bg-navy-900/90 backdrop-blur">
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
          <ul className="min-w-0 flex-1 list-disc space-y-2 pl-6 text-left leading-relaxed">
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
            column so the stack doesn't get too tall. */}
        <div className="grid gap-12 lg:grid-cols-2">
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

        {/* --- 3. EXPERIENCE --- */}
        <motion.section id="experience" {...fadeUp} className="py-12">
          <SectionHeading>Where I&apos;ve worked</SectionHeading>
          <div className="mt-8 space-y-6">
            {experience.map((job) => (
              <article key={job.role} className="rounded-2xl border border-navy-700 bg-navy-800 p-6">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="font-heading text-2xl uppercase tracking-wide text-white">
                    {job.role} · {job.org}
                  </h3>
                  <span className="text-sm text-sky-300">{job.dates}</span>
                </div>
                {job.location ? <p className="text-sm opacity-70">{job.location}</p> : null}
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

        {/* --- 5. SKILLS --- */}
        <motion.section id="skills" {...fadeUp} className="py-12">
          <SectionHeading>What I use</SectionHeading>
          <div className="mt-8 space-y-6">
            {skillGroups.map((g) => (
              <div key={g.group}>
                <h3 className="text-lg font-bold text-sky-300">{g.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s} className="rounded-full border border-navy-700 bg-navy-800 px-4 py-2">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- 6. RESUME DOWNLOAD --- */}
        <motion.section id="resume" {...fadeUp} className="py-12 text-center">
          <SectionHeading>Want the short version?</SectionHeading>
          <p className="mx-auto mt-3 max-w-xl">
            My resume has the full list — experience, education, and projects, all on one page.
          </p>
          <a
            href={profile.resumeUrl}
            className="mt-6 inline-block rounded-full bg-sky-300 px-8 py-3 font-bold text-navy-900 transition hover:-translate-y-0.5 hover:bg-white"
          >
            Download my resume (PDF)
          </a>
        </motion.section>

        {/* --- 7. CONTACT ---
            Text removed at Evan's request (2026-11-11): no label line,
            no intro paragraph, no email line — just the heading and
            the link buttons. */}
        <motion.section id="contact" {...fadeUp} className="py-12 text-center">
          <SectionHeading>Let&apos;s chat</SectionHeading>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="rounded-full border border-sky-300 px-6 py-3 font-bold text-sky-300 transition hover:-translate-y-0.5 hover:bg-navy-800">
              Email me
            </a>
            <a href={profile.github} className="rounded-full border border-sky-300 px-6 py-3 font-bold text-sky-300 transition hover:-translate-y-0.5 hover:bg-navy-800">
              GitHub
            </a>
            <a href={profile.linkedin} className="rounded-full border border-sky-300 px-6 py-3 font-bold text-sky-300 transition hover:-translate-y-0.5 hover:bg-navy-800">
              LinkedIn
            </a>
            <a href={profile.instagram} className="rounded-full border border-sky-300 px-6 py-3 font-bold text-sky-300 transition hover:-translate-y-0.5 hover:bg-navy-800">
              Instagram
            </a>
            <a href={profile.steam} className="rounded-full border border-sky-300 px-6 py-3 font-bold text-sky-300 transition hover:-translate-y-0.5 hover:bg-navy-800">
              Steam
            </a>
            {/* Discord: no public profile URL by username alone, so this
                is shown as text, not a link. */}
            <span title="Discord" className="rounded-full border border-sky-300 px-6 py-3 font-bold text-sky-300">
              Discord: {profile.discord}
            </span>
          </div>
          <p className="mt-4 text-sm opacity-70">{profile.email}</p>
        </motion.section>
      </main>

      <footer className="relative z-10 border-t border-navy-700 py-6 text-center text-sm opacity-70">
        © 2026 Evan Mindanao
      </footer>
    </div>
  )
}
