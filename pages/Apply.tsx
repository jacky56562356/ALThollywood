import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, Star, Camera, Film, Users, CheckCircle, AlertCircle } from 'lucide-react';

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });
      
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-brandBlack font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img referrerPolicy="no-referrer" 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000" 
            alt="Film Production" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-cinematic font-black mb-6 tracking-tighter uppercase">
              Join The <span className="brand-gradient-text">Next Generation</span> of Hollywood
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 font-medium leading-relaxed">
              We are always looking for talented young actors to join our professional training programs and upcoming film productions. Take the first step towards your Hollywood debut.
            </p>
            
            <a 
              href="mailto:altdreamstar@gmail.com?subject=Application%20Inquiry%20-%20ALT%20Hollywood%20Dream%20Star"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-full uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] text-sm"
            >
              <Mail size={18} /> Apply Now via Email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info & Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left: Application Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-cinematic font-black mb-8 uppercase tracking-wider">Submit <span className="text-brandCyan">Application</span></h2>
              
              {isSubmitted ? (
                <div className="bg-brandCyan/10 border border-brandCyan/30 p-12 text-center rounded-2xl backdrop-blur-sm">
                  <div className="w-20 h-20 bg-brandCyan/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brandCyan">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Application Received</h3>
                  <p className="text-gray-300 text-lg">
                    Thank you for applying to ALT Hollywood Dream Star. We have received your application. Our casting team will review your submission and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                  {errorMessage && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center gap-3">
                      <AlertCircle size={20} />
                      <p>{errorMessage}</p>
                    </div>
                  )}
                  
                  {/* Web3Forms Configuration Fields */}
                  <input type="hidden" name="access_key" value="6faf2627-3ed8-4219-b6a4-535edfe1f7c3" />
                  <input type="hidden" name="subject" value="New Training Application from Website" />
                  <input type="hidden" name="from_name" value="ALT Hollywood Dream Star" />
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Applicant Name *</label>
                      <input type="text" name="Applicant Name" required className="w-full bg-brandBlack/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-colors" placeholder="Full Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Date of Birth *</label>
                      <input type="date" name="Date of Birth" required className="w-full bg-brandBlack/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-colors [color-scheme:dark]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Parent/Guardian *</label>
                      <input type="text" name="Parent/Guardian Name" required className="w-full bg-brandBlack/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-colors" placeholder="Parent/Guardian Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Gender</label>
                      <select name="Gender" className="w-full bg-brandBlack/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-colors appearance-none">
                        <option value="" className="bg-brandBlack">Select Gender</option>
                        <option value="Male" className="bg-brandBlack">Male</option>
                        <option value="Female" className="bg-brandBlack">Female</option>
                        <option value="Other" className="bg-brandBlack">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address *</label>
                      <input type="email" name="Email" required className="w-full bg-brandBlack/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-colors" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number *</label>
                      <input type="tel" name="Phone" required className="w-full bg-brandBlack/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-colors" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Home Address</label>
                    <input type="text" name="Address" className="w-full bg-brandBlack/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-colors" placeholder="123 Hollywood Blvd, Los Angeles, CA" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Acting Experience</label>
                    <textarea name="Experience" rows={3} className="w-full bg-brandBlack/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-colors resize-none" placeholder="List any previous acting experience, training, or school plays. (Leave blank if none)"></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Special Skills</label>
                    <textarea name="Skills" rows={2} className="w-full bg-brandBlack/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-colors resize-none" placeholder="e.g., Dancing, Singing, Martial Arts, Languages spoken"></textarea>
                  </div>

                  {/* Photo Link instead of file upload */}
                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Headshot Photo Link (Optional)</label>
                    <input type="url" name="Headshot URL" className="w-full bg-brandBlack/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandCyan focus:ring-1 focus:ring-brandCyan transition-colors" placeholder="https://drive.google.com/... or any photo link" />
                    <p className="text-xs text-gray-500 mt-1">Upload your photo to Google Drive or any hosting site and paste the link here. You can also email photos directly to altdreamstar@gmail.com</p>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-4 px-8 py-4 bg-brandCyan text-black font-black rounded-lg uppercase tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit Application"} {!isSubmitting && <ArrowRight size={20} />}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, your application will be sent directly to altdreamstar@gmail.com.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm sticky top-24">
                <h2 className="text-2xl font-cinematic font-black mb-8 uppercase tracking-wider">Contact <span className="text-brandCyan">Information</span></h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brandCyan/10 flex items-center justify-center shrink-0 text-brandCyan mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</h4>
                      <a href="mailto:altdreamstar@gmail.com" className="text-lg text-white font-medium hover:text-brandCyan transition-colors">
                        altdreamstar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brandCyan/10 flex items-center justify-center shrink-0 text-brandCyan mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</h4>
                      <a href="tel:+13239186688" className="text-lg text-white font-medium hover:text-brandCyan transition-colors">
                        +1 (323) 918-6688
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brandCyan/10 flex items-center justify-center shrink-0 text-brandCyan mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Headquarters</h4>
                      <p className="text-lg text-white font-medium">
                        633 W 5th St<br />
                        Los Angeles, CA 90071
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brandCyan/10 flex items-center justify-center shrink-0 text-brandCyan mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Branch Office</h4>
                      <p className="text-lg text-white font-medium">
                        17800 Castleton St, Suite 173<br />
                        City of Industry, CA 91748
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-cinematic font-black mb-4 uppercase tracking-wider">What We <span className="text-brandCyan">Look For</span></h2>
            <p className="text-gray-400 text-lg">We are building the next generation of Hollywood stars. Here is what makes a great candidate for our programs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-brandCyan/50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-brandCyan/10 rounded-full flex items-center justify-center text-brandCyan mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Passion & Drive</h3>
              <p className="text-gray-400">A genuine love for performance and storytelling. We want students who are eager to learn and grow.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-brandCyan/50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-brandCyan/10 rounded-full flex items-center justify-center text-brandCyan mb-6">
                <Camera size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Raw Talent</h3>
              <p className="text-gray-400">Whether you have years of experience or are just starting out, we look for natural presence and charisma.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-brandCyan/50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-brandCyan/10 rounded-full flex items-center justify-center text-brandCyan mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Professionalism</h3>
              <p className="text-gray-400">The ability to take direction, work well with others, and maintain focus on a professional set.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
