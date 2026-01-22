
import React from 'react';
import { Layout, Video, Share2, Clock, Award, Star, History as HistoryIcon } from 'lucide-react';
import { HISTORY } from '../constants';

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
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Programs Header */}
        <div className="max-w-3xl mb-24">
          <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Curriculum</h2>
          <h1 className="text-6xl font-cinematic font-black mb-8 tracking-tight leading-tight">Professional Pathways</h1>
          <p className="text-brandGray text-xl font-light leading-relaxed">A comprehensive integration of cinematic education and industry-standard workflows designed for the next generation of actors.</p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-40">
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

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-40"></div>

        {/* History Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
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
