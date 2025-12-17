
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BenefitsSection } from './components/BenefitsSection';
import { IndustriesGrid } from './components/IndustriesGrid';
import { EligibilityChecker } from './components/EligibilityChecker';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-[#050505] text-white selection:bg-red-600 selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Parallax Divider */}
        <div className="h-40 bg-gradient-to-b from-[#050505] to-[#0a0a0a]" />
        
        <About />
        
        <BenefitsSection />
        
        <IndustriesGrid />
        
        <EligibilityChecker />
      </main>

      <footer className="py-20 px-6 md:px-12 bg-black border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-left">
            <div className="text-2xl font-black uppercase tracking-tighter">Skyline</div>
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Enterprises</div>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Empowering the next generation of industry leaders with ethical, performance-based capital.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 text-xs font-bold uppercase tracking-widest text-gray-400">
            <div className="flex flex-col gap-4">
              <span className="text-white">Social</span>
              <a href="#" className="hover:text-red-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-red-600 transition-colors">Twitter (X)</a>
              <a href="#" className="hover:text-red-600 transition-colors">Instagram</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white">Legal</span>
              <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-600 transition-colors">Cookie Policy</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white">Contact</span>
              <span className="text-gray-600">funding@skyline-ent.com</span>
              <span className="text-gray-600">+1 (800) SKY-LINE</span>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-[10px] text-gray-700 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Skyline Enterprises. All Rights Reserved. Funding subject to credit and business verification.
        </div>
      </footer>
    </div>
  );
};

export default App;
