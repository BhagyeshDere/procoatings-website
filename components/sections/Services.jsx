"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Shield, Droplets, HardHat, Car } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Building Waterproofing ",
    desc: "Advanced multi-layer protection including Liquid Membrane and Crystalline systems for zero-permeability.",
    img: "/images/services/building.jpeg",
    icon: <Droplets size={20} />,
    color: "#EAA33F"
  },
  {
    id: "02",
    title: "Industrial Flooring",
    desc: "High-grade Epoxy and PU flooring systems engineered for heavy loads and chemical resistance.",
    img: "/images/flooring/floor1.png",
    icon: <HardHat size={20} />,
    color: "#0F3250"
  },
  {
    id: "03",
    title: "Floor Densification",
    desc: "Chemical treatment that penetrates concrete pores to eliminate dusting.",
    img: "/images/flooring/densification.png",
    icon: <Shield size={20} />,
    color: "#0F3250"
  },
  {
    id: "04",
    title: "Anti-Static (ESD) Flooring",
    desc: "Specialized surfaces designed to prevent electrostatic discharge.",
    img: "/images/flooring/esd.png",
    icon: <Zap size={20} />,
    color: "#0F3250"
  },
  {
    id: "05",
    title: "Car Deck Parking",
    desc: "UV-resistant, skid-proof coatings for multi-level car parks.",
    img: "/images/flooring/car-deck.png",
    icon: <Car size={20} />,
    color: "#0F3250"
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#F8FAFC] overflow-hidden text-[#0F3250]">
      
      {/* 🧩 Technical Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#0F3250 1px, transparent 1px), linear-gradient(90deg, #0F3250 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-[98%] mx-auto px-6 relative z-10">
        
        {/* 🔷 HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-[#EAA33F] animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Engineering Excellence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.8] text-[#0F3250]">
              The Core <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #0F3250' }}>Service</span> 
              <span className="text-[#EAA33F]"> Hub.</span>
            </h2>
          </div>
          <p className="max-w-xs text-slate-500 font-bold border-l-2 border-[#EAA33F] pl-6 text-sm leading-relaxed">
            High-performance industrial barriers and surface engineering for critical infrastructure.
          </p>
        </div>

        {/* 🔥 BENTO-SLIDER HYBRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
          
          {/* Main Feature Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative group h-[500px] lg:h-[620px] rounded-3xl overflow-hidden bg-slate-900 shadow-2xl"
          >
            <img 
              src={services[0].img} 
              alt={services[0].title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" 
            />
            
            {/* Deepened Gradient for Text Clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
            
            <div className="absolute top-8 left-8 bg-[#EAA33F] p-4 rounded-2xl shadow-xl z-20">
              <div className="text-white">{services[0].icon}</div>
            </div>

            <div className="absolute bottom-10 left-10 right-10 z-20">
              <span className="text-[#EAA33F] font-black text-xs uppercase tracking-[0.4em] mb-3 block drop-shadow-sm">Premium Protection</span>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-4 leading-[0.9] drop-shadow-lg">{services[0].title}</h3>
              <p className="text-white/90 text-base leading-relaxed mb-6 line-clamp-3 font-bold max-w-md drop-shadow-md">
                {services[0].desc}
              </p>
              <button className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest group/btn bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20 rounded-lg hover:bg-[#EAA33F] transition-all">
                Technical Data <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Secondary Grid (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.slice(1).map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[300px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 bg-slate-900"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" 
                  />
                  {/* Heavy Bottom Scrim for Small Cards */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                <span className="absolute -right-4 -top-4 text-8xl font-black text-white/10 z-10 select-none">
                  {service.id}
                </span>

                <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-[#EAA33F] rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-black uppercase text-white mt-6 leading-none drop-shadow-lg">
                      {service.title.split(' ').map((word, idx) => (
                        <span key={idx} className="block">{word}</span>
                      ))}
                    </h3>
                  </div>
                  
                  <div className="translate-y-0 opacity-100 transition-all duration-500">
                    <p className="text-white text-xs font-bold mb-4 drop-shadow-md leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="w-full h-[2px] bg-white/20 relative overflow-hidden rounded-full">
                      <div className="absolute inset-0 bg-[#EAA33F] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🛠️ TECHNICAL FOOTER */}
        <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            {["25+ Years Experience", "Pan-India Service", "ISO Certified"].map((tag, idx) => (
              <span key={idx} className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#EAA33F] rounded-full" /> {tag}
              </span>
            ))}
          </div>
          <button className="px-8 py-4 bg-[#0F3250] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#EAA33F] transition-all shadow-lg transform hover:-translate-y-1">
            View All Capabilities
          </button>
        </div>

      </div>
    </section>
  );
}