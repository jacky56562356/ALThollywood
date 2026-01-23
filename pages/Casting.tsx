
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
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Jobs & Casting Opportunities */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-8">
          <div className="max-w-2xl">
            <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-2">Casting & Opportunities</h2>
            <h1 className="text-3xl md:text-5xl font-cinematic font-black mb-3 tracking-tight leading-tight">Current Calls</h1>
            <p className="text-brandGray text-sm md:text-base font-light leading-snug">Explore active roles and industry-standard productions currently seeking young talent.</p>
          </div>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brandGray group-focus-within:text-brandCyan transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Search roles or projects..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-brandCyan/60 transition-all text-sm font-medium text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((job) => (
            <div key={job.id} className="p-6 bg-white/5 border border-white/10 hover:border-brandCyan/40 transition-all rounded-2xl flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 brand-bg opacity-[0.03] -mr-16 -mt-16 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-4 border-b border-white/5 pb-3">
                <span className={`text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest ${job.status === 'Open' ? 'bg-brandCyan/10 text-brandCyan' : 'bg-red-500/10 text-red-400'}`}>
                  {job.status}
                </span>
                <span className="text-[10px] text-brandGray font-black tracking-widest uppercase">REF: {job.id.split('-')[2]}</span>
              </div>
              
              <h3 className="text-lg font-cinematic font-bold mb-1 group-hover:brand-gradient-text transition-all leading-tight">{job.projectName}</h3>
              <p className="text-[10px] font-bold text-brandGray uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Building2 size={12} /> {job.company}
              </p>
              
              <div className="space-y-2 mb-6 flex-grow">
                <div className="grid grid-cols-2 gap-2 mb-3">
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

                <div className="flex items-start gap-2 text-xs text-brandGray">
                  <Clock size={14} className="text-brandPurple shrink-0 mt-0.5" /> 
                  <span className="font-medium leading-snug">
                    <span className="text-white font-bold block mb-0.5 text-[10px]">Shoot Dates:</span> 
                    {job.shootDates}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-brandGray">
                  <MapPin size={14} className="text-brandCyan shrink-0 mt-0.5" /> 
                  <span className="font-medium leading-snug">
                    <span className="text-white font-bold block mb-0.5 text-[10px]">Location:</span> 
                    {job.location}
                  </span>
                </div>
                
                <div className="mt-3 pt-3 border-t border-white/5">
                    <p className="text-[9px] text-brandGray uppercase font-black mb-1 flex items-center gap-1"><Info size={10}/> Requirements</p>
                    <p className="text-xs text-white/80 leading-snug font-light italic">"{job.requirements}"</p>
                </div>
              </div>
              
              <button className="w-full py-3 border border-brandCyan/20 hover:brand-bg hover:text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all rounded-xl mt-auto">
                View Details
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-16 text-center border border-dashed border-white/10 rounded-3xl">
              <p className="text-brandGray italic text-sm">No active calls matching your search.</p>
            </div>
          )}
        </div>

        {/* Section 2: Industry Network */}
        <div className="border-t border-white/10 pt-12">
          <div className="max-w-3xl mb-8">
            <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-2">Industry Network</h2>
            <h1 className="text-3xl md:text-5xl font-cinematic font-black mb-3 tracking-tight leading-tight">Our Partnerships</h1>
            <p className="text-brandGray text-sm md:text-base font-light leading-snug">
              We maintain active relationships with casting directors, producers, and top-tier agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl hover:border-brandCyan/40 transition-all group">
              <div className="text-brandCyan mb-4 group-hover:brand-gradient-text transition-all"><Handshake size={28} /></div>
              <h3 className="text-lg font-cinematic font-bold mb-2 group-hover:brand-gradient-text">Casting Partnerships</h3>
              <p className="text-brandGray text-xs leading-snug font-light">Exclusive access to upcoming project rosters and direct breakdown submissions.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl hover:border-brandCyan/40 transition-all group">
              <div className="text-brandCyan mb-4 group-hover:brand-gradient-text transition-all"><Network size={28} /></div>
              <h3 className="text-lg font-cinematic font-bold mb-2 group-hover:brand-gradient-text">Agency Collaborations</h3>
              <p className="text-brandGray text-xs leading-snug font-light">Direct pipeline to elite youth talent agencies, helping our students secure representation.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl hover:border-brandCyan/40 transition-all group">
              <div className="text-brandCyan mb-4 group-hover:brand-gradient-text transition-all"><Building2 size={28} /></div>
              <h3 className="text-lg font-cinematic font-bold mb-2 group-hover:brand-gradient-text">Production Partners</h3>
              <p className="text-brandGray text-xs leading-snug font-light">Collaborations with major studios for regular filming cycles in LA.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center border-t border-white/10 pt-12">
            <h2 className="text-2xl font-cinematic font-black mb-8 tracking-tight">100+ Verified Industry Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 grayscale opacity-30">
              {Array.from({length: 6}).map((_, i) => (
                 <div key={i} className="h-10 border border-white/20 flex items-center justify-center font-cinematic text-[9px] tracking-[0.3em] font-black uppercase hover:opacity-100 hover:grayscale-0 transition-all cursor-default">Studio_{i+1}_Net</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
