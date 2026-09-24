"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#090713] text-slate-200 px-6 lg:px-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">WORK</span> EXPERIENCE
          </h2>
          <div className="w-20 h-1.5 bg-violet-500 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="relative before:absolute before:inset-0 before:left-[18px] md:before:left-[22px] before:h-full before:w-1 before:bg-gradient-to-b before:from-violet-500 before:via-fuchsia-500/50 before:to-transparent">
          
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative flex items-start group mb-12 last:mb-0 pl-14 md:pl-20">
              
              {/* Bouncing Glowing Icon */}
              <motion.div 
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                className="absolute left-0 md:left-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#090713] bg-violet-900 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.5)] z-10 mt-1"
              >
                <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              </motion.div>

              {/* Dynamic Animated Card */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring", bounce: 0.4 }} 
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(139,92,246,0.15)", borderColor: "rgba(139,92,246,0.5)" }}
                className="w-full bg-[#120f22]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg transition-all relative overflow-hidden"
              >
                
                {/* Bigger Text for Role & Date */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-4 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="flex items-center gap-2 text-sm md:text-base font-mono text-violet-300 bg-violet-500/10 px-4 py-2 rounded-full border border-violet-500/20 w-fit font-bold">
                    <Calendar size={16} /> {exp.duration}
                  </span>
                </div>
                
                {/* Bigger Text for Company */}
                <h4 className="text-lg md:text-xl font-bold text-fuchsia-400 mb-6 relative z-10">{exp.company}</h4>
                
                {/* Bigger Text for Bullet Points */}
                <ul className="space-y-4 md:space-y-5 relative z-10">
                  {exp.points.map((point, i) => (
                    <motion.li key={i} whileHover={{ x: 5 }} className="flex items-start gap-4 text-slate-300 leading-relaxed text-base md:text-lg transition-transform">
                      <CheckCircle2 size={22} className="text-violet-500 shrink-0 mt-0.5" />
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
