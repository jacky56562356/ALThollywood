
import React, { useState } from 'react';
import { FileDown, CheckCircle2, User, Activity, MapPin, FileText, Phone, Mail, Info } from 'lucide-react';
import { useData } from '../DataContext';

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const { resources, submitApplication } = useData();

  // Form State
  const [formData, setFormData] = useState({
    englishName: '',
    chineseName: '',
    gender: 'Male',
    dob: '',
    height: '',
    weight: '',
    race: '',
    idNumber: '',
    address: '',
    guardianMobile: '',
    englishLevel: '',
    hobbies: '',
    resume: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to Context (Simulating Backend)
    submitApplication({
      id: `app-${Date.now()}`,
      ...formData,
      submittedAt: new Date().toISOString().split('T')[0]
    });

    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-12 text-center px-4">
        <div className="max-w-2xl mx-auto bg-white/5 border border-brandCyan/20 p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 brand-bg opacity-[0.02] blur-3xl"></div>
          <div className="w-16 h-16 brand-bg text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_50px_rgba(0,210,255,0.4)] relative">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-xl font-cinematic font-black mb-2 tracking-tight">Application Received</h2>
          <p className="text-brandGray text-xs leading-normal mb-6 font-light">
            Thank you for applying. Your data has been securely transmitted. Our team will contact you shortly.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({
                englishName: '', chineseName: '', gender: 'Male', dob: '', height: '', weight: '', 
                race: '', idNumber: '', address: '', guardianMobile: '', englishLevel: '', hobbies: '', resume: ''
              });
            }}
            className="px-8 py-3 brand-bg text-white font-black uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all shadow-xl text-[9px]"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Info, Downloads & Contact */}
          <div className="order-2 lg:order-1">
            <h2 className="brand-gradient-text text-[9px] font-black tracking-[0.4em] uppercase mb-1">Join Us</h2>
            <h1 className="text-2xl md:text-5xl font-cinematic font-black mb-3 tracking-tight leading-tight">Your Hollywood Journey Starts Here</h1>
            
            {/* Styled Notice from Contact page */}
            <div className="p-4 border border-brandCyan/20 rounded-xl bg-brandCyan/5 relative mb-5">
              <div className="flex items-center gap-2 text-brandCyan mb-1.5">
                <Info size={14} />
                <h4 className="font-black uppercase tracking-[0.2em] text-[8px]">Registration Notice</h4>
              </div>
              <p className="text-[9px] text-brandGray leading-snug font-light">
                All talent applicants are reviewed by our professional casting board. Participation is strictly subject to specific project requirements. We recommend submitting comprehensive details.
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <h3 className="text-[8px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">Official Documentation</h3>
              
              {resources.length === 0 ? (
                <p className="text-brandGray italic text-[10px]">No documents available for download at this time.</p>
              ) : (
                resources.map((res) => (
                  <a key={res.id} href={res.fileUrl} download className="flex items-center justify-between p-2.5 border border-white/10 bg-white/5 rounded-lg hover:border-brandCyan/40 transition-all group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-brandCyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="p-2 brand-bg rounded-md group-hover:scale-110 transition-transform shadow-lg shadow-brandCyan/20"><FileDown className="text-white" size={14} /></div>
                      <div>
                        <p className="font-bold text-[10px] mb-0.5 text-white">{res.title}</p>
                        <p className="text-[8px] text-brandGray font-medium">
                            <span className="truncate block max-w-[200px]">{res.description}</span>
                            <span className="opacity-60 mt-0.5 block uppercase tracking-wider text-[7px] font-bold">PDF · {res.fileSize}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[7px] brand-gradient-text font-black uppercase tracking-widest hidden sm:block relative z-10 group-hover:translate-x-1 transition-transform">Download</span>
                  </a>
                ))
              )}
            </div>

            {/* Contact Section Integrated */}
            <div className="border-t border-white/10 pt-5">
               <h3 className="text-[8px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">Contact Offices</h3>
               <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 group">
                    <div className="w-7 h-7 bg-white/5 rounded-md flex items-center justify-center text-brandCyan group-hover:brand-bg group-hover:text-white transition-all shrink-0 border border-white/5 group-hover:shadow-lg group-hover:shadow-brandCyan/20">
                      <MapPin size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[9px] mb-0.5 uppercase tracking-wide text-white group-hover:brand-gradient-text transition-colors">Headquarters</h4>
                      <p className="text-brandGray text-[9px] font-light">633 W 5th St, Los Angeles, CA 90071</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 group">
                    <div className="w-7 h-7 bg-white/5 rounded-md flex items-center justify-center text-brandCyan group-hover:brand-bg group-hover:text-white transition-all shrink-0 border border-white/5 group-hover:shadow-lg group-hover:shadow-brandCyan/20">
                      <MapPin size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[9px] mb-0.5 uppercase tracking-wide text-white group-hover:brand-gradient-text transition-colors">Branch Office</h4>
                      <p className="text-brandGray text-[9px] font-light">17800 Castleton St, Suite 173, City of Industry, CA 91748</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2.5 group">
                    <div className="w-7 h-7 bg-white/5 rounded-md flex items-center justify-center text-brandCyan group-hover:brand-bg group-hover:text-white transition-all shrink-0 border border-white/5 group-hover:shadow-lg group-hover:shadow-brandCyan/20">
                      <Mail size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[9px] mb-0.5 uppercase tracking-wide text-white group-hover:brand-gradient-text transition-colors">Email</h4>
                      <p className="text-brandGray text-[9px] font-light">altdreamstar@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 group">
                    <div className="w-7 h-7 bg-white/5 rounded-md flex items-center justify-center text-brandCyan group-hover:brand-bg group-hover:text-white transition-all shrink-0 border border-white/5 group-hover:shadow-lg group-hover:shadow-brandCyan/20">
                      <Phone size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[9px] mb-0.5 uppercase tracking-wide text-white group-hover:brand-gradient-text transition-colors">Industry Hotline</h4>
                      <p className="text-brandGray text-[9px] font-light">+1 (323) 918-6688</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Digital Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/5 p-5 border border-white/10 rounded-xl relative sticky top-20 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-0.5 brand-bg rounded-t-xl"></div>
              <h3 className="text-lg font-cinematic font-black mb-3 tracking-tight">Digital Registration</h3>
              <form onSubmit={handleSubmit} className="space-y-2.5">
                
                {/* Section 1: Basic Info */}
                <div className="space-y-2">
                  <h4 className="flex items-center gap-1.5 text-[8px] text-brandCyan uppercase font-black tracking-widest"><User size={10}/> Personal Details</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">English Name</label>
                        <input name="englishName" value={formData.englishName} onChange={handleChange} required className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white" placeholder="Legal Name" />
                    </div>
                    <div>
                        <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">Chinese Name (If any)</label>
                        <input name="chineseName" value={formData.chineseName} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white" placeholder="中文姓名" />
                    </div>
                    <div>
                        <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white/80">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                    </div>
                     <div>
                        <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">Date of Birth</label>
                        <input name="dob" value={formData.dob} onChange={handleChange} required type="date" className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white/80" />
                    </div>
                  </div>
                </div>

                {/* Section 2: Biometrics */}
                <div className="space-y-2">
                  <h4 className="flex items-center gap-1.5 text-[8px] text-brandCyan uppercase font-black tracking-widest"><Activity size={10}/> Biometrics & ID</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">Height (cm)</label>
                        <input name="height" value={formData.height} onChange={handleChange} type="number" className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white" placeholder="0" />
                    </div>
                    <div>
                        <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">Weight (kg)</label>
                        <input name="weight" value={formData.weight} onChange={handleChange} type="number" className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white" placeholder="0" />
                    </div>
                    <div>
                        <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">Race</label>
                        <input name="race" value={formData.race} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white" placeholder="Ethnicity" />
                    </div>
                    <div className="col-span-3">
                        <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">ID Card / Passport No.</label>
                        <input name="idNumber" value={formData.idNumber} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white" placeholder="Govt Issued ID" />
                    </div>
                  </div>
                </div>

                {/* Section 3: Contact */}
                <div className="space-y-2">
                  <h4 className="flex items-center gap-1.5 text-[8px] text-brandCyan uppercase font-black tracking-widest"><MapPin size={10}/> Contact Information</h4>
                  <div className="space-y-2">
                    <div>
                        <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">Residential Address</label>
                        <input name="address" value={formData.address} onChange={handleChange} required className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white" placeholder="Street, City, Zip" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5"><Phone size={8} className="inline mr-1"/> Guardian Mobile</label>
                            <input name="guardianMobile" value={formData.guardianMobile} onChange={handleChange} required type="tel" className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white" placeholder="+1 (555) 000-0000" />
                        </div>
                        <div>
                            <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">English Level</label>
                            <input name="englishLevel" value={formData.englishLevel} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all text-white" placeholder="Fluent / Int / Basic" />
                        </div>
                    </div>
                  </div>
                </div>

                 {/* Section 4: Experience */}
                <div className="space-y-2">
                   <h4 className="flex items-center gap-1.5 text-[8px] text-brandCyan uppercase font-black tracking-widest"><FileText size={10}/> Profile & Resume</h4>
                   <div>
                      <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">Personal Preferences / Hobbies</label>
                      <textarea name="hobbies" value={formData.hobbies} onChange={handleChange} rows={2} className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all resize-none text-white" placeholder="Singing, Dancing, Sports..."></textarea>
                   </div>
                   <div>
                      <label className="block text-[8px] text-brandGray uppercase font-bold mb-0.5">Resume (Previous acting/performance experience)</label>
                      <textarea name="resume" value={formData.resume} onChange={handleChange} rows={3} className="w-full bg-brandBlack/50 border border-white/10 px-2.5 py-1.5 focus:outline-none focus:border-brandCyan/60 text-xs font-medium rounded-md transition-all resize-none text-white" placeholder="List key roles, contests, or training..."></textarea>
                   </div>
                   <div className="flex items-start gap-2 mt-1.5">
                      <input type="checkbox" required className="mt-0.5" />
                      <p className="text-[8px] text-brandGray">I hereby declare that all the information given by me in this form is true.</p>
                   </div>
                </div>

                <button type="submit" className="w-full py-2.5 brand-bg text-white font-black uppercase tracking-[0.3em] rounded-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,210,255,0.3)] text-[9px]">
                  Submit Official Registration
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
