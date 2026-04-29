"use client";
import { motion } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";

export default function ContactMap() {
  // Address from image: Office No.1, Mangalmurti Complex, Ground Floor, Behind Audumber Complex, Narhe-Dhayari Road, Narhe, Pune-411041
  const ADDRESS_QUERY = "Mangalmurti Complex, Narhe-Dhayari Rd, Narhe, Pune, Maharashtra 411041";
  
  // Real Google Maps Embed URL for Narhe location
  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.61343750535!2d73.81881777520448!3d18.455850982624445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295627622956f%3A0xc31922718f430589!2sMangalmurti%20Complex!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin";
  
  // Direct Navigation Link
  const NAV_LINK = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_QUERY)}`;

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
            padding="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
        
        {/* Physical Address Text below map for better UX */}
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-xs font-bold text-[#0D2B45] uppercase tracking-wider leading-relaxed opacity-70">
            Office No.1, Mangalmurti Complex, Ground Floor,<br />
            Behind Audumber Complex, Narhe-Dhayari Road,<br />
            Narhe, Pune-411041
          </p>
        </div>
      </div>
    </section>
  );
}