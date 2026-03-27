import React, { useState, useEffect } from 'react';
import { Camera, Star, Calendar, Clock, Users, Award, Play, ChevronRight, Quote, AlertCircle, Film, Clapperboard, Video, MapPin, Phone, Mail } from 'lucide-react';

export default function SummerCamp() {
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    parentName: '',
    phone: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const submitData = new FormData(form);
    submitData.append("access_key", "6faf2627-3ed8-4219-b6a4-535edfe1f7c3");
    submitData.append("subject", "New Summer Camp Application 2026");
    submitData.append("from_name", "ALT Hollywood Dream Star");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const goldText = "bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-transparent bg-clip-text";
  const goldBg = "bg-gradient-to-r from-[#BF953F] to-[#B38728] text-black";
  const goldBorder = "border-[#BF953F]/50";

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#BF953F] selection:text-black">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img referrerPolicy="no-referrer" 
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2500&auto=format&fit=crop" 
            alt="Cinematic Film Set" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#BF953F]/30 bg-black/50 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Star className="w-4 h-4 text-[#BF953F]" />
            <span className={`text-xs font-bold tracking-[0.3em] uppercase ${goldText}`}>ALT Hollywood Dream Star</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-6 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            2026 Hollywood <br/>
            <span className={goldText}>Film Summer Camp</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 font-light mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Real Film Production Experience for Kids. <br className="hidden md:block"/> Don't just watch movies. Make them.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <button 
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className={`${goldBg} px-10 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(191,149,63,0.3)] flex items-center justify-center gap-2`}
            >
              Apply Now <ChevronRight size={18} />
            </button>
            <button 
              onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm border border-[#BF953F] text-[#FCF6BA] hover:bg-[#BF953F]/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm`}
            >
              View Program
            </button>
          </div>
        </div>
      </section>

      {/* URGENCY & TRUST BAR */}
      <section className="border-y border-[#BF953F]/20 bg-black/80 backdrop-blur-md sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2 text-red-400 animate-pulse">
              <AlertCircle size={16} />
              <span className="uppercase tracking-wider font-bold">Strictly Limited to 15 Spots Per Session</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-gray-400">
              <span className="flex items-center gap-2"><Users size={16} className="text-[#BF953F]"/> Ages 6-17</span>
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#BF953F]"/> June & July Sessions</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-[#BF953F]"/> Los Angeles, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL HEADLINE */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light leading-relaxed text-gray-200">
            "Give your child the gift of a <strong className={goldText}>real Hollywood production</strong>. They will build confidence, learn teamwork, and star in their own cinematic masterpiece."
          </h2>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="program" className="py-24 bg-zinc-950 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className={`text-sm font-bold tracking-[0.3em] uppercase mb-4 ${goldText}`}>The Experience</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Why Choose Our Camp?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Video size={32}/>, title: "Real Film Production", desc: "Not a traditional classroom. Students learn on a professional, active film set." },
              { icon: <Users size={32}/>, title: "Hollywood Crew", desc: "Mentored by active industry professionals, directors, and cinematographers." },
              { icon: <Award size={32}/>, title: "Festival Submission", desc: "Completed films are submitted to international youth film festivals." },
              { icon: <Film size={32}/>, title: "Build Demo Reel", desc: "Every student leaves with high-quality footage for their professional acting portfolio." }
            ].map((feature, idx) => (
              <div key={idx} className={`p-8 bg-black border ${goldBorder} rounded-sm hover:-translate-y-2 transition-transform duration-300 group`}>
                <div className="text-[#BF953F] mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT SECTION: DETAILS & SCHEDULE */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image */}
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#BF953F]/30 shadow-[0_0_50px_rgba(191,149,63,0.1)]">
              <img referrerPolicy="no-referrer" 
                src="https://i.ibb.co/v6722zd0/20250929162853-135-10.jpg" 
                alt="Director on set" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className={`inline-block px-4 py-1 bg-black/80 backdrop-blur-md border ${goldBorder} text-[#FCF6BA] text-xs font-bold tracking-widest uppercase mb-3`}>
                  Program Details
                </div>
                <ul className="space-y-3 text-lg font-serif text-white">
                  <li className="flex items-center gap-3"><CheckCircle /> Acting Training & Character Study</li>
                  <li className="flex items-center gap-3"><CheckCircle /> Directing Guidance & Set Etiquette</li>
                  <li className="flex items-center gap-3"><CheckCircle /> Camera Performance Techniques</li>
                  <li className="flex items-center gap-3"><CheckCircle /> Real Shooting & Production</li>
                </ul>
              </div>
            </div>

            {/* Right: Schedule & Outcomes */}
            <div className="space-y-12">
              <div>
                <h3 className={`text-sm font-bold tracking-[0.3em] uppercase mb-4 ${goldText}`}>Logistics</h3>
                <h2 className="text-4xl font-serif font-bold text-white mb-8">Schedule & Outcomes</h2>
                
                <div className="space-y-6">
                  <div className={`p-6 border ${goldBorder} bg-zinc-950/50 rounded-sm`}>
                    <h4 className="text-[#FCF6BA] font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2"><Calendar size={14}/> 2026 Sessions</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-black p-4 border border-white/5">
                        <p className="font-bold text-white text-lg">Session 1</p>
                        <p className="text-gray-400 text-sm">June 15 – June 27</p>
                      </div>
                      <div className="bg-black p-4 border border-white/5">
                        <p className="font-bold text-white text-lg">Session 2</p>
                        <p className="text-gray-400 text-sm">July 20 – August 1</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-gray-300 text-sm">
                      <Clock size={16} className="text-[#BF953F]" />
                      <span>Daily Schedule: <strong>10:00 AM – 4:00 PM</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-serif text-2xl mb-6">Final Outcomes</h4>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: "Short Film Production", icon: <Film size={20}/> },
                    { title: "Professional Demo Reel", icon: <Play size={20}/> },
                    { title: "Professional Photos", icon: <Camera size={20}/> },
                    { title: "Certificate of Completion", icon: <Award size={20}/> }
                  ].map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 text-[#BF953F]">{outcome.icon}</div>
                      <span className="text-gray-300 font-medium">{outcome.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white">What Parents Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "The transformation in my daughter's confidence is unbelievable. She didn't just learn acting; she learned how a real movie is made.", author: "Sarah J., Parent of 12yo" },
              { quote: "This is far beyond a typical summer camp. The production quality of the final short film blew our entire family away.", author: "Michael T., Parent of 15yo" },
              { quote: "Professional, organized, and truly inspiring. The Hollywood crew treated the kids like real actors. Highly recommended!", author: "Elena R., Parent of 9yo" }
            ].map((test, idx) => (
              <div key={idx} className="p-8 bg-black border border-white/10 relative">
                <Quote className="absolute top-6 right-6 text-[#BF953F] opacity-20" size={40} />
                <p className="text-gray-300 italic mb-6 relative z-10 leading-relaxed">"{test.quote}"</p>
                <p className={`text-xs font-bold uppercase tracking-widest ${goldText}`}>{test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM & CONTACT */}
      <section id="apply" className="py-24 bg-black relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#BF953F]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Strong CTA & Contact */}
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl font-serif font-black text-white leading-tight mb-8">
                This is not a camp. <br/>
                <span className={goldText}>This is your child's first film.</span>
              </h2>
              <p className="text-xl text-gray-400 font-light mb-12">
                Secure your spot today. Spaces are strictly limited to ensure every child receives personalized directing and screen time.
              </p>

              <div className="space-y-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4 border-b border-white/10 pb-2">Contact Us</h4>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-[#BF953F]"><Phone size={18}/></div>
                  <div>
                    <p>+1 (626) 382-8849</p>
                    <p>+1 (323) 918-6688</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-[#BF953F]"><Mail size={18}/></div>
                  <p>altdreamstar@gmail.com</p>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-[#BF953F]"><MapPin size={18}/></div>
                  <p>www.althollywood.com</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className={`bg-zinc-950 p-8 md:p-12 border ${goldBorder} rounded-sm shadow-2xl`}>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Apply for 2026 Summer Camp</h3>
              <p className="text-gray-400 text-sm mb-8">Fill out the form below and our casting director will contact you within 24 hours.</p>

              {isSubmitted ? (
                <div className="bg-green-950/30 border border-green-500/50 p-8 text-center rounded-sm">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Application Received</h4>
                  <p className="text-gray-300 text-sm">Thank you! We will be in touch shortly to confirm your child's spot.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Child's Name</label>
                      <input 
                        type="text" 
                        name="childName"
                        required
                        value={formData.childName}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#BF953F] transition-colors rounded-sm"
                        placeholder="Enter child's name"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Age (6-17)</label>
                      <input 
                        type="number" 
                        name="age"
                        required
                        min="6" max="17"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#BF953F] transition-colors rounded-sm"
                        placeholder="Child's age"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Parent's Name</label>
                    <input 
                      type="text" 
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#BF953F] transition-colors rounded-sm"
                      placeholder="Enter parent's name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#BF953F] transition-colors rounded-sm"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#BF953F] transition-colors rounded-sm"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className={`w-full ${goldBg} py-4 rounded-sm font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(191,149,63,0.2)] mt-4`}
                  >
                    Apply Now
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    By applying, you agree to our terms and conditions. No payment required at this stage.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for the checkmarks
function CheckCircle() {
  return (
    <div className="w-6 h-6 rounded-full bg-[#BF953F]/20 flex items-center justify-center text-[#BF953F] shrink-0">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}
