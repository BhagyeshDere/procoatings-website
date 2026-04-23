"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden bg-[#0D2B45]">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero/bg3.png" 
          alt="Pro Coatings Industrial Facility" 
          className="w-full h-full object-cover opacity-60 grayscale-[0.1]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B45]/60 via-[#0D2B45]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EAA33F] mb-4 block">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-tight">
            Contact <span className="text-[#EAA33F]">Us</span>
          </h1>
          <p className="text-white mt-6 max-w-xl mx-auto text-sm md:text-base font-bold px-4 drop-shadow-md">
            Have a project in mind? Our team is ready to provide expert industrial coating and waterproofing solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}