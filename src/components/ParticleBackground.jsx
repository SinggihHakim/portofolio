import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
    // Instead of rendering canvas particles, we can render 
    // a highly elegant fluid aura gradient using framer-motion.
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-base-dark pointer-events-none">
            {/* Soft Ambient Mesh Gradients */}
            
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: ["-10vw", "10vw", "-10vw"],
                    y: ["0vh", "10vh", "0vh"],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] rounded-full filter blur-[100px] sm:blur-[150px] mix-blend-screen bg-accent-dark pointer-events-none opacity-20"
            />
            
            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    rotate: [0, -120, 0],
                    x: ["0vw", "-20vw", "0vw"],
                    y: ["0vh", "-20vh", "0vh"],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] sm:w-[60vw] sm:h-[60vw] rounded-full filter blur-[120px] sm:blur-[180px] mix-blend-screen bg-white/10 pointer-events-none opacity-10"
            />
        </div>
    );
};

export default ParticleBackground;