import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from "../data/index";

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight / 3;
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (currentPosition >= offsetTop && currentPosition < offsetBottom) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Museum Index Navigation */}
      <nav className="fixed left-0 top-0 bottom-0 w-24 hidden lg:flex flex-col items-center justify-between py-12 z-50 mix-blend-difference text-white">
        <div className="font-serif text-2xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          SH.
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <ul className="flex flex-col space-y-12">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="flex flex-col items-center gap-2 transform -rotate-90 select-none cursor-pointer"
                  >
                    <span className="text-xs tracking-widest font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                      [{isActive ? "X" : item.id}]
                    </span>
                    <span className={`text-sm tracking-[0.2em] font-medium transition-all duration-300 ${isActive ? 'opacity-100 font-bold' : 'opacity-40 group-hover:opacity-100'}`}>
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          onClick={toggleTheme}
          className="text-xs tracking-widest font-medium opacity-50 hover:opacity-100 transition-opacity transform -rotate-90"
        >
          {isDark ? 'LIGHT' : 'DARK'}
        </button>
      </nav>

      {/* Mobile Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center lg:hidden mix-blend-difference text-white">
        <div className="font-serif text-2xl tracking-tighter">
          SH.
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <HiX className="w-8 h-8" /> : <HiMenuAlt4 className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center ${isDark ? 'bg-base-dark text-text-dark' : 'bg-base-light text-text-light'}`}
          >
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.name} className="overflow-hidden">
                    <motion.a
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-end gap-4"
                    >
                      <span className="text-sm font-mono opacity-50 mb-2">[{item.id}]</span>
                      <span className={`font-serif text-5xl md:text-6xl tracking-tight uppercase ${isActive ? (isDark ? 'text-white' : 'text-black') : 'opacity-50'}`}>
                        {item.name}
                      </span>
                    </motion.a>
                  </li>
                );
              })}
            </ul>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                toggleTheme();
              }}
              className="mt-20 flex items-center gap-4 text-[10px] sm:text-[11px] tracking-[0.4em] font-mono uppercase transition-opacity"
            >
              <span className={isDark ? "opacity-100 font-bold" : "opacity-40 hover:opacity-100 transition-opacity"}>Night</span>
              <span className="opacity-20 font-serif italic text-lg leading-none transform translate-y-[2px]">/</span>
              <span className={!isDark ? "opacity-100 font-bold" : "opacity-40 hover:opacity-100 transition-opacity"}>Day</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;