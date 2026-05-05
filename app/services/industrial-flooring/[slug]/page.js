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
  
  // Find the current service in the data file
  const service = Object.values(servicesData)
    .flatMap(category => category.subServices)
    .find((s) => s.slug === params.slug);

  const [mainImage, setMainImage] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Safely extract gallery images from the data file
  // Defaulting to 3 instances of the main image if gallery array is missing
  const galleryThumbs = service?.gallery && service.gallery.length > 0 
    ? service.gallery 
    : service ? [service.image, service.image, service.image] : [];

  useEffect(() => {
    setMounted(true);
    if (service) {
      setMainImage(service.image);
      setSelectedIdx(0);
    }
  }, [service]);

  // Hydration safety
  if (!mounted) return <main className="min-h-screen bg-[#F8F9FA]" />;

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

  const specIcons = [<ShieldCheck />, <Settings />, <Ruler />, <Zap />];

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#0D2B45]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
        
        {/* BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-[#0D2B45] transition-colors group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100 shadow-sm mb-10 self-start"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Back to Services</span>
        </button>

        {/* 50/50 SYMMETRICAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Image + Interactive Gallery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex flex-col"
          >
            {/* MAIN IMAGE DISPLAY */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center overflow-hidden bg-white rounded-3xl border border-slate-100 shadow-inner">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selectedIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  src={mainImage} 
                  alt={service.title} 
                  className="w-full h-full object-contain p-6 md:p-12 drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-6 left-6 flex items-center gap-3 opacity-30">
                 <div className="h-[1px] w-12 bg-[#0D2B45]" />
                 <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em]">
                   Asset_Ref: {params.slug?.replace(/-/g, '_').toUpperCase()}
                 </span>
              </div>
            </div>

            {/* GALLERY SELECTOR - Pulls from your services data file */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6">
              {galleryThumbs.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setMainImage(img);
                    setSelectedIdx(idx);
                  }}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white group shadow-sm ${
                    selectedIdx === idx 
                    ? "border-[#EAA33F] ring-4 ring-[#EAA33F]/10" 
                    : "border-transparent hover:border-slate-200"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${service.title} view ${idx + 1}`} 
                    className={`w-full h-full object-contain p-2 transition-all duration-500 ${
                      selectedIdx === idx ? "scale-110 opacity-100" : "opacity-50 group-hover:opacity-100"
                    }`}
                  />
                  {selectedIdx === idx && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-[#EAA33F]/5 pointer-events-none"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT MATRIX */}
          <div className="w-full flex flex-col pt-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center w-fit gap-2 bg-[#0D2B45] text-white px-4 py-1.5 rounded-full mb-8 shadow-md"
            >
              <Activity size={12} className="text-[#EAA33F]" />
              <span className="text-[9px] font-black uppercase tracking-widest">Structural Integrity Verified</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-[#0D2B45] mb-8"
            >
              {service.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="border-l-4 border-[#EAA33F] pl-6 mb-12"
            >
              <p className="text-base lg:text-xl text-slate-500 italic leading-relaxed font-medium max-w-lg">
                {service.description}
              </p>
            </motion.div>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {service.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center gap-3 group hover:border-[#EAA33F] transition-all duration-300 shadow-sm"
                >
                  <div className="text-[#EAA33F] bg-[#F8F9FA] p-2.5 rounded-lg group-hover:bg-[#EAA33F] group-hover:text-white transition-colors">
                    {React.cloneElement(specIcons[idx % 4], { size: 18 })}
                  </div>
                  <p className="font-bold text-[#0D2B45] uppercase tracking-tight text-xs leading-tight">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA & BENEFIT TAG */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="text-[#EAA33F] shrink-0 mt-0.5" size={18} />
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 leading-relaxed">
                  <span className="text-[#0D2B45] block mb-1">Core Industrial Benefit</span> 
                  {service.benefits}
                </p>
              </div>

              <a 
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="group flex items-center justify-between bg-[#0D2B45] text-white px-10 py-6 rounded-2xl font-black uppercase text-[12px] tracking-[0.3em] w-full sm:w-fit min-w-[320px] hover:bg-[#EAA33F] hover:text-[#0D2B45] transition-all duration-500 shadow-2xl hover:-translate-y-1"
              >
                Enquire Now 
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}