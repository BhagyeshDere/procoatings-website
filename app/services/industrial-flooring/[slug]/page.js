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
  
  // Lookup logic
  const service = Object.values(servicesData)
    .flatMap(category => category.subServices)
    .find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-[#0D2B45] p-6 text-center">
        <h1 className="text-6xl font-black mb-4">404</h1>
        <p className="uppercase tracking-widest text-xs mb-8 opacity-60">Service Not Found</p>
        <button 
          onClick={() => router.push('/')}
          className="bg-[#0D2B45] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#EAA33F] transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const specIcons = [<ShieldCheck />, <Settings />, <Ruler />, <Zap />];

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#0D2B45]">
      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-24">
        
        {/* BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-[#0D2B45] transition-colors group mb-12"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* IMAGE SIDE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden bg-white shadow-2xl border border-slate-100">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
              />
            </div>
            <div className="mt-6 flex items-center gap-4 opacity-40">
               <div className="h-[1px] w-12 bg-[#0D2B45]" />
               <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                 Ref: {params.slug?.toUpperCase()}
               </span>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center w-fit gap-2 bg-[#0D2B45] text-white px-4 py-1.5 rounded-full mb-6"
            >
              <Activity size={14} className="text-[#EAA33F]" />
              <span className="text-[9px] font-black uppercase tracking-widest">Certified System</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#0D2B45] mb-8"
            >
              {service.title}
            </motion.h1>

            <motion.p className="text-lg lg:text-xl text-slate-500 italic border-l-4 border-[#EAA33F] pl-6 mb-12">
              {service.description}
            </motion.p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {service.features.map((feature, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm hover:border-[#EAA33F] transition-colors">
                  <div className="text-[#EAA33F]">
                    {React.cloneElement(specIcons[idx % 4], { size: 18 })}
                  </div>
                  <p className="font-bold text-[#0D2B45] uppercase text-[11px] tracking-tight">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-6">
              <div className="flex items-start gap-3 bg-slate-100 p-4 rounded-xl border border-dashed border-slate-300">
                <CheckCircle2 className="text-[#EAA33F] shrink-0" size={18} />
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <span className="text-[#0D2B45]">Core Benefit:</span> {service.benefits || "Professional Grade Durability"}
                </p>
              </div>

              <a 
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="group flex items-center justify-between bg-[#0D2B45] text-white px-8 py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] hover:bg-[#EAA33F] hover:text-[#0D2B45] transition-all shadow-xl"
              >
                Enquire Now 
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}