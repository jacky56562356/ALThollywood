
import React from 'react';
// Added CheckCircle to imports
import { Target, Users2, Rocket, Building2, Award, Clapperboard, Star, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-24">
          <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">About the Institution</h2>
          <h1 className="text-6xl md:text-7xl font-cinematic font-black mb-10 tracking-tight leading-tight">Hollywood Standard. Youth Spirit.</h1>
          
          <div className="space-y-8 text-xl text-brandGray leading-relaxed font-light">
            <p>
              ALT HOLLYWOOD DREAM STAR was founded in the heart of Los Angeles with a single, uncompromising vision: to revolutionize youth acting training by placing it firmly within the context of professional film production.
            </p>
            <p>
              We identified a critical gap in the industry—where traditional acting schools focused solely on classroom exercises, the professional world demanded set experience. ALT was built to bridge that gap. Every student at our institution is an active participant in high-end cinematic productions, gaining the technical, emotional, and professional skills required to succeed in a competitive global market.
            </p>
            <div className="p-10 border-l-4 border-brandCyan bg-brandCyan/5 italic text-white/95 rounded-r-2xl">
              "Our philosophy is simple: True growth happens under the lights. We provide the platform, the production value, and the professional network to turn talent into a career."
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-32">
          <div className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-brandCyan/40 transition-all group">
            <div className="w-16 h-16 brand-bg text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-brandCyan/20 group-hover:scale-110 transition-transform">
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-cinematic font-black mb-6 group-hover:brand-gradient-text transition-colors">Professional Excellence</h3>
            <p className="text-brandGray text-sm leading-relaxed">We adhere to the same professional standards as major Hollywood productions, preparing actors for the reality of professional contracts.</p>
          </div>
          
          <div className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-brandCyan/40 transition-all group">
            <div className="w-16 h-16 brand-bg text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-brandCyan/20 group-hover:scale-110 transition-transform">
              <Clapperboard size={32} />
            </div>
            <h3 className="text-2xl font-cinematic font-black mb-6 group-hover:brand-gradient-text transition-colors">Production Hub</h3>
            <p className="text-brandGray text-sm leading-relaxed">Our facilities function as a live studio environment, where scriptwriting, casting, and filming happen under one roof.</p>
          </div>

          <div className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-brandCyan/40 transition-all group">
            <div className="w-16 h-16 brand-bg text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-brandCyan/20 group-hover:scale-110 transition-transform">
              <Star size={32} />
            </div>
            <h3 className="text-2xl font-cinematic font-black mb-6 group-hover:brand-gradient-text transition-colors">Talent Development</h3>
            <p className="text-brandGray text-sm leading-relaxed">We nurture more than just acting; we develop professional discipline, portfolio management, and industry networking skills.</p>
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-white/10 pt-40">
           <div>
              <h2 className="text-4xl font-cinematic font-black mb-8">Our Commitment to the Future</h2>
              <p className="text-brandGray text-lg leading-relaxed mb-8 font-light">
                At ALT, we believe every child has a unique star power. Our professional faculty—consisting of industry directors, producers, and acting coaches—works tirelessly to tailor education to each individual actor's strengths.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6 items-center">
                   {/* CheckCircle is now correctly imported */}
                   <CheckCircle className="text-brandCyan" size={24} />
                   <span className="text-lg font-bold">15+ Annual Professional Productions</span>
                </div>
                <div className="flex gap-6 items-center">
                   {/* CheckCircle is now correctly imported */}
                   <CheckCircle className="text-brandCyan" size={24} />
                   <span className="text-lg font-bold">100% Student Participation in On-Set Projects</span>
                </div>
                <div className="flex gap-6 items-center">
                   {/* CheckCircle is now correctly imported */}
                   <CheckCircle className="text-brandCyan" size={24} />
                   <span className="text-lg font-bold">Direct Access to Global Streaming Markets</span>
                </div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1542204113-e9354e74092b?auto=format&fit=crop&q=80&w=600" className="rounded-2xl border border-white/10" alt="Film crew" />
              <img src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=600" className="rounded-2xl border border-white/10 mt-12" alt="Acting workshop" />
           </div>
        </div>
      </div>
    </div>
  );
}
