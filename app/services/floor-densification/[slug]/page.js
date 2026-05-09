"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  Award, 
  Zap, 
  CheckCircle2 
} from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedIdx, setSelectedIdx] = useState(0);

  const service = Object.values(servicesData)
    .flatMap(category => category.subServices)
    .find((s) => s.slug === params.slug);

  if (!service) return null;

  const advantageIcons = [<ShieldCheck />, <Award />, <Zap />, <CheckCircle2 />];
  const galleryImages = service.gallery?.length > 0 ? service.gallery : [service.image];

  return (
    <main className="min-h-screen bg-[#FBFBFB] text-[#0D2B45] selection:bg-[#EAA33F] selection:text-white pb-24">
      
      {/* 1. NAVIGATION */}
      <nav className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-[#0D2B45]/50 hover:text-[#0D2B45] transition-all"
        >
          <ArrowLeft size={16} />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Service Directory</span>
        </button>
      </nav>

      {/* 2. HEADER & FULL-WIDTH DESCRIPTION */}
      <header className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-[#EAA33F]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EAA33F]">Project Specification</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[1.1] rounded-none">
            {service.title}
          </h1>
          
          {/* Removed max-w-4xl for full-width description */}
          <div className="w-full">
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
              {service.description}
            </p>
          </div>
        </motion.div>
      </header>

      {/* 3. HORIZONTAL IMAGE GALLERY LAYOUT (NO OVERLAY ICONS) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          
          {/* MAIN HORIZONTAL IMAGE (COL-9) */}
          <motion.div 
            className="lg:col-span-9 relative aspect-video rounded-none overflow-hidden bg-white shadow-2xl border border-white"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={selectedIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={galleryImages[selectedIdx]} 
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* PAGER INDICATOR */}
            <div className="absolute top-6 left-6 z-10">
              <span className="px-4 py-2 bg-black/40 backdrop-blur-sm rounded-none text-[10px] font-mono text-white font-bold tracking-widest">
                VIEW_{selectedIdx + 1} / {galleryImages.length}
              </span>
            </div>
          </motion.div>

          {/* SIDE SUB-IMAGES (COL-3) */}
          <div className="lg:col-span-3 flex lg:flex-col gap-4 md:gap-6 overflow-x-auto lg:overflow-y-auto scrollbar-hide py-1 px-1">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`relative shrink-0 w-40 md:w-48 lg:w-full aspect-video rounded-none overflow-hidden border transition-all duration-300 ${
                  selectedIdx === idx 
                    ? "border-[#EAA33F] border-2 shadow-lg" 
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img src={img} className="w-full h-full object-cover rounded-none" alt={`Gallery ${idx}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ADVANTAGES SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 md:mb-32">
        <div className="mb-12">
           <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 border-b border-slate-100 pb-4">Key Advantages</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {service.advantages.map((advantage, idx) => (
            <div 
              key={idx}
              className="group flex items-center gap-6 p-8 bg-white rounded-none border border-slate-100 hover:border-[#0D2B45] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-none bg-slate-50 text-[#0D2B45] flex items-center justify-center shrink-0 group-hover:bg-[#0D2B45] group-hover:text-white transition-all duration-300">
                {React.cloneElement(advantageIcons[idx % 4], { size: 22 })}
              </div>
              <p className="text-sm md:text-base font-bold uppercase tracking-tight leading-tight">
                {advantage}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ROUNDED ENQUIRE NOW BUTTON */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="inline-block w-full md:w-auto"
        >
          <a 
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="flex items-center justify-center gap-4 bg-[#0D2B45] text-white px-12 py-7 rounded-full font-black uppercase text-xs tracking-[0.3em] shadow-xl hover:bg-[#EAA33F] transition-all duration-300"
          >
            Enquire Now
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}