"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  Settings,
  Ruler,
  Zap,
  Activity,
  CheckCircle2
} from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const [activeImage, setActiveImage] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const service = Object.values(servicesData)
    .flatMap(category => category.subServices)
    .find((s) => s.slug === params.slug);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!service && mounted) {
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

  const specIcons = [<ShieldCheck />, <Settings />, <Ruler />, <Zap />];
  
  // Logic to pull gallery from your updated services.js or fallback to main image
  const galleryImages = service?.gallery && service.gallery.length > 0 
    ? service.gallery 
    : service ? [service.image, service.image, service.image] : [];

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#0D2B45]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-12 lg:py-20">
        
        {/* BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-[#0D2B45] transition-colors group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100 shadow-sm mb-8 md:mb-12 self-start"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Back to Services</span>
        </button>

        {mounted ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
            
            {/* LEFT SIDE: Image + Gallery Matrix */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex flex-col"
            >
              {/* MAIN PRODUCT DISPLAY */}
              <div className="relative w-full aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center overflow-hidden bg-white rounded-2xl md:rounded-[2.5rem] border border-slate-100 shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={galleryImages[activeImage]} 
                    alt={service.title} 
                    className="w-full h-full object-contain p-4 md:p-8 lg:p-12 drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                  />
                </AnimatePresence>
                
                <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 opacity-30">
                   <div className="h-[1px] w-12 bg-[#0D2B45]" />
                   <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em]">
                     Asset_Ref: {params.slug?.replace(/-/g, '_').toUpperCase()}
                   </span>
                </div>
              </div>

              {/* THUMBNAIL GALLERY */}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-square rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white shadow-sm ${
                      activeImage === idx 
                        ? "border-[#EAA33F] ring-4 ring-[#EAA33F]/10" 
                        : "border-transparent hover:border-slate-200"
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`View ${idx + 1}`} 
                      className={`w-full h-full object-contain p-2 transition-all duration-500 ${
                        activeImage === idx ? 'opacity-100 scale-105' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE: CONTENT MATRIX */}
            <div className="w-full flex flex-col pt-2 lg:pt-6">
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center w-fit gap-2 bg-[#0D2B45] text-white px-4 py-1.5 rounded-full mb-6 shadow-md"
              >
                <Activity size={12} className="text-[#EAA33F]" />
                <span className="text-[9px] font-black uppercase tracking-widest">Structural Integrity Verified</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[1] text-[#0D2B45] mb-6 md:mb-8"
              >
                {service.title}
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="border-l-4 border-[#EAA33F] pl-5 md:pl-6 mb-8 md:mb-12"
              >
                <p className="text-sm md:text-lg lg:text-xl text-slate-500 italic leading-relaxed font-medium max-w-lg">
                  {service.description}
                </p>
              </motion.div>

              {/* FEATURES GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-12">
                {service.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-100 flex items-center gap-3 group hover:border-[#EAA33F] transition-all duration-300 shadow-sm"
                  >
                    <div className="text-[#EAA33F] bg-[#F8F9FA] p-2 md:p-2.5 rounded-lg group-hover:bg-[#EAA33F] group-hover:text-white transition-colors shrink-0">
                      {React.cloneElement(specIcons[idx % 4], { size: 18 })}
                    </div>
                    <p className="font-bold text-[#0D2B45] uppercase tracking-tight text-[10px] md:text-xs leading-tight">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA & BENEFIT TAG */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-start gap-3 bg-slate-100/50 p-4 rounded-xl border border-dashed border-slate-200">
                  <CheckCircle2 className="text-[#EAA33F] shrink-0 mt-0.5" size={18} />
                  <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-slate-500 leading-relaxed">
                    <span className="text-[#0D2B45]">Core Benefit:</span> {service.benefits || "Optimized Durability & Protection"}
                  </p>
                </div>

                <a 
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="group flex items-center justify-between bg-[#0D2B45] text-white px-6 md:px-8 py-4 md:py-5 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] w-full sm:w-fit min-w-[260px] md:min-w-[280px] hover:bg-[#EAA33F] hover:text-[#0D2B45] transition-all duration-300 shadow-xl"
                >
                  Enquire Now 
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="min-h-[60vh] flex items-center justify-center">
             <div className="w-8 h-8 border-4 border-[#0D2B45] border-t-[#EAA33F] rounded-full animate-spin" />
          </div>
        )}
      </div>
    </main>
  );
}