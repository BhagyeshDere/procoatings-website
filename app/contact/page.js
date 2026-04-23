"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight, ShieldCheck, Clock, ChevronDown, Compass, ExternalLink } from "lucide-react";

export default function ContactPage() {
  // Details verified from image_d1c41b.jpg
  const PHONE_1 = "+91 89999 25373";
  const PHONE_2 = "+91 77578 71617";
  const EMAIL = "procoatings2122@gmail.com";
  const ADDRESS = "Office No.1, Mangalmurti Complex, Ground Floor, Behind Audumber Complex, Narhe-Dhayari Road, Narhe, Pune - 411041";
  
  // 📍 Updated: Proper Embed URL format for Google Maps
  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.88764516315!2d73.81881647592476!3d18.443398971518776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2950555555555%3A0x6335123456789abc!2sNarhe%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713872000000!5m2!1sen!2sin";
  
  const NAV_LINK = "https://maps.app.goo.gl/YourActualLocationLink"; 

  return (
    <main className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden bg-[#0D2B45]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero/bg3.png" 
            alt="Pro Coatings Industrial Facility" 
            className="w-full h-full object-cover opacity-50 grayscale-[0.2]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B45]/95 via-[#0D2B45]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F5A623] mb-4 block">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-tight">
              Contact <span className="text-[#F5A623]">Us</span>
            </h1>
            <p className="text-white/70 mt-6 max-w-xl mx-auto text-sm md:text-base font-medium px-4">
              Have a project in mind? Our team is ready to provide expert industrial coating and waterproofing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 📦 CONTACT INFO & FORM */}
      <section className="relative z-20 -mt-12 sm:-mt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            
            {/* 🔷 LEFT: CONTACT DETAILS */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0D2B45] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 text-white shadow-2xl border border-white/5"
              >
                <h3 className="text-orange-400 font-black uppercase text-[10px] tracking-[0.4em] mb-8">Contact Details</h3>
                <div className="space-y-6 sm:space-y-8">
                  {/* Phone */}
                  <div className="flex gap-4 sm:gap-5 group">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-orange-400/20 transition-colors">
                      <Phone className="text-orange-400" size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Call Support</p>
                      <a href={`tel:${PHONE_1.replace(/\s/g, '')}`} className="text-sm sm:text-base font-bold block hover:text-orange-400 transition-colors">{PHONE_1}</a>
                      <a href={`tel:${PHONE_2.replace(/\s/g, '')}`} className="text-sm sm:text-base font-bold block hover:text-orange-400 transition-colors">{PHONE_2}</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 sm:gap-5 group">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-orange-400/20 transition-colors">
                      <Mail className="text-orange-400" size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">Email Us</p>
                      <a href={`mailto:${EMAIL}`} className="text-xs sm:text-sm font-bold truncate block hover:text-orange-400 transition-colors">{EMAIL}</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                  <Clock size={14} className="text-orange-400" />
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">Available: Mon — Sat</p>
                </div>
              </motion.div>

              {/* Address Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-xl border border-slate-100 group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 bg-orange-50 rounded-lg group-hover:bg-orange-400 transition-colors">
                    <MapPin size={18} className="text-orange-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#0D2B45] font-black uppercase text-xs tracking-widest mb-2">Our Office</h4>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                      {ADDRESS}
                    </p>
                    <a href={NAV_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-[10px] font-bold text-orange-500 uppercase tracking-widest hover:gap-3 transition-all">
                      Open in Google Maps <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 🔷 RIGHT: INQUIRY FORM */}
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
                  <input type="text" required className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-orange-400 transition-all font-semibold text-[#0D2B45]" placeholder="Full name" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Work Email</label>
                  <input type="email" required className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-orange-400 transition-all font-semibold text-[#0D2B45]" placeholder="email@company.com" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Service Required</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-orange-400 transition-all appearance-none font-semibold text-[#0D2B45] cursor-pointer">
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
                  <input type="tel" className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-orange-400 transition-all font-semibold text-[#0D2B45]" placeholder="+91" />
                </div>
                
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Message</label>
                  <textarea rows="4" required className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none font-semibold text-[#0D2B45]" placeholder="Tell us about your requirements..."></textarea>
                </div>
                
                <div className="sm:col-span-2 pt-2">
                  <button className="w-full bg-[#0D2B45] text-white py-4 sm:py-5 rounded-xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-orange-500 transition-all active:scale-[0.98] shadow-lg">
                    Send Inquiry <Send size={16} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🗺️ OFFICE LOCATION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 text-center">
          <div className="flex flex-col items-center mb-8">
            <Compass size={24} className="text-orange-400 mb-3 animate-pulse" />
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
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700 contrast-[1.1]"
            ></iframe>
            
            <a 
              href={NAV_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#0D2B45] text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-[9px] sm:text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-3 transition-all hover:bg-orange-500 z-30"
            >
              Get Directions <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 📊 FOOTER */}
      <footer className="bg-white py-8 sm:py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">System Live • Pune</span>
          </div>
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-[#0D2B45] text-center">
            © 2026 Pro Coatings • All Rights Reserved
          </p>
        </div>
      </footer>

    </main>
  );
}