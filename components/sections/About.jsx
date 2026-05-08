"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

const serviceImages = [
  "/images/services/dielectric.jpeg",
  "/images/services/corrosion.jpeg", 
  "/images/about/epoxy.png",
  "/images/about/floor.png",
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
  const x1 = useTransform(smoothProgress, [0, 0.35], [0, -260]); 
  const y1 = useTransform(smoothProgress, [0, 0.35], [0, -220]);

  const x2 = useTransform(smoothProgress, [0, 0.35], [0, -180]);
  const y2 = useTransform(smoothProgress, [0, 0.35], [0, -145]);

  const x3 = useTransform(smoothProgress, [0, 0.35], [0, -100]);
  const y3 = useTransform(smoothProgress, [0, 0.35], [0, -70]);

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
          <div className="w-full lg:w-[50%]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#0F3250] px-4 py-1 mb-6">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Industry Standards</span>
              </div>

              {/* Corrected Heading Formatting */}
              <h2 className="text-4xl md:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tighter uppercase mb-8">
                The Gold Standard in <br className="hidden md:block" />
                <span className="text-[#EAA33F]">High-Performance</span> <br className="hidden md:block" />
                Industrial Protection.
              </h2>

              <div className="space-y-6 max-w-xl mb-8">
                <p className="text-lg md:text-xl font-bold leading-tight text-slate-800">
                  <span className="text-[#0F3250]">PRO</span> <span className="text-[#EAA33F]">COATINGS</span> delivers specialized waterproofing, epoxy, and industrial protective systems engineered for resilience.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-slate-500 font-medium italic">
                  "Backed by highly qualified professionals, we combine advanced technology to ensure environment-friendly, long-lasting, and energy-efficient solutions across nationwide sectors."
                </p>
              </div>
            </motion.div>
          </div>

          {/* 🔷 RIGHT VISUAL */}
          <div className="w-full lg:w-[45%] h-[450px] md:h-[600px] relative flex items-center justify-center lg:justify-end lg:pr-12">
            <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px] translate-x-10 translate-y-8 md:translate-y-16">
              {serviceImages.map((img, index) => (
                <motion.div
                  key={index}
                  style={{
                    x: transforms[index].x,
                    y: transforms[index].y,
                    zIndex: index + 10,
                  }}
                  className="absolute inset-0 aspect-square shadow-[20px_30px_60px_-15px_rgba(15,50,80,0.4)] overflow-hidden rounded-sm bg-slate-100 border border-white/20 cursor-pointer"
                >
                  <Link href="/gallery" className="block w-full h-full">
                    <img
                      src={img}
                      alt={`Industrial Phase ${index + 1}`}
                      className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}