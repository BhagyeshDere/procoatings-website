"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Layers3,
  ParkingCircle,
  ChevronRight,
  Maximize2
} from "lucide-react";

const systems = [
  {
    title: "Car Deck Systems",
    slug: "car-deck-systems",
    tag: "Traffic Deck",
    image: "/images/services/car.png",
    icon: ParkingCircle,
    desc: "Heavy duty car park protection designed for high-traffic abrasion and waterproofing.",
  },
  {
    title: "Anti-Skid Flooring",
    slug: "anti-skid-flooring",
    tag: "Safety First",
    image: "/images/services/antiskid1.png",
    icon: ShieldCheck,
    desc: "Slip resistant performance flooring solutions engineered for safety-critical zones.",
  },
  {
    title: "Textured PU Floor",
    slug: "textured-pu-floor",
    tag: "Premium Decor",
    image: "/images/services/textured1.png",
    icon: Layers3,
    desc: "Decorative polyurethane flooring with resilient finishes for premium commercial spaces.",
  }
];

export default function ResidentialCommercialPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">
      
      {/* 🟢 HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden border-b border-slate-100">
        {/* Subtle Light Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(#0F3250 0.5px, transparent 0.5px)`,
            backgroundSize: "32px 32px"
          }}
        />
        
        {/* Decorative Radial Fade */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#EAA33F]/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F3250]/10 bg-slate-50 text-[#0F3250] text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-sm">
            <Maximize2 size={14} className="text-[#EAA33F]" />
            Premium Surface Grade
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#0F3250] leading-tight uppercase">
            Residential &
            <br />
            <span className="text-[#EAA33F]">
              Commercial Flooring
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-500 max-w-2xl leading-relaxed px-4 font-bold">
            Architectural flooring systems that bridge the gap between
            decorative aesthetics and <span className="text-[#0F3250]">industrial-grade durability.</span>
          </p>
        </div>
      </section>

      {/* 🟠 SYSTEMS GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black uppercase">
                Specialized
                <span className="text-[#EAA33F]"> Applications</span>
              </h2>
            </div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">
              Performance Flooring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
              >
                {/* Image container - Gradient removed, original image shown */}
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0F3250] border border-slate-200 group-hover:bg-[#EAA33F] group-hover:text-white group-hover:border-[#EAA33F] transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#EAA33F]">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-black uppercase mb-3 text-[#0F3250] group-hover:text-[#EAA33F] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href={`/services/residential-commercial/${item.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F3250] hover:text-[#EAA33F] hover:gap-4 transition-all"
                    >
                      View Details
                      <ChevronRight size={14} className="text-[#EAA33F]" />
                    </Link>
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