"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Car, FlaskConical, Utensils, Building2, 
  Globe, Hospital, Warehouse, Microchip,
  ShieldCheck, Cpu, Zap
} from "lucide-react";

const industries = [
  { name: "Automotive", icon: <Car />, code: "IND-AUTO-4.0" },
  { name: "Pharma", icon: <FlaskConical />, code: "IND-PHRM-7.2" },
  { name: "Food & Dairy", icon: <Utensils />, code: "IND-FOOD-1.5" },
  { name: "Hospitality", icon: <Building2 />, code: "IND-HOSP-3.9" },
  { name: "Aviation", icon: <Globe />, code: "IND-AVIA-8.1" },
  { name: "Healthcare", icon: <Hospital />, code: "IND-MED-2.4" },
  { name: "Warehousing", icon: <Warehouse />, code: "IND-LOGI-5.0" },
  { name: "Electronics", icon: <Microchip />, code: "IND-ELEC-9.3" },
];

export default function AdvancedIndustrySlider() {
  const LOGO_GOLD = "#D98F07";
  const LOGO_NAVY = "#002B49";

  const duplicatedIndustries = [...industries, ...industries];

  return (
    <section className="relative py-24 bg-[#F4F7FA] overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: `radial-gradient(${LOGO_NAVY} 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-[2px] bg-[#D98F07]" />
              <span className="text-[#D98F07] text-xs font-black uppercase tracking-[0.4em]">
                Sector Stream
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#002B49] leading-[0.9]">
              INDUSTRIAL <br /> <span className="text-[#D98F07] italic">ECOSYSTEM</span>
            </h2>
          </div>
          
        </div>
      </div>

      <div className="relative flex overflow-hidden py-10 bg-white/40 border-y border-[#002B49]/5 backdrop-blur-sm">
        <motion.div 
          className="flex gap-6 whitespace-nowrap px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedIndustries.map((industry, index) => (
            <div 
              key={index}
              className="relative min-w-[280px] md:min-w-[340px] group cursor-pointer"
            >
              <div className="flex items-center gap-5 p-5 bg-[#002B49] rounded-2xl border border-white/10 group-hover:border-[#D98F07]/50 transition-all duration-500 shadow-2xl overflow-hidden">
                
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D98F07]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#D98F07] transition-all duration-500">
                  <div className="text-white group-hover:text-[#002B49] transition-colors duration-500 scale-110">
                    {/* FIXED: Removed TypeScript casting for JS compatibility */}
                    {React.cloneElement(industry.icon, { size: 28, strokeWidth: 1.5 })}
                  </div>
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#D98F07] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex flex-col">
                  <span className="text-[#D98F07] font-mono text-[9px] uppercase tracking-[0.2em] mb-1">
                    {industry.code}
                  </span>
                  <span className="text-white text-lg md:text-xl font-black uppercase tracking-tight group-hover:tracking-widest transition-all">
                    {industry.name}
                  </span>
                  <div className="flex items-center gap-1 mt-2 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-[#D98F07] animate-pulse" />
                    <span className="text-[8px] text-white/70 uppercase font-bold">Encrypted Surface</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 bg-[#D98F07] w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F4F7FA] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F4F7FA] to-transparent z-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-wrap justify-center md:justify-between gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        
      </div>
    </section>
  );
}