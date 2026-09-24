"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#090713] text-slate-200 px-6 lg:px-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Changed viewport margin so animation triggers properly on mobile */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px" }} transition={{ duration: 0.6 }} className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">WORK</span> EXPERIENCE
          </h2>
          <div className="w-20 h-1.5 bg-violet-500 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        {/* 'before:hidden md:before:block' hides the vertical line on mobile only */}
        <div className="relative before:hidden md:before:block before:absolute before:inset-0 md:before:left-[22px] before:h-full before:w-1 before:bg-gradient-to-b before:from-violet-500 before:via-fuchsia-500/50 before:to-transparent">
          
          {portfolioData.experience.map((exp, index) => (
            // 'pl-0 md:pl-20' removes the left spacing on mobile so card takes full width
            <div key={index} className="relative flex items-start group mb-8 md:mb-12 last:mb-0 pl-0 md:pl-20">
              
              {/* Desktop floating icon - Hidden on mobile ('hidden md:flex') */}
              <motion.div 
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "0px" }} transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                className="hidden md:flex absolute left-0 items-center justify-center w-12 h-12 rounded-full border-4 border-[#090713] bg-violet-900 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.5)] z-10 mt-1"
              >
                <Briefcase className="w-5 h-5" />
              </motion.div>

              {/* Card - Extra highlighted background on mobile ('bg-[#1a153a]') */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "0px" }} 
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.4 }} 
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(139,92,246,0.15)", borderColor: "rgba(139,92,246,0.5)" }}
                className="w-full bg-gradient-to-br from-[#1a153a] to-[#120f22] md:bg-[#120f22]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-violet-500/30 md:border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all relative overflow-hidden"
              >
                
                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-4 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                    {/* Inline icon for mobile only */}
                    <Briefcase className="w-6 h-6 text-violet-400 md:hidden" />
                    {exp.role}
                  </h3>
                  <span className="flex items-center gap-2 text-sm md:text-base font-mono text-violet-300 bg-violet-900/40 md:bg-violet-500/10 px-4 py-2 rounded-full border border-violet-500/30 w-fit font-bold">
                    <Calendar size={16} /> {exp.duration}
                  </span>
                </div>
                
                <h4 className="text-lg md:text-xl font-bold text-fuchsia-400 mb-6 relative z-10">{exp.company}</h4>
                
                <ul className="space-y-4 md:space-y-5 relative z-10">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 leading-relaxed text-base md:text-lg">
                      <CheckCircle2 size={22} className="text-violet-500 shrink-0 mt-0.5" />
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
