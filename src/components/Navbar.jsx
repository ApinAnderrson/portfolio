import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, socials } from '../data.js';

export default function Navbar() {
  const [active, setActive] = useState(nav[0].href);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight the tab for whichever section is in view
  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <motion.header
      // no backdrop-blur here: it would trap the fixed mobile drawer inside the header
      className={`sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-white px-3 transition-shadow duration-300 ${
        scrolled ? 'border-black/10 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.4)]' : 'border-transparent'
      }`}
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
    >
      <a
        href="#home"
        aria-label="Home"
        className="grid h-[30px] w-[30px] place-items-center rounded-full bg-rose text-base text-white transition-transform duration-500 hover:rotate-[360deg]"
      >
        ☺
      </a>

      <nav aria-label="Primary" className="hidden self-stretch lg:flex">
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="group relative flex items-center gap-2 px-[18px] font-mono text-[11px] font-bold uppercase tracking-[0.08em]"
          >
            {active === n.href && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 bg-sun"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative inline-block transition-transform duration-200 group-hover:-rotate-[20deg] group-hover:scale-125">
              {n.icon}
            </span>
            <span className="relative">{n.label}</span>
          </a>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden gap-1.5 sm:flex">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className={`social ${s.color}`}>
              {s.glyph}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-outline">
          ♥ Contact
        </a>
        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative z-[60] h-10 w-10 border-2 border-ink bg-white lg:hidden"
        >
          <span className={`absolute inset-x-[9px] h-0.5 bg-ink transition-all duration-300 ${open ? 'top-[18px] rotate-45' : 'top-3'}`} />
          <span className={`absolute inset-x-[9px] top-[18px] h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute inset-x-[9px] h-0.5 bg-ink transition-all duration-300 ${open ? 'top-[18px] -rotate-45' : 'top-6'}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col justify-center gap-3 bg-sun px-8"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
          >
            {nav.map((n, i) => (
              <motion.a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="font-pixel text-[clamp(36px,11vw,56px)] uppercase leading-tight"
              >
                <span className="align-middle text-[0.5em]">{n.icon}</span> {n.label}
              </motion.a>
            ))}
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className={`social h-11 w-11 text-[15px] ${s.color}`}>
                  {s.glyph}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
