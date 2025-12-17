import React from 'react';
import { INDUSTRIES } from '../constants.tsx';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export const IndustriesGrid: React.FC = () => {
  return (
    <section id="industries" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
          All Industries. <br /> <span className="text-gray-600">No Exceptions.</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Whether you are in healthcare, construction, or hospitality, our funding protocols are designed for your specific industry nuances.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {INDUSTRIES.map((industry, idx) => {
          // Safer dynamic icon resolution for ESM
          const IconComponent = (Icons as any)[industry.icon] || Icons.HelpCircle;
          return (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center gap-6 group hover:border-red-600/30 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-600 group-hover:text-white transition-all text-gray-500">
                <IconComponent size={32} />
              </div>
              <span className="text-white font-bold uppercase tracking-widest text-xs group-hover:text-red-500 transition-colors">
                {industry.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};