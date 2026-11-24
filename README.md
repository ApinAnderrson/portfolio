# Portfolio site (React + Vite + Tailwind CSS + Framer Motion)

```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Make it yours
- **All text, links, skills, projects** → `src/data.js`
- **Photos** → put images in `public/` and set e.g. `site.avatar: import.meta.env.BASE_URL + "me.jpg"` (the BASE_URL prefix keeps it working on GitHub Pages). Left as `null`, illustrated placeholders are shown.
- **Add a project** → add an object to `projects` (theme: `dark` | `yellow` | `blue`, mockup: `phone` | `dashboard` | `map`).
- **Colors, fonts & animations** → `tailwind.config.js` (e.g. `sun`, `rose`, `cobalt`, `animate-float`).
- **Shared classes** (`btn-dark`, `btn-outline`, `tape`, `torn`, `social`) → `src/index.css`.
- In `data.js`, colors are Tailwind classes like `bg-sun` — use any color from the config.

## Structure
- `components/Navbar.jsx` – sticky nav, active-section pill, mobile drawer
- `components/Hero.jsx` – name drop-in, sticky notes, mouse parallax avatars
- `components/About.jsx` – draggable polaroids, torn-sticker skills
- `components/Projects.jsx` – sticky stacking folder cards
- `components/Contact.jsx` – marquee + contact footer

## Deploying
Every push to `main` builds and publishes the site to GitHub Pages automatically (`.github/workflows/deploy.yml`).
Live at: https://apinanderrson.github.io/portfolio/
