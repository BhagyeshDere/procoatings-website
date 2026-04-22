"use client";

import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    /* Responsive height with a clean slate background */
    <section className="relative h-[500px] md:h-[700px] w-full flex items-start pt-20 md:pt-32 overflow-hidden bg-slate-50">
      
      {/* 🎥 VIDEO & VISUAL LAYERS */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle, #0F3250 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        {/* Cinematic Gradient Wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/50 to-transparent z-10" />
        
        {/* Bottom Edge Blend */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-20" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white z-20" />
      </div>

      {/* 📡 SCANNING LINE ANIMATION */}
      <motion.div 
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#EAA33F]/30 to-transparent z-30 hidden md:block"
      />

      {/* 🚀 CONTENT WRAPPER - Shifted to the left */}
      <div className="relative z-40 w-full max-w-[1440px] ml-0 mr-auto px-6 md:px-12 lg:px-20 md:-translate-y-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-9 xl:col-span-8">
            {/* Engineering Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-sm mb-8 shadow-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#EAA33F]" />
              <span className="text-white text-[9px] font-black uppercase tracking-[0.4em]">
                Standardizing Industrial Resilience
              </span>
            </motion.div>

            {/* Bracked Heading */}
            <div className="relative inline-block">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-[#EAA33F]" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-white/40" />

              <motion.h1 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-6xl md:text-[110px] font-black text-white leading-[0.85] tracking-tighter uppercase"
              >
                PRO<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAA33F] to-[#f5c684]">COATINGS</span>
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center gap-6"
            >
              <p className="text-lg md:text-2xl font-bold text-white/90 uppercase tracking-widest italic">
                Strength you see, <span className="text-[#EAA33F] not-italic">Trust you feel.</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-slate-100/80 text-sm md:text-lg max-w-xl leading-relaxed font-medium"
            >
              Delivering high-performance industrial solutions designed to extend the life of critical infrastructure with zero-permeability protection.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <button 
                className="group relative px-10 py-5 bg-[#EAA33F] text-[#0F3250] font-black text-[10px] tracking-widest uppercase transition-all hover:bg-white flex items-center gap-3 rounded-sm shadow-xl"
              >
                Get a Consultation <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-5 border border-white/30 backdrop-blur-sm text-white font-black text-[10px] tracking-widest uppercase hover:bg-white hover:text-[#0F3250] transition-all flex items-center gap-3 rounded-sm">
                <ShieldCheck className="w-4 h-4 text-[#EAA33F]" />
                Technical Solutions
              </button>
            </motion.div>
          </div>

          {/* 🔷 RIGHT DECORATIVE COLUMN - Stays aligned to content flow */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-4 mt-12">
             <div className="flex flex-col gap-10 border-l border-white/10 pl-10">
                <div className="relative">
                  <span className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#EAA33F] rotate-45" />
                  <p className="text-[10px] font-black text-[#EAA33F] mb-1 tracking-widest">CERTIFIED</p>
                  <p className="text-white font-bold text-xl uppercase tracking-tighter">ISO 9001:2015</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rotate-45" />
                  <p className="text-[10px] font-black text-[#EAA33F] mb-1 tracking-widest">NETWORK</p>
                  <p className="text-white font-bold text-xl uppercase tracking-tighter">PAN INDIA SERVICE</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rotate-45" />
                  <p className="text-[10px] font-black text-[#EAA33F] mb-1 tracking-widest">DURABILITY</p>
                  <p className="text-white font-bold text-xl uppercase tracking-tighter">100% RELIABILITY</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}