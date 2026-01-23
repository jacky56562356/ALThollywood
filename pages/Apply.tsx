
import React, { useState } from 'react';
import { FileDown, CheckCircle2, User, Activity, MapPin, FileText, Phone, Mail, Info, Send } from 'lucide-react';
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
    
    // 1. Save to Internal Context (Dashboard)
    submitApplication({
      id: `app-${Date.now()}`,
      ...formData,
      submittedAt: new Date().toISOString().split('T')[0]
    });

    // 2. Prepare Email Body for Mailto
    const subject = `New Talent Application: ${formData.englishName}`;
    const body = `
OFFICIAL REGISTRATION DETAILS
-----------------------------
Name: ${formData.englishName} ${formData.chineseName ? `(${formData.chineseName})` : ''}
Gender: ${formData.gender}
DOB: ${formData.dob}
Height: ${formData.height}cm
Weight: ${formData.weight}kg
Race: ${formData.race}
ID/Passport: ${formData.idNumber}

CONTACT
-------
Address: ${formData.address}
Guardian Mobile: ${formData.guardianMobile}
English Level: ${formData.englishLevel}

PROFILE
-------
Hobbies: ${formData.hobbies}
Resume/Experience: ${formData.resume}

Submitted via ALT Dream Star Web Portal
    `;

    // 3. Trigger Mail Client
    // Use a timeout to ensure the UI updates first, and to avoid blocking by some browser pop-up blockers if immediate
    setTimeout(() => {
        const mailtoLink = `mailto:altdreamstar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }, 500);

    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 text-center px-4">
        <div className="max-w-2xl mx-auto bg-white/5 border border-brandCyan/20 p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 brand-bg opacity-[0.02] blur-3xl"></div>
          <div className="w-20 h-20 brand-bg text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(0,210,255,0.4)] relative">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-cinematic font-black mb-3 tracking-tight">Application Generated</h2>
          <p className="text-brandGray text-base leading-normal mb-8 font-light max-w-lg mx-auto">
            Your data has been saved to our internal system. <br/>
            <span className="text-brandCyan font-bold">Please confirm sending the email via your mail app to finalize the submission.</span>
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({
                englishName: '', chineseName: '', gender: 'Male', dob: '', height: '', weight: '', 
                race: '', idNumber: '', address: '', guardianMobile: '', englishLevel: '', hobbies: '', resume: ''
              });
            }}
            className="px-10 py-4 brand-bg text-white font-black uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all shadow-xl text-xs"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Info, Downloads & Contact */}
          <div className="order-2 lg:order-1">
            <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-2">Join Us</h2>
            <h1 className="text-3xl md:text-5xl font-cinematic font-black mb-4 tracking-tight leading-tight">Your Hollywood Journey Starts Here</h1>
            
            {/* Styled Notice from Contact page */}
            <div className="p-6 border border-brandCyan/20 rounded-2xl bg-brandCyan/5 relative mb-8">
              <div className="flex items-center gap-3 text-brandCyan mb-3">
                <Info size={18} />
                <h4 className="font-black uppercase tracking-[0.2em] text-[10px]">Registration Notice</h4>
              </div>
              <p className="text-xs text-brandGray leading-relaxed font-light">
                All talent applicants are reviewed by our professional casting board. Participation is strictly subject to specific project requirements. We recommend submitting comprehensive details.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">Official Documentation</h3>
              
              {resources.length === 0 ? (
                <p className="text-brandGray italic text-sm">No documents available for download at this time.</p>
              ) : (
                resources.map((res) => (
                  <a key={res.id} href={res.fileUrl} download className="flex items-center justify-between p-4 border border-white/10 bg-white/5 rounded-xl hover:border-brandCyan/40 transition-all group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-brandCyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="p-2.5 brand-bg rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-brandCyan/20"><FileDown className="text-white" size={18} /></div>
                      <div>
                        <p className="font-bold text-sm mb-0.5 text-white">{res.title}</p>
                        <p className="text-xs text-brandGray font-medium">
                            <span className="truncate block max-w-[250px]">{res.description}</span>
                            <span className="opacity-60 mt-0.5 block uppercase tracking-wider text-[9px] font-bold">PDF · {res.fileSize}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[9px] brand-gradient-text font-black uppercase tracking-widest hidden sm:block relative z-10 group-hover:translate-x-1 transition-transform">Download</span>
                  </a>
                ))
              )}
            </div>

            {/* Contact Section Integrated */}
            <div className="border-t border-white/10 pt-8">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4">Contact Offices</h3>
               <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brandCyan group-hover:brand-bg group-hover:text-white transition-all shrink-0 border border-white/5 group-hover:shadow-lg group-hover:shadow-brandCyan/20">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs mb-0.5 uppercase tracking-wide text-white group-hover:brand-gradient-text transition-colors">Headquarters</h4>
                      <p className="text-brandGray text-sm font-light">633 W 5th St, Los Angeles, CA 90071</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brandCyan group-hover:brand-bg group-hover:text-white transition-all shrink-0 border border-white/5 group-hover:shadow-lg group-hover:shadow-brandCyan/20">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs mb-0.5 uppercase tracking-wide text-white group-hover:brand-gradient-text transition-colors">Branch Office</h4>
                      <p className="text-brandGray text-sm font-light">17800 Castleton St, Suite 173, City of Industry, CA 91748</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brandCyan group-hover:brand-bg group-hover:text-white transition-all shrink-0 border border-white/5 group-hover:shadow-lg group-hover:shadow-brandCyan/20">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs mb-0.5 uppercase tracking-wide text-white group-hover:brand-gradient-text transition-colors">Email</h4>
                      <p className="text-brandGray text-sm font-light">altdreamstar@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brandCyan group-hover:brand-bg group-hover:text-white transition-all shrink-0 border border-white/5 group-hover:shadow-lg group-hover:shadow-brandCyan/20">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs mb-0.5 uppercase tracking-wide text-white group-hover:brand-gradient-text transition-colors">Industry Hotline</h4>
                      <p className="text-brandGray text-sm font-light">+1 (323) 918-6688</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Digital Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/5 p-8 border border-white/10 rounded-2xl relative sticky top-24 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 brand-bg rounded-t-2xl"></div>
              <h3 className="text-2xl font-cinematic font-black mb-6 tracking-tight">Digital Registration</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Section 1: Basic Info */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-[10px] text-brandCyan uppercase font-black tracking-widest"><User size={12}/> Personal Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">English Name</label>
                        <input name="englishName" value={formData.englishName} onChange={handleChange} required className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Legal Name" />
                    </div>
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Chinese Name (If any)</label>
                        <input name="chineseName" value={formData.chineseName} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Name in Chinese (Optional)" />
                    </div>
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white/80">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                    </div>
                     <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Date of Birth</label>
                        <input name="dob" value={formData.dob} onChange={handleChange} required type="date" className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white/80" />
                    </div>
                  </div>
                </div>

                {/* Section 2: Biometrics */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-[10px] text-brandCyan uppercase font-black tracking-widest"><Activity size={12}/> Biometrics & ID</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Height (cm)</label>
                        <input name="height" value={formData.height} onChange={handleChange} type="number" className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="0" />
                    </div>
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Weight (kg)</label>
                        <input name="weight" value={formData.weight} onChange={handleChange} type="number" className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="0" />
                    </div>
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Race</label>
                        <input name="race" value={formData.race} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Ethnicity" />
                    </div>
                    <div className="col-span-3">
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">ID Card / Passport No.</label>
                        <input name="idNumber" value={formData.idNumber} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Govt Issued ID" />
                    </div>
                  </div>
                </div>

                {/* Section 3: Contact */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-[10px] text-brandCyan uppercase font-black tracking-widest"><MapPin size={12}/> Contact Information</h4>
                  <div className="space-y-3">
                    <div>
                        <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Residential Address</label>
                        <input name="address" value={formData.address} onChange={handleChange} required className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Street, City, Zip" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[9px] text-brandGray uppercase font-bold mb-1"><Phone size={10} className="inline mr-1"/> Guardian Mobile</label>
                            <input name="guardianMobile" value={formData.guardianMobile} onChange={handleChange} required type="tel" className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="+1 (555) 000-0000" />
                        </div>
                        <div>
                            <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">English Level</label>
                            <input name="englishLevel" value={formData.englishLevel} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Fluent / Int / Basic" />
                        </div>
                    </div>
                  </div>
                </div>

                 {/* Section 4: Experience */}
                <div className="space-y-3">
                   <h4 className="flex items-center gap-2 text-[10px] text-brandCyan uppercase font-black tracking-widest"><FileText size={12}/> Profile & Resume</h4>
                   <div>
                      <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Personal Preferences / Hobbies</label>
                      <textarea name="hobbies" value={formData.hobbies} onChange={handleChange} rows={2} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all resize-none text-white" placeholder="Singing, Dancing, Sports..."></textarea>
                   </div>
                   <div>
                      <label className="block text-[9px] text-brandGray uppercase font-bold mb-1">Resume (Previous acting/performance experience)</label>
                      <textarea name="resume" value={formData.resume} onChange={handleChange} rows={4} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all resize-none text-white" placeholder="List key roles, contests, or training..."></textarea>
                   </div>
                   <div className="flex items-start gap-3 mt-3">
                      <input type="checkbox" required className="mt-1" />
                      <p className="text-[10px] text-brandGray">I hereby declare that all the information given by me in this form is true.</p>
                   </div>
                </div>

                <button type="submit" className="w-full py-4 brand-bg text-white font-black uppercase tracking-[0.3em] rounded-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,210,255,0.3)] text-xs flex items-center justify-center gap-2">
                  <Send size={16} /> Submit & Email Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
