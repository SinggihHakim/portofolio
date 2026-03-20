import { motion } from "framer-motion";
import { timelineData } from "../data/index";

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 lg:py-32 relative overflow-hidden bg-base-dark text-text-dark transition-colors duration-700 w-full flex flex-col items-center">
      
      <div className="w-full px-6 lg:pl-32 lg:pr-16 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24">
        <div>
          <h2 className="font-serif text-[4rem] sm:text-7xl lg:text-[8rem] leading-[0.8] tracking-tighter uppercase mb-4 mix-blend-difference text-white">
            Career
          </h2>
          <h2 className="font-serif text-[4rem] sm:text-7xl lg:text-[8rem] leading-[0.8] tracking-tighter uppercase italic opacity-50 ml-0 lg:ml-24">
            Path.
          </h2>
        </div>
        
        <p className="font-sans text-sm tracking-wide leading-relaxed opacity-60 max-w-xs mt-8 lg:mt-0 text-left lg:text-right">
          A chronological journey of continuous learning, architectural design, and deploying comprehensive web ecosystems.
        </p>
      </div>

      {/* Luxury Brutalist Table Layout */}
      <div className="w-full flex flex-col border-b border-current opacity-90 mx-auto">
        {timelineData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="group w-full border-t border-current flex flex-col md:flex-row py-12 lg:py-16 px-6 lg:pl-32 lg:pr-16 hover:bg-current hover:text-base-dark dark:hover:text-base-dark transition-all duration-700 cursor-default"
          >
            {/* Left Column: Year & Organization */}
            <div className="w-full md:w-1/3 flex flex-col justify-start mb-8 md:mb-0 relative md:border-r border-current opacity-70 md:pr-12 lg:pr-16 transition-all duration-700">
              
              {/* Architectural Crosshair Node at Intersection */}
              <div className="absolute -top-[48px] lg:-top-[64px] -right-[4px] lg:-right-[5px] w-2 h-2 lg:w-2.5 lg:h-2.5 border border-current bg-transparent rotate-45 hidden md:block opacity-0 group-hover:opacity-100 group-hover:bg-base-dark transition-all duration-700 z-10"></div>
              
              <div className="flex items-center gap-6">
                <span className="font-serif text-5xl lg:text-7xl group-hover:italic transition-all duration-700">{item.year}</span>
              </div>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] opacity-50 group-hover:opacity-80 mt-4 md:mt-8 max-w-[200px] leading-relaxed transition-opacity duration-700">
                {item.org}
              </span>
            </div>

            {/* Right Column: Role & Description */}
            <div className="w-full md:w-2/3 flex flex-col justify-center md:pl-12 lg:pl-16">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[4rem] leading-[1.1] md:leading-none mb-6 tracking-tighter transform translate-x-0 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                {item.role}
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed opacity-60 group-hover:opacity-100 max-w-xl transition-opacity duration-700">
                {item.desc}
              </p>
            </div>
            
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Timeline;
