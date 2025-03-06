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
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Imagem de fundo do escritório */}
            <div className="absolute inset-0">
                <img 
                    src="/escritorio.webp" 
                    alt="Escritório" 
                    className="w-full h-full object-cover"
                />
                {/* Camada escura por cima da imagem para melhorar o contraste */}
                <div className="absolute inset-0 bg-black/60"></div>
                
                {/* Gradientes sutis por cima para dar mais profundidade */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#db0500]/20 via-transparent to-black/30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/[0.15] mb-8 md:mb-12 backdrop-blur-sm"
                    >
                        <Circle className="h-2 w-2 fill-[#db0500]" />
                        <span className="text-sm text-white tracking-wide">
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
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white/80 to-white/60">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-xl mx-auto"
                    >
                        <p className="text-xl text-white/70">
                            {description}
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4"
                    >
                        <a
                            href="#sobre"
                            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white/[0.2] bg-[linear-gradient(110deg,#000000,45%,#4D4B4B,55%,#000000)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                            Conheça Nossa História
                        </a>
                        <a
                            href="#contato"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-[#db0500] bg-[#db0500]/90 px-6 font-medium text-white transition-colors hover:bg-[#db0500] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                            Entre em Contato
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Elementos decorativos sutis */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex items-center">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 2,
                    }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-white/40">Role para descobrir</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
                    >
                        <motion.div className="w-1 h-1.5 bg-white/60 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export { HeroGeometric }
