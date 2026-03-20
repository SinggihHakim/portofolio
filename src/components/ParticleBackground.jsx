import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-base-dark pointer-events-none">
            {/* Optimized Ambient Gradients — CSS animation instead of Framer Motion for better performance */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] rounded-full bg-accent-dark opacity-[0.12] pointer-events-none"
                style={{
                    filter: 'blur(60px)',
                    willChange: 'transform',
                    animation: 'drift1 25s ease-in-out infinite',
                    mixBlendMode: 'screen',
                }}
            />
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] sm:w-[55vw] sm:h-[55vw] rounded-full bg-white/10 opacity-[0.06] pointer-events-none"
                style={{
                    filter: 'blur(80px)',
                    willChange: 'transform',
                    animation: 'drift2 30s ease-in-out infinite',
                    mixBlendMode: 'screen',
                }}
            />
            <style>{`
                @keyframes drift1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(8vw, 6vh) scale(1.1); }
                }
                @keyframes drift2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-10vw, -8vh) scale(1.15); }
                }
            `}</style>
        </div>
    );
};

export default ParticleBackground;