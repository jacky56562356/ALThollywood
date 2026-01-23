
import React from 'react';
import { ACTORS } from '../constants';

export default function YouthActors() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <h2 className="brand-gradient-text text-[10px] font-black tracking-[0.4em] uppercase mb-3">Youth Talents</h2>
          <h1 className="text-4xl md:text-5xl font-cinematic font-black mb-3 tracking-tight">Our Stars</h1>
          <p className="text-brandGray text-sm font-light leading-relaxed">
            Selected, trained, and developed through real film projects, building professional portfolios and industry-ready experience.
          </p>
        </div>

        {/* Increased grid columns for smaller cards on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {ACTORS.map((actor) => (
            <div key={actor.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-3 border border-white/10 group-hover:border-brandCyan/50 transition-all duration-500">
                <img 
                  src={actor.imageUrl} 
                  alt={actor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandPurple/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <p className="text-[8px] text-brandCyan uppercase font-black tracking-[0.2em] mb-1">Capabilities</p>
                  <p className="text-[9px] text-white/90 font-medium leading-relaxed">{actor.skills.slice(0, 2).join(" · ")}</p>
                </div>
              </div>
              <h3 className="text-base font-cinematic font-bold tracking-wide group-hover:brand-gradient-text transition-all mb-0.5">{actor.name}</h3>
              <p className="text-[8px] text-brandGray font-black uppercase tracking-widest mb-2">Age: {actor.ageRange}</p>
              <div className="flex flex-wrap gap-1.5">
                {actor.credits.slice(0, 1).map((credit, i) => (
                  <span key={i} className="text-[8px] font-black tracking-widest px-2 py-0.5 border border-brandCyan/30 rounded-full text-brandCyan/80 uppercase truncate max-w-full">
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
