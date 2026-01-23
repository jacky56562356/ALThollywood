
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Film, Star, TrendingUp, Users, Clapperboard, Monitor, Send, Search, Award, ShieldCheck, Globe, Camera, Zap, CheckCircle } from 'lucide-react';

const ECOSYSTEM_ITEMS = [
  {
    title: "Hands-on Sets",
    desc: "Experience real filming schedules, professional cues, and set etiquette.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Elite Training",
    desc: "Advanced curriculum from emotional range to camera technicals.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Global Network",
    desc: "Partnerships spanning LA to international creative capitals.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Career Credits",
    desc: "Building professional credibility through tangible film outcomes.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920"
          >
            <source src="https://videos.pexels.com/video-files/3196059/3196059-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/50 to-brandBlack/30"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4 animate-fade-up">
          <h2 className="brand-gradient-text text-[8px] md:text-xs font-black tracking-[0.5em] mb-2 uppercase drop-shadow-lg">
            Training · Film Production · Global Casting
          </h2>
          <div className="flex flex-col items-center justify-center mb-3">
            <h1 className="text-4xl md:text-8xl font-cinematic font-black brand-gradient-text leading-tight md:leading-[0.9] tracking-tighter mb-1 drop-shadow-2xl">
              ALT
            </h1>
            <h2 className="text-lg md:text-3xl font-cinematic font-bold tracking-[0.3em] uppercase text-white/95 drop-shadow-xl">
              Hollywood Dream Star
            </h2>
          </div>
          <p className="text-xs md:text-base text-white/80 font-medium mb-5 max-w-xl mx-auto italic tracking-wide leading-relaxed drop-shadow-md px-4">
            "The premier bridge between world-class training and real Hollywood film production for the next generation of stars."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/programs" className="w-48 sm:w-auto px-6 py-3 brand-bg text-white font-black rounded-sm uppercase tracking-[0.2em] text-[9px] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,229,255,0.4)]">
              <Play size={10} fill="currentColor" /> View Programs
            </Link>
            <Link to="/films" className="w-48 sm:w-auto px-6 py-3 border border-white/20 hover:border-brandCyan hover:text-brandCyan text-white font-black rounded-sm uppercase tracking-[0.2em] text-[9px] transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <Film size={10} /> Explore Films
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 bg-brandBlack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <h2 className="brand-gradient-text text-[9px] font-black tracking-[0.4em] uppercase mb-1">Our Legacy & Mission</h2>
              <h3 className="text-2xl md:text-4xl font-cinematic font-black mb-3 leading-tight tracking-tight">Professional Youth Film Ecosystem in LA</h3>
              
              <div className="space-y-2 text-brandGray text-xs md:text-sm leading-relaxed font-light">
                <p>
                  ALT HOLLYWOOD DREAM STAR is a Los Angeles–based professional youth film institution built upon the Hollywood production system. We operate as a full-cycle creative hub where training meets real-world execution.
                </p>
                <p>
                  We integrate structured acting training with real film production, providing young talents aged 6–18 with hands-on experience in professional sets, industry-standard workflows, and official film distribution.
                </p>
                <p>
                  Our unique "Film-First" methodology ensures that education is never theoretical. Every technique taught in our studios is immediately applied in front of the camera.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="text-brandCyan mt-0.5 shrink-0" size={12} />
                  <div>
                    <h5 className="text-white font-bold mb-0.5 text-[10px]">Authentic Sets</h5>
                    <p className="text-[8px] text-brandGray">High-fidelity environments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="text-brandCyan mt-0.5 shrink-0" size={12} />
                  <div>
                    <h5 className="text-white font-bold mb-0.5 text-[10px]">IMDb Credits</h5>
                    <p className="text-[8px] text-brandGray">Verified recognition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="text-brandCyan mt-0.5 shrink-0" size={12} />
                  <div>
                    <h5 className="text-white font-bold mb-0.5 text-[10px]">Agency Access</h5>
                    <p className="text-[8px] text-brandGray">Direct submissions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="text-brandCyan mt-0.5 shrink-0" size={12} />
                  <div>
                    <h5 className="text-white font-bold mb-0.5 text-[10px]">Global Reach</h5>
                    <p className="text-[8px] text-brandGray">Festivals & Streaming.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 animate-in fade-in slide-in-from-right duration-1000">
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video group shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                  alt="Professional film equipment"
                  loading="lazy"
                />
                <div className="absolute inset-0 brand-bg opacity-[0.05]"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="bg-brandBlack/80 backdrop-blur-xl p-3 border border-white/10 rounded-lg shadow-lg">
                    <p className="text-brandCyan text-[7px] font-black uppercase tracking-[0.3em] mb-1">Hollywood Standard</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xl font-cinematic font-black text-white">100+</p>
                        <p className="text-[7px] text-brandGray uppercase tracking-widest font-bold">Partner Agencies</p>
                      </div>
                      <div>
                        <p className="text-xl font-cinematic font-black text-white">12+</p>
                        <p className="text-[7px] text-brandGray uppercase tracking-widest font-bold">Films Produced</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-center hover:border-brandCyan/30 transition-all">
                  <p className="text-lg font-cinematic font-black brand-gradient-text">80+</p>
                  <p className="text-[7px] text-brandGray uppercase tracking-widest mt-0.5 font-bold">Youth Stars</p>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-center hover:border-brandCyan/30 transition-all">
                  <p className="text-lg font-cinematic font-black brand-gradient-text">15+</p>
                  <p className="text-[7px] text-brandGray uppercase tracking-widest mt-0.5 font-bold">Prod. Houses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-10 bg-brandBlack relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-cinematic font-black mb-1.5 tracking-tight">Our Core Ecosystem</h2>
            <div className="w-8 h-0.5 brand-bg mx-auto mb-2"></div>
            <p className="text-brandGray max-w-2xl mx-auto text-xs leading-relaxed">From initial discovery to international distribution, our system is designed for professional results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {ECOSYSTEM_ITEMS.map((item, index) => (
              <div key={index} className="group relative h-48 md:h-60 rounded-xl overflow-hidden border border-white/10 hover:border-brandCyan/50 transition-all duration-500">
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/80 to-transparent"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-4 transform transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="w-7 h-7 brand-bg rounded-lg flex items-center justify-center text-white mb-2 shadow-lg shadow-brandCyan/20 transform group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={14} />
                  </div>
                  <h4 className="text-sm font-cinematic font-bold mb-0.5 text-white group-hover:brand-gradient-text transition-all">{item.title}</h4>
                  <p className="text-brandGray text-[9px] leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                  <div className="w-0 h-0.5 brand-bg mt-1.5 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="Stage lights" loading="lazy" />
             <div className="absolute inset-0 bg-gradient-to-r from-brandBlack via-transparent to-brandBlack"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-5xl font-cinematic font-black mb-2 tracking-tighter">Your Hollywood Debut Awaits</h2>
          <p className="text-brandGray text-xs mb-5 font-medium tracking-wide">Take the first step toward becoming a professional signed actor.</p>
          <Link to="/apply" className="inline-block px-8 py-3 brand-bg text-white font-black rounded-full uppercase tracking-[0.3em] hover:scale-110 transition-all shadow-[0_0_40px_rgba(0,210,255,0.4)] text-[9px]">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
