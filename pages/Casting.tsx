
import React, { useState, useRef } from 'react';
import { Search, MapPin, Calendar, Building2, Clock, Info, Plus, UploadCloud, CheckCircle2, X, Filter, Briefcase, Camera } from 'lucide-react';
import { useData } from '../DataContext';
import type { Opportunity, JobApplication } from '../types';

export default function Casting() {
  const { opportunities, addOpportunity, applyToJob } = useData();
  
  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGender, setFilterGender] = useState<string>('All');
  const [filterType, setFilterType] = useState<string>('All');

  // Modal States
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Opportunity | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  // Post Job Form State
  const [jobForm, setJobForm] = useState<Partial<Opportunity>>({
    projectName: '',
    company: '',
    roleType: 'Lead',
    gender: 'Any',
    genre: '',
    ageRange: '',
    location: '',
    shootDates: '',
    requirements: '',
    status: 'Open'
  });

  // Application Form State
  const [appForm, setAppForm] = useState<Partial<JobApplication>>({
    applicantName: '',
    email: '',
    phone: '',
    headshotUrl: '',
    coverLetter: ''
  });
  const headshotInputRef = useRef<HTMLInputElement>(null);

  // --- Handlers ---

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    addOpportunity({
      id: `cast-${Date.now()}`,
      projectName: jobForm.projectName!,
      company: jobForm.company!,
      roleType: jobForm.roleType!,
      gender: jobForm.gender as 'Any' | 'Male' | 'Female',
      genre: jobForm.genre || 'General',
      ageRange: jobForm.ageRange || 'Flexible',
      location: jobForm.location!,
      shootDates: jobForm.shootDates!,
      requirements: jobForm.requirements!,
      status: 'Open'
    });
    setIsPostJobOpen(false);
    setSuccessMsg('Casting Call Posted Successfully!');
    setTimeout(() => setSuccessMsg(''), 3000);
    // Reset
    setJobForm({
        projectName: '', company: '', roleType: 'Lead', gender: 'Any', genre: '', 
        ageRange: '', location: '', shootDates: '', requirements: '', status: 'Open'
    });
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    applyToJob({
      id: `app-${Date.now()}`,
      jobId: selectedJob.id,
      applicantName: appForm.applicantName!,
      email: appForm.email!,
      phone: appForm.phone!,
      headshotUrl: appForm.headshotUrl || 'https://via.placeholder.com/150',
      coverLetter: appForm.coverLetter!,
      appliedAt: new Date().toISOString()
    });

    setIsApplyOpen(false);
    setSuccessMsg(`Application sent for ${selectedJob.projectName}!`);
    setTimeout(() => setSuccessMsg(''), 3000);
    // Reset
    setAppForm({ applicantName: '', email: '', phone: '', headshotUrl: '', coverLetter: '' });
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => setAppForm(prev => ({ ...prev, headshotUrl: event.target?.result as string }));
      reader.readAsDataURL(file);
    }
  };

  // --- Filtering Logic ---
  const filtered = opportunities.filter(job => {
    const matchesSearch = job.projectName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.roleType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = filterGender === 'All' || job.gender === 'Any' || job.gender === filterGender;
    const matchesType = filterType === 'All' || job.roleType.includes(filterType); // simplified match
    return matchesSearch && matchesGender && matchesType;
  });

  return (
    <div className="pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SUCCESS TOAST */}
        {successMsg && (
          <div className="fixed top-24 right-6 z-[200] bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-300">
            <CheckCircle2 size={20} />
            <span className="font-bold">{successMsg}</span>
          </div>
        )}

        {/* HEADER & ACTIONS */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-10">
          <div className="max-w-2xl">
            <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-2">Casting Platform</h2>
            <h1 className="text-3xl md:text-5xl font-cinematic font-black mb-3 tracking-tight leading-tight">Find & Post Jobs</h1>
            <p className="text-brandGray text-sm md:text-base font-light leading-snug">
              The professional hub connecting productions with ALT talent.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button 
              onClick={() => setIsPostJobOpen(true)}
              className="px-6 py-4 brand-bg text-white font-black rounded-xl uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brandCyan/20"
            >
              <Plus size={16} /> Post Casting Call
            </button>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4">
           <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brandGray" size={18} />
              <input 
                type="text"
                placeholder="Search by keywords, title, or company..."
                className="w-full bg-brandBlack/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brandCyan/60 text-sm text-white transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           
           <div className="flex gap-4">
              <div className="relative min-w-[140px]">
                 <select 
                    value={filterGender}
                    onChange={(e) => setFilterGender(e.target.value)}
                    className="w-full appearance-none bg-brandBlack/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brandCyan/60 text-sm text-white font-medium cursor-pointer"
                 >
                    <option value="All">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                 </select>
                 <Filter size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-brandGray pointer-events-none" />
              </div>
              
              <div className="relative min-w-[140px]">
                 <select 
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full appearance-none bg-brandBlack/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brandCyan/60 text-sm text-white font-medium cursor-pointer"
                 >
                    <option value="All">All Roles</option>
                    <option value="Lead">Leads</option>
                    <option value="Supporting">Supporting</option>
                    <option value="Background">Background</option>
                    <option value="Commercial">Commercial</option>
                 </select>
                 <Briefcase size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-brandGray pointer-events-none" />
              </div>
           </div>
        </div>

        {/* JOB GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((job) => (
            <div key={job.id} className="p-6 bg-white/5 border border-white/10 hover:border-brandCyan/40 transition-all rounded-2xl flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 brand-bg opacity-[0.03] -mr-16 -mt-16 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-4 border-b border-white/5 pb-3">
                <span className={`text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest ${job.status === 'Open' ? 'bg-brandCyan/10 text-brandCyan' : 'bg-red-500/10 text-red-400'}`}>
                  {job.status}
                </span>
                <span className="text-[10px] text-brandGray font-black tracking-widest uppercase">ID: {job.id.split('-')[2] || job.id.slice(-4)}</span>
              </div>
              
              <h3 className="text-xl font-cinematic font-bold mb-1 group-hover:brand-gradient-text transition-all leading-tight">{job.projectName}</h3>
              <p className="text-[10px] font-bold text-brandGray uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Building2 size={12} /> {job.company}
              </p>
              
              <div className="space-y-2 mb-6 flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                   <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-white/80">{job.roleType}</span>
                   <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-white/80">{job.gender}</span>
                   <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-white/80">{job.ageRange}</span>
                   <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-white/80">{job.genre}</span>
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
                    <p className="text-xs text-white/80 leading-snug font-light italic line-clamp-3">"{job.requirements}"</p>
                </div>
              </div>
              
              <button 
                onClick={() => { setSelectedJob(job); setIsApplyOpen(true); }}
                className="w-full py-3 brand-bg text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all rounded-xl mt-auto hover:opacity-90 shadow-lg shadow-brandCyan/10"
              >
                Apply Now
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-16 text-center border border-dashed border-white/10 rounded-3xl">
              <p className="text-brandGray italic text-sm">No active calls matching your criteria.</p>
            </div>
          )}
        </div>

        {/* --- MODAL: POST JOB --- */}
        {isPostJobOpen && (
           <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-brandBlack/95 backdrop-blur-md">
              <div className="w-full max-w-2xl bg-brandBlack border border-white/10 rounded-3xl p-8 relative shadow-2xl animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
                 <button onClick={() => setIsPostJobOpen(false)} className="absolute top-6 right-6 text-brandGray hover:text-white"><X /></button>
                 
                 <div className="mb-8">
                    <h3 className="text-3xl font-cinematic font-black tracking-tight text-white mb-1">Post Casting Call</h3>
                    <p className="text-sm text-brandGray">Create a new opportunity for ALT talents.</p>
                 </div>

                 <form onSubmit={handlePostJob} className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Project Title</label>
                       <input 
                          required
                          value={jobForm.projectName}
                          onChange={e => setJobForm({...jobForm, projectName: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white placeholder-white/20"
                          placeholder="e.g. The Lost City"
                       />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Production Company</label>
                       <input 
                          required
                          value={jobForm.company}
                          onChange={e => setJobForm({...jobForm, company: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white placeholder-white/20"
                          placeholder="e.g. Warner Bros."
                       />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Genre</label>
                       <input 
                          value={jobForm.genre}
                          onChange={e => setJobForm({...jobForm, genre: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white placeholder-white/20"
                          placeholder="e.g. Sci-Fi Drama"
                       />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Role Name/Type</label>
                       <input 
                          required
                          value={jobForm.roleType}
                          onChange={e => setJobForm({...jobForm, roleType: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white placeholder-white/20"
                          placeholder="e.g. Lead, Hero's Friend"
                       />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Gender</label>
                       <select 
                          value={jobForm.gender}
                          onChange={e => setJobForm({...jobForm, gender: e.target.value as any})}
                          className="w-full bg-brandBlack border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white"
                       >
                          <option value="Any">Any</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                       </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Age Range</label>
                       <input 
                          value={jobForm.ageRange}
                          onChange={e => setJobForm({...jobForm, ageRange: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white placeholder-white/20"
                          placeholder="e.g. 8-12"
                       />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Location</label>
                       <input 
                          value={jobForm.location}
                          onChange={e => setJobForm({...jobForm, location: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white placeholder-white/20"
                          placeholder="e.g. Los Angeles"
                       />
                    </div>

                    <div className="col-span-2">
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Shoot Dates</label>
                       <input 
                          value={jobForm.shootDates}
                          onChange={e => setJobForm({...jobForm, shootDates: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white placeholder-white/20"
                          placeholder="e.g. June 15 - July 1"
                       />
                    </div>

                    <div className="col-span-2">
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Requirements & Description</label>
                       <textarea 
                          required
                          value={jobForm.requirements}
                          onChange={e => setJobForm({...jobForm, requirements: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white placeholder-white/20 h-24 resize-none"
                          placeholder="Describe character traits, special skills needed..."
                       />
                    </div>

                    <div className="col-span-2 pt-4">
                       <button type="submit" className="w-full py-4 brand-bg text-white font-black uppercase tracking-[0.2em] rounded-xl hover:opacity-90 transition-opacity">
                          Publish Call
                       </button>
                    </div>
                 </form>
              </div>
           </div>
        )}

        {/* --- MODAL: APPLY TO JOB --- */}
        {isApplyOpen && selectedJob && (
           <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-brandBlack/95 backdrop-blur-md">
              <div className="w-full max-w-lg bg-brandBlack border border-white/10 rounded-3xl p-8 relative shadow-2xl animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
                 <button onClick={() => setIsApplyOpen(false)} className="absolute top-6 right-6 text-brandGray hover:text-white"><X /></button>
                 
                 <div className="mb-6 border-b border-white/10 pb-6">
                    <p className="text-[10px] text-brandCyan uppercase font-black tracking-widest mb-1">Applying For</p>
                    <h3 className="text-2xl font-cinematic font-black tracking-tight text-white">{selectedJob.projectName}</h3>
                    <p className="text-sm text-brandGray font-bold">{selectedJob.roleType} • {selectedJob.company}</p>
                 </div>

                 <form onSubmit={handleApply} className="space-y-5">
                    
                    {/* Headshot Upload */}
                    <div 
                        onClick={() => headshotInputRef.current?.click()}
                        className="w-full h-32 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] hover:border-brandCyan/50 transition-all cursor-pointer relative group overflow-hidden"
                    >
                        {appForm.headshotUrl ? (
                            <img src={appForm.headshotUrl} className="w-full h-full object-cover" alt="Preview" />
                        ) : (
                            <div className="text-center">
                                <Camera className="w-6 h-6 text-brandCyan mx-auto mb-2" />
                                <p className="text-xs font-bold text-white">Upload Headshot</p>
                            </div>
                        )}
                        <input type="file" accept="image/*" ref={headshotInputRef} onChange={handleImageSelect} className="hidden" />
                    </div>

                    <div>
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Talent Name</label>
                       <input 
                          required
                          value={appForm.applicantName}
                          onChange={e => setAppForm({...appForm, applicantName: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white"
                          placeholder="Your Stage Name"
                       />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Email</label>
                           <input 
                              required
                              type="email"
                              value={appForm.email}
                              onChange={e => setAppForm({...appForm, email: e.target.value})}
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white"
                              placeholder="contact@email.com"
                           />
                        </div>
                        <div>
                           <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Phone</label>
                           <input 
                              required
                              type="tel"
                              value={appForm.phone}
                              onChange={e => setAppForm({...appForm, phone: e.target.value})}
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white"
                              placeholder="+1 (555) ..."
                           />
                        </div>
                    </div>

                    <div>
                       <label className="block text-[10px] text-brandGray uppercase font-black mb-2 tracking-widest">Cover Letter / Note</label>
                       <textarea 
                          value={appForm.coverLetter}
                          onChange={e => setAppForm({...appForm, coverLetter: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-brandCyan outline-none text-white h-24 resize-none"
                          placeholder="Briefly introduce yourself..."
                       />
                    </div>

                    <button type="submit" className="w-full py-4 brand-bg text-white font-black uppercase tracking-[0.2em] rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-brandCyan/20 mt-4">
                       Submit Application
                    </button>
                    <p className="text-[9px] text-brandGray text-center">Your profile will be sent directly to the casting director.</p>
                 </form>
              </div>
           </div>
        )}

      </div>
    </div>
  );
}
