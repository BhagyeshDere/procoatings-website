"use client";

import { motion } from "framer-motion";
import { Hammer, Send, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#0F3250]">
      
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
        
        {/* ⚡ UPDATED: Reduced Overlay - Using a radial vignette instead of heavy linear gradients */}
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

        {/* Clean, Massive Heading with slight shadow for legibility */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter uppercase drop-shadow-2xl"
        >
          PRO <span className="text-[#EAA33F]">COATINGS</span>
        </motion.h1>

        {/* Minimalist Subtext - Increased weight slightly for better visibility */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-white text-base md:text-xl max-w-2xl mx-auto font-semibold leading-relaxed drop-shadow-md"
        >
          Engineered for resilience. Designed for longevity. 
          <span className="block md:inline"> The gold standard in high-performance industrial protection.</span>
        </motion.p>

        {/* 🛠️ UPDATED ACTION CENTER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5"
        >
          {/* Primary Action: Request Quote */}
          <button 
            className="group w-full md:w-auto px-10 py-4 bg-[#EAA33F] text-[#0F3250] font-black text-xs tracking-[0.2em] uppercase transition-all hover:scale-105 rounded-full flex items-center justify-center gap-3 shadow-xl"
          >
            Request Quote <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Secondary Action: Our Services */}
          <button 
            className="group w-full md:w-auto px-10 py-4 border border-white/40 bg-black/20 backdrop-blur-md text-white font-black text-xs tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-[#0F3250] rounded-full flex items-center justify-center gap-3"
          >
            Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>

      {/* 🔹 MINIMALIST BOTTOM ACCENT */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/60" />
        <span className="text-[9px] text-white/60 uppercase tracking-[0.5em] font-bold">Scroll</span>
      </div>

    </section>
  );
}