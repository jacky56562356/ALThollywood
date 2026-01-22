
import React, { useState, useEffect } from 'react';
import { FILMS } from '../constants';
import { ChevronRight, X, ChevronLeft, Play, ArrowRight, Clock, Star, Calendar } from 'lucide-react';
import type { FilmProject } from '../types';

export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState<FilmProject | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedFilm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFilm]);

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Our Projects</h2>
          <h1 className="text-6xl font-cinematic font-black mb-8 tracking-tight">Filmography</h1>
          <p className="text-brandGray text-xl font-light leading-relaxed">
            Showcasing our regular professional short films and feature projects produced within the Hollywood system.
          </p>
        </div>

        {/* Updated Grid: 5 Columns, Vertical Posters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
          {FILMS.map((film) => (
            <div key={film.id} className="group flex flex-col h-full cursor-pointer" onClick={() => setSelectedFilm(film)}>
              {/* Vertical Poster Container (Aspect Ratio 2:3) */}
              <div className="relative aspect-[2/3] mb-6 overflow-hidden border border-white/10 rounded-lg group-hover:border-brandCyan/40 transition-all shadow-2xl bg-brandBlack">
                <img 
                  src={film.posterUrl} 
                  className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                  alt={film.title}
                />
                
                {/* Overlay Gradient (Removed mostly to keep poster clear, but kept subtle for hover effect) */}
                <div className="absolute inset-0 bg-gradient-to-t from-brandBlack/60 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 bg-brandBlack/80 backdrop-blur-md border border-white/10 text-white text-[8px] font-black uppercase tracking-widest rounded-full">
                    {film.genre}
                  </span>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-10 h-10 rounded-full bg-brandCyan text-brandBlack flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.6)] transform scale-90 group-hover:scale-100 transition-transform">
                        <Play size={16} fill="currentColor" />
                    </div>
                </div>
              </div>
              
              <h3 className="text-lg font-cinematic font-bold mb-2 leading-tight group-hover:brand-gradient-text transition-all">{film.title}</h3>
              <div className="mt-auto pt-2 border-t border-white/5">
                 <p className="text-[10px] text-brandGray font-medium line-clamp-2 mb-3">{film.description}</p>
                 <div className="flex items-center justify-between">
                     <span className="text-[9px] text-brandCyan font-black uppercase tracking-widest">Watch Now</span>
                     <ArrowRight size={12} className="text-white/50 group-hover:text-brandCyan group-hover:translate-x-1 transition-all" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Film Detail Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 bg-brandBlack/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="w-full max-w-7xl h-full md:h-[95vh] bg-brandBlack md:border border-white/10 md:rounded-3xl overflow-hidden relative shadow-2xl flex flex-col">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedFilm(null)}
              className="absolute top-6 right-6 z-[60] w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brandCyan hover:text-black transition-all border border-white/10"
            >
              <X size={20} />
            </button>

            <FilmModalContent film={selectedFilm} />

          </div>
        </div>
      )}
    </div>
  );
}

const FilmModalContent = ({ film }: { film: FilmProject }) => {
    const [currentStillIndex, setCurrentStillIndex] = useState(0);

    return (
        <div className="overflow-y-auto flex-1 custom-scrollbar relative">
          
          {/* Backdrop Header */}
          <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden pointer-events-none z-0">
             <img src={film.stills[0]} className="w-full h-full object-cover blur-2xl opacity-20" alt="Backdrop" />
             <div className="absolute inset-0 bg-gradient-to-b from-brandBlack/60 via-brandBlack/90 to-brandBlack"></div>
          </div>

          <div className="relative z-10 p-8 md:p-16">
             <div className="flex flex-col lg:flex-row gap-16">
                
                {/* Left Column: Full Poster */}
                <div className="flex-shrink-0 w-full lg:w-[350px] mx-auto lg:mx-0">
                   <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative group sticky top-8 bg-brandBlack">
                      <img src={film.posterUrl} className="w-full h-full object-contain" alt="Full Poster" />
                      {/* Reflection effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                   </div>
                   
                   <div className="mt-8 space-y-4">
                      <button className="w-full py-4 brand-bg text-white font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-brandCyan/20 text-xs">
                        <Play size={16} fill="currentColor" /> Watch Full Film
                      </button>
                      <button className="w-full py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 transition-colors text-xs">
                        + Add to List
                      </button>
                   </div>
                </div>

                {/* Right Column: Details & Gallery */}
                <div className="flex-1">
                   <div className="mb-10 text-center lg:text-left">
                       <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                          <span className="px-4 py-1.5 border border-brandCyan/30 bg-brandCyan/5 text-brandCyan text-[10px] font-black uppercase tracking-widest rounded-full">
                             {film.genre}
                          </span>
                          <span className="px-4 py-1.5 border border-white/10 bg-white/5 text-white/70 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2">
                             <Clock size={12} /> 14 Min
                          </span>
                          <span className="px-4 py-1.5 border border-white/10 bg-white/5 text-white/70 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2">
                             <Calendar size={12} /> 2024
                          </span>
                       </div>
                       
                       <h1 className="text-5xl md:text-7xl font-cinematic font-black text-white mb-6 leading-none drop-shadow-2xl">{film.title}</h1>
                       
                       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 text-sm text-brandGray border-b border-white/10 pb-10 mb-10">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Director</p>
                            <p className="text-white">Sarah Jenkins</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Starring</p>
                            <p className="text-white">ALT Youth Ensemble</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Platform</p>
                            <p className="text-brandCyan">{film.platform}</p>
                          </div>
                       </div>

                       <h3 className="text-2xl font-cinematic font-bold text-white mb-6">Synopsis</h3>
                       <div className="prose prose-invert prose-lg text-brandGray font-light leading-relaxed max-w-none mb-16">
                          <p className="text-xl text-white/90 font-normal">{film.description}</p>
                          <p>
                            Filmed on location in Los Angeles, this production highlights the exceptional capability of our youth talent to handle complex narratives and professional set etiquette.
                            From table reads to the final cut, students were involved in every aspect of the creative process, ensuring an authentic performance that resonates with audiences worldwide.
                          </p>
                       </div>
                   </div>

                   {/* Stills Gallery */}
                   <div>
                      <h3 className="text-2xl font-cinematic font-bold text-white mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 brand-bg"></span> Production Stills
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                         {film.stills.map((still, idx) => (
                           <div 
                              key={idx} 
                              className="aspect-video rounded-lg overflow-hidden cursor-pointer group relative border border-white/5 hover:border-brandCyan/40 transition-all"
                              onClick={() => { /* Could open a lightbox here */ }}
                           >
                               <img src={still} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Still ${idx}`} />
                               <div className="absolute inset-0 bg-brandBlack/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <div className="p-2 bg-brandBlack/80 rounded-full text-brandCyan backdrop-blur-sm">
                                     <Star size={16} />
                                  </div>
                               </div>
                           </div>
                         ))}
                      </div>
                   </div>

                </div>
             </div>
          </div>
        </div>
    )
}
