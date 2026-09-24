"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Download, ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  const { name, role, summary } = portfolioData.personal;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#090713] text-slate-100 overflow-hidden px-6 lg:px-16 pt-20">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1b33_1px,transparent_1px),linear-gradient(to_bottom,#1f1b33_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10 w-full">
        
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, type: "spring", bounce: 0.4 }} className="relative flex justify-center lg:justify-start order-1">
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="absolute inset-0 rounded-full border border-violet-900/30 border-dashed opacity-80"></motion.div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-violet-500/40 to-fuchsia-600/40 blur-[3px] opacity-60"></div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="absolute inset-[5px] bg-[#090713] rounded-full p-2 flex items-center justify-center overflow-hidden z-10 border border-white/5 cursor-pointer">
              <span className="text-violet-400/50 font-mono text-sm tracking-widest animate-pulse">[ DROP_PHOTO_HERE ]</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring", bounce: 0.3 }} className="text-left space-y-8 order-2 lg:pl-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              <span className="text-slate-300">HI, I'M</span><br />
              <motion.span initial={{ backgroundPosition: "0% 50%" }} animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="bg-[length:200%_auto] bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg block">
                {name.toUpperCase()}
              </motion.span>
            </h1>
            
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 text-xl md:text-2xl font-mono text-slate-400 border-l-4 border-violet-500 pl-4 mt-6 w-fit cursor-default">
              <Terminal size={24} className="text-violet-400" />
              <span>{role}</span>
            </motion.div>
          </div>

          <p className="text-lg text-slate-400 leading-relaxed bg-[#120f22]/60 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
            {summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6">
            <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139,92,246,0.4)" }} whileTap={{ scale: 0.95 }} href="#projects" className="group relative flex items-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-xl font-bold transition-all">
              Explore Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            {/* Button Text Updated */}
            <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(139,92,246,0.1)" }} whileTap={{ scale: 0.95 }} href="/VIJAY_RESUME_2026.pdf" target="_blank" className="flex items-center gap-2 border border-white/10 px-8 py-4 rounded-xl font-bold transition-all text-slate-300 bg-[#120f22]">
              <Download size={18} /> Check Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
