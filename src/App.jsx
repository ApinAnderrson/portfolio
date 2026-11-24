import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-rainbow" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </MotionConfig>
  );
}
