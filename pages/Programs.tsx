
import React from 'react';
import { Layout, Video, Share2, Trophy, Award, Star, History as HistoryIcon, Sparkles, Clapperboard, Mic2, Users, Film } from 'lucide-react';
import { HISTORY } from '../constants';

const FESTIVAL_IMAGES = [
  "https://i.ibb.co/rKMzdsBR/DSC00105-edited.jpg",
  "https://i.ibb.co/DcFdsvB/DSC00101-edited.jpg",
  "https://i.ibb.co/mVLjTDxj/DSC00090-edited.jpg",
  "https://i.ibb.co/1kdG6hS/DSC00074-edited.jpg",
  "https://i.ibb.co/354mNfx4/DSC00048-edited.jpg",
  "https://i.ibb.co/QvxzDBmj/DSC00021-edited.jpg",
  "https://i.ibb.co/Dgtd13Zm/DSC00025-edited.jpg",
  "https://i.ibb.co/S4dhM5h4/ba7e5988f9f6f47f8b22f59fedb551e5.jpg",
  "https://i.ibb.co/TqHKNcjx/1731693e1e0ea8102582bec61f0aed1d.jpg",
  "https://i.ibb.co/CsXTwYVB/789f8972a2a611f0a39472362ca9b9d2.jpg",
  "https://i.ibb.co/tpMxQ0z3/93e11fe81b005b241daf7fe0ede317e1.jpg",
  "https://i.ibb.co/1JdcHFK9/179b50bd376d8cfa82289e99501dac49-1.jpg",
  "https://i.ibb.co/1Gj2K8CX/d92babf9ca9b15b9fe754beaa383a6cf.jpg"
];

const MENTORSHIP_IMAGES = [
  "https://i.ibb.co/Z1kzfsbV/20260122155720-1660-151.jpg",
  "https://i.ibb.co/MWc9sm4/20260122155732-1661-151.jpg",
  "https://i.ibb.co/gMwR9pqv/20260122155743-1662-151.jpg",
  "https://i.ibb.co/Y4DfD2Vw/20260122155809-1664-151.jpg",
  "https://i.ibb.co/Q3gXL7Gt/20260122155814-1665-151.jpg",
  "https://i.ibb.co/6JTLb8tt/20260122155823-1666-151.jpg",
  "https://i.ibb.co/F45Tp6qP/20260122155828-1667-151.jpg",
  "https://i.ibb.co/0ynzzbsf/20260122155834-1668-151.jpg",
  "https://i.ibb.co/Mxz5tV1h/20260122155855-1671-151.jpg",
  "https://i.ibb.co/qLx5FzvQ/20260122155926-1673-151.jpg"
];

const ProgramSection = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
  <div className="bg-white/5 border border-white/5 p-4 rounded-xl hover:border-brandCyan/30 transition-all group relative overflow-hidden h-full">
    <div className="w-7 h-7 brand-bg text-white rounded-lg flex items-center justify-center mb-3 shadow-lg shadow-brandCyan/20">
      <Icon size={14} />
    </div>
    <h3 className="text-base font-cinematic font-bold mb-2 tracking-tight group-hover:brand-gradient-text transition-all">{title}</h3>
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-brandGray text-[9px] font-medium">
          <div className="w-0.5 h-0.5 brand-bg rounded-full shrink-0"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function Programs() {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Programs Header */}
        <div className="max-w-3xl mb-6">
          <h2 className="brand-gradient-text text-[9px] font-black tracking-[0.4em] uppercase mb-1">Curriculum</h2>
          <h1 className="text-2xl md:text-5xl font-cinematic font-black mb-2 tracking-tight leading-tight">Professional Pathways</h1>
          <p className="text-brandGray text-[10px] md:text-xs font-light leading-snug">Comprehensive integration of cinematic education and industry-standard workflows.</p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-10">
          <ProgramSection 
            icon={Layout}
            title="Acting Mastery"
            items={["Acting Fundamentals", "Camera Performance", "Emotional Delivery", "On-Set Professionalism"]}
          />
          <ProgramSection 
            icon={Video}
            title="Film Production"
            items={["Script Development", "Casting & Rehearsals", "Professional Filming", "IMDb Post-Production Credits"]}
          />
          <ProgramSection 
            icon={Share2}
            title="Global Exposure"
            items={["Streaming Releases", "Film Festival Strategy", "Industry Showcases", "Agency Signing Pathways"]}
          />
        </div>
      </div>

      {/* NEW: Hollywood Mentorship Program Section */}
      <div className="relative w-full py-8 mb-8 overflow-hidden bg-[#0a0a0a]">
         {/* Background Texture */}
         <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-brandBlack via-transparent to-brandBlack z-10"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            {/* Cinematic Header */}
            <div className="text-center mb-5">
               <div className="flex items-center justify-center gap-3 mb-1.5">
                 <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-amber-400"></div>
                 <Star className="text-amber-400 fill-amber-400" size={8} />
                 <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-amber-400"></div>
               </div>
               <h2 className="text-amber-100/80 text-[8px] font-black tracking-[0.5em] uppercase mb-1">The Elite Academy</h2>
               <h1 className="text-2xl md:text-5xl font-cinematic font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-600 mb-1 drop-shadow-2xl tracking-tight">Hollywood Mentorship</h1>
               <p className="text-white/60 text-xs font-light max-w-3xl mx-auto leading-snug italic">
                 "Immersing students in the professional world of cinema, guided by industry directors."
               </p>
            </div>

            {/* Content Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-6">
               <div className="space-y-3">
                  <div className="flex gap-3">
                     <div className="w-7 h-7 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-400 bg-amber-900/10 shadow-[0_0_20px_rgba(251,191,36,0.2)] shrink-0">
                        <Clapperboard size={14} />
                     </div>
                     <div>
                        <h3 className="text-sm font-cinematic font-bold text-amber-100 mb-0.5">On-Set Immersion</h3>
                        <p className="text-white/70 text-[10px] leading-relaxed font-light">
                           Train on active soundstages with professional lighting and crews. Learn to hit marks and perform under real "Action!"
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-3">
                     <div className="w-7 h-7 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-400 bg-amber-900/10 shadow-[0_0_20px_rgba(251,191,36,0.2)] shrink-0">
                        <Users size={14} />
                     </div>
                     <div>
                        <h3 className="text-sm font-cinematic font-bold text-amber-100 mb-0.5">Director-Led Coaching</h3>
                        <p className="text-white/70 text-[10px] leading-relaxed font-light">
                           Instruction from working Hollywood directors. Real-time direction on the nuances of a booked role.
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-3">
                     <div className="w-7 h-7 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-400 bg-amber-900/10 shadow-[0_0_20px_rgba(251,191,36,0.2)] shrink-0">
                        <Film size={14} />
                     </div>
                     <div>
                        <h3 className="text-sm font-cinematic font-bold text-amber-100 mb-0.5">Official IMDb Credits</h3>
                        <p className="text-white/70 text-[10px] leading-relaxed font-light">
                           Legitimate productions. Graduate with a verified IMDb page and a professional reel.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Hero Image Collage */}
               <div className="relative">
                  <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full opacity-20"></div>
                  <div className="grid grid-cols-2 gap-2 relative">
                     <img src={MENTORSHIP_IMAGES[0]} className="w-full h-28 object-cover rounded-lg border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-700" alt="Director mentoring student" loading="lazy" />
                     <img src={MENTORSHIP_IMAGES[2]} className="w-full h-28 object-cover rounded-lg border border-white/10 shadow-2xl translate-y-3 hover:scale-105 transition-transform duration-700" alt="Camera crew" loading="lazy" />
                  </div>
               </div>
            </div>

            {/* BTS Gallery Grid */}
            <div className="space-y-2">
               <h3 className="text-center text-amber-200/50 text-[7px] font-black uppercase tracking-[0.4em] mb-1">Behind The Scenes</h3>
               <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5">
                  {MENTORSHIP_IMAGES.slice(3, 8).map((img, idx) => (
                     <div key={idx} className="aspect-[4/3] rounded-md overflow-hidden border border-white/5 relative group cursor-pointer">
                        <img src={img} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="On set" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5">
                           <span className="text-[7px] text-amber-400 uppercase font-bold tracking-widest">Still</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Section: Festival Success & Confidence */}
        <div className="mb-8 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5 items-center">
             <div>
                <h2 className="brand-gradient-text text-[9px] font-black tracking-[0.4em] uppercase mb-1">Awards & Confidence</h2>
                <h1 className="text-2xl md:text-5xl font-cinematic font-black mb-2 tracking-tight leading-tight">The Power of Recognition</h1>
                <div className="space-y-1.5 text-brandGray text-[10px] font-light leading-snug">
                  <p>
                    Students routinely participate in prestigious international film festivals, experiencing the tangible rewards of their dedication.
                  </p>
                  <p>
                    Standing on the podium and receiving accolades fuels their confidence, turning aspiring young talents into poised professionals.
                  </p>
                </div>
             </div>
             <div className="bg-white/5 border border-white/10 p-4 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 brand-bg opacity-10 blur-3xl rounded-full"></div>
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-8 h-8 brand-bg rounded-full flex items-center justify-center text-white shadow-xl shadow-brandCyan/20">
                      <Trophy size={16} />
                   </div>
                   <div>
                      <p className="text-xl font-cinematic font-black text-white">50+</p>
                      <p className="text-[8px] text-brandGray uppercase tracking-widest font-bold">International Awards</p>
                   </div>
                </div>
                <p className="italic text-brandGray text-[9px] leading-snug">"The awards are just the beginning; the self-belief they gain lasts a lifetime."</p>
             </div>
          </div>

          {/* Compact Grid for Awards */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 mb-5">
            {FESTIVAL_IMAGES.map((src, i) => (
              <div key={i} className="group relative rounded-lg overflow-hidden border border-white/10 aspect-[3/4] hover:border-brandCyan/50 transition-all duration-300 bg-brandBlack">
                <img 
                  src={src} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt="Festival Award Moment" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brandBlack/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Award className="text-brandCyan" size={14} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-1 opacity-40">
             <div className="flex items-center gap-3 w-full max-w-md">
                <div className="h-px bg-gradient-to-r from-transparent via-brandCyan to-transparent flex-1"></div>
                <div className="flex gap-1.5 text-brandCyan">
                   <Sparkles size={6} />
                   <Star size={8} fill="currentColor" />
                   <Sparkles size={6} />
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-brandPurple to-transparent flex-1"></div>
             </div>
             <p className="text-[7px] uppercase tracking-[0.3em] font-bold text-brandGray">Excellence in Motion</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* History Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-5">
            <h2 className="brand-gradient-text text-[9px] font-black tracking-[0.4em] uppercase mb-0.5">Our Evolution</h2>
            <h1 className="text-2xl md:text-5xl font-cinematic font-black tracking-tight">7 Years of Excellence</h1>
            <p className="text-brandGray text-[10px] mt-0.5 max-w-2xl mx-auto leading-relaxed">From Los Angeles foundation to premier youth film platform.</p>
          </div>

          <div className="relative border-l-2 border-brandCyan/30 ml-3 md:ml-0 md:left-1/2">
            {HISTORY.map((item, index) => (
              <div key={index} className={`relative mb-4 md:w-1/2 ${index % 2 === 0 ? 'md:left-[-50%] md:pr-6 md:text-right' : 'md:left-0 md:pl-6'}`}>
                {/* Timeline Dot */}
                <div className={`absolute top-0 w-2.5 h-2.5 brand-bg rounded-full border-2 border-brandBlack shadow-[0_0_15px_rgba(0,210,255,0.6)] ${index % 2 === 0 ? '-left-[6px] md:left-auto md:-right-[6px]' : '-left-[6px]'}`}></div>
                
                <div className={`animate-in fade-in slide-in-from-bottom duration-1000 group pl-2 md:pl-0`}>
                   {/* Image Card - Reduced Size */}
                   <div className={`w-4/5 md:w-[45%] aspect-video rounded-lg overflow-hidden border border-white/10 mb-1.5 relative shadow-lg ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      {item.imageUrl && (
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-brandBlack/80 via-transparent to-transparent"></div>
                      <div className={`absolute bottom-1.5 ${index % 2 === 0 ? 'right-2' : 'left-2'}`}>
                        <span className="px-1.5 py-0.5 brand-bg text-white text-[7px] font-black uppercase tracking-widest rounded-full">Year {index + 1}</span>
                      </div>
                   </div>

                   {/* Content */}
                  <span className="text-sm font-cinematic font-black brand-gradient-text block mb-0.5 tracking-wider">{item.year}</span>
                  <h3 className="text-xs font-bold text-white mb-0.5 tracking-wide">{item.title}</h3>
                  <p className="text-brandGray leading-snug text-[9px] font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
