import { motion } from 'framer-motion';
import { about } from '../data.js';
import Photo from './Photo.jsx';
import Reveal from './Reveal.jsx';

const photo = 'w-full max-w-[150px] cursor-grab touch-none justify-self-center active:cursor-grabbing sm:max-w-[170px]';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1100px] px-4 pb-28 pt-5 sm:px-8 lg:px-12">
      <Reveal className="mb-7 font-hand text-lg" x={-30} y={0}>
        about me!
      </Reveal>

      <div className="grid grid-cols-2 items-center gap-4 sm:gap-8 lg:grid-cols-[1fr_minmax(0,480px)_1fr] lg:gap-14">
        <motion.div
          className={`${photo} mt-8 lg:mt-20`}
          initial={{ opacity: 0, y: 80, rotate: -20 }}
          whileInView={{ opacity: 1, y: 0, rotate: -4 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 12 }}
          whileHover={{ rotate: 2, scale: 1.05 }}
          drag
          dragSnapToOrigin
        >
          <Photo {...about.photoLeft} />
        </motion.div>

        <div className="col-span-2 row-start-1 flex flex-col items-center text-center lg:col-span-1 lg:col-start-2">
          <Reveal className="mb-[18px] inline-block border-[1.5px] border-ink bg-white px-3 py-1 text-[22px] font-medium">
            what's up
          </Reveal>
          <div className="font-hand text-[clamp(19px,2.2vw,23px)] leading-relaxed">
            {about.text.map((p, i) => (
              <Reveal key={i} as="p" delay={0.1 + i * 0.15}>
                {p}
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-3.5 gap-y-3">
            {about.skills.map((s, i) => (
              <motion.div
                key={s.label}
                className="group flex cursor-default gap-1"
                initial={{ opacity: 0, scale: 0.5, rotate: i % 2 ? 10 : -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: i % 2 ? 1.5 : -1.5 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 220, damping: 12, delay: 0.2 + i * 0.1 }}
                whileHover={{ rotate: i % 2 ? -3 : 3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`torn whitespace-nowrap px-3 py-2 text-[clamp(14px,1.6vw,17px)] font-semibold sm:px-[18px] sm:py-[9px] ${s.color} ${s.text}`}>
                  {s.label}
                </span>
                <span className={`torn grid w-9 place-items-center text-[17px] sm:w-[42px] ${s.color}`}>
                  <span className="group-hover:animate-wiggle">{s.icon}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={`${photo} mt-8 lg:mt-0 lg:self-start`}
          initial={{ opacity: 0, y: 80, rotate: 20 }}
          whileInView={{ opacity: 1, y: 0, rotate: 3 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.15 }}
          whileHover={{ rotate: -2, scale: 1.05 }}
          drag
          dragSnapToOrigin
        >
          <Photo {...about.photoRight} />
        </motion.div>
      </div>
    </section>
  );
}
