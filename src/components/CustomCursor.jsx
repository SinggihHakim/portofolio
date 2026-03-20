import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Menyembunyikan cursor bawaan 
        document.body.style.cursor = 'none';

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const hoverable = ['a', 'button'];
            if (
                hoverable.includes(e.target.tagName.toLowerCase()) ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.closest('.group')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.body.style.cursor = 'auto'; // clean up
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference bg-white"
            initial={{ width: 12, height: 12, opacity: 0 }}
            animate={{
                x: mousePosition.x - (isHovering ? 24 : 6),
                y: mousePosition.y - (isHovering ? 24 : 6),
                width: isHovering ? 48 : 12,
                height: isHovering ? 48 : 12,
                opacity: 1
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        >
            <span className={`text-[8px] tracking-widest uppercase text-black font-bold transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                View
            </span>
        </motion.div>
    );
};
export default CustomCursor;
