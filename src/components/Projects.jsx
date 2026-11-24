import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data.js';
import Mockup from './Mockup.jsx';

const themes = {
  dark: 'bg-coal text-white',
  yellow: 'bg-sun text-ink',
  blue: 'bg-cobalt text-white',
};

function Card({ project, index, total, progress }) {
  // Each card shrinks a little as the cards after it stack on top
  // (kept small so the stacked cards — and their tabs — stay lined up on the left)
  const targetScale = 1 - (total - 1 - index) * 0.02;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const mediaY = useTransform(progress, [index / total, (index + 1) / total], [0, -30]);
  const first = index === 0;

  return (
    <div
      // Each card sticks only a few px below the one before, so the next card closes right up on it
      className="sticky top-[calc(96px+var(--i)*12px)] mb-[70px] pt-10 last:mb-0 md:top-[calc(112px+var(--i)*16px)]"
      style={{ '--i': index }}
    >
      <motion.article
        className={`relative origin-top rounded-2xl rounded-tl-none shadow-[0_-10px_30px_-18px_rgba(0,0,0,0.5)] md:min-h-[420px] ${themes[project.theme]}`}
        style={{ scale }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {/* Folder tab — fixed width, placed right next to the previous card's tab
            (overlapping its slanted edge by 14px) so all tabs sit in a tight row when stacked */}
        <div
          className={`absolute -top-10 flex h-[41px] w-[var(--tab-w)] items-center whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[0.08em] [--tab-w:116px] sm:text-[11px] sm:tracking-[0.12em] sm:[--tab-w:176px] ${project.tab} ${
            first
              ? 'rounded-tl-[10px] pl-3 [clip-path:polygon(0_0,86%_0,100%_100%,0_100%)] sm:pl-5'
              : 'justify-center [clip-path:polygon(14%_0,86%_0,100%_100%,0_100%)]'
          }`}
          style={{ left: `calc(${index} * (var(--tab-w) - 14px))` }}
        >
          ✦ Project {project.id}
        </div>

        <div className="grid items-center gap-5 p-6 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:p-10">
          <div>
            <p className="mb-3.5 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
              <span className="h-2 w-2 rounded-full bg-current" />{" "}
              {project.date}
            </p>
            <h3 className="mb-3.5 text-[clamp(38px,6vw,54px)] font-bold leading-none tracking-tighter">
              {project.title}
            </h3>
            <p className="mb-6 max-w-[34ch] text-sm leading-relaxed opacity-85">
              {project.description}
            </p>
            <a
              href={project.href}
              className="group inline-flex gap-1.5 border-b-2 border-current pb-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em]"
            >
              View project
              <span className="transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]">
                ↗
              </span>
            </a>
          </div>

          <motion.div className="relative" style={{ y: mediaY }}>
            <span className="tape tape-l bg-[#f0ece1]/85" />
            <span className="tape tape-r bg-[#f0ece1]/85" />
            <motion.div
              className="h-[clamp(220px,30vw,320px)] overflow-hidden rounded-md border-[3px] border-white bg-[#111]"
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Mockup kind={project.mockup} />
            </motion.div>
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section
      id="work"
      className="mx-auto max-w-[1100px] px-4 pb-28 sm:px-8 lg:px-12"
    >
      <motion.h2
        className="mb-[70px] font-hand text-[22px] font-normal"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        things i've made ↓
      </motion.h2>
      <div ref={ref}>
        {projects.map((p, i) => (
          <Card
            key={p.id}
            project={p}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
        {/* Spacer: keeps the earlier cards pinned until the last card has fully stacked on them.
            (Sticky items are released when their container's content ends — padding doesn't count.) */}
        <div aria-hidden className="h-40" />
      </div>
    </section>
  );
}
