
import React from 'react';
import { ACTORS } from '../constants';

export default function YouthActors() {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Youth Talents</h2>
          <h1 className="text-6xl font-cinematic font-black mb-8 tracking-tight">Our Stars</h1>
          <p className="text-brandGray text-xl font-light leading-relaxed">
            Selected, trained, and developed through real film projects, building professional portfolios and industry-ready experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {ACTORS.map((actor) => (
            <div key={actor.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 border border-white/10 group-hover:border-brandCyan/50 transition-all duration-500">
                <img 
                  src={actor.imageUrl} 
                  alt={actor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandPurple/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <p className="text-[10px] text-brandCyan uppercase font-black tracking-[0.2em] mb-2">Capabilities</p>
                  <p className="text-xs text-white/90 font-medium leading-relaxed">{actor.skills.join(" · ")}</p>
                </div>
              </div>
              <h3 className="text-2xl font-cinematic font-bold tracking-wide group-hover:brand-gradient-text transition-all mb-1">{actor.name}</h3>
              <p className="text-[10px] text-brandGray font-black uppercase tracking-widest mb-3">Age Tier: {actor.ageRange}</p>
              <div className="flex flex-wrap gap-2">
                {actor.credits.slice(0, 1).map((credit, i) => (
                  <span key={i} className="text-[9px] font-black tracking-widest px-3 py-1 border border-brandCyan/30 rounded-full text-brandCyan/80 uppercase">
                    {credit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
