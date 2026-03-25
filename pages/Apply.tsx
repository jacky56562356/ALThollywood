import React from 'react';
import { Mail, MapPin, Phone, ArrowRight, Star, Camera, Film, Users } from 'lucide-react';

export default function Apply() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Application Process */}
            <div>
              <h2 className="text-3xl font-cinematic font-black mb-8 uppercase tracking-wider">Application <span className="text-brandCyan">Process</span></h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brandCyan/10 border border-brandCyan/30 flex items-center justify-center shrink-0 text-brandCyan">
                    <span className="font-black text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">Prepare Your Materials</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Gather your headshots, resume (if applicable), and any performance reels or videos. Don't worry if you're a beginner—we look for raw potential and passion.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brandCyan/10 border border-brandCyan/30 flex items-center justify-center shrink-0 text-brandCyan">
                    <span className="font-black text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">Send Us an Email</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Click the "Apply Now" button or email us directly at <span className="text-white font-bold">altdreamstar@gmail.com</span>. Include your child's name, age, and a brief introduction.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brandCyan/10 border border-brandCyan/30 flex items-center justify-center shrink-0 text-brandCyan">
                    <span className="font-black text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">Audition & Interview</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Our casting directors will review your submission. Selected candidates will be invited for an in-person or virtual audition and interview.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Information */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
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
