import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [loading, setLoading] = useState(true);

  // Auto-scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleTheme = () => {
    const newState = !isDark;
    setIsDark(newState);
    if (!newState) { // Light mode
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className={`relative min-h-screen selection:bg-accent-dark/50 selection:text-white transition-colors duration-1000 ease-[0.16,1,0.3,1] ${!isDark ? 'light-mode' : ''}`}>
          
          {/* Subtle noise texture over everything for a tactile magazine feel */}
          <div className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          {/* Right-Side Global Fixed Index Label */}
          <div className="fixed top-1/2 right-4 lg:right-6 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-6 mix-blend-difference text-white pointer-events-none opacity-30 select-none">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              Digital Archive
            </span>
            <div className="w-[1px] h-16 bg-current opacity-50"></div>
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              Vol. I
            </span>
          </div>

          {isDark && <ParticleBackground />}

          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          <main className="relative z-10 w-full flex flex-col items-center overflow-x-hidden">
            <Hero />
            <About />
            <Timeline />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;