"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, ShieldCheck, Cpu, Zap, Activity, Crosshair, Award } from "lucide-react";

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
    title: "Certified Quality",
    desc: "Adherence to international safety and quality standards for every application.",
    icon: <Award className="w-5 h-5" />,
    id: "04"
  },
  {
    title: "Reliable Service",
    desc: "On-time project delivery with consistent quality and client satisfaction.",
    icon: <Zap className="w-5 h-5" />,
    id: "05"
  },
];

export default function WhyChoose() {
  const LOGO_GOLD = "#D98F07";
  const LOGO_NAVY = "#002B49"; 

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative min-h-screen py-20 bg-[#F4F7FA] overflow-hidden flex items-center selection:bg-[#D98F07] selection:text-white">
      
      {/* 🌌 DYNAMIC BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0">
        {/* Improved Image Visibility Layer */}
        <div 
          className="absolute inset-0 opacity-55 grayscale-[10%] contrast-[1.1] mix-blend-multiply"
          style={{ 
            backgroundImage: "url('/images/whypro/whychoose.png')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // Mask ensures the image is visible but doesn't clash with the big headline
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 60%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 60%)'
          }}
        />
        
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-[#D98F07]/10 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-20 left-[-5%] w-[400px] h-[400px] bg-[#002B49]/10 rounded-full blur-[100px]"
        />
      </div>

      {/* 📟 REFINED HUD GRID */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: `radial-gradient(${LOGO_GOLD} 1.5px, transparent 1.5px)`, 
          backgroundSize: '40px 40px' 
        }} />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* 🔷 LEFT SIDE */}
          <div className="lg:w-[38%] flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-sm border-l-4 border-[#D98F07] shadow-sm mb-8">
                <Activity size={14} className="text-[#D98F07] animate-pulse" />
                <span className="text-[#002B49] text-[10px] font-black uppercase tracking-[0.4em]">Strategic Advantage</span>
              </div>
              
              <h2 className="text-5xl md:text-[75px] font-black text-[#002B49] leading-[0.85] uppercase tracking-tighter mb-8">
                <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${LOGO_NAVY}` }}>WHY</span> <br /> 
                CHOOSE <br />
                <span className="text-[#D98F07]">PRO COATINGS</span>
              </h2>
              
              <div className="relative p-6 bg-white/80 backdrop-blur-md border border-white shadow-xl overflow-hidden mb-10">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D98F07]" />
                <p className="relative z-10 text-[#002B49] text-base font-bold leading-relaxed">
                  Engineered excellence in structural defense. We deliver high-performance coating solutions backed by precision technology and elite expertise.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-[#002B49] text-4xl font-black tracking-tighter italic">100%</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[2px] w-4 bg-[#D98F07]" />
                    <p className="text-[8px] font-black text-[#002B49]/60 uppercase tracking-widest">Consistency</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[#002B49] text-4xl font-black tracking-tighter italic">24 / 7</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[2px] w-4 bg-[#D98F07]" />
                    <p className="text-[8px] font-black text-[#002B49]/60 uppercase tracking-widest">Global Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 🧩 RIGHT SIDE */}
          <div className="lg:w-[62%] grid gap-4 w-full">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 60 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div 
                  className="relative p-[1px] bg-gradient-to-r from-[#002B49]/20 to-transparent group-hover:from-[#D98F07] transition-all duration-500 shadow-lg"
                  style={{ clipPath: "polygon(0% 0%, 97% 0%, 100% 50%, 97% 100%, 0% 100%)" }}
                >
                  <div 
                    className="relative flex flex-col md:flex-row items-center gap-6 bg-white/95 p-5 md:pl-10 md:pr-14 group-hover:bg-[#002B49] transition-all duration-500"
                    style={{ clipPath: "polygon(0% 0%, 97% 0%, 100% 50%, 97% 100%, 0% 100%)" }}
                  >
                    
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 flex items-center justify-center bg-[#F4F7FA] text-[#002B49] group-hover:bg-[#D98F07] group-hover:text-white transition-all duration-500 relative">
                        <div className="absolute inset-0 bg-white/20 h-[1.5px] top-0 animate-[scan_2s_linear_infinite] group-hover:bg-[#002B49]/40" />
                        <div className="relative z-10 scale-110">
                            {item.icon}
                        </div>
                      </div>
                      <Crosshair className="absolute -top-1 -left-1 w-3 h-3 text-[#D98F07] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="flex-grow text-center md:text-left">
                      <div className="flex items-center gap-3 justify-center md:justify-start mb-1">
                        <span className="font-mono text-[9px] text-[#D98F07]">[{item.id}]</span>
                        <h3 className="text-xl font-black text-[#002B49] uppercase tracking-tight group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[#002B49]/80 text-xs font-bold leading-snug max-w-xl group-hover:text-white/70 transition-colors">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </div>

                <div className="absolute -bottom-3 left-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[7px] font-black uppercase text-[#D98F07] tracking-[0.4em]">Protocol_Active</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0% }
          100% { top: 100% }
        }
      `}</style>
    </section>
  );
}