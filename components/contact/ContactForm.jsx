"use client";
import { motion } from "framer-motion";
import { ShieldCheck, ChevronDown, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-8 bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl border border-slate-100"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 sm:mb-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0D2B45] uppercase tracking-tight">Send a Message</h2>
          <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1">We respond within 24 hours</p>
        </div>
        <ShieldCheck size={32} className="text-slate-200 hidden sm:block" />
      </div>

      <form className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1">
          <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Your Name</label>
          <input type="text" required className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-[#EAA33F] transition-all font-semibold text-[#0D2B45]" placeholder="Full name" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Work Email</label>
          <input type="email" required className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-[#EAA33F] transition-all font-semibold text-[#0D2B45]" placeholder="email@company.com" />
        </div>
        
        <div className="space-y-1">
          <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Service Required</label>
          <div className="relative">
            <select defaultValue="" className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-[#EAA33F] transition-all appearance-none font-semibold text-[#0D2B45] cursor-pointer">
              <option value="" disabled>Choose a service</option>
              <option value="industrial">Industrial Coating</option>
              <option value="waterproofing">Waterproofing</option>
              <option value="epoxy">Epoxy Flooring</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Phone Number</label>
          <input type="tel" className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-[#EAA33F] transition-all font-semibold text-[#0D2B45]" placeholder="+91" />
        </div>
        
        <div className="sm:col-span-2 space-y-1">
          <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Message</label>
          <textarea rows="4" required className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-[#EAA33F] transition-all resize-none font-semibold text-[#0D2B45]" placeholder="Tell us about your requirements..."></textarea>
        </div>
        
        <div className="sm:col-span-2 pt-2">
          <button className="w-full bg-[#0D2B45] text-white py-4 sm:py-5 rounded-xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#EAA33F] hover:text-[#0D2B45] transition-all active:scale-[0.98] shadow-lg">
            Send Inquiry <Send size={16} />
          </button>
        </div>
      </form>
    </motion.div>
  );
}