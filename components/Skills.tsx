"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data";

export default function Skills() {
  const categories = [
    { title: "Languages", skills: portfolioData.skills.languages },
    { title: "Frameworks & Libs", skills: portfolioData.skills.frameworks },
    { title: "Databases", skills: portfolioData.skills.databases },
    { title: "Automation & Tools", skills: portfolioData.skills.tools }
  ];

  return (
    <section id="skills" className="py-24 bg-[#090713] text-slate-200 px-6 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">TECHNICAL</span> SKILLS
          </h2>
          <div className="w-20 h-1 bg-violet-500/50 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-[#120f22] p-6 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-colors">
              <h3 className="text-xl font-bold text-violet-200 mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-[#090713] border border-white/5 rounded-lg text-sm font-medium text-slate-400 hover:text-violet-300 hover:border-violet-500/40 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
