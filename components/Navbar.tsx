
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 pointer-events-none">
      <div className="flex flex-col pointer-events-auto">
        <span className="text-white font-black text-xl tracking-tighter uppercase leading-none">Skyline</span>
        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">Enterprises</span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center pointer-events-auto">
        <a href="#about" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Who we are</a>
        <a href="#benefits" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Services</a>
        <a href="#industries" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Industries</a>
        <div className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
          <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-white">Get Started</a>
        </div>
      </div>

      <div className="md:hidden pointer-events-auto">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};
