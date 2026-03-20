import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-base-dark text-text-dark pt-24 lg:pt-32 pb-8 px-6 lg:px-16 lg:pl-32 overflow-hidden border-t border-white/10 dark:border-white/5 transition-colors duration-500">
      
      {/* Decorative large topography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-5 mix-blend-overlay overflow-hidden">
        <h1 className="font-serif text-[15vw] sm:text-[20vw] whitespace-nowrap tracking-tighter">
          THE END
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-0 relative z-10">
        
        {/* Massive Brand Name */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="font-serif text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] leading-[0.8] tracking-tighter uppercase mb-6 lg:mb-8 text-text-dark">
            Singgih <br/>Hakim<span className="text-accent-dark">.</span>
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 text-text-dark max-w-[280px] leading-relaxed">
            Designing fluid and tactile digital experiences that transcend the grid. Architecture meets emotion.
          </p>
        </div>

        {/* Links & Information */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row justify-between gap-12 lg:gap-24 lg:pl-16 text-text-dark">
          
          <div className="flex flex-col gap-6 lg:gap-8">
            <h4 className="font-mono text-[10px] text-accent-dark uppercase tracking-[0.3em]">Directory</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm tracking-wide">
              {['Home', 'About', 'Timeline', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-accent-dark hover:italic transition-all duration-300 opacity-80 hover:opacity-100 flex items-center gap-2">
                    <span className="w-0 h-px bg-current transition-all duration-300 block overflow-hidden group-hover:w-4"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8 text-text-dark">
            <h4 className="font-mono text-[10px] text-accent-dark uppercase tracking-[0.3em]">Network</h4>
            <ul className="flex flex-col gap-4 font-sans text-sm tracking-wide">
              <li>
                <a href="https://github.com/SinggihHakim" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-accent-dark hover:italic transition-all duration-300 opacity-80 hover:opacity-100">
                  <span className="opacity-50"><FaGithub /></span> Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/singgihainurhakim/" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-accent-dark hover:italic transition-all duration-300 opacity-80 hover:opacity-100">
                  <span className="opacity-50"><FaLinkedin /></span> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/singgihhakim666/" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-accent-dark hover:italic transition-all duration-300 opacity-80 hover:opacity-100">
                  <span className="opacity-50"><FaInstagram /></span> Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/sgghhkm" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-accent-dark hover:italic transition-all duration-300 opacity-80 hover:opacity-100">
                  <span className="opacity-50"><FaTwitter /></span> Twitter
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar Colophon */}
      <div className="relative z-10 max-w-7xl mx-auto mt-24 lg:mt-32 pt-8 lg:pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] opacity-40 text-text-dark">
        <p>&copy; {new Date().getFullYear()} Singgih Hakim.</p>
        <p className="hidden md:block">Vol. 01 — Portfolio Collection — ID</p>
        <div className="flex gap-8">
          <a href="#privacy" className="hover:text-accent-dark hover:opacity-100 transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-accent-dark hover:opacity-100 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;