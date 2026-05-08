"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Capgemini", img: "/images/clients/capgemini.png" },
  { name: "Dynalec Controls Pvt. Ltd.", img: "/images/clients/dynalec.jpg" },
  { name: "Pennant Engineering Pvt. Ltd.", img: "/images/clients/pennant.png" },
  { name: "ABsource Biologics Pvt. Ltd.", img: "/images/clients/absource.png" },
  { name: "Kaka Halwai Sweets", img: "/images/clients/kaka.png" },
  //{ name: "Devatha Agro Farms LLP", img: "/images/clients/devatha.jpg" },
  { name: "ANCI Fitouts India PVT.LTD", img: "/images/clients/anci.png" },
 // { name: "Benfield Fodder", img: "/images/clients/benfield.jpg" },
  { name: "Fluidos Technologies LLP", img: "/images/clients/fludos.png" },
  { name: "Emuge Franken Technologies LLP", img: "/images/clients/EF.png" },
  { name: "GPIPL", img: "/images/clients/gpipl.png" },
  { name: "Concord Ecobuild", img: "/images/clients/concord.png" },
  //{ name: "Tecinpet Solutions PVT.LTD", img: "/images/clients/tecinpet.jpg" },
  { name: "K Krushnaa Infra", img: "/images/clients/kkrushna.jpg" },
  { name: "Uniteq", img: "/images/clients/uniteq.jpg" },
  { name: "Web Werk", img: "/images/clients/webwerk.png" },
];

export default function Clients() {
  const BRAND_ORANGE = "#F5A623";
  const BRAND_NAVY = "#0D2B45";

  return (
    <section className="relative py-10 md:py-16 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🧩 Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(${BRAND_NAVY} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_NAVY} 1px, transparent 1px)`, 
          backgroundSize: '45px 45px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 🔷 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-slate-300" />
            <p className="font-black text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#F5A623]">
              Global Partners
            </p>
            <div className="h-[1px] w-12 bg-slate-300" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]" style={{ color: BRAND_NAVY }}>
            Our Growing <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${BRAND_NAVY}` }}>Network</span>
          </h2>
        </motion.div>

        {/* 🔥 MARQUEE SLIDER */}
        <div className="relative">
          {/* Gradient Overlays for Smooth Fading */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex flex-nowrap gap-4 md:gap-8"
              animate={{ x: [0, -3840] }} 
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="relative min-w-[180px] md:min-w-[280px] h-24 md:h-32 bg-white border border-slate-200/60 flex flex-col items-center justify-center p-4 transition-all duration-500 hover:border-[#F5A623]/40 group/card overflow-hidden"
                >
                  {/* Decorative Industrial Corners */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-slate-300 group-hover/card:border-[#F5A623]" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-slate-300 group-hover/card:border-[#F5A623]" />

                  {/* 🖼️ ORIGINAL COLOR LOGOS */}
                  <div className="relative w-full h-full flex items-center justify-center transition-all duration-500 group-hover/card:scale-105">
                      <img 
                        src={client.img} 
                        alt={client.name}
                        // Optimized scaling for uniform visual weight across various logo aspect ratios
                        className="max-w-[90%] max-h-[75%] object-contain transition-all duration-500"
                      />
                  </div>

                  {/* Hover Accent Line */}
                  <div 
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover/card:w-full transition-all duration-700 ease-in-out"
                    style={{ backgroundColor: BRAND_ORANGE }}
                  />
                  
                  {/* Decorative Background Text */}
                  <span className="absolute -bottom-1 -right-1 text-2xl font-black text-slate-50 opacity-0 group-hover/card:opacity-40 transition-opacity pointer-events-none uppercase select-none">
                    LEADER
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 📊 STATUS BAR */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Infrastructure Verified</span>
          </div>
          <div className="h-[1px] flex-grow mx-8 bg-slate-200 hidden md:block" />
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
            Precision • Integrity • Solutions
          </p>
        </div>

      </div>
    </section>
  );
}