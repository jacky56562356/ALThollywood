
import React, { useState } from 'react';
import { OPPORTUNITIES } from '../constants';
import { Search, MapPin, Calendar, Star } from 'lucide-react';

export default function Opportunities() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = OPPORTUNITIES.filter(job => 
    job.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.roleType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Casting</h2>
            <h1 className="text-6xl font-cinematic font-black mb-8 tracking-tight">Open Opportunities</h1>
            <p className="text-brandGray text-lg font-light">Current casting calls and professional industry opportunities for our registered talents.</p>
          </div>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brandGray group-focus-within:text-brandCyan transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search roles or projects..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-8 focus:outline-none focus:border-brandCyan/60 transition-all text-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((job) => (
            <div key={job.id} className="p-8 bg-white/5 border border-white/10 hover:border-brandCyan/40 transition-all rounded-2xl flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 brand-bg opacity-[0.03] -mr-16 -mt-16 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest ${job.status === 'Open' ? 'bg-brandCyan/10 text-brandCyan' : 'bg-red-500/10 text-red-400'}`}>
                  {job.status}
                </span>
                <span className="text-[10px] text-brandGray font-black tracking-widest uppercase">REF: {job.id.split('-')[1]}</span>
              </div>
              
              <h3 className="text-2xl font-cinematic font-bold mb-6 group-hover:brand-gradient-text transition-all">{job.projectName}</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center gap-4 text-sm text-brandGray">
                  <Star size={16} className="text-brandCyan shrink-0" /> 
                  <span className="font-medium">Role: <b className="text-white font-bold ml-1">{job.roleType}</b></span>
                </div>
                <div className="flex items-center gap-4 text-sm text-brandGray">
                  <Calendar size={16} className="text-brandPurple shrink-0" /> 
                  <span className="font-medium">Age: <b className="text-white font-bold ml-1">{job.ageRange}</b></span>
                </div>
                <div className="flex items-center gap-4 text-sm text-brandGray">
                  <MapPin size={16} className="text-brandCyan shrink-0" /> 
                  <span className="font-medium">Loc: <b className="text-white font-bold ml-1">{job.location}</b></span>
                </div>
              </div>
              
              <button className="w-full py-4 border border-brandCyan/20 hover:brand-bg hover:text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all rounded-xl">
                View Submission Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
