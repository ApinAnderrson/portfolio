// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to make it yours.
//  Images: drop files in /public and set e.g. photo: '/me.jpg'.
//  Leave a photo as null to show the built-in illustrated placeholder.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'HOVIANTO',
  role: 'Software Engineer',
  location: 'Batam, Indonesia',
  status: 'Open to new work and good problems',
  tagLeft: 'Made things',
  tagRight: 'Sweat the details',
  headline: ['I design software that', 'gets out of your way.'],
  email: 'hello@example.com',
  avatar: null, // e.g. '/avatar.jpg'
};

export const nav = [
  { label: 'Home', href: '#home', icon: '★' },
  { label: 'About', href: '#about', icon: '☻' },
  { label: 'Case Study', href: '#work', icon: '▦' },
  { label: 'Playground', href: '#contact', icon: '◆' },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com', color: 'bg-sun', glyph: 'in' },
  { label: 'Dribbble', href: 'https://dribbble.com', color: 'bg-rose', glyph: '◎' },
  { label: 'Instagram', href: 'https://instagram.com', color: 'bg-leaf', glyph: '◘' },
];

export const about = {
  text: [
    "I'm a product designer who gets a little too excited about making complicated things feel simple.",
    '✨ I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone’s day easier. 🎨',
  ],
  photoLeft: { src: null, caption: '2026', scene: 'mountain' },
  photoRight: { src: null, caption: 'my workspace', scene: 'desk' },
  skills: [
    { label: 'Interaction Design', color: 'bg-sun', text: 'text-ink', icon: '✦' },
    { label: 'Prototyping', color: 'bg-leaf', text: 'text-white', icon: '🎨' },
    { label: 'User Research', color: 'bg-rose', text: 'text-white', icon: '🧩' },
    { label: 'Motion Design', color: 'bg-cobalt', text: 'text-white', icon: '👀' },
  ],
};

export const projects = [
  {
    id: '01',
    title: 'Tandem',
    date: 'Mar 2, 2026',
    description: "From 'who owes who' to money that finally feels shared.",
    theme: 'dark',
    tab: 'bg-cobalt text-white',
    mockup: 'phone',
    href: '#',
  },
  {
    id: '02',
    title: 'Forge',
    date: 'Jan 2, 2026',
    description: 'Getting a new engineer from day one to shipping without the panic.',
    theme: 'yellow',
    tab: 'bg-coal text-white',
    mockup: 'dashboard',
    href: '#',
  },
  {
    id: '03',
    title: 'Atlas',
    date: 'Oct 14, 2025',
    description: 'A field guide that helps city crews find, fix, and close issues faster.',
    theme: 'blue',
    tab: 'bg-sun text-ink',
    mockup: 'map',
    href: '#',
  },
];
