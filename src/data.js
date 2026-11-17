// ============================================================
// EDIT YOUR CONTENT HERE — this is the only file most edits need.
// Only facts from Evan's resume / LinkedIn are filled in.
// Anything not known yet is left out (not invented), and is tracked
// separately as a task to fill in whenever — see the portfolio
// content task in Muse's tracked items.
// ============================================================

export const profile = {
  name: 'Evan Mindanao',
  // About bullets — shown as a bullet list in the hero, not a paragraph.
  // Age is computed from birthdate below, so it updates on its own
  // every birthday; leave birthdate empty until Evan gives it.
  birthdate: '2004-03-08', // Evan's birthday, given 2026-11-11 — age is computed from this and updates every birthday
  aboutBullets: [
    { label: 'Based in', value: 'Ottawa, Canada & Dubai, UAE' },
    { label: 'Languages', value: 'English & Tagalog (Cebuano/Bisaya)' },
    // Age is inserted after Languages at render time (App.jsx),
    // computed from birthdate so it updates every birthday.
    // Ethnicity sits right under Languages (Evan's choice, 2026-11-12).
    { label: 'Ethnicity', value: 'Filipino' },
    { label: 'Program', value: 'Bachelor of Computer Science (Honours) — third year' },
    { label: 'University', value: 'Carleton University, Ottawa, ON' },
    { label: 'Graduating', value: 'Class of 2028' },
    { label: 'Goal', value: 'Finding a Summer 2027 software engineering internship' },
    { label: 'Hobbies', value: 'Weightlifting, cycling (fixed gear)' },
  ],
  seeking: 'Seeking Summer 2027 Software Engineering Internships',
  // Photo: Evan's waterfront photo, cropped with him on the right,
  // like his Instagram profile pic. File: public/photo.jpg
  photo: '/photo.jpg',
  photoAlt: 'Photo of Evan Mindanao',
  email: 'evanmindanao@gmail.com',
  github: 'https://github.com/memindanao',
  linkedin: 'https://www.linkedin.com/in/evan-m-056633369/',
  instagram: 'https://instagram.com/memindanao',
  steam: 'https://steamcommunity.com/id/memindanao/',
  // Discord: handle from Evan's Discord profile screenshot (2026-11-11).
  // Discord has no public profile URL by username alone, so this is
  // shown as text on the site, not a link — update the handle here
  // if it's actually "shyylent" or something else.
  discord: 'shylent',
  resumeUrl: '/Evan_Mindanao_Resume.pdf',
}

// --- Favourites ------------------------------------------------
// Evan's top 3 albums (2026-11-11), with album cover photos in
// public/albums/ (covers only, not vinyl shots — changed 2026-11-11).
// Order: Peripheral Vision #1, Modal Soul #2 (swapped 2026-11-11).
// Top 3 games and top 3 things are still to come from Evan.
export const favouriteAlbums = [
  {
    rank: 1,
    title: 'Peripheral Vision',
    artist: 'Turnover',
    image: '/albums/peripheral-vision-cover.webp',
    imageAlt: 'Peripheral Vision by Turnover — album cover',
    favouriteSong: 'I Would Hate You If I Could',
    // Spotify album page, verified live 2026-11-11 (2015, 11 songs).
    spotify: 'https://open.spotify.com/album/5On8s1irA6JETiDvt2VUy7',
  },
  {
    rank: 2,
    title: 'Modal Soul',
    artist: 'Nujabes',
    image: '/albums/modal-soul-cover.jpg',
    imageAlt: 'Modal Soul by Nujabes — album cover',
    favouriteSong: "World's End Rhapsody",
    // Spotify album page, verified live 2026-11-11 (2005, 14 songs).
    spotify: 'https://open.spotify.com/album/6nVACH6a27eOWiumAJhDWS',
  },
  {
    rank: 3,
    title: "What's the Story? (Morning Glory)",
    artist: 'Oasis',
    image: '/albums/morning-glory-cover.webp',
    imageAlt: "What's the Story? (Morning Glory) by Oasis — album cover",
    favouriteSong: 'Champagne Supernova',
    // Spotify album page, verified live 2026-11-11 (Deluxe Edition Remastered, 1995, 40 songs).
    spotify: 'https://open.spotify.com/album/5cCqScxap2MRmb0KIYYqvh',
  },
]

export const albumHonourableMentions = [
  {
    title: 'Holy Ghost',
    artist: 'Modern Baseball',
    // Spotify album page, verified live 2026-11-11 (2016, 11 songs).
    spotify: 'https://open.spotify.com/album/6URwQZCeFUpL9d0dD8PJpd',
  },
  {
    title: 'Codes and Keys',
    artist: 'Death Cab for Cutie',
    // Spotify album page, verified live 2026-11-11 — top result is the Deluxe Edition (2011, 13 songs).
    spotify: 'https://open.spotify.com/album/3IEZRCQABrX0v5RitIE0iy',
  },
  {
    title: 'Wish You Were Here',
    artist: 'Pink Floyd',
    // Spotify album page, verified live 2026-11-11 (1975, 5 songs).
    spotify: 'https://open.spotify.com/album/0bCAjiUamIFqKJsekOYuRw',
  },
  {
    title: 'Three Cheers for Sweet Revenge',
    artist: 'My Chemical Romance',
    // Spotify album page, verified live 2026-11-11 — original 2004 album (13 songs), not the 2025 Deluxe Edition.
    spotify: 'https://open.spotify.com/album/3DuiGV3J09SUhvp8gqNx8h',
  },
  {
    title: 'Cardinal',
    artist: 'Pinegrove',
    // Spotify album page, verified live 2026-11-11 (2016, 8 songs). Added at Evan's request.
    spotify: 'https://open.spotify.com/album/5oe0GYxC8MjbDFR8YZnsNr',
  },
]

// --- Top 3 games ------------------------------------------------
// Evan's top 3 games (2026-11-11), titles exactly as he wrote them.
// Logos: Evan uploaded his own picks 2026-11-11 — KH2 full wordmark
// (Disney/Square Enix line cropped out), Persona 5 Phantom Thieves
// hat, Smash Bros icon. All transparent PNGs, shown directly on the
// navy card with no white tile (see App.jsx).
export const favouriteGames = [
  {
    rank: 1,
    title: 'Kingdom Hearts 2',
    image: '/games/kingdom-hearts-2-logo.png',
    imageAlt: 'Kingdom Hearts 2 — full logo',
  },
  {
    rank: 2,
    title: 'Persona 5',
    image: '/games/persona-5-hat.png',
    imageAlt: 'Persona 5 — Phantom Thieves hat',
  },
  {
    rank: 3,
    title: 'Super Smash Bros Melee',
    image: '/games/smash-icon.png',
    imageAlt: 'Super Smash Bros — icon',
  },
]

export const gameHonourableMentions = [
  // Steam store pages, verified 2026-11-11 (app IDs from store.steampowered.com).
  // Shown as boxes/chips, like the album HMs (Evan's choice, 2026-11-12).
  // No developer names — removed at Evan's request.
  { title: 'Psychonauts', link: 'https://store.steampowered.com/app/3830/Psychonauts/' },
  // "Counter-Strike" links to Counter-Strike 2 (app 730), the current Steam page.
  { title: 'Counter-Strike', link: 'https://store.steampowered.com/app/730/CounterStrike_2/' },
  { title: 'Titanfall 2', link: 'https://store.steampowered.com/app/1237970/Titanfall_2/' },
  { title: 'A Story About My Uncle', link: 'https://store.steampowered.com/app/278360/A_Story_About_My_Uncle/' },
  // Pokemon Sapphire links to Evan's own Mudkip picture (uploaded 2026-11-11),
  // which opens in a new tab — not a store page.
  { title: 'Pokemon Sapphire', link: '/games/pokemon-sapphire.png' },
]

// --- Projects ------------------------------------------------
// Each card: title, short description, tech used, link if one exists.
// Add / remove / reorder cards by copying a block below.
// Descriptions here use only what is known; a fuller description
// for the networks project is on the
// tracked task list to add whenever. Café POS System Design and
// Medical Diagnosis were removed at Evan's request (2026-11-11);
// Smart Pest Detection was removed at Evan's request (2026-11-16).
export const projects = [
  {
    title: 'reCASHa',
    // Stupid Ideas Hackathon, Nov 2026 — Evan built 2 of the 6 games.
    // Name is the team's final pick (2026-11-15); link is the main repo
    // where his games were merged (shebss/rb-captcha).
    bullets: [
      'Pay-to-win CAPTCHA — pass 3 rounds of mini-games or pay $0.99 to skip',
      'Built 2 of the 6 games: Reaction Time and Aim Trainer',
      'Reaction Time: hit a randomised millisecond window, with fakeouts',
      'Aim Trainer: one round, randomised difficulty, 5–10 targets',
      'Node.js + Stripe for the $0.99 skip payment',
      'Built at the Stupid Ideas Hackathon, Nov 2026 — both games merged into the main repo',
    ],
    tech: [],
    // No link on the card — matches the Course Search API card format
    // (title + bullets only). The repo is linked from LinkedIn instead.
    link: '',
    linkLabel: '',
  },
  {
    title: 'Course Scraper — FastAPI Backend',
    // Description as bullets (Evan's wording, 2026-11-11).
    bullets: [
      'FastAPI + PostgreSQL backend for searching Carleton courses',
      'Saving favourites to a watchlist',
      'Getting seat-availability alerts',
      'JWT login, so watchlists belong to the signed-in user',
      'Comes with passing tests',
      'Deployment is the next step',
    ],
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'Networks Assignment — Sockets & Traceroute',
    // Description as bullets (Evan's wording, 2026-11-11), like the Course Search API card.
    // Tech bubbles removed at Evan's request — the bullets carry the tech now.
    bullets: ['Python', 'Socket programming', 'Traceroute'],
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'SSBM Frame Data — Flask & SQLite',
    // COMP 3005 term project, Winter 2026 (Evan's zip, ssbm_app.zip).
    // Verified working locally 2026-11-16: homepage + API serve the
    // seeded SQLite database (5 characters, 18 moves).
    bullets: [
      'Flask + SQLite frame data database for Super Smash Bros. Melee',
      'Character frame data, move comparison, frame filter, and matchups',
      '5 characters, 18 moves, 74 character-moves, 10 matchups',
      'Community notes — post annotations on moves and matchups',
      'Raw SQL throughout, no ORM',
      'COMP 3005 term project, Winter 2026',
    ],
    tech: [],
    link: '',
    linkLabel: '',
  },
]

// --- Experience ----------------------------------------------
export const experience = [
  {
    role: 'BMS Intern',
    org: 'B Tech Switchgear',
    location: 'Dubai, UAE',
    dates: 'Jun – Aug 2025',
    description: '',
  },
  {
    role: 'Community Spaces Crew Team Member',
    org: 'Carleton University',
    location: 'Ottawa, ON',
    dates: 'Sep 2026 – Present',
    description: '',
  },
  {
    role: 'IT Support',
    org: 'Binghalib Technology',
    location: '',
    dates: 'Jun – Jul 2022',
    description: '',
  },
  {
    role: 'Camp Counsellor',
    org: "St. Mary's",
    location: '',
    dates: '',
    description: '',
  },
]

// --- Education ------------------------------------------------
export const education = [
  {
    school: 'Carleton University',
    // Program (degree) and standing removed at Evan's request (2026-11-11).
    dates: 'Sep 2025 – Apr 2028 (expected)',
    // Relevant courses as a list (Evan's choice, 2026-11-11).
    courses: [
      { code: 'COMP 2404', name: 'C++', status: 'Completed' },
      { code: 'COMP 3005', name: 'Databases / SQL', status: 'Completed' },
      { code: 'COMP 3004', name: 'Object-Oriented Software Engineering', status: 'In progress' },
      { code: 'COMP 3203', name: 'Computer Networking', status: 'In progress' },
    ],
  },
  {
    school: 'Canadian University Dubai',
    degree: 'Bachelor of Science, Computer Science',
    dates: 'Sep 2023 – May 2025',
    details: '',
  },
]

// --- Skills ---------------------------------------------------
// Note: spoken languages live in the About bullets now, not here.
export const skillGroups = [
  { group: 'Programming Languages', skills: ['Java', 'Python', 'C++', 'JavaScript', 'SQL'] },
  { group: 'Libraries & Frameworks', skills: ['Pandas', 'Streamlit', 'LangChain', 'FastAPI', 'Tkinter'] },
  { group: 'Tools & Other', skills: ['VS Code', 'Arduino', 'Git & GitHub'] },
]
