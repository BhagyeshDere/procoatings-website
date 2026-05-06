"use client";

import React from "react";
import Link from "next/link";
import {
  Droplets,
  ShieldCheck,
  Building2,
  Layers3,
  Home,
  ArrowRight,
  Warehouse,
  Waves
} from "lucide-react";

const systems = [
  {
    title: "Terrace & Roof",
    tag: "Roof Protection",
    image: "/images/services/terraceroof.png",
    icon: Building2,
    desc: "Advanced membrane systems protecting rooftops from weather degradation.",
    slug: "terrace-roof-solution"
  },
  {
    title: "Podium Systems",
    tag: "Deck Systems",
    image: "/images/services/podium.png",
    icon: Layers3,
    desc: "Heavy-duty solutions for landscaped decks and traffic exposed surfaces.",
    slug: "podium-waterproofing"
  },
  {
    title: "Metal Roofing",
    tag: "Industrial",
    image: "/images/services/metalroof.png",
    icon: ShieldCheck,
    desc: "Corrosion and leak prevention systems for specialized industrial roofs.",
    slug: "metal-roof-restoration" 
  },
  {
    title: "Bathrooms",
    tag: "Interior",
    image: "/images/services/bathroom.png",
    icon: Home,
    desc: "Internal wet-area protection preventing structural moisture damage.",
    slug: "bathroom-sealing-grouting"
  },
  {
    title: "Basements",
    tag: "Below Grade",
    image: "/images/services/basement.png",
    icon: Warehouse,
    desc: "High-pressure underground solutions for foundations and structures.",
    slug: "basement-waterproofing"
  },
  {
    title: "External Walls",
    tag: "Facade",
    image: "/images/services/external-walls.jpeg",
    icon: Droplets,
    desc: "Exterior barrier systems against vertical moisture ingress.",
    slug: "external-walls"
  }
];

export default function WaterproofingPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">
      
      {/* 🟢 COMPACT ADVANCED HERO */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#0F3250] overflow-hidden">
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `radial-gradient(#EAA33F 0.5px, transparent 0.5px)`, 
          backgroundSize: '24px 24px' 
        }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/5 text-[#EAA33F] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Waves size={14} className="animate-pulse" />
            Structural Defense
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase italic">
            Advanced <br />
            <span className="text-[#EAA33F] not-italic">Waterproofing</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Performance engineering for critical structural protection. 
            Monolithic barriers designed for zero-leak environments.
          </p>
        </div>
      </section>

      {/* 🟠 SLEEK COMPACT CARDS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F3250] uppercase">
              Specialized <span className="text-[#EAA33F]">Systems</span>
            </h2>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">6 Core Applications</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {systems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3250]/80 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#EAA33F] group-hover:text-[#0F3250] transition-colors">
                      <item.icon size={20} />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#EAA33F]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-lg md:text-xl font-black text-[#0F3250] uppercase mb-3 group-hover:text-[#EAA33F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                    {item.desc}
                  </p>
                  
                  <Link 
                    href={`/services/waterproofing/${item.slug}`} 
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F3250] hover:gap-4 transition-all"
                  >
                    View Details <ArrowRight size={14} className="text-[#EAA33F]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     


    </main>
  );
}