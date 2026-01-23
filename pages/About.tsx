
import React from 'react';
// Added CheckCircle to imports
import { Target, Users2, Rocket, Building2, Award, Clapperboard, Star, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section - Refactored to Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h2 className="brand-gradient-text text-[10px] font-black tracking-[0.4em] uppercase mb-3">About the Institution</h2>
            <h1 className="text-3xl md:text-5xl font-cinematic font-black mb-5 tracking-tight leading-tight">Hollywood Standard. Youth Spirit.</h1>
            
            <div className="space-y-3 text-sm text-brandGray leading-relaxed font-light">
              <p>
                ALT HOLLYWOOD DREAM STAR was founded in the heart of Los Angeles with a single, uncompromising vision: to revolutionize youth acting training by placing it firmly within the context of professional film production.
              </p>
              <p>
                We identified a critical gap in the industry—where traditional acting schools focused solely on classroom exercises, the professional world demanded set experience. ALT was built to bridge that gap. Every student at our institution is an active participant in high-end cinematic productions, gaining the technical, emotional, and professional skills required to succeed in a competitive global market.
              </p>
              <div className="p-5 border-l-2 border-brandCyan bg-brandCyan/5 italic text-white/90 rounded-r-xl text-xs leading-relaxed mt-4">
                "Our philosophy is simple: True growth happens under the lights. We provide the platform, the production value, and the professional network to turn talent into a career."
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
             <div className="relative rounded-2xl overflow-hidden border border-white/10 group aspect-[3/4] shadow-2xl shadow-brandCyan/10 w-full max-w-[320px]">
                <img 
                  src="https://i.ibb.co/tM4zj1Zt/blog-3.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Young talent on set"
                />
                <div className="absolute inset-0 brand-bg opacity-[0.05] mix-blend-overlay"></div>
             </div>
             {/* Decorative backing element */}
             <div className="absolute top-3 -right-3 w-full max-w-[320px] h-full border border-white/5 rounded-2xl -z-10 hidden md:block"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card 1: Professional Excellence */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-brandCyan/40 transition-all">
            <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/gZhJvX2t/blog-1.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Professional Excellence"
                />
                <div className="absolute inset-0 bg-brandBlack/40 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-3 left-5 w-10 h-10 brand-bg text-white rounded-xl flex items-center justify-center shadow-lg shadow-brandCyan/20 z-10">
                  <Award size={20} />
                </div>
            </div>
            <div className="p-5 pt-5">
                <h3 className="text-lg font-cinematic font-black mb-2 group-hover:brand-gradient-text transition-colors">Professional Excellence</h3>
                <p className="text-brandGray text-[11px] leading-snug">We adhere to the same professional standards as major Hollywood productions, preparing actors for the reality of professional contracts.</p>
            </div>
          </div>
          
          {/* Card 2: Production Hub */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-brandCyan/40 transition-all">
            <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/yFJcxk8j/blog-4.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Production Hub"
                />
                <div className="absolute inset-0 bg-brandBlack/40 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-3 left-5 w-10 h-10 brand-bg text-white rounded-xl flex items-center justify-center shadow-lg shadow-brandCyan/20 z-10">
                  <Clapperboard size={20} />
                </div>
            </div>
            <div className="p-5 pt-5">
                <h3 className="text-lg font-cinematic font-black mb-2 group-hover:brand-gradient-text transition-colors">Production Hub</h3>
                <p className="text-brandGray text-[11px] leading-snug">Our facilities function as a live studio environment, where scriptwriting, casting, and filming happen under one roof.</p>
            </div>
          </div>

          {/* Card 3: Talent Development */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-brandCyan/40 transition-all">
            <div className="h-40 overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/8DDg94mN/professional-camera-man-at-work-2022-02-09-18-59-44-utc.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Talent Development"
                />
                <div className="absolute inset-0 bg-brandBlack/40 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-3 left-5 w-10 h-10 brand-bg text-white rounded-xl flex items-center justify-center shadow-lg shadow-brandCyan/20 z-10">
                  <Star size={20} />
                </div>
            </div>
            <div className="p-5 pt-5">
                <h3 className="text-lg font-cinematic font-black mb-2 group-hover:brand-gradient-text transition-colors">Talent Development</h3>
                <p className="text-brandGray text-[11px] leading-snug">We nurture more than just acting; we develop professional discipline, portfolio management, and industry networking skills.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-t border-white/10 pt-12">
           <div>
              <h2 className="text-2xl font-cinematic font-black mb-3">Our Commitment to the Future</h2>
              <p className="text-brandGray text-sm leading-relaxed mb-6 font-light">
                At ALT, we believe every child has a unique star power. Our professional faculty—consisting of industry directors, producers, and acting coaches—works tirelessly to tailor education to each individual actor's strengths.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                   <CheckCircle className="text-brandCyan" size={16} />
                   <span className="text-sm font-bold">15+ Annual Professional Productions</span>
                </div>
                <div className="flex gap-3 items-center">
                   <CheckCircle className="text-brandCyan" size={16} />
                   <span className="text-sm font-bold">100% Student Participation in On-Set Projects</span>
                </div>
                <div className="flex gap-3 items-center">
                   <CheckCircle className="text-brandCyan" size={16} />
                   <span className="text-sm font-bold">Direct Access to Global Streaming Markets</span>
                </div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-3">
              <img src="https://i.ibb.co/nNQnFsHd/t.png" className="rounded-xl border border-white/10 h-40 w-full object-cover" alt="On set production" />
              <img src="https://i.ibb.co/x88927KP/E1138KI5.jpg" className="rounded-xl border border-white/10 mt-8 h-40 w-full object-cover" alt="Film set" />
           </div>
        </div>
      </div>
    </div>
  );
}
