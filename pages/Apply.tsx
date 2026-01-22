
import React from 'react';
import { FileDown, CheckCircle2 } from 'lucide-react';

export default function Apply() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-60 pb-40 text-center px-4">
        <div className="max-w-2xl mx-auto bg-white/5 border border-brandCyan/20 p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 brand-bg opacity-[0.02] blur-3xl"></div>
          <div className="w-24 h-24 brand-bg text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(0,210,255,0.4)] relative">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-cinematic font-black mb-6 tracking-tight">Application Received</h2>
          <p className="text-brandGray text-lg leading-relaxed mb-12 font-light">
            Thank you for applying to ALT HOLLYWOOD DREAM STAR. Our professional review team will analyze your portfolio and contact the parent/guardian within 5-7 business days.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-12 py-5 brand-bg text-white font-black uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Back to Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <h2 className="brand-gradient-text text-sm font-black tracking-[0.4em] uppercase mb-6">Join Us</h2>
            <h1 className="text-6xl font-cinematic font-black mb-10 tracking-tight leading-tight">Your Hollywood Journey Starts Here</h1>
            <p className="text-brandGray text-xl mb-16 font-light leading-relaxed">
              All applicants are reviewed by our professional team. Participation is subject to project requirements and industry standard availability.
            </p>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-8">Official Documentation</h3>
              <a href="#" className="flex items-center justify-between p-8 border border-white/10 bg-white/5 rounded-2xl hover:border-brandCyan/40 transition-all group">
                <div className="flex items-center gap-6">
                  <div className="p-4 brand-bg rounded-xl group-hover:scale-110 transition-transform"><FileDown className="text-white" size={24} /></div>
                  <div>
                    <p className="font-bold text-lg mb-1">Actor Application Form</p>
                    <p className="text-xs text-brandGray font-medium">Standard Release · PDF · 1.2 MB</p>
                  </div>
                </div>
                <span className="text-[10px] brand-gradient-text font-black uppercase tracking-widest hidden sm:block">Download</span>
              </a>
              <a href="#" className="flex items-center justify-between p-8 border border-white/10 bg-white/5 rounded-2xl hover:border-brandCyan/40 transition-all group">
                <div className="flex items-center gap-6">
                  <div className="p-4 brand-bg rounded-xl group-hover:scale-110 transition-transform"><FileDown className="text-white" size={24} /></div>
                  <div>
                    <p className="font-bold text-lg mb-1">Parental Consent Bundle</p>
                    <p className="text-xs text-brandGray font-medium">Legal Requirement · PDF · 0.8 MB</p>
                  </div>
                </div>
                <span className="text-[10px] brand-gradient-text font-black uppercase tracking-widest hidden sm:block">Download</span>
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white/5 p-10 border border-white/10 rounded-3xl relative">
              <div className="absolute top-0 left-0 w-full h-1 brand-bg rounded-t-3xl"></div>
              <h3 className="text-3xl font-cinematic font-black mb-10 tracking-tight">Online Registration</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-brandGray uppercase font-black tracking-widest mb-3">Talent Full Name</label>
                    <input required className="w-full bg-brandBlack/50 border border-white/10 px-6 py-4 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-xl transition-all" placeholder="Legal Name" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-brandGray uppercase font-black tracking-widest mb-3">Age</label>
                    <input required type="number" className="w-full bg-brandBlack/50 border border-white/10 px-6 py-4 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-xl transition-all" placeholder="Years" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] text-brandGray uppercase font-black tracking-widest mb-3">Parent/Guardian Email</label>
                  <input required type="email" className="w-full bg-brandBlack/50 border border-white/10 px-6 py-4 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-xl transition-all" placeholder="contact@domain.com" />
                </div>
                <div>
                  <label className="block text-[10px] text-brandGray uppercase font-black tracking-widest mb-3">Professional Experience</label>
                  <textarea rows={4} className="w-full bg-brandBlack/50 border border-white/10 px-6 py-4 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-xl transition-all resize-none" placeholder="Classes, credits, or theater background..."></textarea>
                </div>
                <div>
                  <label className="block text-[10px] text-brandGray uppercase font-black tracking-widest mb-3">Audition Reel / Link</label>
                  <input className="w-full bg-brandBlack/50 border border-white/10 px-6 py-4 focus:outline-none focus:border-brandCyan/60 text-sm font-medium rounded-xl transition-all" placeholder="YouTube or Vimeo URL" />
                </div>
                <button type="submit" className="w-full py-5 brand-bg text-white font-black uppercase tracking-[0.3em] rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                  Submit Talent Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
