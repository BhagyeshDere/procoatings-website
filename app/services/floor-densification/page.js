"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  FlaskConical,
  Layers3,
  Factory,
  ChevronRight,
  Activity,
  Box
} from "lucide-react";

const densifiers = [
  {
    title: "Sodium Silicate",
    slug: "sodium-based-hardener",
    tag: "Economical",
    image: "/images/services/sodium.jpeg",
    icon: Factory,
    desc: "Cost-effective system improving abrasion resistance and dust proofing for industrial assets.",
  },
  {
    title: "Lithium Silicate",
    slug: "lithium-based-densifier",
    tag: "Premium",
    image: "/images/services/lithium.jpeg",
    icon: Sparkles,
    desc: "Advanced treatment for superior polish retention and chemical resistance.",
  },
  {
    title: "Ashford Floor",
    slug: "ashford-formula-system",
    tag: "Penetrating",
    icon: Layers3,
    image: "/images/services/ashford.jpeg",
    desc: "Permanent penetrating hardening technology engineered for heavy industrial traffic.",
  },
];

export default function FloorDensificationPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">
      
      {/* 🟢 HERO SECTION - Consistent with other pages */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#0F3250] overflow-hidden">
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `radial-gradient(#EAA33F 0.5px, transparent 0.5px)`, 
          backgroundSize: '24px 24px' 
        }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/5 text-[#EAA33F] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Activity size={14} className="animate-pulse" />
            Industrial Concrete Hardening
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase">
            Floor <br />
            <span className="text-[#EAA33F]">Densification</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-bold">
            Advanced chemical systems engineered to strengthen, harden, and protect 
            industrial concrete floors from heavy-duty wear.
          </p>
        </div>
      </section>

      {/* 🟠 SYSTEMS GRID - Updated for 3 columns on desktop */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F3250] uppercase">
              Hardening <span className="text-[#EAA33F]">Systems</span>
            </h2>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">Performance Matrix</p>
          </div>

          {/* Grid updated: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {densifiers.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
              >
                {/* Image container - No Gradient Overlay */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0F3250] border border-slate-200 shadow-md group-hover:bg-[#EAA33F] group-hover:text-white transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#EAA33F]">
                      Grade: {item.tag}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-[#0F3250] uppercase group-hover:text-[#EAA33F] transition-colors mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-bold">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <Link 
                      href={`/services/floor-densification/${item.slug}`} 
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F3250] hover:text-[#EAA33F] hover:gap-4 transition-all"
                    >
                      View Details <ChevronRight size={14} className="text-[#EAA33F]" />
                    </Link>
                    <Box size={20} className="text-slate-100 hidden sm:block" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}