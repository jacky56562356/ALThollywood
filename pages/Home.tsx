
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Film, Star, TrendingUp, Users, Clapperboard, Monitor, Send, Search, Award, ShieldCheck, Globe, Camera, Zap, CheckCircle, Quote, ArrowRight, Trophy, Sparkles } from 'lucide-react';
import { FILMS } from '../constants';

const ECOSYSTEM_ITEMS = [
  {
    title: "Hands-on Sets",
    desc: "Experience the intensity of active soundstages. Master professional call sheets, set etiquette, and rigorous shooting schedules under the guidance of union-level crews.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Elite Training",
    desc: "A dual-focus curriculum mastering method acting and technical screen performance. From deep emotional recall to precise blocking and camera continuity.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Global Network",
    desc: "A bridge to the world's entertainment capitals. Direct production pipelines to major studios in LA, New York, and abroad, ensuring our students reach a global audience.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Career Credits",
    desc: "Graduate with a verifiable IMDb resume. We ensure every student earns professional credits, a cinematic showreel, and tangible industry recognition before they leave.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?auto=format&fit=crop&q=80&w=800"
  }
];

const TESTIMONIALS = [
  {
    quote: "ALT doesn't just teach acting; they build careers. My daughter went from a classroom to a professional set in 3 months.",
    author: "Jennifer Brooks",
    role: "Parent of Alumni",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The discipline and set etiquette these kids have is comparable to adult professionals. A joy to cast.",
    author: "Robert Harrison",
    role: "Production Director, LA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Finally, a program that understands the industry. The IMDb credits are real, and the experience is invaluable.",
    author: "Amanda Sterling",
    role: "Industry Professional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section - Slightly tighter height */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
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
          <h2 className="brand-gradient-text text-xs md:text-sm font-black tracking-[0.5em] mb-3 uppercase drop-shadow-lg">
            Training · Film Production · Global Exposure
          </h2>
          <div className="flex flex-col items-center justify-center mb-4">
            <h1 className="text-5xl md:text-8xl font-cinematic font-black brand-gradient-text leading-tight md:leading-[0.9] tracking-tighter mb-2 drop-shadow-2xl">
              ALT
            </h1>
            <h2 className="text-xl md:text-3xl font-cinematic font-bold tracking-[0.3em] uppercase text-white/95 drop-shadow-xl">
              Hollywood Dream Star
            </h2>
          </div>
          <p className="text-sm md:text-lg text-white/80 font-medium mb-6 max-w-2xl mx-auto italic tracking-wide leading-relaxed drop-shadow-md px-4">
            "The premier bridge between world-class training and real Hollywood film production for the next generation of stars."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/summer-camp" className="w-56 sm:w-auto px-8 py-4 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-black font-black rounded-sm uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(191,149,63,0.4)]">
              <Star size={14} fill="currentColor" /> 2026 Summer Camp
            </Link>
            <Link to="/programs" className="w-56 sm:w-auto px-8 py-4 brand-bg text-white font-black rounded-sm uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,229,255,0.4)]">
              <Play size={14} fill="currentColor" /> View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Summer Camp Highlight Banner */}
      <section className="bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] py-4 relative z-20 shadow-[0_0_30px_rgba(191,149,63,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-black">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-10 h-10 bg-black rounded-full items-center justify-center text-[#FCF6BA]">
              <Star size={20} fill="currentColor" />
            </div>
            <div>
              <h3 className="font-black uppercase tracking-widest text-sm md:text-base">2026 Hollywood Film Summer Camp</h3>
              <p className="text-xs font-bold opacity-80">Real Film Production Experience for Kids • Limited Spots</p>
            </div>
          </div>
          <Link to="/summer-camp" className="px-8 py-3 bg-black text-[#FCF6BA] text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:scale-105 transition-transform whitespace-nowrap shadow-xl flex items-center gap-2">
            Apply Now <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Featured Films Showcase (Visual Impact) */}
      <section className="py-10 bg-brandBlack border-b border-white/5 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-brandCyan/5 blur-3xl rounded-full pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
               <div>
                  <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-2">Now Streaming</h2>
                  <h3 className="text-3xl md:text-4xl font-cinematic font-black tracking-tight text-white">Latest Productions</h3>
               </div>
               <Link to="/films" className="flex items-center gap-2 text-brandCyan text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group">
                  View Full Library <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
               </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
               {FILMS.slice(0, 4).map((film) => (
                  <Link to="/films" key={film.id} className="group relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:border-brandCyan/50 transition-all cursor-pointer">
                     <img referrerPolicy="no-referrer"
                        src={film.posterUrl} 
                        alt={film.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="eager"
                        fetchPriority="high"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-brandBlack/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <span className="text-[9px] brand-bg text-white px-2 py-0.5 rounded w-fit mb-2 font-bold uppercase tracking-wide">{film.genre}</span>
                        <h4 className="text-sm font-bold text-white leading-tight">{film.title}</h4>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* NEW SECTION: Industry News & Awards */}
      <section className="py-12 bg-[#080808] border-b border-white/5 relative overflow-hidden min-h-[400px] flex items-center">
        {/* Background Decorative elements */}
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brandCyan/5 blur-[100px] rounded-full pointer-events-none"></div>

        {/* STARLIGHT & PARTICLES BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Gold Dust Particles */}
            {[...Array(30)].map((_, i) => (
               <div
                  key={`dust-${i}`}
                  className="absolute bg-amber-400/30 rounded-full animate-float"
                  style={{
                     top: `${Math.random() * 100}%`,
                     left: `${Math.random() * 100}%`,
                     width: `${Math.random() * 2 + 1}px`,
                     height: `${Math.random() * 2 + 1}px`,
                     animationDuration: `${Math.random() * 10 + 10}s`,
                     animationDelay: `${Math.random() * 5}s`,
                  }}
               />
            ))}
            
            {/* Twinkling Stars (Walk of Fame vibe) */}
            {[...Array(12)].map((_, i) => (
               <div
                  key={`star-${i}`}
                  className="absolute text-amber-200/20 animate-pulse"
                  style={{
                     top: `${Math.random() * 100}%`,
                     left: `${Math.random() * 100}%`,
                     animationDuration: `${Math.random() * 3 + 2}s`,
                     animationDelay: `${Math.random() * 2}s`,
                     transform: `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 45}deg)`
                  }}
               >
                  <Star size={Math.random() * 12 + 6} fill="currentColor" />
               </div>
            ))}

            {/* Magic Sparkles */}
            {[...Array(8)].map((_, i) => (
               <div
                  key={`sparkle-${i}`}
                  className="absolute text-brandCyan/30 animate-pulse"
                  style={{
                     top: `${Math.random() * 100}%`,
                     left: `${Math.random() * 100}%`,
                     animationDuration: `${Math.random() * 2 + 1.5}s`,
                     animationDelay: `${Math.random() * 3}s`,
                  }}
               >
                  <Sparkles size={Math.random() * 16 + 8} />
               </div>
            ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Header */}
          <div className="flex items-center gap-4 mb-10 justify-center">
             <div className="h-px bg-white/10 w-12 md:w-24"></div>
             <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brandGray flex items-center gap-2 text-center">
                <Sparkles size={12} className="text-amber-400" />
                Industry Recognition & Awards
             </h2>
             <div className="h-px bg-white/10 w-12 md:w-24"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-12 items-center">
             {/* News Item 1: Golden State Film Festival */}
             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 group hover:border-brandCyan/30 transition-all shadow-lg hover:shadow-brandCyan/5 backdrop-blur-sm h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brandCyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-black rounded-xl border border-white/20 flex items-center justify-center p-3 shadow-inner relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                   <img referrerPolicy="no-referrer"
                      src="https://i.ibb.co/kssxQ1DR/golden-state-film-festival-logo.jpg"
                      onError={(e) => {
                         // Fallback visual if image fails
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.nextElementSibling!.classList.remove('hidden');
                      }}
                      className="w-full h-full object-contain drop-shadow-md" 
                      alt="Golden State Film Festival" 
                      loading="lazy"
                   />
                   <div className="hidden flex flex-col items-center justify-center text-center">
                      <Film size={28} className="text-white mb-1" />
                      <span className="text-[8px] uppercase font-bold text-white leading-tight">Golden State<br/>Film Festival</span>
                   </div>
                </div>
                <div className="text-center sm:text-left flex-1 relative z-10">
                   <div className="inline-block px-3 py-1 border border-white/20 rounded-full bg-white/5 mb-2">
                       <p className="text-[9px] font-black uppercase tracking-widest text-white/90">Official Selection</p>
                   </div>
                   <h3 className="text-2xl font-cinematic font-black text-white mb-1 group-hover:text-brandCyan transition-colors">THE garden</h3>
                   <div className="w-12 h-0.5 bg-brandCyan/50 mx-auto sm:mx-0 mb-2"></div>
                   <p className="text-brandGray text-xs font-bold tracking-wide uppercase">Golden State Film Festival</p>
                   <div className="flex gap-2 mt-4 justify-center sm:justify-start">
                      <img referrerPolicy="no-referrer" src="https://i.ibb.co/Gf12rGbT/Chat-GPT-Image-2026-3-22-14-21-03.png" className="w-16 h-12 sm:w-20 sm:h-14 object-cover rounded-md border border-white/20 hover:scale-110 transition-transform shadow-md" alt="The Garden Still 1" loading="lazy" />
                      <img referrerPolicy="no-referrer" src="https://i.ibb.co/bMtVxnWT/20260301101021-372-10.jpg" className="w-16 h-12 sm:w-20 sm:h-14 object-cover rounded-md border border-white/20 hover:scale-110 transition-transform shadow-md" alt="The Garden Still 2" loading="lazy" />
                      <img referrerPolicy="no-referrer" src="https://i.ibb.co/rKrN1Sdx/20260301101027-374-10.jpg" className="w-16 h-12 sm:w-20 sm:h-14 object-cover rounded-md border border-white/20 hover:scale-110 transition-transform shadow-md" alt="The Garden Still 3" loading="lazy" />
                   </div>
                </div>
             </div>

             {/* CENTER TROPHY - Scaled down (w-14), centered, flash animation only (no movement) */}
             <div className="hidden lg:flex flex-col items-center justify-center relative mx-4">
                <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full animate-pulse"></div>
                <img referrerPolicy="no-referrer"
                   src="https://i.ibb.co/4nXRfxf5/tongxiang.png" 
                   alt="Award Trophy" 
                   className="relative w-14 h-auto object-contain animate-pulse drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                   loading="lazy"
                />
             </div>

             {/* News Item 2: Golden Feather Awards */}
             <div className="bg-gradient-to-br from-[#1a1500] to-black border border-amber-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 group hover:border-amber-500/50 transition-all shadow-lg hover:shadow-amber-500/10 relative overflow-hidden backdrop-blur-sm h-full">
                <div className="absolute top-0 right-0 w-full h-full bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-black rounded-xl border border-amber-500/30 flex items-center justify-center p-3 shadow-[0_0_30px_rgba(245,158,11,0.15)] relative z-10">
                   <img referrerPolicy="no-referrer"
                      src="https://i.ibb.co/TqJBkL9F/Chat-GPT-Image-2025-8-29-15-46-30-1.jpg"
                      onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.nextElementSibling!.classList.remove('hidden');
                      }}
                      className="w-full h-full object-contain drop-shadow-md" 
                      alt="Golden Feather Awards" 
                      loading="lazy"
                   />
                   <div className="hidden flex flex-col items-center justify-center text-center">
                      <Trophy size={28} className="text-amber-400 mb-1" />
                      <span className="text-[8px] uppercase font-bold text-amber-400 leading-tight">Golden Feather<br/>Awards</span>
                   </div>
                </div>
                <div className="text-center sm:text-left flex-1 relative z-10">
                   <div className="inline-block px-3 py-1 border border-amber-500/30 rounded-full bg-amber-500/10 mb-2">
                       <p className="text-[9px] font-black uppercase tracking-widest text-amber-400 flex items-center gap-2">
                          <Star size={8} fill="currentColor" /> Winner <Star size={8} fill="currentColor" />
                       </p>
                   </div>
                   <h3 className="text-2xl font-cinematic font-black text-white mb-1 group-hover:text-amber-400 transition-colors">THE Shift</h3>
                   <div className="w-12 h-0.5 bg-amber-500/50 mx-auto sm:mx-0 mb-2"></div>
                   <p className="text-brandGray text-xs font-bold tracking-wide uppercase">Golden Feather Awards</p>
                   <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-2">
                      <span className="text-[8px] font-bold border border-amber-500/30 text-amber-200/90 px-1.5 py-0.5 rounded bg-amber-900/20">Best Story</span>
                      <span className="text-[8px] font-bold border border-amber-500/30 text-amber-200/90 px-1.5 py-0.5 rounded bg-amber-900/20">Best Actor</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-brandBlack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-4">Our Legacy & Mission</h2>
              <h3 className="text-3xl md:text-5xl font-cinematic font-black mb-6 leading-tight tracking-tight text-white">
                Where Training Meets <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Real Film Production</span>
              </h3>
              
              <div className="space-y-6 text-brandGray text-sm md:text-base leading-relaxed font-light mb-8">
                <p>
                  ALT HOLLYWOOD DREAM STAR is not just a school; it's a launchpad. Based in Los Angeles, we operate as a full-cycle creative hub where acting training integrates seamlessly with professional filmmaking.
                </p>
                <p>
                  We provide young performers aged 6–18 with hands-on experience in professional sets, industry-standard workflows, and official film distribution. Our "Film-First" methodology ensures education translates directly to screen performance.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brandCyan/10 text-brandCyan"><CheckCircle size={16} /></div>
                  <div>
                    <h5 className="text-white font-bold mb-0.5 text-sm">Authentic Sets</h5>
                    <p className="text-xs text-brandGray">High-fidelity studio environments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="p-1 rounded-full bg-brandCyan/10 text-brandCyan"><CheckCircle size={16} /></div>
                  <div>
                    <h5 className="text-white font-bold mb-0.5 text-sm">IMDb Credits</h5>
                    <p className="text-xs text-brandGray">Verified professional recognition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="p-1 rounded-full bg-brandCyan/10 text-brandCyan"><CheckCircle size={16} /></div>
                  <div>
                    <h5 className="text-white font-bold mb-0.5 text-sm">Festival Exposure</h5>
                    <p className="text-xs text-brandGray">Submission to international film festivals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="p-1 rounded-full bg-brandCyan/10 text-brandCyan"><CheckCircle size={16} /></div>
                  <div>
                    <h5 className="text-white font-bold mb-0.5 text-sm">Global Reach</h5>
                    <p className="text-xs text-brandGray">Festivals & Streaming platforms.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-brandCyan/20 blur-[100px] rounded-full opacity-20"></div>
               <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="space-y-4 translate-y-8">
                     <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-2xl border border-white/10 opacity-80" alt="Camera" loading="lazy" />
                     <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <p className="text-3xl font-cinematic font-black text-white mb-1">20+</p>
                        <p className="text-[10px] text-brandGray uppercase tracking-widest font-bold">Festival Selections</p>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-brandBg border border-brandCyan/20 p-6 rounded-2xl bg-gradient-to-br from-brandCyan/10 to-brandPurple/10 backdrop-blur-sm">
                        <p className="text-3xl font-cinematic font-black text-white mb-1">12+</p>
                        <p className="text-[10px] text-brandGray uppercase tracking-widest font-bold">Original Films</p>
                     </div>
                     <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-2xl border border-white/10 opacity-80" alt="Set Light" loading="lazy" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Impact Statistics */}
      <section className="py-8 border-y border-white/5 bg-brandBlack/50 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
               <div className="group">
                  <p className="text-4xl md:text-5xl font-cinematic font-black text-white mb-2 group-hover:brand-gradient-text transition-colors">80+</p>
                  <p className="text-[10px] text-brandGray uppercase tracking-[0.2em] font-bold">Youth Stars</p>
               </div>
               <div className="group">
                  <p className="text-4xl md:text-5xl font-cinematic font-black text-white mb-2 group-hover:brand-gradient-text transition-colors">30+</p>
                  <p className="text-[10px] text-brandGray uppercase tracking-[0.2em] font-bold">Trained Performers</p>
               </div>
               <div className="group">
                  <p className="text-4xl md:text-5xl font-cinematic font-black text-white mb-2 group-hover:brand-gradient-text transition-colors">20+</p>
                  <p className="text-[10px] text-brandGray uppercase tracking-[0.2em] font-bold">Festival Selections</p>
               </div>
               <div className="group">
                  <p className="text-4xl md:text-5xl font-cinematic font-black text-white mb-2 group-hover:brand-gradient-text transition-colors">8+</p>
                  <p className="text-[10px] text-brandGray uppercase tracking-[0.2em] font-bold">Industry Awards</p>
               </div>
            </div>
         </div>
      </section>

      {/* Pillars Section */}
      <section className="py-12 bg-brandBlack relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-cinematic font-black mb-4 tracking-tight text-white">Our Core Ecosystem</h2>
            <div className="w-12 h-0.5 brand-bg mx-auto mb-4"></div>
            <p className="text-brandGray max-w-2xl mx-auto text-sm leading-relaxed font-light">From initial discovery to international distribution, our system is designed for professional results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {ECOSYSTEM_ITEMS.map((item, index) => (
              <div key={index} className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-brandCyan/50 transition-all duration-500">
                <div className="absolute inset-0">
                  <img referrerPolicy="no-referrer"
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/80 to-transparent"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-12 h-12 brand-bg rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-brandCyan/20 transform group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-xl font-cinematic font-bold mb-2 text-white group-hover:brand-gradient-text transition-all">{item.title}</h4>
                  <p className="text-brandGray text-xs leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                  <div className="w-0 h-0.5 brand-bg mt-4 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Testimonials */}
      <section className="py-12 bg-[#080a0e] relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-8 text-center">Industry & Parent Voices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-2xl relative hover:bg-white/[0.07] transition-colors">
                     <Quote className="text-brandCyan/20 absolute top-6 right-6" size={40} />
                     <div className="flex items-center gap-4 mb-6">
                        <img referrerPolicy="no-referrer" src={t.image} className="w-12 h-12 rounded-full object-cover border border-white/10" alt={t.author} loading="lazy" />
                        <div>
                           <p className="text-white font-bold text-sm">{t.author}</p>
                           <p className="text-brandGray text-xs uppercase tracking-wider">{t.role}</p>
                        </div>
                     </div>
                     <p className="text-brandGray text-sm italic leading-relaxed">"{t.quote}"</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden text-center flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-brandBlack">
             {/* Grayscale Big Screen Effect */}
             <img referrerPolicy="no-referrer"
               src="https://i.ibb.co/5xXXdHrB/u8238228639-v-7-f5d92d51-ca1a-4aea-9a0c-c19abca23644-1.png" 
               className="w-full h-full object-cover opacity-60 grayscale brightness-75 contrast-125" 
               alt="Classic Hollywood Cinema" 
               loading="lazy" 
             />
             {/* Silver/Grey Overlay to simulate a big screen */}
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/50 to-gray-900/80 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-black/80 opacity-60"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           {/* Box styles updated to match grey screen theme */}
           <div className="bg-white/5 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-white/10 shadow-2xl animate-fade-up">
              <h2 className="text-4xl md:text-6xl font-cinematic font-black mb-4 tracking-tighter drop-shadow-2xl text-white">Your Hollywood Debut Awaits</h2>
              <p className="text-white/80 text-lg md:text-xl mb-8 font-medium tracking-wide drop-shadow-lg max-w-2xl mx-auto">
                Step onto the big screen. The audience is waiting for your performance.
              </p>
              <a href="mailto:altdreamstar@gmail.com" className="inline-block px-14 py-6 bg-white text-black font-black rounded-full uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.4)] text-xs md:text-sm hover:bg-gray-200">
                Apply Now
              </a>
           </div>
        </div>
      </section>
    </div>
  );
}
