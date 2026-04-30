"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Send, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setSelectedService(service);
    }
  }, [searchParams]);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_xsruj3j",
        "template_qtx0oxz",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: selectedService,
          message: formData.message,
        },
        "ssFZ5lwWq1_8C0WCk"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {/* --- ADVANCED UNIQUE POPUP SYSTEM --- */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            className="fixed bottom-6 right-6 z-[9999] w-[calc(100%-3rem)] sm:w-[400px]"
          >
            <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] ${
              status === "success" 
                ? "bg-white/90 border-emerald-100" 
                : "bg-white/90 border-red-100"
            }`}>
              {/* Progress Timer Bar */}
              <motion.div 
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className={`absolute bottom-0 left-0 h-1 ${
                  status === "success" ? "bg-emerald-500" : "bg-red-500"
                }`}
              />

              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${
                  status === "success" ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-600"
                }`}>
                  {status === "success" ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-[#0D2B45] uppercase tracking-tight text-sm">
                    {status === "success" ? "Inquiry Transmitted" : "Transmission Failed"}
                  </h4>
                  <p className="text-slate-500 text-xs mt-1 font-medium leading-relaxed">
                    {status === "success" 
                      ? "Your requirements have been successfully logged in our system. Our team will contact you shortly."
                      : "We encountered a protocol error. Please check your connection or try again later."}
                  </p>
                </div>
                <button onClick={() => setStatus(null)} className="text-slate-300 hover:text-slate-500 transition-colors">
                  <XCircle size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-8 bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0D2B45] uppercase tracking-tight">
              Send a Message
            </h2>
            <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1">
              Industrial Grade Support • 24h Response
            </p>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase text-[#0D2B45] tracking-widest">Server: Active</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-1">
            <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-[#EAA33F] transition-all font-semibold text-[#0D2B45]"
              placeholder="Full name"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Work Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-[#EAA33F] transition-all font-semibold text-[#0D2B45]"
              placeholder="email@company.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Service Required</label>
            <input
              type="text"
              readOnly
              value={selectedService}
              className="w-full bg-slate-100 border-none rounded-xl p-3 sm:p-4 text-sm outline-none font-bold text-[#0D2B45] cursor-not-allowed"
              placeholder="Selected Service"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-[#EAA33F] transition-all font-semibold text-[#0D2B45]"
              placeholder="+91"
            />
          </div>

          <div className="sm:col-span-2 space-y-1">
            <label className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 ml-2">Message</label>
            <textarea
              rows="4"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-50 border-none rounded-xl p-3 sm:p-4 text-sm outline-none focus:ring-2 focus:ring-[#EAA33F] transition-all resize-none font-semibold text-[#0D2B45]"
              placeholder="Tell us about your requirements..."
            />
          </div>

          <div className="sm:col-span-2 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full bg-[#0D2B45] text-white py-4 sm:py-5 rounded-xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#EAA33F] hover:text-[#0D2B45] transition-all active:scale-[0.98] shadow-lg disabled:opacity-70 disabled:cursor-wait"
            >
              {isSubmitting ? (
                <>Processing <Loader2 size={16} className="animate-spin" /></>
              ) : (
                <>Send Inquiry <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </>
  );
}