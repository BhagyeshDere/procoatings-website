"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Flame,
  Zap,
  Thermometer,
  Factory,
  Layers3,
  ChevronRight,
  ShieldAlert
} from "lucide-react";

const coatings = [
  {
    title: "Heat Insulation",
    tag: "Thermal",
    image: "/images/services/heat.jpeg",
    icon: Thermometer,
    desc: "Advanced thermal barrier coatings engineered to reduce heat transfer.",
    slug: "heat-reflective-roof-coating"
  },
  {
    title: "Electrical Insulation",
    tag: "Safety",
    image: "/images/services/insulation.png",
    icon: Zap,
    desc: "Specialized insulating coatings for electrical safety and equipment protection.",
    slug: "electrical-insulation"
  },
  {
    title: "Anti-Corrosive",
    tag: "Defense",
    image: "/images/services/corrosion.jpeg",
    icon: ShieldCheck,
    desc: "Heavy duty systems designed for harsh industrial and marine environments.",
    slug: "anti-corrosive-layering"
  },
  {
    title: "Anti-Carbonation",
    tag: "Concrete",
    image: "/images/services/carbonation1.png",
    icon: Layers3,
    desc: "Protective coatings designed to prevent concrete deterioration.",
    slug: "structural-anti-carbonation"
  },
  {
    title: "Fire Resistant",
    tag: "Passive Fire",
    image: "/images/services/fire.png",
    icon: Flame,
    desc: "High-performance protection for structural and industrial safety.",
    slug: "fire-retardant-coating"
  },
  {
    title: "Customized Systems",
    tag: "Bespoke",
    image: "/images/services/carbonation2.png", 
    icon: Factory,
    desc: "Custom engineered protective solutions built for specialized needs.",
    slug: "customized-systems"
  }
];

export default function ProtectiveCoatingsPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-[#0F3250] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#EAA33F 1px, transparent 1px),
            linear-gradient(90deg,#EAA33F 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/5 text-[#EAA33F] text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            <ShieldAlert size={14} className="animate-pulse" />
            Specialized Barrier Tech
          </div>

          {/* Removed italic, kept font-black */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
            Protective
            <br />
            <span className="text-[#EAA33F]">Coatings</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed font-bold">
            High-performance chemical defense systems for corrosion control thermal isolation and fire safety.
          </p>
        </div>
      </section>

      {/* GRADES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black uppercase">
                Protection
                <span className="text-[#EAA33F]"> Grades</span>
              </h2>
            </div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">
              6 Industrial Categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {coatings.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col"
              >
                {/* IMAGE HEADER - Removed Gradient, Added BG Fallback */}
                <div className="relative h-44 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  
                  {/* Floating Icon - Styled for visibility without overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0F3250] border border-slate-200 shadow-lg group-hover:bg-[#EAA33F] group-hover:text-white transition-colors">
                      <item.icon size={20} />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
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
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-bold">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <Link
                      href={`/services/protective-coatings/${item.slug}`}
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