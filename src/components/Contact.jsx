import { motion } from "framer-motion";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    // Ensure the key exists securely
    const formData = new FormData(event.target);
    formData.append("access_key", "ec3bbaf8-db50-435b-91c5-c8693c65d61b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("MESSAGE SENT SUCCESSFULLY ✓");
        event.target.reset();
      } else {
        setResult("ERROR SENDING MESSAGE");
      }
    } catch (error) {
      setResult("NETWORK ERROR");
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:pl-32 lg:pr-16 relative overflow-hidden bg-base-dark text-text-dark border-t border-current opacity-90 transition-colors duration-700">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[40vh] lg:min-h-[50vh] text-center gap-8 lg:gap-12">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="font-serif text-[3.5rem] leading-[0.9] sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter uppercase"
        >
          Let's talk 
          <br/>
          <span className="italic font-light opacity-50 block lowercase">business.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-sans text-sm sm:text-lg md:text-xl opacity-80 max-w-xl mx-auto px-4 mix-blend-normal"
        >
          Open for highly ambitious projects. A digital canvas awaits.
        </motion.p>
        
        {/* Luxury Minimalist Form */}
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl mx-auto flex flex-col gap-10 lg:gap-16 mt-8 sm:mt-12 text-left"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-2 relative group">
            <label className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase opacity-50 group-focus-within:opacity-100 transition-opacity">01. What's your name?</label>
            <input 
              type="text" 
              name="name"
              placeholder="John Doe *" 
              required 
              className="w-full bg-transparent border-b border-current opacity-30 focus:opacity-100 focus:border-current py-4 sm:py-6 text-2xl sm:text-4xl lg:text-5xl font-serif outline-none transition-all duration-500 placeholder-current/20" 
            />
          </div>
          
          <div className="flex flex-col gap-2 relative group">
            <label className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase opacity-50 group-focus-within:opacity-100 transition-opacity">02. What's your email address?</label>
            <input 
              type="email" 
              name="email"
              placeholder="john@doe.com *" 
              required 
              className="w-full bg-transparent border-b border-current opacity-30 focus:opacity-100 focus:border-current py-4 sm:py-6 text-2xl sm:text-4xl lg:text-5xl font-serif outline-none transition-all duration-500 placeholder-current/20" 
            />
          </div>
          
          <div className="flex flex-col gap-2 relative group">
            <label className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase opacity-50 group-focus-within:opacity-100 transition-opacity">03. Write your message</label>
            <textarea 
              name="message"
              placeholder="Hello Singgih, can you help me with... *" 
              rows="3" 
              required 
              className="w-full bg-transparent border-b border-current opacity-30 focus:opacity-100 focus:border-current py-4 sm:py-6 text-2xl sm:text-4xl lg:text-5xl font-serif outline-none transition-all duration-500 placeholder-current/20 resize-none rounded-none"
            ></textarea>
          </div>
          
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center sm:items-end mt-4 gap-8">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] opacity-60 min-w-[200px]">
              {result}
            </span>
            <MagneticButton>
              <button 
                type="submit"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-current px-8 py-4 lg:px-16 lg:py-6 font-mono text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase transition-all duration-300 pointer-events-auto"
              >
                <span className="relative z-10 lg:group-hover:-translate-y-16 transition-transform duration-500 ease-[0.16,1,0.3,1] block group-hover:text-base-dark pointer-events-none text-current">
                  Send Message
                </span>
                <span className="absolute inset-0 hidden lg:flex items-center justify-center text-base-dark bg-current translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] pointer-events-none">
                  Submit
                </span>
              </button>
            </MagneticButton>
          </div>
        </motion.form>
      </div>

    </section>
  );
};

export default Contact;
