import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants.tsx';
import { ChevronRight } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-20 -left-20 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none">
        Services
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-2 h-2 bg-red-600 rounded-full" />
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Our Services</span>
        </div>

        <div className="space-y-4">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="text-red-600 font-mono text-sm">({benefit.id})</span>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                  {benefit.title}
                </h3>
              </div>
              
              <div className="max-w-md">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {benefit.description}
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 font-bold uppercase">Scalable</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 font-bold uppercase">0% Potential</span>
                </div>
              </div>

              <div className="hidden md:flex absolute right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <ChevronRight className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};