
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Who we are?</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              <strong className="text-white font-bold">“Skyline”</strong> was built on a simple belief: that ambitious businesses shouldn't be held back by lack of capital. Our mission is to blend strategic funding with zero-friction processes, helping brands not just survive, but dominate their industries.
            </p>
          </div>

          <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <img 
              src="https://picsum.photos/seed/executive/200/200" 
              className="w-16 h-16 rounded-full grayscale hover:grayscale-0 transition-all border border-white/20"
              alt="CEO"
            />
            <div>
              <div className="text-white font-bold">Marcus Sterling</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Founder & CEO</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
            Strategic funding focused on blending low-risk capital with high-velocity growth.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all">
              <div className="text-gray-400 text-xs font-bold uppercase mb-4">Our Story</div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Founded with a vision to bridge the gap between traditional banking and the modern entrepreneur. We remove the stress of rigid lending.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all">
              <div className="text-gray-400 text-xs font-bold uppercase mb-4">Target Goal</div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Empower 10,000 small businesses with interest-free starts to ensure local economies thrive through innovation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
