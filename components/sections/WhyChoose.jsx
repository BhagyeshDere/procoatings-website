"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Cpu, Zap, ChevronRight, Activity } from "lucide-react";

const features = [
  {
    title: "Expert Team",
    desc: "Highly skilled professionals with industry experience in coatings and waterproofing.",
    icon: <Users className="w-5 h-5" />,
    id: "01"
  },
  {
    title: "Premium Materials",
    desc: "We use high-grade materials ensuring durability and long-term protection.",
    icon: <ShieldCheck className="w-5 h-5" />,
    id: "02"
  },
  {
    title: "Modern Technology",
    desc: "Advanced tools and techniques for precision and efficiency in every project.",
    icon: <Cpu className="w-5 h-5" />,
    id: "03"
  },
  {
    title: "Reliable Service",
    desc: "On-time project delivery with consistent quality and client satisfaction.",
    icon: <Zap className="w-5 h-5" />,
    id: "04"
  },
];

export default function WhyChoose() {
  // Colors derived directly from the Procoatings Logo
  const LOGO_GOLD = "#D98F07";
  const LOGO_NAVY = "#002B49"; 

  return (
    <section className="relative min-h-screen py-24 bg-[#F4F7FA] overflow-hidden flex items-center">
      
      {/* 🌌 LIGHTER BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/flooring/esd.png')" }}
        />
        {/* Navy to Light Gray Gradient (Removing the pitch black) */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#002B49]/90 via-[#F4F7FA]/80 to-[#F4F7FA] z-10`} />
      </div>

      {/* 📟 REFINED HUD GRID (Logo Gold) */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: `linear-gradient(to right, ${LOGO_GOLD} 1px, transparent 1px), linear-gradient(to bottom, ${LOGO_GOLD} 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* 🔷 LEFT SIDE: PRO BRAND HEADER */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[1px] bg-[#D98F07]" />
                <span className="text-[#002B49] text-xs font-black uppercase tracking-[0.6em]">System Protocol</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black text-[#002B49] leading-[0.85] uppercase tracking-tighter mb-8">
                PRO <br /> 
                <span className="text-[#D98F07]">COATINGS</span>
              </h2>
              
              <div className="relative p-8 border-l-4 border-[#D98F07] bg-[#002B49]/5 backdrop-blur-md">
                <p className="text-[#002B49]/80 text-lg font-bold leading-relaxed">
                  Delivering excellence through innovation, quality materials, and a commitment to long-lasting results.
                </p>
              </div>

              <div className="mt-12 flex gap-12">
                <div className="group cursor-default">
                  <p className="text-[#002B49] text-4xl font-black group-hover:text-[#D98F07] transition-colors">100%</p>
                  <p className="text-[10px] font-bold text-[#002B49]/40 uppercase tracking-widest mt-1">Consistency</p>
                </div>
                <div className="w-[1px] h-12 bg-[#002B49]/10" />
                <div className="group cursor-default">
                  <p className="text-[#002B49] text-4xl font-black group-hover:text-[#D98F07] transition-colors">24/7</p>
                  <p className="text-[10px] font-bold text-[#002B49]/40 uppercase tracking-widest mt-1">Monitoring</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 🧩 RIGHT SIDE: GEOMETRIC NODE GRID */}
          <div className="lg:w-2/3 grid gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Asymmetrical Shape Background */}
                <div 
                  className="relative flex flex-col md:flex-row items-center gap-8 p-0.5 transition-all duration-500 bg-[#002B49]/10 group-hover:bg-[#D98F07]/30"
                  style={{ 
                    clipPath: "polygon(0 0, 98% 0, 100% 25%, 100% 100%, 2% 100%, 0 75%)" 
                  }}
                >
                  <div 
                    className="flex flex-col md:flex-row items-center w-full bg-white p-8 md:pr-16 md:pl-12 gap-8 group-hover:bg-[#F9FBFF] transition-all"
                    style={{ 
                      clipPath: "polygon(0 0, 98% 0, 100% 25%, 100% 100%, 2% 100%, 0 75%)" 
                    }}
                  >
                    
                    {/* Industrial Icon Node */}
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 flex items-center justify-center border-2 border-[#002B49]/10 text-[#002B49] rotate-45 group-hover:border-[#D98F07] group-hover:bg-[#D98F07] group-hover:text-white transition-all duration-500 shadow-sm">
                        <div className="-rotate-45">{item.icon}</div>
                      </div>
                      <span className="absolute -top-3 -left-3 text-[10px] font-black text-[#D98F07]">{item.id}</span>
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-2xl font-black text-[#002B49] uppercase tracking-tight mb-2 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#002B49]/60 text-sm font-bold leading-relaxed max-w-xl group-hover:text-[#002B49]/80 transition-colors">
                        {item.desc}
                      </p>
                    </div>

                    {/* Tech Trigger Button */}
                    <div className="shrink-0 flex items-center">
                       <div className="w-12 h-12 rounded-sm bg-[#002B49]/5 border border-[#002B49]/10 flex items-center justify-center group-hover:bg-[#002B49] group-hover:text-white transition-all shadow-inner">
                          <ChevronRight className="w-5 h-5" />
                       </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Tech Path (Bottom Right) */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[#D98F07]/20 group-hover:border-[#D98F07] transition-all" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}