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
  
  const service = Object.values(servicesData)
    .flatMap(category => category.subServices)
    .find((s) => s.slug === params.slug);

  // Track both the image and the specific index to handle identical paths
  const [mainImage, setMainImage] = useState(service?.image || "");
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (service) {
      setMainImage(service.image);
      setSelectedIdx(0);
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-[#0D2B45] font-mono p-6 text-center">
        <h1 className="text-6xl font-black mb-4">404</h1>
        <p className="uppercase tracking-widest text-xs mb-8 opacity-60">
          [ERROR_404]: SERVICE_NOT_FOUND_IN_DATABASE
        </p>
        <button 
          onClick={() => router.push('/services')}
          className="bg-[#0D2B45] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#EAA33F] transition-colors"
        >
          Return to Services
        </button>
      </div>
    );
  }

  const specIcons = [<ShieldCheck />, <Settings />, <Ruler />, <Zap />];
  
  // Use the actual gallery from data, or fallback to the main image repeated
  const galleryThumbs = service.gallery && service.gallery.length > 0 
    ? service.gallery 
    : [service.image, service.image, service.image];

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#0D2B45]">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        
        {/* LEFT SIDE: Image + Interactive Gallery */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-400 hover:text-[#0D2B45] transition-colors group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100 shadow-sm mb-6 lg:mb-8 self-start"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to Services</span>
          </button>

          {/* MAIN IMAGE DISPLAY */}
          <div className="relative w-full flex items-center justify-center h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden bg-white rounded-3xl border border-slate-100 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.img 
                key={mainImage + selectedIdx} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                src={mainImage} 
                alt={service.title} 
                className="w-full h-full object-cover sm:object-contain p-4 md:p-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
              />
            </AnimatePresence>
            
            <div className="absolute bottom-4 left-6 hidden sm:flex items-center gap-3 opacity-30">
               <div className="h-[1px] w-12 bg-[#0D2B45]" />
               <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em]">
                 Asset_Ref: {params.slug?.replace(/-/g, '_').toUpperCase()}
               </span>
            </div>
          </div>

          {/* THUMBNAIL SELECTOR */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6">
            {galleryThumbs.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setMainImage(img);
                  setSelectedIdx(idx);
                }}
                className={`relative h-20 md:h-28 rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white group shadow-sm ${
                  selectedIdx === idx 
                  ? "border-[#EAA33F] ring-4 ring-[#EAA33F]/10" 
                  : "border-transparent hover:border-slate-200"
                }`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${idx + 1}`} 
                  className={`w-full h-full object-cover p-1 transition-all duration-500 ${
                    selectedIdx === idx ? "scale-110 opacity-100" : "opacity-60 group-hover:opacity-100"
                  }`}
                />
                {selectedIdx === idx && (
                  <motion.div 
                    layoutId="activeThumb"
                    className="absolute inset-0 bg-[#EAA33F]/5 pointer-events-none"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: CONTENT MATRIX */}
        <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-10">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] text-[#0D2B45] mb-6"
          >
            {service.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-l-4 border-[#EAA33F] pl-4 sm:pl-6 mb-8 lg:mb-10"
          >
            <p className="text-sm sm:text-base lg:text-xl text-slate-500 italic leading-relaxed font-medium max-w-lg">
              {service.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10">
            {service.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 flex items-center gap-3 group hover:border-[#EAA33F] transition-all duration-300 shadow-sm"
              >
                <div className="text-[#EAA33F] bg-[#F8F9FA] p-2 rounded-lg group-hover:bg-[#EAA33F] group-hover:text-white transition-colors shrink-0">
                  {React.cloneElement(specIcons[idx % 4], { size: 16 })}
                </div>
                <p className="font-bold text-[#0D2B45] uppercase tracking-tight text-[10px] sm:text-xs leading-tight">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            {/* Added check for optional service.benefits property */}
            {service.description && (
               <div className="flex items-start gap-3 bg-slate-100/50 p-4 rounded-xl border border-dashed border-slate-200">
                <CheckCircle2 className="text-[#EAA33F] shrink-0" size={18} />
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 leading-relaxed">
                  <span className="text-[#0D2B45]">Core Performance:</span> Engineered for maximum durability and zero-permeability in extreme environments.
                </p>
              </div>
            )}

            <a 
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="group flex items-center justify-between bg-[#0D2B45] text-white px-8 py-5 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] w-full sm:w-fit sm:min-w-[280px] hover:bg-[#EAA33F] hover:text-[#0D2B45] transition-all duration-300 shadow-xl"
            >
              Enquire Now 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}