import { useState } from 'react';
import { motion } from 'framer-motion';
import { site, socials } from '../data.js';

const marquee = ['Say hello', '✿', 'Open to work', '◎', 'Let’s build something', '✦'];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <footer id="contact" className="overflow-hidden bg-coal text-white">
      <div className="overflow-hidden border-y-2 border-ink bg-sun py-3 text-ink" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 font-pixel text-[clamp(20px,3vw,30px)] uppercase">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      <motion.div
        className="mx-auto max-w-[1100px] px-4 pb-10 pt-[clamp(60px,10vw,110px)] text-center sm:px-8"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-2 font-hand text-[22px] text-sun">got a good problem?</p>
        <h2 className="mb-8 text-[clamp(34px,6vw,64px)] font-bold leading-[1.05] tracking-tighter">
          Let’s make something <span className="bg-highlight px-1">simple</span>.
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <motion.a
            href={`mailto:${site.email}`}
            className="btn-dark group border-ink bg-sun text-ink"
            whileHover={{ y: -3, boxShadow: '6px 6px 0 #ea4f8f' }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="h-5 w-5 bg-cobalt transition-transform duration-300 group-hover:rotate-90" /> Email me
          </motion.a>
          <button
            onClick={copy}
            className="btn-outline border-white bg-transparent normal-case tracking-[0.02em] text-white hover:shadow-[3px_3px_0_#f1c84b]"
          >
            {copied ? '✓ Copied!' : site.email}
          </button>
        </div>
        <div className="my-10 flex justify-center gap-3">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className={`social h-11 w-11 text-[15px] ${s.color}`}
              whileHover={{ rotate: 15, scale: 1.15 }}
            >
              {s.glyph}
            </motion.a>
          ))}
        </div>
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] opacity-50">
          © {new Date().getFullYear()} {site.name} · Made with care
        </p>
      </motion.div>
    </footer>
  );
}
