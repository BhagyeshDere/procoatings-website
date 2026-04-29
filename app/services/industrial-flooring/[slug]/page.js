"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
  
  /**
   * GLOBAL SEARCH:
   * This looks through every category in your servicesData to find the slug.
   */
  const service = Object.values(servicesData)
    .flatMap(category => category.subServices)
    .find((s) => s.slug === params.slug);

  // Robust Error State if the slug doesn't exist in your data/services.js
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
      
      {/* SECTION WRAPPER: Standardized max-w for better hierarchy on large displays */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* LEFT SIDE: Image + Technical Branding */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          {/* BACK BUTTON */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-400 hover:text-[#0D2B45] transition-colors group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100 shadow-sm mb-8 self-start"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to Services</span>
          </button>

          {/* PRODUCT IMAGE: Removed border container, increased lg height to 650px */}
          <div className="relative w-full flex items-center justify-center lg:justify-start lg:h-[650px] overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(13,43,69,0.12)]"
            />
            
            {/* Technical Reference Tag */}
            <div className="absolute bottom-4 left-0 flex items-center gap-3 opacity-30">
               <div className="h-[1px] w-12 bg-[#0D2B45]" />
               <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em]">
                 Asset_Ref: {params.slug?.replace(/-/g, '_').toUpperCase()}
               </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: CONTENT MATRIX */}
        <div className="w-full lg:w-1/2 flex flex-col pt-6 lg:pt-0">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center w-fit gap-2 bg-[#0D2B45] text-white px-4 py-1.5 rounded-full mb-6 shadow-md"
          >
            <Activity size={12} className="text-[#EAA33F]" />
            <span className="text-[9px] font-black uppercase tracking-widest">Structural Integrity Verified</span>
          </motion.div>

          {/* TITLE: Impactful but scaled for readability */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] text-[#0D2B45] mb-6"
          >
            {service.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-l-4 border-[#EAA33F] pl-6 mb-10"
          >
            <p className="text-base lg:text-xl text-slate-500 italic leading-relaxed font-medium max-w-lg">
              {service.description}
            </p>
          </motion.div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
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
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-3 bg-slate-100/50 p-4 rounded-xl border border-dashed border-slate-200">
              <CheckCircle2 className="text-[#EAA33F] shrink-0" size={18} />
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 leading-relaxed">
                <span className="text-[#0D2B45]">Core Benefit:</span> {service.benefits}
              </p>
            </div>

            <a 
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="group flex items-center justify-between bg-[#0D2B45] text-white px-8 py-5 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] w-full sm:w-fit min-w-[280px] hover:bg-[#EAA33F] hover:text-[#0D2B45] transition-all duration-300 shadow-xl shadow-[#0D2B45]/10"
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