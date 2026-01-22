
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Film, Star, TrendingUp, Users, Clapperboard, Monitor, Send, Search, Award, ShieldCheck, Globe, Camera, Zap, CheckCircle } from 'lucide-react';

const StatCard = ({ label, value }: { label: string, value: string }) => (
  <div className="text-center p-6 border border-white/5 bg-white/5 rounded-xl hover:border-brandCyan/30 transition-all group">
    <div className="text-3xl md:text-4xl font-cinematic font-black brand-gradient-text mb-2 group-hover:scale-110 transition-transform">
      {value}
    </div>
    <div className="text-[10px] uppercase tracking-[0.2em] text-brandGray font-bold">{label}</div>
  </div>
);

const FeatureBox = ({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) => (
  <div className="p-8 border-l border-brandCyan/20 hover:border-brandCyan bg-white/5 transition-all group">
    <div className="text-brandCyan mb-6 group-hover:brand-gradient-text transition-all">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-cinematic font-bold mb-4 tracking-wide group-hover:brand-gradient-text">{title}</h3>
    <p className="text-brandGray text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Hero Section - Clean Spacing */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Film production set"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <h2 className="brand-gradient-text text-xs md:text-sm font-black tracking-[0.5em] mb-10 uppercase">
            Training · Film Production · Global Casting
          </h2>
          <div className="flex flex-col items-center justify-center mb-16">
            <h1 className="text-7xl md:text-[11rem] font-cinematic font-black brand-gradient-text leading-tight md:leading-[0.9] tracking-tighter mb-4">
              ALT
            </h1>
            <h2 className="text-2xl md:text-5xl font-cinematic font-bold tracking-[0.3em] uppercase text-white/95">
              Hollywood Dream Star
            </h2>
          </div>
          <p className="text-lg md:text-2xl text-white/60 font-medium mb-12 max-w-3xl mx-auto italic tracking-wide leading-relaxed">
            "The premier bridge between world-class training and real Hollywood film production for the next generation of stars."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/programs" className="w-full sm:w-auto px-10 py-5 brand-bg text-white font-black rounded-sm uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brandCyan/20">
              <Play size={18} fill="currentColor" /> View Programs
            </Link>
            <Link to="/films" className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 hover:border-brandCyan hover:text-brandCyan text-white font-black rounded-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
              <Film size={18} /> Explore Films
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Detailed Introduction Section */}
      <section className="py-32 bg-brandBlack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-6">Our Legacy & Mission</h2>
              <h3 className="text-4xl md:text-5xl font-cinematic font-black mb-10 leading-tight tracking-tight">A Professional Youth Film Ecosystem Based in Los Angeles</h3>
              
              <div className="space-y-6 text-brandGray text-lg leading-relaxed mb-12 font-light">
                <p>
                  ALT HOLLYWOOD DREAM STAR is a Los Angeles–based professional youth film institution built upon the Hollywood production system. We operate as a full-cycle creative hub where training meets real-world execution.
                </p>
                <p>
                  We integrate structured acting training with real film production, providing young talents aged 6–18 with hands-on experience in professional sets, industry-standard workflows, and official film distribution. Our students are treated as professional actors from day one, working alongside experienced directors and crews.
                </p>
                <p>
                  Our unique "Film-First" methodology ensures that education is never theoretical. Every technique taught in our studios is immediately applied in front of the camera, culminating in IMDb-eligible credits and a portfolio that commands attention from top-tier agencies.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-brandCyan mt-1 shrink-0" size={20} />
                  <div>
                    <h5 className="text-white font-bold mb-1">Authentic Sets</h5>
                    <p className="text-xs text-brandGray">Learning in high-fidelity environments with pro lighting and sound.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-brandCyan mt-1 shrink-0" size={20} />
                  <div>
                    <h5 className="text-white font-bold mb-1">IMDb Credits</h5>
                    <p className="text-xs text-brandGray">Verified industry recognition for every major student project.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-brandCyan mt-1 shrink-0" size={20} />
                  <div>
                    <h5 className="text-white font-bold mb-1">Agency Access</h5>
                    <p className="text-xs text-brandGray">Direct submissions to our network of 100+ partner agencies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-brandCyan mt-1 shrink-0" size={20} />
                  <div>
                    <h5 className="text-white font-bold mb-1">Global Reach</h5>
                    <p className="text-xs text-brandGray">Official entries into festivals and streaming platform distribution.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-square group">
                <img 
                  src="https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-1000"
                  alt="Professional film equipment"
                />
                <div className="absolute inset-0 brand-bg opacity-[0.05]"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                  <div className="bg-brandBlack/80 backdrop-blur-xl p-8 border border-white/10 rounded-2xl shadow-2xl">
                    <p className="text-brandCyan text-[10px] font-black uppercase tracking-[0.3em] mb-4">Hollywood Standard</p>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-4xl font-cinematic font-black text-white">100+</p>
                        <p className="text-[10px] text-brandGray uppercase tracking-widest font-bold">Partner Agencies</p>
                      </div>
                      <div>
                        <p className="text-4xl font-cinematic font-black text-white">12+</p>
                        <p className="text-[10px] text-brandGray uppercase tracking-widest font-bold">Films Produced</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-10 bg-white/5 border border-white/10 rounded-3xl text-center hover:border-brandCyan/30 transition-all">
                  <p className="text-3xl font-cinematic font-black brand-gradient-text">80+</p>
                  <p className="text-[10px] text-brandGray uppercase tracking-widest mt-2 font-bold">Youth Stars</p>
                </div>
                <div className="p-10 bg-white/5 border border-white/10 rounded-3xl text-center hover:border-brandCyan/30 transition-all">
                  <p className="text-3xl font-cinematic font-black brand-gradient-text">15+</p>
                  <p className="text-[10px] text-brandGray uppercase tracking-widest mt-2 font-bold">Prod. Houses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 bg-brandBlack/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-cinematic font-black mb-6 tracking-tight">Our Core Ecosystem</h2>
            <div className="w-24 h-1 brand-bg mx-auto mb-8"></div>
            <p className="text-brandGray max-w-2xl mx-auto text-lg">From initial discovery to international distribution, our system is designed for professional results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-10 bg-white/5 border border-white/5 rounded-2xl">
              <Camera className="text-brandCyan mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">Hands-on Sets</h4>
              <p className="text-brandGray text-sm">Experience real filming schedules, professional cues, and set etiquette.</p>
            </div>
            <div className="p-10 bg-white/5 border border-white/5 rounded-2xl">
              <Zap className="text-brandPurple mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">Elite Training</h4>
              <p className="text-brandGray text-sm">Advanced curriculum from emotional range to camera technicals.</p>
            </div>
            <div className="p-10 bg-white/5 border border-white/5 rounded-2xl">
              <Globe className="text-brandCyan mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">Global Network</h4>
              <p className="text-brandGray text-sm">Partnerships spanning LA to international creative capitals.</p>
            </div>
            <div className="p-10 bg-white/5 border border-white/5 rounded-2xl">
              <Award className="text-brandPurple mb-6" size={32} />
              <h4 className="text-xl font-bold mb-4">Career Credits</h4>
              <p className="text-brandGray text-sm">Building professional credibility through tangible film outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 relative overflow-hidden text-center">
        <div className="absolute inset-0 brand-bg opacity-10 blur-3xl scale-150"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-cinematic font-black mb-10 tracking-tighter">Your Hollywood Debut Awaits</h2>
          <p className="text-brandGray text-xl mb-16 font-medium tracking-wide">Take the first step toward becoming a professional signed actor.</p>
          <Link to="/apply" className="inline-block px-16 py-6 brand-bg text-white font-black rounded-full uppercase tracking-[0.3em] hover:scale-110 transition-all shadow-[0_0_40px_rgba(0,210,255,0.4)]">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
