
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Our Evolution</h2>
            <h1 className="text-6xl font-cinematic font-black tracking-tight">Institutional History</h1>
            <p className="text-brandGray text-lg mt-6 max-w-2xl mx-auto">From our foundation in Los Angeles to becoming a premier youth film platform.</p>
          </div>

          <div className="relative border-l-2 border-brandCyan/30 ml-4 md:ml-0 md:left-1/2">
            {HISTORY.map((item, index) => (
              <div key={index} className={`relative mb-24 md:w-1/2 ${index % 2 === 0 ? 'md:left-[-50%] md:pr-16 md:text-right' : 'md:left-[50%] md:pl-16'}`}>
                {/* Timeline Dot */}
                <div className={`absolute top-0 w-5 h-5 brand-bg rounded-full border-4 border-brandBlack shadow-[0_0_20px_rgba(0,210,255,0.6)] ${index % 2 === 0 ? '-left-[11px] md:left-auto md:-right-[11px]' : '-left-[11px]'}`}></div>
                
                <div className="animate-in fade-in slide-in-from-bottom duration-1000">
                  <span className="text-3xl font-cinematic font-black brand-gradient-text block mb-4 tracking-wider">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{item.title}</h3>
                  <p className="text-brandGray leading-relaxed text-lg font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
