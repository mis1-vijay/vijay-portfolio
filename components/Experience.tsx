"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#090713] text-slate-200 px-6 lg:px-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">WORK</span> EXPERIENCE
          </h2>
          <div className="w-20 h-1 bg-violet-500/50 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        {/* Perfect Center Alignment for Line: Mobile (18px) and Desktop (30px) */}
        <div className="relative before:absolute before:inset-0 before:left-[18px] md:before:left-[30px] before:h-full before:w-1 before:bg-gradient-to-b before:from-violet-500 before:via-fuchsia-500/50 before:to-transparent">
          
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative flex items-start group mb-10 md:mb-12 last:mb-0 pl-14 md:pl-24">
              
              {/* Icon with fixed sizes and removed buggy scale:0 animation */}
              <div className="absolute left-0 md:left-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#090713] bg-[#120f22] text-violet-400 group-hover:text-white group-hover:bg-violet-500 group-hover:border-violet-500 transition-all duration-300 z-10 mt-1 md:mt-1.5">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              </div>

              {/* Responsive Card Padding and Text Size */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, type: "spring", bounce: 0.3 }} className="w-full bg-[#120f22] p-5 md:p-8 rounded-2xl border border-white/5 hover:border-violet-500/50 transition-all">
                
                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-violet-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="flex items-center gap-2 text-xs md:text-sm font-mono text-violet-300/70 bg-[#090713] px-3 md:px-4 py-1.5 rounded-full border border-white/5 w-fit">
                    <Calendar size={14} /> {exp.duration}
                  </span>
                </div>
                
                <h4 className="text-base md:text-lg font-medium text-fuchsia-400/80 mb-5 md:mb-6">{exp.company}</h4>
                
                <ul className="space-y-3 md:space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed text-sm md:text-base cursor-default">
                      <CheckCircle2 size={18} className="text-violet-500/80 shrink-0 mt-0.5 md:mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
