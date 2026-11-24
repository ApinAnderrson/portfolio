import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { site } from '../data.js';
import Avatar from './Avatar.jsx';

const pop = (delay) => ({
  initial: { opacity: 0, scale: 0.4, rotate: -12 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  transition: { type: 'spring', stiffness: 260, damping: 14, delay },
});

const pill =
  'inline-block whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] shadow-pill';
const note = 'absolute whitespace-nowrap px-3 py-2 font-hand text-[15px] shadow-note';
const arrow = 'absolute hidden h-[22px] w-7 fill-none stroke-ink stroke-2 [stroke-linecap:round] md:block';

export default function Hero() {
  // Mouse parallax for the floating avatars
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15 });
  const sy = useSpring(my, { stiffness: 60, damping: 15 });
  const leftX = useTransform(sx, (v) => v * 30);
  const leftY = useTransform(sy, (v) => v * 30);
  const rightX = useTransform(sx, (v) => v * -24);
  const rightY = useTransform(sy, (v) => v * -24);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const lines = site.headline.map((line) => line.split(' '));

  return (
    <section
      id="home"
      onMouseMove={onMove}
      className="relative flex min-h-[calc(100svh-56px)] flex-col items-center justify-center px-4 pb-28 pt-14 text-center sm:px-8"
    >
      {/* Floating avatars */}
      <motion.div className="absolute left-[4%] top-[12%] z-10 md:left-[12%] md:top-[50%]" style={{ x: leftX, y: leftY }}>
        <motion.div {...pop(1.1)} className="animate-float">
          <Avatar src={site.avatar} />
        </motion.div>
      </motion.div>
      <motion.div className="absolute right-[4%] top-[12%] z-10 md:right-[12%] md:top-10" style={{ x: rightX, y: rightY }}>
        <motion.div {...pop(1.25)} className="animate-float-fast">
          <Avatar src={site.avatar} />
        </motion.div>
      </motion.div>

      {/* Name block: a grid on phones, free-floating tags on bigger screens */}
      <div className="relative grid w-full max-w-[640px] grid-cols-[auto_auto] justify-center gap-x-2.5 gap-y-1.5 md:flex md:flex-col md:items-center">
        <motion.p
          className="col-span-2 mb-1.5 font-hand text-[17px]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          my <u className="decoration-2 underline-offset-[3px]">name</u> is
        </motion.p>

        <motion.span className="md:absolute md:left-0 md:top-[18px] [rotate:-3deg]" {...pop(0.9)}>
          <span className={`${pill} animate-float bg-mint`}>{site.tagLeft}</span>
        </motion.span>
        <motion.span className="md:absolute md:right-0 md:top-[18px] [rotate:3deg]" {...pop(1.0)}>
          <span className={`${pill} animate-float-fast bg-cream`}>{site.tagRight}</span>
        </motion.span>

        <div className="relative col-span-2 mt-3 justify-self-center px-[clamp(14px,3vw,28px)] py-2.5 md:mt-1.5">
          <motion.div
            className="absolute inset-0 rounded-md border-2 border-tomato"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
          />
          <h1 aria-label={site.name} className="flex select-none font-pixel text-[clamp(72px,17vw,128px)] leading-none tracking-tight">
            {site.name.split('').map((ch, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="inline-block cursor-default"
                initial={{ y: -120, opacity: 0, rotate: -20 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.35 + i * 0.08 }}
                whileHover={{ y: -10, rotate: i % 2 ? 6 : -6, color: '#e04a3a' }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>

          <motion.span className={`${note} -bottom-8 -left-1.5 bg-sun [rotate:-4deg] md:-bottom-[33px] md:-left-[110px]`} {...pop(1.2)}>
            {site.role}
          </motion.span>
          <motion.span className={`${note} -bottom-8 -right-1.5 bg-mint [rotate:3deg] md:-bottom-[33px] md:-right-[100px]`} {...pop(1.3)}>
            {site.location}
          </motion.span>

          <svg className={`${arrow} -bottom-1.5 -left-[18px]`} viewBox="0 0 40 30" aria-hidden>
            <motion.path
              d="M2 28 C 12 22, 24 14, 36 4 M36 4 L28 5 M36 4 L34 12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            />
          </svg>
          <svg className={`${arrow} -bottom-1.5 -right-5`} viewBox="0 0 40 30" aria-hidden>
            <motion.path
              d="M38 28 C 28 22, 16 14, 4 4 M4 4 L12 5 M4 4 L6 12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            />
          </svg>
        </div>

        <motion.p
          className="col-span-2 mt-12 flex items-center justify-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] md:mt-[22px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span className="relative inline-flex h-2 w-2 shrink-0">
            <span className="absolute inset-0 animate-ping rounded-full bg-cobalt" />
            <span className="relative h-2 w-2 rounded-full bg-cobalt" />
          </span>
          {site.status}
        </motion.p>
      </div>

      {/* Headline with word-by-word reveal */}
      <h2 className="mb-7 mt-8 text-[clamp(28px,4.4vw,40px)] font-bold leading-tight tracking-tight md:mt-12">
        {lines.map((line, li) => (
          <span key={li} className="flex flex-wrap items-center justify-center gap-x-[0.28em]">
            <motion.span className={`ml-[0.1em] inline-grid place-items-center text-[0.9em] ${li ? 'text-rose' : 'text-leaf'}`} {...pop(1.7 + li * 0.15)}>
              <span className={`inline-block ${li ? 'animate-spin-slow' : 'animate-throb'}`}>{li ? '' : '◎'}</span>
            </motion.span>
            {line.map((w, wi) => (
              <span key={wi} className="inline-block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 1.2 + li * 0.25 + wi * 0.05 }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
            <motion.span className={`ml-[0.1em] inline-grid place-items-center text-[0.9em] ${li ? 'text-rose' : 'text-leaf'}`} {...pop(1.7 + li * 0.15)}>
              <span className={`inline-block ${li ? 'animate-spin-slow' : 'animate-throb'}`}>{li ? '✿' : ''}</span>
            </motion.span>
          </span>
        ))}
      </h2>

      <motion.a
        href="#contact"
        className="btn-dark group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9 }}
        whileHover={{ y: -3, boxShadow: '6px 6px 0 #3b3fe0' }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="h-5 w-5 bg-cobalt transition-transform duration-300 group-hover:rotate-90" /> Contact me
      </motion.a>

      <svg
        className="absolute bottom-2.5 left-0 h-[60px] w-full fill-none stroke-black/25 stroke-[1.5]"
        viewBox="0 0 1000 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M0 55 Q 500 -15 1000 55"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
      </svg>
    </section>
  );
}
