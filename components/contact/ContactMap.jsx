"use client";
import { motion } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";

export default function ContactMap() {
  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK";
  const NAV_LINK = "https://maps.google.com";

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 text-center">
        <div className="flex flex-col items-center mb-8">
          <Compass size={24} className="text-[#EAA33F] mb-3 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-black text-[#0D2B45] uppercase tracking-tighter">Find Our Office</h2>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mt-1">Narhe • Pune Terminal</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white ring-1 ring-slate-100 bg-slate-100"
        >
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale hover:grayscale-0 transition-all duration-700 contrast-[1.1]"
          ></iframe>
          
          <a 
            href={NAV_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#0D2B45] text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-[9px] sm:text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-3 transition-all hover:bg-[#EAA33F] hover:text-[#0D2B45] z-30"
          >
            Get Directions <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}