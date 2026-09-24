"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#090713] text-slate-200 px-6 lg:px-16 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">WORK</span> EXPERIENCE
          </h2>
          <div className="w-20 h-1 bg-violet-500/50 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="relative before:absolute before:inset-0 before:left-6 md:before:left-8 before:h-full before:w-1 before:bg-gradient-to-b before:from-violet-500 before:via-fuchsia-500/50 before:to-transparent">
          
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative flex items-start group mb-12 last:mb-0 pl-20 md:pl-28">
              
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", bounce: 0.5 }} className="absolute left-0 md:left-2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#090713] bg-[#120f22] text-violet-400 group-hover:text-white group-hover:bg-violet-500 group-hover:border-violet-500 transition-all duration-300 z-10 mt-2">
                <Briefcase size={20} />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, type: "spring", bounce: 0.3 }} whileHover={{ x: 10, backgroundColor: "rgba(18, 15, 34, 0.8)" }} className="w-full bg-[#120f22] p-8 rounded-2xl border border-white/5 hover:border-violet-500/50 transition-all">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-3">
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-violet-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="flex items-center gap-2 text-sm font-mono text-violet-300/70 bg-[#090713] px-4 py-1.5 rounded-full border border-white/5 w-fit">
                    <Calendar size={14} /> {exp.duration}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-fuchsia-400/80 mb-6">{exp.company}</h4>
                
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <motion.li key={i} whileHover={{ x: 5 }} className="flex items-start gap-3 text-slate-400 leading-relaxed text-sm md:text-base cursor-default transition-transform">
                      <CheckCircle2 size={20} className="text-violet-500/80 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </motion.li>
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
