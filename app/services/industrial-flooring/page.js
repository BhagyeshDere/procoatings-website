"use client";

import React from "react";
import Link from "next/link";
import {
  Layers3,
  ChevronRight,
  Activity,
  ShieldAlert,
  ThermometerSnowflake,
  Zap,
  Cpu,
  Trophy,
  Car
} from "lucide-react";

const systems = [
  {
    title: "Epoxy Flooring",
    slug: "high-performance-epoxy-flooring",
    tag: "Heavy Duty",
    icon: ShieldAlert,
    image: "/images/services/epoxy.jpeg",
    desc: "Seamless high-performance epoxy systems for durability and chemical resistance."
  },
  {
    title: "PU Flooring",
    slug: "heavy-duty-pu-floor",
    tag: "Thermal Shock",
    icon: ThermometerSnowflake,
    image: "/images/services/pu1.png",
    desc: "Polyurethane systems built for thermal resistance and hygienic environments."
  },
  {
    title: "Dielectric Coating",
    slug: "dielectric-safety-coating",
    tag: "Safety",
    icon: Zap,
    image: "/images/services/dielectric.jpeg",
    desc: "Specialized insulating systems for high-risk electrical operational zones."
  },
  {
    title: "ESD Flooring",
    slug: "anti-static-esd-flooring",
    tag: "Static Control",
    icon: Cpu,
    image: "/images/services/esd1.png",
    desc: "ESD control flooring engineered for electronics and cleanroom apps."
  },
  {
    title: "Floor Densification",
    slug: "formula-one-grade-finish",
    tag: "Premium",
    icon: Trophy,
    image: "/images/services/densifi1.png",
    desc: "Molecular hardening that penetrates concrete to eliminate dusting and create a permanent, high-performance lustre."
  },
  {
    title: "Car Parking",
    slug: "industrial-car-parking",
    tag: "Traffic Grade",
    icon: Car,
    image: "/images/services/car3.png",
    desc: "Durable, anti-skid surface systems designed to withstand heavy vehicle load and oil spills."
  }
];

export default function IndustrialFlooringPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">

      {/* 🟢 HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#0F3250] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `radial-gradient(#EAA33F 0.5px, transparent 0.5px)`, 
          backgroundSize: '24px 24px' 
        }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/5 text-[#EAA33F] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm">
            <Activity size={14} className="animate-pulse" />
            Precision Surface Engineering
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase">
            Industrial <br />
            <span className="text-[#EAA33F]">Floor Coatings</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-bold">
            Engineered resin flooring for manufacturing, pharma and high traffic 
            industrial environments. Built for zero-failure performance.
          </p>
        </div>
      </section>

      {/* 🟠 SYSTEMS GRID */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F3250] uppercase">
              Coating <span className="text-[#EAA33F]">Systems</span>
            </h2>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">High-Performance Grade</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {systems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
              >
                <div className="relative h-48 md:h-56 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0F3250] border border-slate-200 shadow-md group-hover:bg-[#EAA33F] group-hover:text-white transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#EAA33F]">
                      {item.tag}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-[#0F3250] uppercase group-hover:text-[#EAA33F] transition-colors mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-bold">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <Link 
                      href={`/services/industrial-flooring/${item.slug}`} 
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F3250] hover:text-[#EAA33F] hover:gap-4 transition-all"
                    >
                      View Details <ChevronRight size={14} className="text-[#EAA33F]" />
                    </Link>
                    <Layers3 size={20} className="text-slate-100 hidden sm:block" />
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