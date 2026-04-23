"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 bg-[#0D2B45] overflow-hidden">
      {/* Decorative Background Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#F5A623] to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#F5A623] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-[#F5A623] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">
              Precision Surface Engineering
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.8] uppercase tracking-tighter">
              Defining <br />
              <span className="text-[#F5A623]">Durability</span> <br />
              In Every Layer
            </h1>
          </motion.div>
          
          {/* Subtext */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xs border-l border-[#F5A623]/30 pl-8 pb-2"
          >
            <p className="text-white/60 text-sm md:text-base font-bold leading-relaxed">
              Specialized waterproofing, epoxy, and industrial protective coatings nationwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}