"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Capgemini", img: "/images/clients/capgemini.png" },
  { name: "Dynalec Controls Pvt. Ltd.", img: "/images/clients/dynalec.jpg" },
  { name: "Pennant Engineering Pvt. Ltd.", img: "/images/clients/pennant.png" },
  { name: "ABsource Biologics Pvt. Ltd.", img: "/images/clients/absource.png" },
  { name: "Kaka Halwai Sweets", img: "/images/clients/kaka.png" },
  { name: "ANCI Fitouts India PVT.LTD", img: "/images/clients/anci.png" },
  { name: "Fluidos Technologies LLP", img: "/images/clients/fludos.png" },
  { name: "Emuge Franken Technologies LLP", img: "/images/clients/EF.png" },
  { name: "GPIPL", img: "/images/clients/gpipl.png" },
  { name: "Concord Ecobuild", img: "/images/clients/concord.png" },
  { name: "K Krushnaa Infra", img: "/images/clients/kkrushna.jpg" },
  { name: "Uniteq", img: "/images/clients/uniteq.jpg" },
  { name: "Web Werk", img: "/images/clients/webwerk.png" },
];

export default function Clients() {
  const BRAND_ORANGE = "#F5A623";
  const BRAND_NAVY = "#0D2B45";

  return (
    <section className="relative py-12 md:py-20 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🧩 Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(${BRAND_NAVY} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_NAVY} 1px, transparent 1px)`, 
          backgroundSize: '45px 45px' 
        }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* 🔷 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-slate-300" />
            <p className="font-black text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#F5A623]">
              Global Partners
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-slate-300" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]" style={{ color: BRAND_NAVY }}>
            Our Growing <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${BRAND_NAVY}` }}>Network</span>
          </h2>
        </motion.div>

        {/* 🔥 MARQUEE SLIDER */}
        <div className="relative">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div 
              className="flex flex-nowrap gap-4 md:gap-6 lg:gap-8"
              animate={{ x: [0, -2500] }} 
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Double the list to create infinite loop effect */}
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="relative min-w-[160px] sm:min-w-[220px] md:min-w-[280px] h-24 md:h-36 bg-white border border-slate-200/60 flex flex-col items-center justify-center p-6 md:p-8 transition-all duration-500 hover:border-[#F5A623]/40 group/card overflow-hidden"
                >
                  {/* Industrial Corner Details */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-slate-300 group-hover/card:border-[#F5A623] transition-colors" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-slate-300 group-hover/card:border-[#F5A623] transition-colors" />

                  {/* 🖼️ IMPROVED LOGO SCALING */}
                  <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 group-hover/card:scale-110">
                    <img 
                      src={client.img} 
                      alt={client.name}
                      // Changed to w-full/h-full with object-contain to maximize size within the padding
                      className="w-full h-full object-contain brightness-[0.95] group-hover/card:brightness-100 transition-all duration-500"
                    />
                  </div>

                  {/* Hover Bottom Border */}
                  <div 
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover/card:w-full transition-all duration-700 ease-in-out"
                    style={{ backgroundColor: BRAND_ORANGE }}
                  />
                  
                  {/* Subtle Background Text on Hover */}
                  <span className="absolute -bottom-1 -right-1 text-2xl font-black text-slate-100 opacity-0 group-hover/card:opacity-40 transition-opacity pointer-events-none uppercase select-none">
                    PARTNER
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
            Precision • Integrity • Excellence
          </p>
        </div>

      </div>
    </section>
  );
}