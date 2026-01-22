import React, { useState, useEffect } from 'react';
import { FILMS } from '../constants';
import { ChevronRight, X, ChevronLeft, Play, ArrowRight } from 'lucide-react';
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FILMS.map((film) => (
            <div key={film.id} className="group flex flex-col h-full">
              <div className="relative aspect-[16/9] mb-8 overflow-hidden border border-white/10 rounded-xl group-hover:border-brandCyan/40 transition-all cursor-pointer" onClick={() => setSelectedFilm(film)}>
                <img 
                  src={film.stills[0]} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale-[0.5]"
                  alt={film.title}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 brand-bg text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    {film.genre}
                  </span>
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-brandBlack/80 backdrop-blur-sm flex items-center justify-center border border-brandCyan text-brandCyan">
                        <Play size={20} fill="currentColor" />
                    </div>
                </div>
              </div>
              <h3 className="text-3xl font-cinematic font-bold mb-3 group-hover:brand-gradient-text transition-all cursor-pointer" onClick={() => setSelectedFilm(film)}>{film.title}</h3>
              <p className="text-brandGray text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">{film.description}</p>
              
              <div className="border-t border-white/5 pt-6 mt-auto flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[9px] brand-gradient-text uppercase font-black tracking-widest mb-1">Platform</span>
                    <span className="text-xs text-white/60 font-medium">{film.platform}</span>
                 </div>
                 <button 
                   onClick={() => setSelectedFilm(film)}
                   className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white hover:brand-bg hover:border-transparent transition-all flex items-center gap-2 group/btn"
                 >
                   Read More <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Film Detail Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 bg-brandBlack/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="w-full max-w-6xl h-full md:h-[90vh] bg-brandBlack md:border border-white/10 md:rounded-3xl overflow-hidden relative shadow-2xl flex flex-col">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedFilm(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brandCyan hover:text-black transition-all border border-white/10"
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

    const nextStill = () => {
        setCurrentStillIndex((prev) => (prev + 1) % film.stills.length);
    };

    const prevStill = () => {
        setCurrentStillIndex((prev) => (prev - 1 + film.stills.length) % film.stills.length);
    };

    return (
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Hero Carousel */}
          <div className="relative aspect-video md:aspect-[21/9] w-full bg-black group">
            <img 
              src={film.stills[currentStillIndex]} 
              className="w-full h-full object-cover transition-all duration-500 opacity-90"
              alt={`Still ${currentStillIndex + 1}`} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-transparent to-transparent opacity-100"></div>
            
            {/* Navigation Arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={(e) => { e.stopPropagation(); prevStill(); }} className="p-3 rounded-full bg-black/40 hover:bg-brandCyan hover:text-black text-white backdrop-blur-md transition-all border border-white/10">
                <ChevronLeft size={24} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); nextStill(); }} className="p-3 rounded-full bg-black/40 hover:bg-brandCyan hover:text-black text-white backdrop-blur-md transition-all border border-white/10">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {film.stills.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentStillIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStillIndex ? 'bg-brandCyan w-8' : 'bg-white/30 w-1.5 hover:bg-white'}`}
                />
              ))}
            </div>

            <div className="absolute bottom-10 left-8 md:left-14 max-w-2xl">
                <span className="px-4 py-1.5 brand-bg text-white text-[10px] font-black uppercase tracking-widest rounded-full inline-block mb-4 shadow-lg shadow-brandCyan/20">
                    {film.genre}
                </span>
                <h2 className="text-4xl md:text-6xl font-cinematic font-black text-white drop-shadow-2xl">{film.title}</h2>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="p-8 md:p-14">
             <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="flex-1 space-y-8">
                   <div className="flex items-center gap-12 border-b border-white/10 pb-8">
                      <div>
                        <p className="text-[10px] text-brandGray font-black uppercase tracking-widest mb-1">Release Platform</p>
                        <p className="text-white font-medium">{film.platform}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-brandGray font-black uppercase tracking-widest mb-1">Status</p>
                        <p className="text-brandCyan font-bold uppercase tracking-widest text-xs">Released</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-brandGray font-black uppercase tracking-widest mb-1">Rating</p>
                        <p className="text-white font-medium">G / PG</p>
                      </div>
                   </div>

                   <div className="space-y-6">
                       <h3 className="text-2xl font-cinematic font-bold text-white">Synopsis</h3>
                       <div className="prose prose-invert prose-lg text-brandGray font-light leading-relaxed max-w-none">
                          <p className="text-xl text-white/90 font-normal">{film.description}</p>
                          <p>
                            In the heart of Los Angeles, this production brought together our most promising young talents. 
                            Utilizing state-of-the-art cinematography and professional sound design, the project serves as a cornerstone 
                            for the portfolios of everyone involved.
                          </p>
                          <p>
                            The film explores themes relevant to today's youth while maintaining the high production value expected 
                            from ALT Hollywood Dream Star projects. From pre-production table reads to the final color grade, 
                            students were immersed in the full lifecycle of a Hollywood-standard short film.
                          </p>
                       </div>
                   </div>
                </div>
                
                {/* Visuals Sidebar */}
                <div className="w-full lg:w-96 shrink-0">
                   <div className="p-8 border border-white/10 rounded-3xl bg-white/[0.02]">
                      <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full brand-bg"></span> Gallery
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                         {film.stills.map((still, idx) => (
                           <div key={idx} className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer group ${currentStillIndex === idx ? 'ring-2 ring-brandCyan' : 'opacity-60 hover:opacity-100'}`} onClick={() => setCurrentStillIndex(idx)}>
                               <img src={still} className="w-full h-full object-cover" alt="Gallery thumbnail" />
                               <div className="absolute inset-0 bg-brandCyan/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           </div>
                         ))}
                      </div>
                   </div>
                   
                   <div className="mt-8 p-8 border border-brandCyan/20 rounded-3xl bg-brandCyan/5">
                      <h4 className="text-brandCyan font-bold mb-2 uppercase tracking-widest text-xs">Behind The Scenes</h4>
                      <p className="text-xs text-brandGray leading-relaxed mb-4">
                        This project was filmed over 3 days at our main studio lot and on location in Downtown LA.
                      </p>
                      <button className="w-full py-3 bg-brandBlack border border-brandCyan/30 text-brandCyan text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-brandCyan hover:text-brandBlack transition-all">
                        View Making Of
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
    )
}