import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const nextVal = prev + Math.floor(Math.random() * 8) + 2;
                if (nextVal >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setLoading(false);
                        setTimeout(onComplete, 1200); // Wait for the transition out
                    }, 500); // Small pause at 100 before animating out
                    return 100;
                }
                return nextVal;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[99999] flex flex-col justify-between p-6 lg:p-12 bg-base-dark text-text-dark pointer-events-none"
                    style={{ willChange: 'transform' }}
                >
                    <div className="flex justify-between font-mono text-xs uppercase tracking-widest opacity-50">
                        <span>Initialization</span>
                        <span>Vol. 01</span>
                    </div>

                    <div className="flex flex-col items-center justify-center flex-grow">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-serif text-[15vw] leading-none tracking-tighter"
                        >
                            {String(progress).padStart(3, '0')}
                        </motion.div>
                        <div className="font-mono text-sm tracking-[0.5em] uppercase mt-4 opacity-50">
                            Loading Assets
                        </div>
                    </div>

                    <div className="flex justify-between font-mono text-xs uppercase tracking-widest opacity-50">
                        <span>S. Hakim</span>
                        <span>[2026]</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
