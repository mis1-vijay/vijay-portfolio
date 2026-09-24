"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Download, ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  const { name, role, summary } = portfolioData.personal;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#090713] text-slate-100 overflow-hidden px-6 lg:px-16 pt-20">
      
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1b33_1px,transparent_1px),linear-gradient(to_bottom,#1f1b33_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center z-10 w-full">
        
        {/* Safe mobile initial animation (y: 20 instead of x/scale bugs) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: "spring", bounce: 0.4 }} className="relative flex justify-center lg:justify-start order-1">
          <div className="relative w-64 h-64 md:w-[420px] md:h-[420px]">
            
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }} 
              className="absolute inset-0 rounded-full border-2 md:border-4 border-violet-400/80 border-dashed shadow-[0_0_30px_rgba(139,92,246,0.3)] z-0"
            ></motion.div>
            
            <div className="absolute inset-2 md:inset-4 rounded-full bg-gradient-to-tr from-violet-500/40 to-fuchsia-600/40 blur-[5px] opacity-60 z-0"></div>
            
            {/* Grayscale removed, permanent color with violet glow */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="absolute inset-[10px] md:inset-[16px] bg-[#090713] rounded-full overflow-hidden z-10 border-2 border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.3)] cursor-pointer">
              <img 
                src="/IMG_20260101_210332210_HDR.jpg" 
                alt="Vijay Jadhav" 
                className="w-full h-full object-cover transition-all duration-500" 
              />
            </motion.div>
            
          </div>
        </motion.div>

        {/* Changed 'x: 50' to 'y: 30' to fix horizontal scroll issue on mobile */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring", bounce: 0.3 }} className="text-left space-y-6 md:space-y-8 order-2 lg:pl-6 w-full">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter">
              <span className="text-slate-300">HI, I'M</span><br />
              <motion.span initial={{ backgroundPosition: "0% 50%" }} animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="bg-[length:200%_auto] bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent drop-shadow-lg block">
                {name.toUpperCase()}
              </motion.span>
            </h1>
            
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-3 text-lg md:text-2xl font-mono text-slate-400 border-l-4 border-violet-500 pl-4 mt-4 md:mt-6 w-fit cursor-default">
              <Terminal size={20} className="text-violet-400 md:w-6 md:h-6" />
              <span>{role}</span>
            </motion.div>
          </div>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed bg-[#120f22]/60 p-5 md:p-6 rounded-2xl border border-white/5 backdrop-blur-md">
            {summary}
          </p>

          <div className="flex flex-row items-center gap-3 pt-4 w-full md:w-auto">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139,92,246,0.4)" }} 
              whileTap={{ scale: 0.95 }} 
              href="#projects" 
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-violet-600 text-white px-2 py-3.5 md:px-8 md:py-4 rounded-xl text-sm md:text-base font-bold transition-all whitespace-nowrap shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            >
              Projects <ArrowRight size={16} />
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(139,92,246,0.1)" }} 
              whileTap={{ scale: 0.95 }} 
              href="/VIJAY_RESUME_2026.pdf" 
              target="_blank" 
              className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-violet-500/30 px-2 py-3.5 md:px-8 md:py-4 rounded-xl text-sm md:text-base font-bold transition-all text-slate-300 bg-[#120f22] whitespace-nowrap"
            >
              <Download size={16} /> Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
