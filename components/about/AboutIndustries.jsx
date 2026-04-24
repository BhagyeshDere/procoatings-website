"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Car, FlaskConical, Utensils, Building2, 
  Globe, Hospital, Warehouse, Microchip 
} from "lucide-react";

const industries = [
  { name: "Automotive", icon: <Car strokeWidth={1.5} />, size: "lg", color: "from-[#002B49] to-[#003d66]" },
  { name: "Pharma & Biotech", icon: <FlaskConical strokeWidth={1.5} />, size: "sm", color: "from-[#002B49] to-[#0a3556]" },
  { name: "Chemical Plants", icon: <FlaskConical strokeWidth={1.5} />, size: "sm", color: "from-[#002B49] to-[#0a3556]" },
  { name: "Food & Dairy", icon: <Utensils strokeWidth={1.5} />, size: "md", color: "from-[#002B49] to-[#003d66]" },
  { name: "Hospitality", icon: <Building2 strokeWidth={1.5} />, size: "md", color: "from-[#002B49] to-[#003d66]" },
  { name: "Aviation", icon: <Globe strokeWidth={1.5} />, size: "lg", color: "from-[#002B49] to-[#003d66]" },
  { name: "Healthcare", icon: <Hospital strokeWidth={1.5} />, size: "sm", color: "from-[#002B49] to-[#0a3556]" },
  { name: "Warehousing", icon: <Warehouse strokeWidth={1.5} />, size: "md", color: "from-[#002B49] to-[#003d66]" },
];

export default function AboutIndustries() {
  const LOGO_GOLD = "#D98F07";
  const LOGO_NAVY = "#002B49";

  return (
    <section className="relative py-24 lg:py-32 bg-[#F4F7FA] overflow-hidden">
      
      {/* 🧩 Blueprint Grid Detail */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: `linear-gradient(to right, ${LOGO_NAVY} 1px, transparent 1px), linear-gradient(to bottom, ${LOGO_NAVY} 1px, transparent 1px)`, 
          backgroundSize: '80px 80px' 
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-[3px] bg-[#D98F07]" />
              <span className="text-[#D98F07] text-xs font-black uppercase tracking-[0.4em]">
                Sector Matrix
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#002B49] leading-[0.9]">
              INDUSTRIES <br /> WE <span className="text-[#D98F07] italic">SECURE</span>
            </h2>
          </div>
          <p className="text-[#002B49]/70 font-bold max-w-xs text-sm md:text-base leading-relaxed border-l-4 border-[#D98F07] pl-6">
            Engineered surfaces providing high-performance resistance and compliance for mission-critical industrial sectors.
          </p>
        </div>

        {/* Dynamic Colorful Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`
                group relative overflow-hidden p-6 flex flex-col justify-between 
                bg-gradient-to-br ${industry.color}
                transition-all duration-500 ease-in-out hover:-translate-y-2
                border border-white/10 hover:border-[#D98F07]/50 shadow-xl
                ${industry.size === 'lg' ? 'sm:col-span-2 md:col-span-2 md:row-span-1' : ''}
              `}
            >
              {/* Animated Background Highlight */}
              <div className="absolute inset-0 bg-[#D98F07] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              {/* Corner HUD Detail */}
              <div className="absolute top-0 right-0 p-3 opacity-30 group-hover:opacity-100 group-hover:text-[#D98F07] transition-all">
                <div className="w-4 h-4 border-t border-r border-current" />
              </div>

              {/* Icon Container */}
              <div className="relative w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:bg-[#D98F07] group-hover:rotate-[15deg] transition-all duration-500 shadow-inner" />
                <div className="relative z-10 text-white group-hover:text-[#002B49] transition-colors duration-500">
                  {/* FIXED: Removed TypeScript casting for JavaScript compatibility */}
                  {React.cloneElement(industry.icon, { size: 28 })}
                </div>
              </div>

              {/* Label & Metadata */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D98F07] animate-pulse" />
                  <div className="text-[10px] font-black text-[#D98F07] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Active Node
                  </div>
                </div>
                <span className="font-black uppercase text-sm md:text-base tracking-tighter text-white group-hover:tracking-widest transition-all duration-500">
                  {industry.name}
                </span>
              </div>

              {/* Technical Scanline Effect */}
              <div className="absolute inset-0 w-full h-[1px] bg-white/20 top-0 group-hover:top-full transition-all duration-1000 ease-linear pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Technical Footer Detail */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#002B49]/20 to-transparent" />
          <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-[#002B49]/10 bg-white shadow-sm">
            <Microchip size={18} className="text-[#D98F07]" />
            <span className="text-[10px] font-black text-[#002B49] uppercase tracking-[0.2em]">System Architecture v4.0</span>
          </div>
          <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#002B49]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}