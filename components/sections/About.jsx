"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const serviceImages = [
  "/images/about/epoxy.png",
  "/images/about/floor.png",
  "/images/hero/bg3.png",
  "/images/flooring/esd.png", 
];

export default function ProAboutSection() {
  const containerRef = useRef(null);

  // 1. SCROLL PERFORMANCE HOOKS
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. REFINED TRANSFORMS 
  // Images 1, 2, and 3 move left (x) and up (y)
  // Horizontal movement (x) increased for "little more left" effect on top layers
  const x1 = useTransform(smoothProgress, [0, 0.35], [0, -260]); 
  const y1 = useTransform(smoothProgress, [0, 0.35], [0, -220]);

  const x2 = useTransform(smoothProgress, [0, 0.35], [0, -180]);
  const y2 = useTransform(smoothProgress, [0, 0.35], [0, -145]);

  const x3 = useTransform(smoothProgress, [0, 0.35], [0, -100]);
  const y3 = useTransform(smoothProgress, [0, 0.35], [0, -70]);

  // Image 4 stays exactly at the same position (0 movement)
  const x4 = useTransform(smoothProgress, [0, 0.35], [0, 0]);
  const y4 = useTransform(smoothProgress, [0, 0.35], [0, 0]);

  const transforms = [
    { x: x1, y: y1 },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
    { x: x4, y: y4 }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative w-full pt-8 pb-16 lg:pt-10 lg:pb-24 bg-[#F8F9FA] overflow-hidden text-[#0F3250]"
    >
      {/* 🧩 Background Branding Watermark */}
      <div className="absolute top-2 left-10 opacity-[0.02] pointer-events-none hidden lg:block">
        <h2 className="text-[12rem] font-black leading-none select-none uppercase tracking-tighter">Pro</h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
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
          <div className="w-full lg:w-[50%] h-[450px] md:h-[600px] relative flex items-center justify-center lg:justify-end lg:pr-24">
            <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] translate-x-10 translate-y-16 mt-12 md:mt-24">
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