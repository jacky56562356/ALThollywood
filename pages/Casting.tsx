
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Star, Network, Handshake, Building2, Clapperboard, Users, Clock, Info } from 'lucide-react';
import { OPPORTUNITIES } from '../constants';

export default function Casting() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = OPPORTUNITIES.filter(job => 
    job.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.roleType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Jobs & Casting Opportunities */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Casting & Opportunities</h2>
            <h1 className="text-6xl font-cinematic font-black mb-8 tracking-tight leading-tight">Current Calls</h1>
            <p className="text-brandGray text-lg font-light">Explore active roles and industry-standard productions currently seeking young talent.</p>
          </div>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brandGray group-focus-within:text-brandCyan transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search roles or projects..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-8 focus:outline-none focus:border-brandCyan/60 transition-all text-sm font-medium text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {filtered.slice(0, 12).map((job) => (
            <div key={job.id} className="p-8 bg-white/5 border border-white/10 hover:border-brandCyan/40 transition-all rounded-3xl flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 brand-bg opacity-[0.03] -mr-16 -mt-16 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-6">
                <span className={`text-[9px] px-3 py-1.5 rounded-full uppercase font-black tracking-widest ${job.status === 'Open' ? 'bg-brandCyan/10 text-brandCyan' : 'bg-red-500/10 text-red-400'}`}>
                  {job.status}
                </span>
                <span className="text-[9px] text-brandGray font-black tracking-widest uppercase">REF: {job.id.split('-')[2]}</span>
              </div>
              
              <h3 className="text-2xl font-cinematic font-bold mb-2 group-hover:brand-gradient-text transition-all leading-tight">{job.projectName}</h3>
              <p className="text-xs font-bold text-brandGray uppercase tracking-widest mb-6 flex items-center gap-2">
                 <Building2 size={12} /> {job.company}
              </p>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="grid grid-cols-2 gap-3 mb-4">
                     <div className="bg-brandBlack/40 p-3 rounded-xl border border-white/5">
                        <p className="text-[9px] text-brandGray uppercase font-black mb-1">Role Type</p>
                        <p className="text-white text-xs font-bold truncate">{job.roleType}</p>
                     </div>
                     <div className="bg-brandBlack/40 p-3 rounded-xl border border-white/5">
                        <p className="text-[9px] text-brandGray uppercase font-black mb-1">Gender</p>
                        <p className="text-white text-xs font-bold">{job.gender}</p>
                     </div>
                     <div className="bg-brandBlack/40 p-3 rounded-xl border border-white/5">
                        <p className="text-[9px] text-brandGray uppercase font-black mb-1">Age</p>
                        <p className="text-white text-xs font-bold">{job.ageRange}</p>
                     </div>
                     <div className="bg-brandBlack/40 p-3 rounded-xl border border-white/5">
                        <p className="text-[9px] text-brandGray uppercase font-black mb-1">Genre</p>
                        <p className="text-white text-xs font-bold truncate">{job.genre}</p>
                     </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-brandGray">
                  <Clock size={14} className="text-brandPurple shrink-0 mt-0.5" /> 
                  <span className="font-medium leading-relaxed">
                    <span className="text-white font-bold block mb-0.5">Shoot Dates:</span> 
                    {job.shootDates}
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs text-brandGray">
                  <MapPin size={14} className="text-brandCyan shrink-0 mt-0.5" /> 
                  <span className="font-medium leading-relaxed">
                    <span className="text-white font-bold block mb-0.5">Location:</span> 
                    {job.location}
                  </span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-[9px] text-brandGray uppercase font-black mb-2 flex items-center gap-1"><Info size={10}/> Requirements</p>
                    <p className="text-xs text-white/80 leading-relaxed font-light italic">"{job.requirements}"</p>
                </div>
              </div>
              
              <button className="w-full py-4 border border-brandCyan/20 hover:brand-bg hover:text-white font-black uppercase tracking-[0.2em] text-[9px] transition-all rounded-xl mt-auto">
                View Submission Details
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-3xl">
              <p className="text-brandGray italic">No active calls matching your search. Please check back later.</p>
            </div>
          )}
        </div>

        {/* Section 2: Industry Network */}
        <div className="border-t border-white/10 pt-32">
          <div className="max-w-3xl mb-24">
            <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Industry Network</h2>
            <h1 className="text-6xl font-cinematic font-black mb-8 tracking-tight leading-tight">Our Partnerships</h1>
            <p className="text-brandGray text-xl font-light leading-relaxed">
              We maintain active relationships with casting directors, producers, and top-tier agencies to provide continuous pathways for our actors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-12 border border-white/10 bg-white/5 rounded-2xl hover:border-brandCyan/40 transition-all group">
              <div className="text-brandCyan mb-8 group-hover:brand-gradient-text transition-all"><Handshake size={40} /></div>
              <h3 className="text-2xl font-cinematic font-bold mb-6 group-hover:brand-gradient-text">Casting Partnerships</h3>
              <p className="text-brandGray text-sm leading-relaxed font-light">Exclusive access to upcoming project rosters and direct breakdown submissions via professional casting platforms.</p>
            </div>
            <div className="p-12 border border-white/10 bg-white/5 rounded-2xl hover:border-brandCyan/40 transition-all group">
              <div className="text-brandCyan mb-8 group-hover:brand-gradient-text transition-all"><Network size={40} /></div>
              <h3 className="text-2xl font-cinematic font-bold mb-6 group-hover:brand-gradient-text">Agency Collaborations</h3>
              <p className="text-brandGray text-sm leading-relaxed font-light">Direct pipeline to elite youth talent agencies, helping our students secure professional representation.</p>
            </div>
            <div className="p-12 border border-white/10 bg-white/5 rounded-2xl hover:border-brandCyan/40 transition-all group">
              <div className="text-brandCyan mb-8 group-hover:brand-gradient-text transition-all"><Building2 size={40} /></div>
              <h3 className="text-2xl font-cinematic font-bold mb-6 group-hover:brand-gradient-text">Production Partners</h3>
              <p className="text-brandGray text-sm leading-relaxed font-light">Collaborations with major studios and innovative independent labels for regular filming cycles in LA.</p>
            </div>
          </div>
          
          <div className="mt-32 text-center border-t border-white/10 pt-32">
            <h2 className="text-4xl font-cinematic font-black mb-16 tracking-tight">100+ Verified Industry Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 grayscale opacity-30">
              {Array.from({length: 6}).map((_, i) => (
                 <div key={i} className="h-16 border border-white/20 flex items-center justify-center font-cinematic text-[10px] tracking-[0.3em] font-black uppercase hover:opacity-100 hover:grayscale-0 transition-all cursor-default">Studio_{i+1}_Net</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
