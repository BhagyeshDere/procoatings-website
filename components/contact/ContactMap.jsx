"use client";
import { motion } from "framer-motion";
import { Compass, ArrowRight, MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  // Exact address from your provided image
  const FULL_ADDRESS = "Office No.1, Mangalmurti Complex, Ground Floor, Behind Audumber Complex, Narhe-Dhayari Road, Narhe, Pune-411041";
  
  // Search query for the red pin placement
  const ADDRESS_QUERY = "Mangalmurti Complex, Narhe-Dhayari Rd, Narhe, Pune, Maharashtra 411041";
  
  // Direct Google Maps link for the pined location
  const NAV_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`;

  // Updated Embed URL targeting Mangalmurti Complex specifically
  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.61343750535!2d73.81881777520448!3d18.455850982624445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295627622956f%3A0xc31922718f430589!2sMangalmurti%20Complex!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin";

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <Compass size={28} className="text-[#EAA33F] mb-3" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D2B45] uppercase tracking-tighter">
            Our Headquarters
          </h2>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mt-2">
            Industrial Hub • Narhe Pune
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(13,43,69,0.2)] border-8 border-white bg-slate-100 group"
        >
          {/* --- TOP-LEFT ADDRESS BOX (Light Theme) --- */}
          <motion.a
            href={NAV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-4 left-4 sm:top-8 sm:left-8 z-30 flex items-start gap-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[280px] sm:max-w-[320px] text-left hover:border-[#EAA33F] transition-all group/box"
          >
            <div className="bg-[#EAA33F]/10 p-2 sm:p-3 rounded-xl text-[#EAA33F]">
              <MapPin size={20} fill="currentColor" fillOpacity={0.2} />
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Office Location</h4>
              <p className="text-[11px] sm:text-[12px] font-bold text-[#0D2B45] leading-tight mb-2">
                {FULL_ADDRESS}
              </p>
              <span className="text-[9px] font-black uppercase text-[#EAA33F] flex items-center gap-2 group-hover/box:gap-3 transition-all">
                Open in Maps <ArrowRight size={12} />
              </span>
            </div>
          </motion.a>

          {/* Map Iframe */}
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-1000 contrast-[1.05]"
          ></iframe>
          
          {/* Bottom Right Floating Action */}
          <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3 z-30">
            <a 
              href={NAV_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0D2B45] text-white px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-3 transition-all hover:bg-[#EAA33F] hover:text-[#0D2B45] active:scale-95"
            >
              Start Navigation <Navigation size={14} fill="currentColor" />
            </a>
          </div>

          {/* Glass Overlay for depth */}
          <div className="absolute inset-0 pointer-events-none border-[1px] border-white/20 rounded-[2rem] sm:rounded-[3rem] z-20" />
        </motion.div>
        
        {/* Supporting Text Footer */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
           className="mt-10"
        >
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-4">Click map to interact</p>
          <div className="w-12 h-[2px] bg-slate-100 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}