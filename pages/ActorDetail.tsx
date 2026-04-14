import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../DataContext';
import { ArrowLeft, Play, Star, Award, Film } from 'lucide-react';

export default function ActorDetail() {
  const { id } = useParams<{ id: string }>();
  const { actors } = useData();
  
  const actor = actors.find(a => a.id === id);

  if (!actor) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-brandBlack flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Actor not found</h2>
          <Link to="/youth-actors" className="text-brandCyan hover:text-white transition-colors flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Our Stars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-brandBlack font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link to="/youth-actors" className="inline-flex items-center gap-2 text-brandGray hover:text-brandCyan transition-colors mb-8 text-sm uppercase tracking-widest font-bold">
          <ArrowLeft size={16} /> Back to Roster
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Photo & Quick Stats */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={actor.imageUrl} 
                alt={actor.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-3xl font-cinematic font-black text-white mb-1">{actor.name}</h1>
                <p className="text-brandCyan text-sm uppercase tracking-widest font-bold">Age: {actor.ageRange}</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <Star size={16} className="text-brandCyan" /> Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {actor.skills.map((skill, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1.5 bg-brandBlack border border-white/10 rounded-full text-brandGray">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Credits, and Video */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Biography */}
            <section>
              <h2 className="text-2xl font-cinematic font-black text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-brandCyan"></span> Biography
              </h2>
              <div className="text-brandGray leading-relaxed space-y-4">
                {actor.bio ? (
                  <p>{actor.bio}</p>
                ) : (
                  <p>
                    {actor.name} is a talented young performer represented by ALT Hollywood Dream Star. 
                    With a diverse skill set and a passion for the craft, {actor.name} has been actively 
                    involved in professional training and film productions, demonstrating exceptional dedication 
                    and on-screen presence.
                  </p>
                )}
              </div>
            </section>

            {/* Credits */}
            <section>
              <h2 className="text-2xl font-cinematic font-black text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brandCyan"></span> Selected Credits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {actor.credits.map((credit, i) => (
                  <div key={i} className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl flex items-start gap-3">
                    <Award size={18} className="text-brandCyan mt-0.5 shrink-0" />
                    <span className="text-brandGray text-sm">{credit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Video Showcase */}
            <section>
              <h2 className="text-2xl font-cinematic font-black text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brandCyan"></span> Video Showcase
              </h2>
              
              {actor.videoUrl ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                  <video 
                    src={actor.videoUrl} 
                    controls 
                    className="w-full h-full object-contain"
                    poster={actor.imageUrl}
                  />
                </div>
              ) : (
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#050505] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    <Film size={24} className="text-brandGray" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Performance Reel</h3>
                  <p className="text-brandGray text-sm max-w-md mx-auto">
                    Video showcase will be uploaded soon. Check back later to see {actor.name}'s latest performances and scenes.
                  </p>
                </div>
              )}
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
