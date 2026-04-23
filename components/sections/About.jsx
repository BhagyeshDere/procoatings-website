"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const serviceImages = [
  "/images/hero/bg1.png",
  "/images/hero/bg2.png",
  "/images/hero/bg3.png",
  "/images/hero/bg1.png", 
];

export default function ProAboutSection() {
  const containerRef = useRef(null);

  // 1. SCROLL PERFORMANCE HOOKS
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  // 2. REFINED TRANSFORMS
  const x1 = useTransform(smoothProgress, [0.1, 0.6], [0, -240]);
  const y1 = useTransform(smoothProgress, [0.1, 0.6], [0, -240]);

  const x2 = useTransform(smoothProgress, [0.1, 0.6], [0, -160]);
  const y2 = useTransform(smoothProgress, [0.1, 0.6], [0, -160]);

  const x3 = useTransform(smoothProgress, [0.1, 0.6], [0, -80]);
  const y3 = useTransform(smoothProgress, [0.1, 0.6], [0, -80]);

  const x4 = useTransform(smoothProgress, [0.1, 0.6], [0, 0]);
  const y4 = useTransform(smoothProgress, [0.1, 0.6], [0, 0]);

  const transforms = [
    { x: x1, y: y1 },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
    { x: x4, y: y4 }
  ];

  return (
    <section 
      ref={containerRef} 
      // Reduced py-24 lg:py-44 to py-12 lg:py-20 to remove extra top/bottom space
      className="relative w-full py-12 lg:py-20 bg-[#F8F9FA] overflow-hidden text-[#0F3250]"
    >
      {/* 🧩 Background Branding Watermark */}
      <div className="absolute top-6 left-10 opacity-[0.02] pointer-events-none hidden lg:block">
        <h2 className="text-[12rem] font-black leading-none select-none uppercase tracking-tighter">Pro</h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          
          {/* 🔷 LEFT CONTENT */}
          <div className="w-full lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#EAA33F] px-4 py-1 mb-6">
                <span className="text-[#0F3250] text-[10px] font-black uppercase tracking-[0.2em]">Industry Standards</span>
              </div>

              <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-6">
                STRENGTH YOU <span className="text-[#EAA33F]">SEE</span>,<br />
                TRUST YOU FEEL.
              </h2>

              <div className="space-y-5 max-w-lg mb-8">
                <p className="text-lg font-bold leading-tight text-slate-800">
                  Pro Coatings delivers specialized waterproofing, epoxy, and industrial protective coatings across diverse nationwide sectors.
                </p>
                <p className="text-sm leading-relaxed text-slate-500 font-medium">
                  Backed by highly qualified professionals, we combine advanced technology to ensure environment-friendly, long-lasting, and energy-efficient solutions.
                </p>
              </div>

              <button className="group flex items-center gap-5 text-[#0F3250] font-black uppercase tracking-[0.25em] text-[10px]">
                <span className="border-b-2 border-[#EAA33F] pb-1">Discover Our Process</span>
                <div className="w-10 h-10 rounded-full bg-[#0F3250] flex items-center justify-center text-white group-hover:bg-[#EAA33F] group-hover:text-[#0F3250] transition-all duration-500 shadow-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </motion.div>
          </div>

          {/* 🔷 RIGHT VISUAL */}
          {/* Tightened h-[500px] to h-[400px] to reduce vertical container footprint */}
          <div className="w-full lg:w-[50%] h-[350px] md:h-[480px] relative flex items-center justify-center lg:justify-end lg:pr-24">
            <div className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px]">
              {serviceImages.map((img, index) => (
                <motion.div
                  key={index}
                  style={{
                    x: transforms[index].x,
                    y: transforms[index].y,
                    zIndex: index + 10,
                  }}
                  className="absolute inset-0 aspect-square shadow-[15px_25px_50px_-10px_rgba(15,50,80,0.3)] overflow-hidden rounded-sm bg-slate-100"
                >
                  <img
                    src={img}
                    alt={`Industrial Phase ${index + 1}`}
                    className="w-full h-full object-cover aspect-square"
                  />
                  
                  <div className="absolute top-3 right-3 bg-[#EAA33F] px-2 py-1 text-[9px] font-black text-[#0F3250] uppercase tracking-tighter">
                    0{index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}