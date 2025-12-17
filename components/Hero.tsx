
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10" />
        
        {/* Split lighting effect like reference */}
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-20 bg-gradient-to-br from-red-600 to-transparent blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-gradient-to-bl from-blue-600 to-transparent blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText, scale: scaleText }}
        className="relative z-20 text-center px-4"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-[2px] bg-red-600" />
          <span className="text-red-600 font-bold uppercase tracking-[0.5em] text-sm">Skyline Enterprises</span>
          <div className="w-12 h-[2px] bg-red-600" />
        </div>
        
        <h1 className="text-[12vw] md:text-[18vw] font-black uppercase leading-none tracking-tighter text-white opacity-90 select-none">
          Skyline
        </h1>
        
        <div className="max-w-2xl mx-auto mt-8">
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide leading-relaxed">
            From Vision to Reality — High Impact Funding <br /> Crafted to Accelerate Your Business
          </p>
        </div>
      </motion.div>

      {/* Stats Floating */}
      <div className="absolute bottom-12 left-12 hidden lg:block z-30">
        <div className="flex gap-12 text-left">
          <div>
            <div className="text-3xl font-black text-white">0%</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Interest Starting</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white">$1M+</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Max Approval</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white">24h</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Decision Speed</div>
          </div>
        </div>
      </div>
    </section>
  );
};
