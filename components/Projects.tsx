"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data";
import { FolderGit2, ExternalLink, Sparkles, X, Image as ImageIcon } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Background scroll lock jab popup khula ho
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-[#090713] text-slate-200 px-6 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-slate-300">TECHNICAL</span> <span className="text-violet-400">PROJECTS</span>
          </h2>
          <div className="w-20 h-1 bg-violet-500/50 rounded-full"></div>
        </motion.div>

        {/* 3-Column Grid for Desktop (lg:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }} 
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(139,92,246,0.15)" }}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col bg-[#120f22] p-8 rounded-2xl border border-white/5 hover:border-violet-500/50 transition-all cursor-pointer h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring" }}>
                  <FolderGit2 size={40} className="text-violet-400/80" />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-4 text-sm font-medium line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono font-bold text-slate-400 bg-[#090713] px-3 py-1 rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }} 
              onClick={(e) => e.stopPropagation()} 
              className="bg-[#120f22] border border-white/10 w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-y-auto flex flex-col shadow-2xl relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-6 right-6 p-2 bg-[#090713] rounded-full hover:bg-violet-600 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-black text-slate-100 mb-4 pr-12">
                  {selectedProject.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.techStack.map((tech: string, i: number) => (
                    <span key={i} className="text-xs font-mono font-bold text-violet-300 bg-violet-900/30 px-3 py-1 rounded-md border border-violet-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-[#090713]/50 p-6 rounded-xl border border-white/5 mb-8">
                  <p className="text-slate-300 text-lg mb-4">{selectedProject.description}</p>
                  <p className="text-slate-400 text-sm mb-4"><strong>Core Function:</strong> {selectedProject.specialDescription}</p>
                  <p className="text-violet-300/80 text-sm flex items-start gap-2">
                    <Sparkles size={16} className="shrink-0 mt-0.5 text-violet-400/70" /> 
                    <span className="italic">{selectedProject.uniqueness}</span>
                  </p>
                </div>

                <a 
                  href={selectedProject.liveLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-bold transition-all mb-12 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                >
                  <ExternalLink size={18} /> Go To Live Link
                </a>

                {/* Screenshots Section */}
                <div>
                  <h4 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                    <ImageIcon className="text-violet-400" /> Project Screenshots
                  </h4>
                  {/* Placeholder for screenshots - Mobile friendly grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-video bg-[#090713] border border-white/5 rounded-xl flex items-center justify-center text-slate-600 text-sm">Screenshot 1 Placeholder</div>
                    <div className="aspect-video bg-[#090713] border border-white/5 rounded-xl flex items-center justify-center text-slate-600 text-sm">Screenshot 2 Placeholder</div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
