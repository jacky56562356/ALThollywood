
import React, { useState, useRef } from 'react';
import { FileDown, CheckCircle2, User, Activity, MapPin, FileText, Phone, Mail, Info, Send, UploadCloud, Printer, ArrowRight } from 'lucide-react';
import { useData } from '../DataContext';

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const { resources, submitApplication } = useData();
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    resume: '',
    headshotUrl: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({ ...prev, headshotUrl: event.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Save to Internal Context
    submitApplication({
      id: `app-${Date.now()}`,
      ...formData,
      submittedAt: new Date().toISOString().split('T')[0]
    });

    // 2. Show the "Official Form" view
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEmailDraft = () => {
    const subject = `Application: ${formData.englishName}`;
    const body = `To ALT Hollywood Dream Star Casting,\n\nPlease find my application details attached (PDF/Screenshot).\n\nName: ${formData.englishName}\nMobile: ${formData.guardianMobile}\n\n[Please attach the saved application form here]`;
    window.location.href = `mailto:altdreamstar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white text-black pt-20 pb-20 px-4">
        {/* SUCCESS MESSAGE UI (Screen Only) */}
        <div className="max-w-4xl mx-auto text-center mb-10 print:hidden">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-3xl font-black mb-2">Registration Form Generated</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Please <strong>Save/Print</strong> this official form below, then <strong>Email</strong> it to us along with any other portfolio materials.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handlePrint} className="px-8 py-3 bg-brandBlack text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl">
               <Printer size={18} /> Print / Save as PDF
            </button>
            <button onClick={handleEmailDraft} className="px-8 py-3 border-2 border-brandBlack text-brandBlack rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
               <Mail size={18} /> Open Email App
            </button>
             <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    englishName: '', chineseName: '', gender: 'Male', dob: '', height: '', weight: '', 
                    race: '', idNumber: '', address: '', guardianMobile: '', englishLevel: '', hobbies: '', resume: '', headshotUrl: ''
                  });
                }}
                className="px-8 py-3 text-gray-500 font-bold hover:text-black transition-colors"
            >
                Start New
            </button>
          </div>
        </div>

        {/* OFFICIAL FORM LAYOUT (This is what gets printed) */}
        <div className="max-w-[210mm] mx-auto bg-white border-2 border-black p-8 md:p-12 shadow-2xl print:shadow-none print:border-black print:w-full print:max-w-none print:p-0">
          
          {/* Header */}
          <div className="flex justify-between items-start border-b-4 border-black pb-6 mb-8">
             <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/c4Rn9W9/ALT-LOGO-2400x1800.png" className="h-20 w-auto object-contain" alt="Logo" />
                <div>
                   <h1 className="text-3xl font-black uppercase tracking-tighter leading-none">ALT Hollywood</h1>
                   <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-600">Dream Star</h2>
                </div>
             </div>
             <div className="text-right">
                <h3 className="text-xl font-black uppercase border-2 border-black px-4 py-1 inline-block">Official Casting Form</h3>
                <p className="text-xs font-bold mt-2 text-gray-500">REF: {`APP-${Date.now().toString().slice(-6)}`}</p>
             </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
             {/* Left: Photo area */}
             <div className="col-span-1">
                <div className="aspect-[3/4] w-full border-2 border-black bg-gray-100 flex items-center justify-center overflow-hidden relative">
                   {formData.headshotUrl ? (
                      <img src={formData.headshotUrl} className="w-full h-full object-cover" alt="Headshot" />
                   ) : (
                      <span className="text-gray-400 font-bold text-center p-4">PHOTO<br/>ATTACHED</span>
                   )}
                </div>
             </div>

             {/* Right: Personal Details Table */}
             <div className="col-span-2">
                <table className="w-full border-collapse border-2 border-black text-sm">
                   <tbody>
                      <tr>
                         <td className="border border-black p-2 bg-gray-100 font-bold uppercase w-1/3">Full Name (English)</td>
                         <td className="border border-black p-2 font-medium text-lg">{formData.englishName}</td>
                      </tr>
                      <tr>
                         <td className="border border-black p-2 bg-gray-100 font-bold uppercase">Chinese Name</td>
                         <td className="border border-black p-2 font-medium">{formData.chineseName || 'N/A'}</td>
                      </tr>
                      <tr>
                         <td className="border border-black p-2 bg-gray-100 font-bold uppercase">Date of Birth</td>
                         <td className="border border-black p-2 font-medium">{formData.dob}</td>
                      </tr>
                      <tr>
                         <td className="border border-black p-2 bg-gray-100 font-bold uppercase">Gender</td>
                         <td className="border border-black p-2 font-medium">{formData.gender}</td>
                      </tr>
                      <tr>
                         <td className="border border-black p-2 bg-gray-100 font-bold uppercase">Nationality / Race</td>
                         <td className="border border-black p-2 font-medium">{formData.race}</td>
                      </tr>
                      <tr>
                         <td className="border border-black p-2 bg-gray-100 font-bold uppercase">ID / Passport No.</td>
                         <td className="border border-black p-2 font-medium">{formData.idNumber}</td>
                      </tr>
                   </tbody>
                </table>

                <div className="grid grid-cols-2 gap-4 mt-4">
                   <div className="border-2 border-black p-3 text-center">
                      <p className="text-xs font-bold uppercase text-gray-500 mb-1">Height</p>
                      <p className="text-xl font-black">{formData.height} CM</p>
                   </div>
                   <div className="border-2 border-black p-3 text-center">
                      <p className="text-xs font-bold uppercase text-gray-500 mb-1">Weight</p>
                      <p className="text-xl font-black">{formData.weight} KG</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Contact & Profile */}
          <div className="mt-8 space-y-6">
             <div>
                <h4 className="font-black uppercase border-b-2 border-black mb-3 pb-1">Contact Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                   <div>
                      <span className="block font-bold text-gray-500 text-xs uppercase">Guardian Mobile</span>
                      <span className="block text-lg font-medium border-b border-gray-300 pb-1">{formData.guardianMobile}</span>
                   </div>
                   <div>
                      <span className="block font-bold text-gray-500 text-xs uppercase">English Level</span>
                      <span className="block text-lg font-medium border-b border-gray-300 pb-1">{formData.englishLevel}</span>
                   </div>
                   <div className="col-span-2">
                      <span className="block font-bold text-gray-500 text-xs uppercase">Residential Address</span>
                      <span className="block text-lg font-medium border-b border-gray-300 pb-1">{formData.address}</span>
                   </div>
                </div>
             </div>

             <div>
                <h4 className="font-black uppercase border-b-2 border-black mb-3 pb-1">Experience & Skills</h4>
                <div className="space-y-4 text-sm">
                   <div>
                      <span className="block font-bold text-gray-500 text-xs uppercase">Hobbies / Special Skills</span>
                      <div className="p-3 bg-gray-50 border border-gray-200 min-h-[60px]">{formData.hobbies}</div>
                   </div>
                   <div>
                      <span className="block font-bold text-gray-500 text-xs uppercase">Resume / Past Experience</span>
                      <div className="p-3 bg-gray-50 border border-gray-200 min-h-[100px] whitespace-pre-wrap">{formData.resume}</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Footer Declaration */}
          <div className="mt-12 pt-6 border-t-2 border-black flex justify-between items-end">
             <div className="text-xs text-gray-500 max-w-md">
                <p className="font-bold text-black mb-1">DECLARATION</p>
                I hereby certify that the information above is true and accurate. I understand that this application is for internal casting review only.
             </div>
             <div className="text-center">
                <div className="w-48 border-b border-black mb-2"></div>
                <p className="text-xs font-bold uppercase">Guardian Signature / Date</p>
             </div>
          </div>

        </div>
        
        {/* Helper text for print */}
        <div className="text-center mt-10 text-gray-400 text-xs print:hidden">
           &copy; 2025 ALT Hollywood Dream Star. Internal System.
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Info */}
          <div className="order-2 lg:order-1">
            <h2 className="brand-gradient-text text-xs font-black tracking-[0.4em] uppercase mb-2">Join Us</h2>
            <h1 className="text-3xl md:text-5xl font-cinematic font-black mb-4 tracking-tight leading-tight">Your Hollywood Journey Starts Here</h1>
            
            {/* Styled Notice */}
            <div className="p-6 border border-brandCyan/20 rounded-2xl bg-brandCyan/5 relative mb-8">
              <div className="flex items-center gap-3 text-brandCyan mb-3">
                <Info size={18} />
                <h4 className="font-black uppercase tracking-[0.2em] text-[10px]">Registration Notice</h4>
              </div>
              <p className="text-xs text-brandGray leading-relaxed font-light">
                Please fill out this digital form completely. Once submitted, you will be able to <strong>save an official PDF</strong> of your application to email to our casting directors directly.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">Documents</h3>
              {resources.map((res) => (
                  <a key={res.id} href={res.fileUrl} download className="flex items-center justify-between p-4 border border-white/10 bg-white/5 rounded-xl hover:border-brandCyan/40 transition-all group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-brandCyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="p-2.5 brand-bg rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-brandCyan/20"><FileDown className="text-white" size={18} /></div>
                      <div>
                        <p className="font-bold text-sm mb-0.5 text-white">{res.title}</p>
                        <p className="text-xs text-brandGray font-medium">
                            <span className="opacity-60 block uppercase tracking-wider text-[9px] font-bold">PDF · {res.fileSize}</span>
                        </p>
                      </div>
                    </div>
                  </a>
                ))
              }
            </div>
            
            <div className="border-t border-white/10 pt-8">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brandCyan border border-white/5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs mb-0.5 uppercase tracking-wide text-white">Submission Email</h4>
                    <p className="text-brandGray text-sm font-light">altdreamstar@gmail.com</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/5 p-8 border border-white/10 rounded-2xl relative sticky top-24 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 brand-bg rounded-t-2xl"></div>
              <h3 className="text-2xl font-cinematic font-black mb-6 tracking-tight">Digital Registration</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Photo Upload - NEW */}
                <div className="mb-6">
                   <h4 className="flex items-center gap-2 text-[10px] text-brandCyan uppercase font-black tracking-widest mb-3"><UploadCloud size={12}/> Headshot Photo</h4>
                   <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-48 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center bg-brandBlack/50 hover:bg-brandBlack/80 hover:border-brandCyan/50 transition-all cursor-pointer relative overflow-hidden group"
                   >
                      {formData.headshotUrl ? (
                         <img src={formData.headshotUrl} className="w-full h-full object-cover" alt="Preview" />
                      ) : (
                         <div className="text-center p-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 text-brandCyan group-hover:scale-110 transition-transform">
                               <User size={24} />
                            </div>
                            <p className="text-xs font-bold text-white">Click to Upload Headshot</p>
                            <p className="text-[10px] text-brandGray mt-1">JPG or PNG (Max 5MB)</p>
                         </div>
                      )}
                      <input 
                         type="file" 
                         ref={fileInputRef} 
                         onChange={handleImageSelect} 
                         accept="image/*" 
                         className="hidden" 
                         required
                      />
                   </div>
                   {!formData.headshotUrl && <p className="text-[10px] text-red-400 mt-2 font-bold">* Photo is required</p>}
                </div>

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
                        <input name="chineseName" value={formData.chineseName} onChange={handleChange} className="w-full bg-brandBlack/50 border border-white/10 px-4 py-2.5 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-lg transition-all text-white" placeholder="Name in Chinese" />
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

                <button type="submit" disabled={!formData.headshotUrl} className="w-full py-4 brand-bg text-white font-black uppercase tracking-[0.3em] rounded-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,210,255,0.3)] text-xs flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send size={16} /> Generate Official Form
                </button>
                <p className="text-[9px] text-center text-brandGray mt-2">Steps: Upload Photo &rarr; Fill Form &rarr; Generate &rarr; Save PDF &rarr; Email Us</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
