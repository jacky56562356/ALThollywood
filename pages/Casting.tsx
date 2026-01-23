
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
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Jobs & Casting Opportunities */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-6">
          <div className="max-w-2xl">
            <h2 className="brand-gradient-text text-[9px] font-black tracking-[0.4em] uppercase mb-1">Casting & Opportunities</h2>
            <h1 className="text-2xl md:text-5xl font-cinematic font-black mb-2 tracking-tight leading-tight">Current Calls</h1>
            <p className="text-brandGray text-[10px] md:text-sm font-light leading-snug">Explore active roles and industry-standard productions currently seeking young talent.</p>
          </div>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brandGray group-focus-within:text-brandCyan transition-colors" size={14} />
            <input 
              type="text"
              placeholder="Search roles or projects..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:border-brandCyan/60 transition-all text-xs font-medium text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filtered.map((job) => (
            <div key={job.id} className="p-4 bg-white/5 border border-white/10 hover:border-brandCyan/40 transition-all rounded-2xl flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 brand-bg opacity-[0.03] -mr-16 -mt-16 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-2 border-b border-white/5 pb-2">
                <span className={`text-[8px] px-2 py-1 rounded-full uppercase font-black tracking-widest ${job.status === 'Open' ? 'bg-brandCyan/10 text-brandCyan' : 'bg-red-500/10 text-red-400'}`}>
                  {job.status}
                </span>
                <span className="text-[8px] text-brandGray font-black tracking-widest uppercase">REF: {job.id.split('-')[2]}</span>
              </div>
              
              <h3 className="text-base font-cinematic font-bold mb-0.5 group-hover:brand-gradient-text transition-all leading-tight">{job.projectName}</h3>
              <p className="text-[8px] font-bold text-brandGray uppercase tracking-widest mb-3 flex items-center gap-1">
                 <Building2 size={9} /> {job.company}
              </p>
              
              <div className="space-y-1.5 mb-4 flex-grow">
                <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                     <div className="bg-brandBlack/40 p-2 rounded-lg border border-white/5">
                        <p className="text-[7px] text-brandGray uppercase font-black mb-0.5">Role Type</p>
                        <p className="text-white text-[8px] font-bold truncate">{job.roleType}</p>
                     </div>
                     <div className="bg-brandBlack/40 p-2 rounded-lg border border-white/5">
                        <p className="text-[7px] text-brandGray uppercase font-black mb-0.5">Gender</p>
                        <p className="text-white text-[8px] font-bold">{job.gender}</p>
                     </div>
                     <div className="bg-brandBlack/40 p-2 rounded-lg border border-white/5">
                        <p className="text-[7px] text-brandGray uppercase font-black mb-0.5">Age</p>
                        <p className="text-white text-[8px] font-bold">{job.ageRange}</p>
                     </div>
                     <div className="bg-brandBlack/40 p-2 rounded-lg border border-white/5">
                        <p className="text-[7px] text-brandGray uppercase font-black mb-0.5">Genre</p>
                        <p className="text-white text-[8px] font-bold truncate">{job.genre}</p>
                     </div>
                </div>

                <div className="flex items-start gap-2 text-[9px] text-brandGray">
                  <Clock size={10} className="text-brandPurple shrink-0 mt-0.5" /> 
                  <span className="font-medium leading-snug">
                    <span className="text-white font-bold block mb-0.5 text-[8px]">Shoot Dates:</span> 
                    {job.shootDates}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-[9px] text-brandGray">
                  <MapPin size={10} className="text-brandCyan shrink-0 mt-0.5" /> 
                  <span className="font-medium leading-snug">
                    <span className="text-white font-bold block mb-0.5 text-[8px]">Location:</span> 
                    {job.location}
                  </span>
                </div>
                
                <div className="mt-1.5 pt-1.5 border-t border-white/5">
                    <p className="text-[7px] text-brandGray uppercase font-black mb-0.5 flex items-center gap-1"><Info size={8}/> Requirements</p>
                    <p className="text-[9px] text-white/80 leading-snug font-light italic">"{job.requirements}"</p>
                </div>
              </div>
              
              <button className="w-full py-2.5 border border-brandCyan/20 hover:brand-bg hover:text-white font-black uppercase tracking-[0.2em] text-[7px] transition-all rounded-lg mt-auto">
                View Details
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-12 text-center border border-dashed border-white/10 rounded-2xl">
              <p className="text-brandGray italic text-xs">No active calls matching your search.</p>
            </div>
          )}
        </div>

        {/* Section 2: Industry Network */}
        <div className="border-t border-white/10 pt-8">
          <div className="max-w-3xl mb-6">
            <h2 className="brand-gradient-text text-[9px] font-black tracking-[0.4em] uppercase mb-1">Industry Network</h2>
            <h1 className="text-2xl md:text-5xl font-cinematic font-black mb-2 tracking-tight leading-tight">Our Partnerships</h1>
            <p className="text-brandGray text-[10px] md:text-sm font-light leading-snug">
              We maintain active relationships with casting directors, producers, and top-tier agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-white/10 bg-white/5 rounded-xl hover:border-brandCyan/40 transition-all group">
              <div className="text-brandCyan mb-2 group-hover:brand-gradient-text transition-all"><Handshake size={20} /></div>
              <h3 className="text-base font-cinematic font-bold mb-1 group-hover:brand-gradient-text">Casting Partnerships</h3>
              <p className="text-brandGray text-[9px] leading-snug font-light">Exclusive access to upcoming project rosters and direct breakdown submissions.</p>
            </div>
            <div className="p-4 border border-white/10 bg-white/5 rounded-xl hover:border-brandCyan/40 transition-all group">
              <div className="text-brandCyan mb-2 group-hover:brand-gradient-text transition-all"><Network size={20} /></div>
              <h3 className="text-base font-cinematic font-bold mb-1 group-hover:brand-gradient-text">Agency Collaborations</h3>
              <p className="text-brandGray text-[9px] leading-snug font-light">Direct pipeline to elite youth talent agencies, helping our students secure representation.</p>
            </div>
            <div className="p-4 border border-white/10 bg-white/5 rounded-xl hover:border-brandCyan/40 transition-all group">
              <div className="text-brandCyan mb-2 group-hover:brand-gradient-text transition-all"><Building2 size={20} /></div>
              <h3 className="text-base font-cinematic font-bold mb-1 group-hover:brand-gradient-text">Production Partners</h3>
              <p className="text-brandGray text-[9px] leading-snug font-light">Collaborations with major studios for regular filming cycles in LA.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center border-t border-white/10 pt-8">
            <h2 className="text-xl font-cinematic font-black mb-6 tracking-tight">100+ Verified Industry Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 grayscale opacity-30">
              {Array.from({length: 6}).map((_, i) => (
                 <div key={i} className="h-8 border border-white/20 flex items-center justify-center font-cinematic text-[7px] tracking-[0.3em] font-black uppercase hover:opacity-100 hover:grayscale-0 transition-all cursor-default">Studio_{i+1}_Net</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
