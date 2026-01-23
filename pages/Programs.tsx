
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
  <div className="bg-white/5 border border-white/5 p-10 rounded-2xl hover:border-brandCyan/30 transition-all group relative overflow-hidden h-full">
    <div className="w-14 h-14 brand-bg text-white rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-brandCyan/20">
      <Icon size={28} />
    </div>
    <h3 className="text-3xl font-cinematic font-bold mb-8 tracking-tight group-hover:brand-gradient-text transition-all">{title}</h3>
    <ul className="space-y-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-4 text-brandGray text-sm font-medium">
          <div className="w-2 h-2 brand-bg rounded-full shrink-0"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function Programs() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Programs Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Curriculum</h2>
          <h1 className="text-6xl font-cinematic font-black mb-8 tracking-tight leading-tight">Professional Pathways</h1>
          <p className="text-brandGray text-xl font-light leading-relaxed">A comprehensive integration of cinematic education and industry-standard workflows designed for the next generation of actors.</p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
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
      <div className="relative w-full py-24 mb-20 overflow-hidden bg-[#0a0a0a]">
         {/* Background Texture */}
         <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-brandBlack via-transparent to-brandBlack z-10"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            {/* Cinematic Header */}
            <div className="text-center mb-12">
               <div className="flex items-center justify-center gap-4 mb-6">
                 <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
                 <Star className="text-amber-400 fill-amber-400" size={16} />
                 <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
               </div>
               <h2 className="text-amber-100/80 text-sm font-black tracking-[0.5em] uppercase mb-4">The Elite Academy</h2>
               <h1 className="text-5xl md:text-7xl font-cinematic font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-600 mb-8 drop-shadow-2xl tracking-tight">Hollywood Mentorship</h1>
               <p className="text-white/60 text-xl font-light max-w-3xl mx-auto leading-relaxed italic">
                 "We do not just teach acting. We immerse students in the professional world of cinema, guided by the very directors shaping the industry."
               </p>
            </div>

            {/* Content Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
               <div className="space-y-12">
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-400 bg-amber-900/10 shadow-[0_0_20px_rgba(251,191,36,0.2)] shrink-0">
                        <Clapperboard size={24} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-cinematic font-bold text-amber-100 mb-3">On-Set Immersion</h3>
                        <p className="text-white/70 leading-relaxed font-light">
                           Forget the classroom. Our students train on active soundstages with professional lighting, boom operators, and camera crews. They learn to hit marks, handle props, and perform under the pressure of a real "Action!"
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-400 bg-amber-900/10 shadow-[0_0_20px_rgba(251,191,36,0.2)] shrink-0">
                        <Users size={24} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-cinematic font-bold text-amber-100 mb-3">Director-Led Coaching</h3>
                        <p className="text-white/70 leading-relaxed font-light">
                           Instruction comes directly from working Hollywood directors and producers. Students receive real-time direction, learning the subtle nuances that separate a good audition from a booked role.
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-400 bg-amber-900/10 shadow-[0_0_20px_rgba(251,191,36,0.2)] shrink-0">
                        <Film size={24} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-cinematic font-bold text-amber-100 mb-3">Official IMDb Credits</h3>
                        <p className="text-white/70 leading-relaxed font-light">
                           Every project is a legitimate production. Students graduate not just with a diploma, but with a verified IMDb page and a professional reel that commands respect from agents.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Hero Image Collage */}
               <div className="relative">
                  <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full opacity-20"></div>
                  <div className="grid grid-cols-2 gap-4 relative">
                     <img src={MENTORSHIP_IMAGES[0]} className="w-full h-64 object-cover rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-700" alt="Director mentoring student" />
                     <img src={MENTORSHIP_IMAGES[2]} className="w-full h-64 object-cover rounded-2xl border border-white/10 shadow-2xl translate-y-8 hover:scale-105 transition-transform duration-700" alt="Camera crew" />
                  </div>
               </div>
            </div>

            {/* BTS Gallery Grid */}
            <div className="space-y-6">
               <h3 className="text-center text-amber-200/50 text-xs font-black uppercase tracking-[0.4em] mb-8">Behind The Scenes</h3>
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {MENTORSHIP_IMAGES.slice(3, 8).map((img, idx) => (
                     <div key={idx} className="aspect-[4/3] rounded-lg overflow-hidden border border-white/5 relative group cursor-pointer">
                        {/* REMOVED grayscale CLASS HERE */}
                        <img src={img} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="On set" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                           <span className="text-[9px] text-amber-400 uppercase font-bold tracking-widest">Production Still</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Section: Festival Success & Confidence */}
        <div className="mb-20 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 items-center">
             <div>
                <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Awards & Confidence</h2>
                <h1 className="text-5xl font-cinematic font-black mb-8 tracking-tight leading-tight">The Power of Recognition</h1>
                <div className="space-y-6 text-brandGray text-lg font-light leading-relaxed">
                  <p>
                    At ALT Hollywood Dream Star, we believe that true confidence is forged in the spotlight. 
                    Our students routinely participate in prestigious international film festivals, where they not only showcase their work but experience the tangible rewards of their dedication.
                  </p>
                  <p>
                    Beyond technical skills, we cultivate the mindset of a winner. Standing on the podium, receiving accolades from industry peers, and celebrating victory with their ensemble creates a profound sense of achievement. 
                  </p>
                  <p className="text-white font-medium">
                    This validation fuels their confidence, turning aspiring young talents into poised professionals who believe in their own star power.
                  </p>
                </div>
             </div>
             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 brand-bg opacity-10 blur-3xl rounded-full"></div>
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-16 h-16 brand-bg rounded-full flex items-center justify-center text-white shadow-xl shadow-brandCyan/20">
                      <Trophy size={32} />
                   </div>
                   <div>
                      <p className="text-4xl font-cinematic font-black text-white">50+</p>
                      <p className="text-[10px] text-brandGray uppercase tracking-widest font-bold">International Awards Won</p>
                   </div>
                </div>
                <p className="italic text-brandGray text-sm">"Seeing our students walk the red carpet with their heads held high is the ultimate proof of our method. The awards are just the beginning; the self-belief they gain lasts a lifetime."</p>
             </div>
          </div>

          {/* Compact Grid for Awards (Smaller images, aligned neatly) */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-10">
            {FESTIVAL_IMAGES.map((src, i) => (
              <div key={i} className="group relative rounded-lg overflow-hidden border border-white/10 aspect-[3/4] hover:border-brandCyan/50 transition-all duration-300 bg-brandBlack">
                <img 
                  src={src} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt="Festival Award Moment" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brandBlack/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Award className="text-brandCyan" size={20} />
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Footer for Grid */}
          <div className="flex flex-col items-center justify-center gap-4 opacity-40">
             <div className="flex items-center gap-4 w-full max-w-md">
                <div className="h-px bg-gradient-to-r from-transparent via-brandCyan to-transparent flex-1"></div>
                <div className="flex gap-2 text-brandCyan">
                   <Sparkles size={12} />
                   <Star size={16} fill="currentColor" />
                   <Sparkles size={12} />
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-brandPurple to-transparent flex-1"></div>
             </div>
             <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-brandGray">Excellence in Motion</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20"></div>

        {/* History Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-4">Our Evolution</h2>
            <h1 className="text-5xl font-cinematic font-black tracking-tight">7 Years of Excellence</h1>
            <p className="text-brandGray text-lg mt-4 max-w-2xl mx-auto">From our foundation in Los Angeles to becoming a premier youth film platform.</p>
          </div>

          <div className="relative border-l-2 border-brandCyan/30 ml-4 md:ml-0 md:left-1/2">
            {HISTORY.map((item, index) => (
              <div key={index} className={`relative mb-8 md:w-1/2 ${index % 2 === 0 ? 'md:left-[-50%] md:pr-6 md:text-right' : 'md:left-0 md:pl-6'}`}>
                {/* Timeline Dot */}
                <div className={`absolute top-0 w-4 h-4 brand-bg rounded-full border-2 border-brandBlack shadow-[0_0_15px_rgba(0,210,255,0.6)] ${index % 2 === 0 ? '-left-[9px] md:left-auto md:-right-[9px]' : '-left-[9px]'}`}></div>
                
                <div className={`animate-in fade-in slide-in-from-bottom duration-1000 group`}>
                   {/* Image Card - Reduced Size (md:w-[50%]) */}
                   <div className={`w-3/4 md:w-[50%] aspect-video rounded-xl overflow-hidden border border-white/10 mb-3 relative shadow-lg ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      {item.imageUrl && (
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-brandBlack/80 via-transparent to-transparent"></div>
                      <div className={`absolute bottom-2 ${index % 2 === 0 ? 'right-2' : 'left-2'}`}>
                        <span className="px-2 py-0.5 brand-bg text-white text-[8px] font-black uppercase tracking-widest rounded-full">Year {index + 1}</span>
                      </div>
                   </div>

                   {/* Content */}
                  <span className="text-xl font-cinematic font-black brand-gradient-text block mb-1 tracking-wider">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-brandGray leading-relaxed text-sm font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
