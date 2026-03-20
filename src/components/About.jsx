import { motion } from "framer-motion";
import { techStack } from "../data/index";
import studioPng from "../assets/studio.png";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:pl-32 lg:pr-16 relative overflow-hidden flex flex-col items-center">
      
      {/* Decorative large typography background */}
      <h2 className="absolute top-10 left-[-5vw] text-[18vw] lg:text-[15vw] font-serif opacity-5 whitespace-nowrap pointer-events-none uppercase tracking-tighter mix-blend-overlay">
        Biography
      </h2>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center lg:items-start mt-12 lg:mt-24">
        
        {/* Left image/organic shape container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2 relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[320px] lg:max-w-none lg:w-[35vw] aspect-[3/4] glass rounded-tr-[80px] rounded-bl-[80px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] overflow-hidden group">
            <div className="absolute inset-0 bg-accent-light dark:bg-accent-dark mix-blend-overlay z-10 opacity-10 lg:opacity-30 transition-opacity duration-1000 lg:group-hover:opacity-0" />
            <img 
              src={studioPng} 
              alt="Portrait of Singgih"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover filter grayscale-0 lg:grayscale contrast-110 transition-transform duration-[2s] scale-x-[-1] lg:group-hover:scale-x-[-1.05] lg:group-hover:scale-y-105 lg:group-hover:grayscale-0"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-20">
              <span className="font-mono text-[10px] lg:text-xs tracking-widest uppercase bg-base-dark text-text-dark px-3 mt-2 inline-block py-1 rounded-full border border-white/20">
                02 / About
              </span>
            </div>
          </div>
          
          {/* Subtle floating element */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 right-4 lg:-bottom-10 lg:-right-10 w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-current opacity-20 flex items-center justify-center pointer-events-none"
          >
            <span className="text-[8px] lg:text-[10px] uppercase tracking-widest transform rotate-45 text-center leading-tight">
              Creative<br/>Developer
            </span>
          </motion.div>
        </motion.div>

        {/* Right text content - Asymmetrical layout */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:gap-12 lg:pt-16 px-2 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-7xl mb-6 lg:mb-8 tracking-tighter">
              Bridging the gap between <span className="italic text-accent-light dark:text-accent-dark font-light">design</span> and <span className="italic font-light">engineering.</span>
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed opacity-80 max-w-xl flex flex-col gap-4">
              <span>I am a Full Stack Developer who focuses on building efficient, scalable, and user-centered digital systems. With a background in both development and design, I don’t just create interfaces—I build complete solutions that solve real problems.</span>
              <span>I work across the stack using technologies like JavaScript, PHP, and modern frameworks such as Next.js, with a growing focus on API integration and AI-powered features. My approach combines clean architecture, performance optimization, and intuitive user experience.</span>
              <span>I value clarity, structure, and functionality—but I also believe that great products should feel engaging and thoughtfully crafted.</span>
            </p>
          </motion.div>

          {/* Tech Stack - Magazine Index Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="border-t border-current opacity-80 pt-8"
          >
            <h4 className="font-mono text-[10px] lg:text-xs uppercase tracking-[0.3em] mb-6 lg:mb-8">Technical Repertoire</h4>
            
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {techStack.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.name} className="flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-current opacity-60 hover:opacity-100 hover:bg-current hover:text-base-light dark:hover:text-base-dark transition-all duration-300">
                    <Icon className="text-sm" />
                    <span className="font-mono text-[9px] lg:text-[10px] tracking-widest uppercase">{tech.name}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
