import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full bg-space-black">
        {/* Efek Nebula / Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-linear(ellipse_at_top,_var(--tw-linear-stops))] from-nebula-purple/20 via-space-black to-space-black opacity-50"></div>

        {/* Bintang (Simulasi sederhana dengan div kecil) */}
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                initial={{ opacity: 0.1, scale: 0.5 }}
                animate={{ 
                    opacity: [0.1, 0.8, 0.1], 
                    scale: [0.5, 1.2, 0.5],
                    y: [0, -30] 
                }}
                transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 5
                }}
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                }}
            />
        ))}
    </div>
  );
};
export default Background;