import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../DataContext';
import { ArrowLeft, PlayCircle, Star, Award, Film } from 'lucide-react';

export default function ActorProfile() {
  const { id } = useParams<{ id: string }>();
  const { actors } = useData();
  
  const actor = actors.find(a => a.id === id);

  if (!actor) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-cinematic font-black mb-4">Actor Not Found</h1>
        <Link to="/actors" className="text-brandCyan hover:text-white transition-colors flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Our Stars
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brandBlack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/actors" className="inline-flex items-center gap-2 text-brandGray hover:text-brandCyan transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Stars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={actor.imageUrl} 
                alt={actor.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-cinematic font-black mb-2 tracking-tight">{actor.name}</h1>
              <div className="flex items-center gap-4 text-brandCyan font-black tracking-widest uppercase text-sm">
                <span>Age Range: {actor.ageRange}</span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Skills Section */}
              <div>
                <h3 className="text-xl font-cinematic font-bold mb-4 flex items-center gap-2">
                  <Star className="text-brandCyan" size={20} /> Skills & Talents
                </h3>
                <div className="flex flex-wrap gap-2">
                  {actor.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/90">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credits Section */}
              <div>
                <h3 className="text-xl font-cinematic font-bold mb-4 flex items-center gap-2">
                  <Award className="text-brandCyan" size={20} /> Professional Credits
                </h3>
                <ul className="space-y-3">
                  {actor.credits.map((credit, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                      <Film className="text-brandCyan shrink-0 mt-0.5" size={18} />
                      <span className="text-white/90">{credit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video Section (Placeholder for now) */}
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-cinematic font-bold mb-4 flex items-center gap-2">
                  <PlayCircle className="text-brandCyan" size={20} /> Featured Videos
                </h3>
                <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-brandGray">
                  <PlayCircle size={48} className="mb-4 opacity-50" />
                  <p className="font-medium">Videos coming soon...</p>
                  <p className="text-sm opacity-70">Please upload the videos for this actor.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
