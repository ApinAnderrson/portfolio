import { motion } from 'framer-motion';

// Fades/slides children in when they scroll into view.
export default function Reveal({ children, delay = 0, y = 40, x = 0, rotate = 0, className, as = 'div' }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x, rotate }}
      whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </Tag>
  );
}
