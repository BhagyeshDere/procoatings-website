"use client";

export default function ContactFooter() {
  return (
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
  );
}