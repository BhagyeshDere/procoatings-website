"use client";

import React from "react";
import { motion } from "framer-motion";

const coatLayers = [
  {
    id: "01",
    title: "Surface Prep",
    desc: "Aggressive grinding to eliminate contaminants and create proper profile for maximum adhesion.",
  },
  {
    id: "02",
    title: "Moisture & Crack Control",
    desc: "Addressing structural flaws and vapor barriers before any resin is applied.",
  },
  {
    id: "03",
    title: "Primer & Base Layers",
    desc: "Industrial-grade bonding layers engineered for deep adhesion and color stability.",
  },
  {
    id: "04",
    title: "Metallic Artistry Layer",
    desc: "Hand-blended pigments that create depth, movement, and the signature light shift.",
  },
  {
    id: "05",
    title: "Premium Top Coat",
    desc: "Commercial-grade, scratch-resistant, and UV-stable finish for permanent protection.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative h-screen min-h-[750px] bg-[#F8F9FA] text-[#001F3F] overflow-hidden flex items-center">
      
      {/* 🧩 Light Technical Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#D98F07 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 w-full h-full relative z-10 flex flex-col lg:flex-row items-stretch">
        
        {/* 📍 LEFT SIDE: PINNED IMAGE */}
        <div className="w-full lg:w-[45%] h-full flex flex-col justify-center items-center lg:items-start py-10 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-lg"
          >
            <img 
              src="/images/about/5-coat-diagram.png" 
              alt="5-Coat Process Diagram" 
              className="w-full h-auto drop-shadow-2xl"
            />
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-[#D98F07]/5 blur-[100px] rounded-full pointer-events-none -z-10" />
          </motion.div>
        </div>

        {/* 📜 RIGHT SIDE: HEADING + SCROLLING CARDS */}
        <div className="w-full lg:w-[55%] h-full flex flex-col pt-20 lg:pt-32 pb-10">
          
          {/* HEADING (Fixed above the scrolling cards) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 shrink-0"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] uppercase tracking-tighter text-[#001F3F]">
              A 5-COAT <span className="text-[#D98F07]">PROCESS</span> <br />
              ENGINEERED.
            </h2>
            <div className="w-20 h-1.5 bg-[#D98F07] mt-6" />
          </motion.div>

          {/* INTERNAL SCROLLING CARDS */}
          <div className="relative flex-grow overflow-hidden">
            <div className="h-full overflow-y-auto no-scrollbar space-y-6 pr-4 pb-40">
              {coatLayers.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="group relative bg-white border border-[#001F3F]/5 p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-[#D98F07]/20 transition-all duration-500 rounded-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#D98F07] font-black text-sm tracking-widest uppercase">
                      Phase {layer.id}
                    </span>
                    <div className="h-[1px] flex-grow bg-gray-200" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#001F3F] uppercase tracking-tight mb-3">
                    {layer.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                    {layer.desc}
                  </p>

                  {/* Corner Status indicator */}
                  <div className="absolute top-6 right-6">
                    <div className="w-2 h-2 bg-[#D98F07] rounded-full" />
                  </div>
                </motion.div>
              ))}
              
              {/* Buffer for bottom scroll space */}
              <div className="h-32" />
            </div>

            {/* Fade Overlays (Light Mode) */}
            <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#F8F9FA] to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#F8F9FA] to-transparent pointer-events-none z-20" />
          </div>
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}