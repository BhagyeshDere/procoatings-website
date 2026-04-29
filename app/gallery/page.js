"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Shield, Search, X, ArrowUpRight } from "lucide-react";
// Import the external data
import { galleryData } from "@/data/gallery";

const filterCategories = [
  "All Projects",
  "Waterproofing",
  "Industrial Floor Coatings",
  "Protective Coatings",
  "Residential & Commercial",
  "Floor Densification",
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedImage, setSelectedImage] = useState(null);
  const BRAND_GOLD = "#EAA33F";
  const NAVY_ACCENT = "#0D2B45";

  const filteredItems = activeFilter === "All Projects"
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  return (
    <section className="relative min-h-screen py-24 bg-[#F8FAFC] overflow-hidden text-[#0D2B45] selection:bg-[#EAA33F] selection:text-white">
      
      {/* 🧩 Architectural Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} 
      />

      <div className="max-w-[1700px] mx-auto px-6 relative z-10 w-full">

        {/* 🔷 HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#EAA33F]" />
              <span className="text-[#EAA33F] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
                Verified Case Studies
              </span>
            </div>

            <h2 className="text-5xl md:text-[90px] font-black leading-[0.9] tracking-tighter uppercase mb-6 text-[#0D2B45]">
              The <span className="text-slate-300">Surface</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D2B45] to-[#EAA33F]">Gallery.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:w-1/4 pb-4 border-l border-slate-200 pl-8 hidden lg:block"
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 leading-relaxed">
              Exploration of advanced coating applications and structural protection across pan-India sites.
            </p>
          </motion.div>
        </div>

        {/* 🔥 FILTER SYSTEM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 overflow-x-auto no-scrollbar"
        >
          <div className="flex flex-nowrap md:flex-wrap gap-3 items-center pb-4">
            
            {filterCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(cat)}
                className={`
                  flex-shrink-0 relative px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-all duration-500
                  ${activeFilter === cat 
                    ? "bg-[#0D2B45] text-white border-[#0D2B45] shadow-lg shadow-blue-900/20" 
                    : "bg-white text-slate-500 border-slate-100 hover:border-[#EAA33F] hover:text-[#EAA33F] shadow-sm"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 🧩 CLEAR-FOCUS GRID */}
        {filteredItems.length === 0 ? (
            <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl">
                <p className="font-mono text-xs uppercase text-slate-400 tracking-widest">No matching records in current division</p>
            </div>
        ) : (
            <motion.div 
                layout 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedImage(item)}
                      className="group relative aspect-[4/5] overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-100"
                    >
                        {/* Image - CRYSTAL CLEAR (No Blur) */}
                        <img
                            src={item.imgSrc}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Gradient Overlay (Replaces Blur) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B45] via-[#0D2B45]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-[#EAA33F] text-[#0D2B45] text-[9px] font-black uppercase tracking-[0.2em] rounded-full mb-3">
                                    {item.category}
                                </span>
                                <h4 className="text-2xl font-black uppercase text-white tracking-tighter leading-tight">
                                    {item.title}
                                </h4>
                            </div>
                            
                            <div className="flex items-center justify-between pt-5 border-t border-white/20">
                                <span className="text-[10px] font-bold text-white/70 uppercase tracking-[0.3em]">Inspection</span>
                                <ArrowUpRight size={18} className="text-[#EAA33F]" />
                            </div>
                        </div>

                        {/* Floating Action Button */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white shadow-xl rounded-xl flex items-center justify-center group-hover:bg-[#EAA33F] transition-colors duration-300">
                             <Maximize2 size={14} className="text-[#0D2B45]" />
                        </div>
                    </motion.div>
                ))}
                </AnimatePresence>
            </motion.div>
        )}

        {/* 📊 FOOTER */}
        <div className="mt-24 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-10">
            {["ISO Certified", "Safety Protocol Verified"].map((tag, idx) => (
              <span key={idx} className="text-[11px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {tag}
              </span>
            ))}
          </div>
          <div className="px-6 py-2 bg-slate-100 rounded-full">
            <span className="text-[10px] font-black text-[#0D2B45] uppercase tracking-widest">Pan-India Operations</span>
          </div>
        </div>

      </div>

      {/* 🖼️ MODAL (Clear Vision) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-[#0D2B45] text-white rounded-full hover:bg-[#EAA33F] transition-colors shadow-lg"
              >
                <X size={20} />
              </button>

              <div className="md:w-3/5 bg-slate-100 flex items-center justify-center p-2 md:p-4">
                <img 
                  src={selectedImage.imgSrc} 
                  alt={selectedImage.title}
                  className="max-h-[50vh] md:max-h-[80vh] w-full object-contain rounded-xl shadow-sm"
                />
              </div>

              <div className="md:w-2/5 p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-[2px] bg-[#EAA33F]" />
                    <span className="text-[#EAA33F] text-xs font-black tracking-widest uppercase">Project Info</span>
                </div>
                
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 text-[#0D2B45] leading-none">{selectedImage.title}</h3>
                
                <div className="space-y-6 mb-10">
                    <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Division</p>
                        <p className="text-base font-bold text-[#0D2B45]">{selectedImage.category}</p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                        <Shield className="text-emerald-600" size={18} />
                        <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Quality Assurance Active</span>
                    </div>
                </div>

                <button 
                  onClick={() => setSelectedImage(null)}
                  className="w-full p-5 bg-[#0D2B45] text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#EAA33F] transition-all duration-300"
                >
                  Return to Gallery
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}