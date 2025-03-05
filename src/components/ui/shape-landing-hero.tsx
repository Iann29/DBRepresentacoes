"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useWindowScale, scaleAdjust } from "@/lib/useWindowScale";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    const { scale } = useWindowScale();
    const adjustedWidth = typeof width === 'number' ? scaleAdjust(width, scale) : width;
    const adjustedHeight = typeof height === 'number' ? scaleAdjust(height, scale) : height;

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width: adjustedWidth,
                    height: adjustedHeight,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
    description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology."
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    const { scale } = useWindowScale();

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#db0500]/[0.05] via-transparent to-indigo-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-[#db0500]/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-[#db0500]/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-[#db0500]/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-[#db0500]/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-[#db0500]/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-[#db0500]" />
                        <span className="text-sm text-white/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-[#db0500] via-[#ff3333] to-[#ff6666] "
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            {description}
                        </p>
                    </motion.div>
                    
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row justify-center gap-6"
                    >
                        <a 
                            href="#empresas" 
                            className="group bg-[#db0500] hover:bg-[#a00300] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center overflow-hidden relative shadow-lg"
                        >
                            <span className="relative z-10 flex items-center">
                                Nossas Empresas
                                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>
                        </a>
                        
                        <a 
                            href="#contato" 
                            className="group border-2 border-white/20 hover:border-[#db0500] text-white hover:text-[#db0500] font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                        >
                            <span className="relative z-10">Entre em Contato</span>
                            <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                        </a>
                    </motion.div>
                </div>
            </div>
            
            {/* Indicador de scroll com ajuste para escala do sistema */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 mt-16"
                style={{ 
                    marginTop: "3rem",
                    transform: `translate(-50%, ${scale > 1 ? `${scaleAdjust(8, scale)}px` : '0px'})` 
                }}
            >
                <div className="flex flex-col items-center">
                    <span className="text-xs sm:text-sm text-white/60 mb-2">Scroll para descobrir</span>
                    <div 
                        className="rounded-full border-2 border-white/30 flex items-start justify-center"
                        style={{ 
                            width: `${scaleAdjust(20, scale)}px`, 
                            height: `${scaleAdjust(32, scale)}px`
                        }}
                    >
                        <motion.div 
                            animate={{ 
                                y: [0, scaleAdjust(8, scale), 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="bg-white rounded-full mt-2"
                            style={{ 
                                width: `${scaleAdjust(4, scale)}px`, 
                                height: `${scaleAdjust(8, scale)}px` 
                            }}
                        />
                    </div>
                </div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
