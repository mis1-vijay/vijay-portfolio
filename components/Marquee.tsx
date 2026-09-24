"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Zap } from "lucide-react";

export default function Marquee() {
  const allSkills = [...portfolioData.skills.languages, ...portfolioData.skills.frameworks, ...portfolioData.skills.tools];

  return (
    <div className="bg-[#120f22]/50 border-y border-white/5 py-5 my-12 overflow-hidden relative flex items-center">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }} 
        className="flex whitespace-nowrap items-center w-max"
      >
        {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
          <div key={index} className="flex items-center mx-8 text-violet-300/60 font-black text-xl tracking-widest uppercase hover:text-violet-400 transition-colors cursor-default">
            {skill} <Zap size={20} className="ml-8 text-violet-900/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
