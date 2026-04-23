"use client";

import { motion } from "framer-motion";
import { 
  Car, FlaskConical, Utensils, Building2, 
  Globe, Hospital, Warehouse 
} from "lucide-react";

export default function AboutIndustries() {
  const industries = [
    { name: "Automotive", icon: <Car size={20} /> },
    { name: "Pharma & Biotech", icon: <FlaskConical size={20} /> },
    { name: "Chemical Plants", icon: <FlaskConical size={20} /> },
    { name: "Food & Dairy", icon: <Utensils size={20} /> },
    { name: "Hospitality", icon: <Building2 size={20} /> },
    { name: "Aviation", icon: <Globe size={20} /> },
    { name: "Healthcare", icon: <Hospital size={20} /> },
    { name: "Warehousing", icon: <Warehouse size={20} /> },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-[#F5A623] text-xs font-black uppercase tracking-[0.5em]">
            Industry Expertise
          </h3>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Sectors We Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-[#0D2B45] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 group-hover:bg-[#F5A623] group-hover:text-white transition-colors shadow-sm">
                {industry.icon}
              </div>
              <span className="font-black uppercase text-[10px] tracking-widest text-[#0D2B45] group-hover:text-white">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}