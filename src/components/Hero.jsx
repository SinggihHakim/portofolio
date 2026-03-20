import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const textContainer2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    }
  }
};

const textItem = {
  hidden: { y: "120%", opacity: 0, rotate: 10 },
  show: { y: "0%", opacity: 1, rotate: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center px-6 lg:pl-32 lg:pr-16 pt-28 pb-16 lg:pt-0 overflow-hidden"
    >
      {/* Organic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-overlay filter blur-3xl">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] w-[50vw] h-[50vh] bg-accent-dark/20 rounded-[100%] rounded-tr-[50%] blur-3xl transform rotate-45"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[10%] w-[60vw] h-[40vh] bg-current opacity-5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Typography Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
          className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-8 text-center lg:text-left pt-12 lg:pt-0"
        >
          <div className="overflow-hidden mb-0 lg:mb-[-2rem] z-20">
            <motion.p
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium"
            >
              Interactive Developer & Designer
            </motion.p>
          </div>

          <h1 className="text-[3.5rem] leading-[1] sm:text-7xl md:text-8xl lg:text-[8rem] lg:leading-[0.9] font-serif tracking-tighter uppercase whitespace-normal break-words z-20">
            {/* Staggered Text Reveal for 1st word */}
            <motion.span variants={textContainer} initial="hidden" animate="show" className="flex justify-center flex-wrap lg:justify-start overflow-hidden">
              {"Singgih".split("").map((char, i) => (
                <motion.span key={i} variants={textItem} className="inline-block origin-bottom-left">
                  {char}
                </motion.span>
              ))}
            </motion.span>
            
            {/* Staggered Text Reveal for 2nd word */}
            <motion.span 
              variants={textContainer2} 
              initial="hidden" 
              animate="show" 
              className="flex justify-center flex-wrap lg:justify-start italic font-light ml-0 lg:ml-12 text-accent-light dark:text-accent-dark mix-blend-luminosity overflow-hidden"
            >
              {"Hakim.".split("").map((char, i) => (
                <motion.span key={i} variants={textItem} className="inline-block origin-bottom-left">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm mt-4 lg:ml-24 mx-auto lg:mx-0 flex flex-col items-center lg:items-start"
          >
            <p className="font-sans text-sm md:text-base leading-relaxed opacity-80 text-center lg:text-left">
              Crafting immersive digital experiences through fluid interfaces, organic layouts, and motion-driven narratives.
            </p>
            
            <a href="#projects" className="mt-8 lg:mt-10">
              {/* Magnetic Wrapping Applied */}
              <MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center gap-4 text-xs sm:text-sm tracking-widest uppercase font-bold overflow-hidden"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-current group-hover:text-base-light dark:group-hover:text-base-dark transition-colors duration-300 pointer-events-none">
                    <span className="transform -rotate-45">→</span>
                  </div>
                  <span className="relative z-10 pointer-events-none after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                    Explore Work
                  </span>
                </motion.button>
              </MagneticButton>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Imagery / Asymmetrical Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-2/5 relative flex justify-center lg:justify-end items-center lg:items-end mt-12 lg:mt-0 h-[40vh] sm:h-[50vh] lg:h-[70vh]"
        >
          <div className="w-[70%] sm:w-[60%] lg:w-full h-full glass rounded-t-full rounded-b-full lg:rounded-b-none lg:rounded-br-full relative overflow-hidden group">
            
            {/* Image Masking Reveal Overlay */}
            <motion.div 
              initial={{ y: "0%" }}
              animate={{ y: "100%" }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 1 }}
              className="absolute inset-0 bg-base-dark dark:bg-base-light mix-blend-difference z-20 pointer-events-none"
            />
            
            <div className="absolute inset-0 bg-current mix-blend-overlay opacity-5 lg:opacity-20 z-10 transition-opacity duration-700 lg:group-hover:opacity-0 pointer-events-none" />
            <img
              src="./src/assets/studio.png"
              alt="Portrait of Singgih"
              className="w-full h-full object-cover filter grayscale-0 lg:grayscale-[50%] contrast-110 transition-all duration-[2s] group-hover:scale-105 lg:group-hover:grayscale-0"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <div className="absolute bottom-[10%] lg:bottom-[20%] left-4 lg:-left-16 z-20 text-right mix-blend-difference text-white">
            <p className="text-[10px] tracking-widest uppercase font-mono transform lg:-rotate-90 origin-bottom-left whitespace-nowrap opacity-60">
              Vol. 01 — 2026 Collection
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;