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
    <main className="min-h-screen bg-[#F8F9FA] text-[#0D2B45] flex flex-col">
      
      {/* HERO SECTION */}
      <div className="flex-grow flex flex-col lg:flex-row items-center justify-center py-12 lg:py-32 px-6 lg:px-20 gap-12 lg:gap-24 max-w-[1700px] mx-auto w-full">
        
        {/* LEFT SIDE: Image + Technical Branding */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center"
        >
          <div className="relative w-full h-full max-w-[800px] flex flex-col items-center lg:items-start justify-center">
            
            {/* BACK BUTTON */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-slate-400 hover:text-[#0D2B45] transition-colors group bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-sm mb-8 self-start"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">Back to Services</span>
            </button>

            {/* PRODUCT IMAGE */}
            <div className="w-full flex items-center justify-center lg:justify-start">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto max-h-[50vh] lg:max-h-[75vh] object-contain drop-shadow-[0_20px_50px_rgba(13,43,69,0.15)]"
              />
            </div>
            
            {/* Technical Reference Tag */}
            <div className="absolute -bottom-10 lg:-bottom-6 left-0 flex items-center gap-4 opacity-40">
               <div className="h-[1px] w-16 bg-[#0D2B45]" />
               <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em]">
                 Asset_Ref: {params.slug?.replace(/-/g, '_').toUpperCase()}
               </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: CONTENT MATRIX */}
        <div className="w-full lg:w-1/2 flex flex-col pt-10 lg:pt-0">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center w-fit gap-2 bg-[#0D2B45] text-white px-5 py-2 rounded-full mb-8 shadow-lg"
          >
            <Activity size={14} className="text-[#EAA33F]" />
            <span className="text-[10px] font-black uppercase tracking-widest">Structural Integrity Verified</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-[5rem] font-black uppercase tracking-tighter leading-[0.9] text-[#0D2B45] mb-10"
          >
            {service.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-l-4 border-[#EAA33F] pl-6 lg:pl-8 mb-14"
          >
            <p className="text-lg lg:text-2xl text-slate-500 italic leading-snug font-medium max-w-xl">
              {service.description}
            </p>
          </motion.div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 mb-14">
            {service.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-4 group hover:border-[#EAA33F] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="text-[#EAA33F] bg-[#F8F9FA] p-3 rounded-xl group-hover:bg-[#EAA33F] group-hover:text-white transition-colors">
                  {React.cloneElement(specIcons[idx % 4], { size: 20 })}
                </div>
                <p className="font-bold text-[#0D2B45] uppercase tracking-tight text-sm leading-tight">
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
            <div className="flex items-start gap-3 bg-slate-100/50 p-4 rounded-2xl border border-dashed border-slate-200">
              <CheckCircle2 className="text-[#EAA33F] shrink-0" size={20} />
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 leading-relaxed">
                <span className="text-[#0D2B45]">Core Benefit:</span> {service.benefits}
              </p>
            </div>

            <a 
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="group flex items-center justify-between bg-[#0D2B45] text-white px-10 lg:px-12 py-5 lg:py-6 rounded-2xl font-black uppercase text-[10px] lg:text-xs tracking-[0.4em] w-full sm:w-fit min-w-[280px] lg:min-w-[320px] hover:bg-[#EAA33F] hover:text-[#0D2B45] transition-all duration-300 shadow-xl shadow-[#0D2B45]/20"
            >
              Enquire Now 
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}