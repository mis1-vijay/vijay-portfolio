"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#090713] text-slate-200 px-6 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 flex items-center gap-4">
            <GraduationCap size={40} className="text-violet-400" />
            <h2 className="text-3xl md:text-4xl font-black text-slate-200">EDUCATION</h2>
          </motion.div>

          <div className="space-y-6">
            {portfolioData.education.map((edu, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-[#120f22] p-6 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                  <span className="text-violet-300 font-mono font-bold bg-violet-500/10 px-3 py-1 rounded-full text-sm">
                    {edu.score}
                  </span>
                </div>
                <p className="text-slate-400 font-mono text-sm">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 flex items-center gap-4">
            <Award size={40} className="text-fuchsia-400" />
            <h2 className="text-3xl md:text-4xl font-black text-slate-200">CERTIFICATIONS</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-4 bg-[#120f22] p-5 rounded-2xl border border-white/5 hover:border-fuchsia-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#090713] border border-white/5 flex items-center justify-center group-hover:bg-fuchsia-500/20 group-hover:text-fuchsia-300 transition-colors">
                  <Award size={18} className="text-slate-400 group-hover:text-fuchsia-400" />
                </div>
                <p className="text-slate-300 font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
