import React from 'react';
import { motion } from 'framer-motion';

const GlowingBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                {/* Orb 1 */}
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#2596be] opacity-30 blur-[80px] will-change-transform"
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, 50, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                        borderRadius: [
                            "40% 60% 70% 30% / 40% 50% 60% 50%",
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                            "30% 70% 40% 60% / 30% 60% 40% 70%",
                            "40% 60% 70% 30% / 40% 50% 60% 50%"
                        ]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Orb 2 */}
                <motion.div
                    className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#2596be] opacity-30 blur-[80px] will-change-transform"
                    animate={{
                        x: [0, -100, 50, 0],
                        y: [0, -50, -100, 0],
                        scale: [1, 1.1, 0.9, 1],
                        borderRadius: [
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                            "30% 70% 40% 60% / 30% 60% 40% 70%",
                            "40% 60% 70% 30% / 40% 50% 60% 50%",
                            "60% 40% 30% 70% / 60% 30% 70% 40%"
                        ]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Orb 3 */}
                <motion.div
                    className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] bg-[#2596be] opacity-20 blur-[80px] will-change-transform"
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.3, 0.8, 1],
                        borderRadius: [
                            "30% 70% 40% 60% / 30% 60% 40% 70%",
                            "40% 60% 70% 30% / 40% 50% 60% 50%",
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                            "30% 70% 40% 60% / 30% 60% 40% 70%"
                        ]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Overlay to darken and smooth out the effect slightly */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        </div>
    );
};

export default GlowingBackground;
