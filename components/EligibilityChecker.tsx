import React, { useState } from 'react';
import { geminiService } from '../services/geminiService.ts';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const EligibilityChecker: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const analysis = await geminiService.checkEligibility(input);
      setResult(analysis || "Error processing eligibility.");
    } catch (err) {
      setResult("Could not complete analysis. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20 text-red-600">
          <Sparkles size={120} />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Check Your Eligibility
          </h2>
          <p className="text-gray-400 mb-12">
            Tell our AI Advisor about your business goals and current revenue. We'll analyze if you're a fit for our 0% programs.
          </p>

          <div className="space-y-6">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. We are a med spa in Miami doing $80k monthly revenue, looking to open a second location and need $200k for equipment and marketing..."
              className="w-full h-40 bg-black/50 border border-white/10 rounded-2xl p-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-red-600 transition-colors resize-none"
            />
            
            <button
              onClick={handleCheck}
              disabled={loading}
              className="w-full py-6 rounded-2xl bg-white text-black font-black uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
              {loading ? "Analyzing Business Profile..." : "Analyze Eligibility Now"}
            </button>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 text-gray-300 max-w-none"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4 flex items-center gap-2">
                  <Sparkles size={14} /> AI Analysis Result
                </div>
                <div className="whitespace-pre-wrap font-light leading-relaxed">
                  {result}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs text-gray-500 italic">This is an automated preliminary check. Official approval follows document review.</span>
                  <button onClick={() => window.open('https://skyline-enterprises.com/apply', '_blank')} className="px-6 py-3 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-widest">Formal Application</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};