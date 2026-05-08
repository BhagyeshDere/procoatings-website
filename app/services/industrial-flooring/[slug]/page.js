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
  Activity,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const [selectedIdx, setSelectedIdx] = useState(0);

  const service = Object.values(servicesData)
    .flatMap(category => category.subServices)
    .find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-[#0D2B45] font-mono p-6 text-center">
        <h1 className="text-6xl font-black mb-4">404</h1>
        <p className="uppercase tracking-widest text-xs mb-8 opacity-60">
          [ERROR_404]: SERVICE_NOT_FOUND_IN_DATABASE
        </p>
        <button 
          onClick={() => router.push('/gallery')}
          className="bg-[#0D2B45] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#EAA33F] transition-colors"
        >
          Return to Gallery
        </button>
      </div>
    );
  }

  const advantageIcons = [<ShieldCheck />, <Award />, <Zap />, <CheckCircle2 />];

  const galleryImages = service.gallery && service.gallery.length > 0 
    ? service.gallery 
    : [service.image, service.image, service.image];

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#0D2B45]">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 md:py-12 lg:py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        
        {/* LEFT SIDE: Image + Interactive Gallery */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          {/* BACK BUTTON */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-400 hover:text-[#0D2B45] transition-colors group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100 shadow-sm mb-6 self-start"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to Services</span>
          </button>

          {/* MAIN DISPLAY */}
          <div className="relative w-full flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden bg-white/50 rounded-3xl p-4 shadow-inner border border-white">
            <AnimatePresence mode="wait">
              <motion.img 
                key={selectedIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                src={galleryImages[selectedIdx]} 
                alt={service.title} 
                className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              />
            </AnimatePresence>
            
            <div className="absolute bottom-4 left-6 flex items-center gap-3 opacity-30 hidden sm:flex">
               <div className="h-[1px] w-12 bg-[#0D2B45]" />
               <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em]">
                 Asset_Ref: {params.slug?.replace(/-/g, '_').toUpperCase()}
               </span>
            </div>
          </div>

          {/* THUMBNAILS - Added ml-8 on lg screens to move slightly right */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mt-6 ml-0 lg:ml-8 transition-all duration-500">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`relative aspect-square rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white p-1.5 ${
                  selectedIdx === idx 
                    ? "border-[#EAA33F] shadow-md ring-2 ring-[#EAA33F]/20" 
                    : "border-slate-100 hover:border-slate-300"
                }`}
              >
                <img 
                  src={img} 
                  alt={`${service.title} view ${idx + 1}`} 
                  className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
                    selectedIdx === idx ? "opacity-100" : "opacity-50 hover:opacity-100"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: CONTENT MATRIX */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-12">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center w-fit gap-2 bg-[#0D2B45] text-white px-4 py-1.5 rounded-full mb-6 shadow-md"
          >
            <Activity size={12} className="text-[#EAA33F]" />
            <span className="text-[9px] font-black uppercase tracking-widest">High-Performance Grade</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1] text-[#0D2B45] mb-6"
          >
            {service.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm mb-10"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#EAA33F] mb-3">Service Overview</h3>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-bold">
              {service.description}
            </p>
          </motion.div>

          {/* ADVANTAGES GRID */}
          <div className="mb-10">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0D2B45] mb-6 flex items-center gap-2">
              <ChevronRight size={14} className="text-[#EAA33F]" />
              Core Advantages
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.advantages.map((advantage, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 hover:border-[#EAA33F]/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-[#EAA33F] group-hover:bg-[#EAA33F] group-hover:text-white transition-all duration-300 shrink-0">
                    {React.cloneElement(advantageIcons[idx % 4], { size: 18 })}
                  </div>
                  <p className="text-[11px] md:text-xs font-black uppercase tracking-tight text-[#0D2B45]">
                    {advantage}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-slate-100"
          >
            <a 
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="group flex items-center justify-between bg-[#0D2B45] text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] w-full sm:w-fit min-w-[260px] hover:bg-[#EAA33F] hover:text-[#0D2B45] transition-all duration-300 shadow-xl"
            >
              Enquire Now 
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}