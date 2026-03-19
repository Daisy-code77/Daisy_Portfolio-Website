import Navbar from './components/Navbar';
// Project: Daisy Portfolio Website - Reconstructed with Vite + React
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Awards from './components/Awards';
import Footer from './components/Footer';
import Background from './components/Background';
import { motion } from 'framer-motion';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 font-sans relative">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <motion.div {...fadeInUp}>
          <Hero />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Skills />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Experience />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Projects />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Education />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Awards />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
