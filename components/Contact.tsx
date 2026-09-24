"use client";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "../data";

export default function Contact() {
  const { email, phone, location } = portfolioData.personal;

  return (
    <section id="contact" className="py-24 bg-[#090713] text-slate-200 px-6 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-slate-300">LET'S</span> <span className="text-violet-400">CONNECT</span>
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed text-lg">
            Looking for a developer to streamline your workflows or build robust web applications? Drop me a message.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300 text-lg">
              <div className="w-12 h-12 bg-[#120f22] flex items-center justify-center rounded-xl border border-white/5"><Mail className="text-violet-400" /></div>
              {email}
            </div>
            <div className="flex items-center gap-4 text-slate-300 text-lg">
              <div className="w-12 h-12 bg-[#120f22] flex items-center justify-center rounded-xl border border-white/5"><Phone className="text-violet-400" /></div>
              {phone}
            </div>
            <div className="flex items-center gap-4 text-slate-300 text-lg">
              <div className="w-12 h-12 bg-[#120f22] flex items-center justify-center rounded-xl border border-white/5"><MapPin className="text-violet-400" /></div>
              {location}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#120f22] p-8 rounded-2xl border border-white/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#090713] border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Your Email</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-[#090713] border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Message</label>
              <textarea rows={5} placeholder="How can I help you?" className="w-full bg-[#090713] border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"></textarea>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 rounded-xl transition-all">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
