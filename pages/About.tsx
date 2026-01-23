
import React from 'react';
import { Target, Users2, Rocket, Building2, Award, Clapperboard, Star, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-center">
          <div>
            <h2 className="brand-gradient-text text-[9px] font-black tracking-[0.4em] uppercase mb-1">About the Institution</h2>
            <h1 className="text-2xl md:text-5xl font-cinematic font-black mb-3 tracking-tight leading-tight">Hollywood Standard. Youth Spirit.</h1>
            
            <div className="space-y-2 text-xs md:text-sm text-brandGray leading-relaxed font-light">
              <p>
                ALT HOLLYWOOD DREAM STAR was founded in the heart of Los Angeles with a single, uncompromising vision: to revolutionize youth acting training by placing it firmly within the context of professional film production.
              </p>
              <p>
                We identified a critical gap in the industry—where traditional acting schools focused solely on classroom exercises, the professional world demanded set experience. ALT was built to bridge that gap.
              </p>
              <div className="p-3 border-l-2 border-brandCyan bg-brandCyan/5 italic text-white/90 rounded-r-lg text-[10px] leading-relaxed mt-2">
                "Our philosophy is simple: True growth happens under the lights. We provide the platform to turn talent into a career."
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
             <div className="relative rounded-lg overflow-hidden border border-white/10 group aspect-[3/4] shadow-xl shadow-brandCyan/10 w-full max-w-[240px] md:max-w-[300px]">
                <img 
                  src="https://i.ibb.co/tM4zj1Zt/blog-3.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Young talent on set"
                  loading="lazy"
                />
                <div className="absolute inset-0 brand-bg opacity-[0.05] mix-blend-overlay"></div>
             </div>
             {/* Decorative backing element */}
             <div className="absolute top-1.5 -right-1.5 w-full max-w-[240px] md:max-w-[300px] h-full border border-white/5 rounded-lg -z-10 hidden md:block"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Card 1 */}
          <div className="group rounded-lg border border-white/10 bg-white/5 overflow-hidden hover:border-brandCyan/40 transition-all">
            <div className="h-32 overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/gZhJvX2t/blog-1.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Professional Excellence"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brandBlack/40 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-2 left-3 w-6 h-6 brand-bg text-white rounded-md flex items-center justify-center shadow-lg shadow-brandCyan/20 z-10">
                  <Award size={14} />
                </div>
            </div>
            <div className="p-3">
                <h3 className="text-sm font-cinematic font-black mb-0.5 group-hover:brand-gradient-text transition-colors">Professional Excellence</h3>
                <p className="text-brandGray text-[9px] leading-snug">Adhering to major Hollywood production standards.</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group rounded-lg border border-white/10 bg-white/5 overflow-hidden hover:border-brandCyan/40 transition-all">
            <div className="h-32 overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/yFJcxk8j/blog-4.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Production Hub"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brandBlack/40 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-2 left-3 w-6 h-6 brand-bg text-white rounded-md flex items-center justify-center shadow-lg shadow-brandCyan/20 z-10">
                  <Clapperboard size={14} />
                </div>
            </div>
            <div className="p-3">
                <h3 className="text-sm font-cinematic font-black mb-0.5 group-hover:brand-gradient-text transition-colors">Production Hub</h3>
                <p className="text-brandGray text-[9px] leading-snug">Scriptwriting, casting, and filming under one roof.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group rounded-lg border border-white/10 bg-white/5 overflow-hidden hover:border-brandCyan/40 transition-all">
            <div className="h-32 overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/8DDg94mN/professional-camera-man-at-work-2022-02-09-18-59-44-utc.jpg" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Talent Development"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brandBlack/40 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-2 left-3 w-6 h-6 brand-bg text-white rounded-md flex items-center justify-center shadow-lg shadow-brandCyan/20 z-10">
                  <Star size={14} />
                </div>
            </div>
            <div className="p-3">
                <h3 className="text-sm font-cinematic font-black mb-0.5 group-hover:brand-gradient-text transition-colors">Talent Development</h3>
                <p className="text-brandGray text-[9px] leading-snug">Developing discipline, portfolios, and networking.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center border-t border-white/10 pt-8">
           <div>
              <h2 className="text-xl font-cinematic font-black mb-2">Our Commitment</h2>
              <p className="text-brandGray text-xs leading-relaxed mb-3 font-light">
                At ALT, we believe every child has a unique star power. Our professional faculty works tirelessly to tailor education to each individual actor's strengths.
              </p>
              <div className="space-y-1.5">
                <div className="flex gap-2.5 items-center">
                   <CheckCircle className="text-brandCyan" size={12} />
                   <span className="text-[10px] font-bold">15+ Annual Professional Productions</span>
                </div>
                <div className="flex gap-2.5 items-center">
                   <CheckCircle className="text-brandCyan" size={12} />
                   <span className="text-[10px] font-bold">100% Student Participation in On-Set Projects</span>
                </div>
                <div className="flex gap-2.5 items-center">
                   <CheckCircle className="text-brandCyan" size={12} />
                   <span className="text-[10px] font-bold">Direct Access to Global Streaming Markets</span>
                </div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-2">
              <img src="https://i.ibb.co/nNQnFsHd/t.png" className="rounded-lg border border-white/10 h-28 w-full object-cover" alt="On set production" loading="lazy" />
              <img src="https://i.ibb.co/x88927KP/E1138KI5.jpg" className="rounded-lg border border-white/10 mt-4 h-28 w-full object-cover" alt="Film set" loading="lazy" />
           </div>
        </div>
      </div>
    </div>
  );
}
