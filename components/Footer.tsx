"use client";
import { portfolioData } from "../data";

export default function Footer() {
  const { name } = portfolioData.personal;

  return (
    <footer className="bg-[#05040a] border-t border-white/5 py-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center text-slate-600 text-xs font-mono">
        &copy; {new Date().getFullYear()} {name}. Built for the future.
      </div>
    </footer>
  );
}
