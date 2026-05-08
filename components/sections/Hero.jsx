"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#0F3250]">
      
      {/* 🎥 FULL BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        
        {/* ⚡ RADIAL VIGNETTE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* 🚀 CENTRAL CONTENT WRAPPER */}
      <div className="relative z-20 w-full max-w-4xl px-6 text-center">
        
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-black/20 backdrop-blur-md mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAA33F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EAA33F]"></span>
          </span>
          <span className="text-white text-[10px] font-bold uppercase tracking-widest">
            Industrial Excellence
          </span>
        </motion.div>

        {/* Clean, Massive Heading with Blue "PRO" */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter uppercase drop-shadow-2xl"
        >
          <span className="text-[#0F3250]">PRO</span> <span className="text-[#EAA33F]">COATINGS</span>
        </motion.h1>

        {/* Minimalist Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-white text-base md:text-xl max-w-2xl mx-auto font-semibold leading-relaxed drop-shadow-md"
        >
          STRENGTH YOU SEE, TRUST YOU FEEL.
          
        </motion.p>

      </div>

      {/* 🔹 MINIMALIST BOTTOM ACCENT */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/60" />
        <span className="text-[9px] text-white/60 uppercase tracking-[0.5em] font-bold">Scroll</span>
      </div>

    </section>
  );
}