import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full relative overflow-hidden bg-accent-dark text-base-dark py-4 lg:py-6 border-y border-current mt-12 lg:mt-0 z-10 opacity-90 transition-colors duration-700 select-none">
      <motion.div
        className="flex whitespace-nowrap gap-12 lg:gap-24 uppercase font-mono tracking-[0.3em] font-bold text-xs sm:text-sm lg:text-base items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
          repeatDelay: 0
        }}
      >
        {/* We repeat the text to create an infinite scroll illusion */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 lg:gap-24">
            <span>Creative Developer</span>
            <span className="opacity-50 text-xl font-serif leading-none mt-1">*</span>
            <span>Full Stack Engineer</span>
            <span className="opacity-50 text-xl font-serif leading-none mt-1">*</span>
            <span>UI / UX Designer</span>
            <span className="opacity-50 text-xl font-serif leading-none mt-1">*</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
