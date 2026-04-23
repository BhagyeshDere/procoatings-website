"use client";

import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Start your next <br />
              <span className="text-[#F5A623]">Project.</span>
            </h2>
            <p className="text-slate-500 font-bold text-lg md:text-xl">
              Connect with our engineering experts for a technical site assessment.
            </p>
          </div>
          
          {/* Interactive Button */}
          <button className="group flex items-center gap-6 md:gap-8 text-xl md:text-2xl font-black uppercase tracking-tighter hover:text-[#F5A623] transition-colors text-left md:text-right">
            <span className="max-w-[150px] md:max-w-none">
              Get an Expert Quote 
            </span>
            <span className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0D2B45] group-hover:bg-[#F5A623] flex items-center justify-center transition-all duration-500 shadow-xl">
              <ArrowRight 
                className="text-white group-hover:translate-x-2 transition-transform" 
                size={28} 
              />
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}