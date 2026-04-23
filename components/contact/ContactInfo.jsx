"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, ExternalLink } from "lucide-react";

export default function ContactInfo() {
  const PHONE_1 = "+91 89999 25373";
  const PHONE_2 = "+91 77578 71617";
  const EMAIL = "procoatings2122@gmail.com";
  const ADDRESS = "Office No.1, Mangalmurti Complex, Ground Floor, Behind Audumber Complex, Narhe-Dhayari Road, Narhe, Pune - 411041";
  const NAV_LINK = "https://maps.google.com"; 

  return (
    <div className="lg:col-span-4 space-y-4 sm:space-y-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-[#0D2B45] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 text-white shadow-2xl border border-white/5"
      >
        <h3 className="text-[#EAA33F] font-black uppercase text-[10px] tracking-[0.4em] mb-8">Contact Details</h3>
        <div className="space-y-6 sm:space-y-8">
          <div className="flex gap-4 sm:gap-5 group">
            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#EAA33F]/20 transition-colors">
              <Phone className="text-[#EAA33F]" size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Call Support</p>
              <a href={`tel:${PHONE_1.replace(/\s/g, '')}`} className="text-sm sm:text-base font-bold block hover:text-[#EAA33F] transition-colors">{PHONE_1}</a>
              <a href={`tel:${PHONE_2.replace(/\s/g, '')}`} className="text-sm sm:text-base font-bold block hover:text-[#EAA33F] transition-colors">{PHONE_2}</a>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-5 group">
            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#EAA33F]/20 transition-colors">
              <Mail className="text-[#EAA33F]" size={18} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Email Us</p>
              <a href={`mailto:${EMAIL}`} className="text-xs sm:text-sm font-bold truncate block hover:text-[#EAA33F] transition-colors">{EMAIL}</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
          <Clock size={14} className="text-[#EAA33F]" />
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">Available: Mon — Sat</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-xl border border-slate-100 group"
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0 p-3 bg-orange-50 rounded-lg group-hover:bg-[#EAA33F] transition-colors">
            <MapPin size={18} className="text-[#EAA33F] group-hover:text-white" />
          </div>
          <div>
            <h4 className="text-[#0D2B45] font-black uppercase text-xs tracking-widest mb-2">Our Office</h4>
            <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed italic">
              {ADDRESS}
            </p>
            <a href={NAV_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-[10px] font-bold text-[#EAA33F] uppercase tracking-widest hover:gap-3 transition-all">
              Open in Google Maps <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}