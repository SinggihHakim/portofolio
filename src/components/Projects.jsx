import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { projects } from "../data/index";

const ProjectCard = ({ project, index, scrollYProgress }) => {
  const isEven = index % 2 === 0;

  // Reduce parallax effect on mobile screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const distance = isMobile ? 30 : 100;
  const yOffset = useTransform(scrollYProgress, [0, 1], [distance * (index + 1), -distance * (index + 1)]);

  return (
    <motion.div
      style={{ y: yOffset }}
      className={`relative w-full lg:w-[45vw] flex flex-col ${isEven ? 'self-start lg:-ml-[2vw]' : 'self-end lg:-mr-[2vw]'} group mb-20 md:mb-32 lg:mb-48`}
    >
      <div className="flex items-center gap-4 mb-4 z-10">
        <span className="text-xs font-mono uppercase tracking-[0.2em] opacity-50 block">No. {String(index + 1).padStart(2, '0')}</span>
        <div className="h-[1px] flex-grow bg-current opacity-20" />
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden glass rounded-sm lg:rounded-2xl border border-black/10 dark:border-white/5 hover:border-current transition-all duration-700 p-2 sm:p-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        <div className="w-full h-full relative overflow-hidden bg-base-dark">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover origin-center opacity-80 filter grayscale-0 lg:grayscale-[50%] contrast-110 lg:group-hover:scale-105 lg:group-hover:grayscale-0 transition-all duration-[1.5s] ease-[0.16,1,0.3,1]"
          />

          {/* Luxury Copper/Gold Tint Hover Effect */}
          <div className="absolute inset-0 z-10 bg-accent-dark mix-blend-color opacity-0 lg:group-hover:opacity-40 transition-opacity duration-1000 ease-in-out pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-accent-dark/60 via-transparent to-transparent opacity-0 lg:group-hover:opacity-60 transition-opacity duration-1000 ease-in-out pointer-events-none mix-blend-overlay" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 lg:group-hover:opacity-95 transition-opacity duration-700 pointer-events-none" />
          
          {/* Top gradient to protect the massive title */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent opacity-80 lg:group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
          
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end translate-y-2 lg:translate-y-6 lg:group-hover:translate-y-0 transition-transform duration-700">
            <h3 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-serif text-white mb-auto mt-2 sm:mt-4 leading-[0.9] tracking-tighter drop-shadow-2xl pointer-events-none transition-all duration-700 opacity-90 lg:opacity-80 group-hover:opacity-100">
              {project.title}
            </h3>
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-[#d4af37] uppercase mb-4 sm:mb-6 opacity-80 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {project.category} — {project.year}
            </p>
            
            <p className="text-white/80 text-xs sm:text-sm font-sans max-w-sm mb-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-200">
              {project.desc}
            </p>

            <a 
              href={project.link || project.github || "#"} 
              target={project.link || project.github ? "_blank" : "_self"}
              rel="noreferrer"
              className="self-start text-[10px] sm:text-xs tracking-widest uppercase font-bold text-white border-b border-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-300"
            >
              {project.github ? "View Details →" : project.link ? "View Live Project →" : "View Details →"}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="projects" className="py-24 lg:py-32 px-6 lg:pl-48 lg:pr-32 min-h-screen relative overflow-hidden">
      
      <div className="flex flex-col lg:flex-row items-start lg:items-baseline justify-between mb-24 lg:mb-40 border-b border-current pb-10">
        <h2 className="text-[3.5rem] leading-[1] sm:text-7xl lg:text-9xl font-serif tracking-tighter lowercase border-l-4 lg:border-l-8 pl-4 lg:pl-6 border-accent-light dark:border-accent-dark flex flex-col">
          <span>Selected</span>
          <span className="italic font-light opacity-60">Works.</span>
        </h2>
        <p className="max-w-xs text-xs sm:text-sm font-sans tracking-wide leading-relaxed lg:text-right mt-8 lg:mt-0 opacity-80">
          A curated selection of design and development projects exhibiting motion narratives and organic user interfaces.
        </p>
      </div>

      <div className="flex flex-col relative z-20 xl:ml-24">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            index={index} 
            project={project} 
            scrollYProgress={scrollYProgress} 
          />
        ))}
      </div>

    </section>
  );
};

export default Projects;