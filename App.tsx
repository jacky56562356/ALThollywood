
import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Youtube, ChevronRight, FileDown, Mail, MapPin, Phone, Lock, User } from 'lucide-react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import YouthActors from './pages/YouthActors';
import Films from './pages/Films';
import Casting from './pages/Casting';
import Apply from './pages/Apply';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Context
import { AuthProvider, useAuth } from './AuthContext';
import { DataProvider } from './DataContext';

// Components
import ChatBot from './components/ChatBot';

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const Logo = ({ size = "normal" }: { size?: "normal" | "small" }) => (
  <Link to="/" className="flex items-center gap-2 group">
    <img 
      src="https://i.ibb.co/c4Rn9W9/ALT-LOGO-2400x1800.png" 
      alt="ALT Logo"
      className={`${size === 'small' ? 'h-8 md:h-10' : 'h-9 md:h-12'} w-auto object-contain group-hover:scale-105 transition-transform`}
    />
    <div className="flex flex-col leading-none">
      <span className={`${size === 'small' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} font-cinematic font-black brand-gradient-text tracking-tight`}>ALT</span>
      <span className={`${size === 'small' ? 'text-[7px] md:text-[8px]' : 'text-[8px] md:text-[9px]'} text-white/80 font-bold tracking-[0.2em] uppercase`}>Hollywood Dream Star</span>
    </div>
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Actors', path: '/actors' },
    { name: 'Films', path: '/films' },
    { name: 'Casting', path: '/casting' },
    { name: 'Apply', path: '/apply' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-brandBlack/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 md:h-16 items-center">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] uppercase tracking-widest font-bold transition-all hover:brand-gradient-text ${
                  isActive(link.path) ? 'brand-gradient-text' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center gap-3 pl-3 border-l border-white/10">
                <Link to="/dashboard" className="text-[10px] uppercase tracking-widest font-black brand-gradient-text flex items-center gap-1">
                   <User size={12} /> Dashboard
                </Link>
                <button onClick={logout} className="text-[10px] uppercase tracking-widest font-bold text-red-500 hover:text-red-400">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="p-1.5 border border-brandCyan/20 rounded-full hover:border-brandCyan text-brandCyan transition-all ml-2">
                <Lock size={12} />
              </Link>
            )}
          </div>

          <div className="xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-brandBlack border-b border-white/10 px-4 py-4 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block text-xs font-bold uppercase tracking-[0.2em] py-2 border-b border-white/5 ${isActive(link.path) ? 'brand-gradient-text' : 'text-white'}`}>
              {link.name}
            </Link>
          ))}
          {isAuthenticated && <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text py-2">Dashboard</Link>}
        </div>
      )}
    </nav>
  );
};

const Partners = () => {
  const PARTNER_LOGOS = [
    "https://i.ibb.co/VchGJNF0/20251229153109-206-10.png",
    "https://i.ibb.co/mrMqxmgs/1.png",
    "https://i.ibb.co/pvjT9QV9/1346.png",
    "https://i.ibb.co/zV023dCb/20250905152435-265-151.jpg",
    "https://i.ibb.co/4RNsSNYg/AI-8707697f3ab3980df8ccc03824c49fc3-3804x2800.png",
    "https://i.ibb.co/Ldwg7vRN/4a2ec28a2689027a04641d8a150fda3f.png",
    "https://i.ibb.co/cSVbb7ZM/list-2.png",
    "https://i.ibb.co/RGZvtdWN/Alvantor-new-logo-2020-1.png"
  ];

  return (
    <div className="bg-brandBlack border-t border-white/10 py-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 text-center">
        <h3 className="brand-gradient-text text-[8px] md:text-[10px] font-black tracking-[0.4em] uppercase">Our Partners</h3>
      </div>
      
      {/* Gradient Masks for fade effect */}
      <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-brandBlack to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-brandBlack to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-scroll">
        {/* Tripled list for seamless loop */}
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
          <div key={index} className="mx-3 md:mx-6 w-24 md:w-40 h-12 md:h-24 flex items-center justify-center bg-white rounded-lg md:rounded-xl p-2 md:p-3 border border-white/10 hover:border-brandCyan/50 transition-all duration-300 shadow-lg">
            <img 
              src={logo} 
              alt={`Partner ${index}`} 
              className="max-w-full max-h-full object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-brandBlack border-t border-white/10 pt-8 pb-6 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="col-span-1 md:col-span-1">
          <Logo size="small" />
          <p className="text-gray-500 text-[10px] mt-3 leading-relaxed font-medium">
            Professional Youth Film Platform based in Los Angeles, bridging training and real production using Hollywood industry standards.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-[9px]">Quick Links</h4>
          <ul className="space-y-1.5 text-[10px] text-gray-500 font-medium">
            <li><Link to="/programs" className="hover:text-brandCyan transition-colors">Programs & History</Link></li>
            <li><Link to="/films" className="hover:text-brandCyan transition-colors">Films</Link></li>
            <li><Link to="/casting" className="hover:text-brandCyan transition-colors">Jobs & Casting</Link></li>
            <li><Link to="/apply" className="hover:text-brandCyan transition-colors">Apply & Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-[9px]">Industry Access</h4>
          <ul className="space-y-1.5 text-[10px] text-gray-500 font-medium">
            <li><Link to="/login" className="flex items-center gap-2 hover:text-brandCyan"><Lock size={10} /> Agent Portal</Link></li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-brandCyan"><FileDown size={12} /> Application Forms</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-[9px]">Follow Us</h4>
          <div className="flex space-x-2 mb-3">
            <a href="https://www.instagram.com/altdreamstar" target="_blank" rel="noopener noreferrer" className="p-1.5 border border-white/10 rounded-full hover:border-brandCyan hover:text-brandCyan transition-all text-gray-500"><Instagram size={14} /></a>
            <a href="#" className="p-1.5 border border-white/10 rounded-full hover:border-brandCyan hover:text-brandCyan transition-all text-gray-500"><Facebook size={14} /></a>
            <a href="#" className="p-1.5 border border-white/10 rounded-full hover:border-brandCyan hover:text-brandCyan transition-all text-gray-500"><Youtube size={14} /></a>
          </div>
          <div className="text-gray-500 text-[9px] space-y-2 font-medium">
            <div className="flex items-start gap-2">
              <MapPin size={10} className="mt-0.5 shrink-0 text-brandCyan" />
              <div>
                <p className="font-bold text-white text-[8px] mb-0.5">HEADQUARTERS</p>
                <p>633 W 5th St, Los Angeles, CA 90071</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={10} className="mt-0.5 shrink-0 text-brandCyan" />
              <div>
                <p className="font-bold text-white text-[8px] mb-0.5">BRANCH OFFICE</p>
                <p>17800 Castleton St, Suite 173, City of Industry, CA 91748</p>
              </div>
            </div>
            <p className="flex items-center gap-2"><Mail size={10} className="text-brandCyan" /> altdreamstar@gmail.com</p>
            <p className="flex items-center gap-2"><Phone size={10} className="text-brandCyan" /> +1 (323) 918-6688</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-[8px] text-gray-600 font-bold uppercase tracking-widest">
        <p>© 2025 ALT HOLLYWOOD DREAM STAR. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-brandCyan transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brandCyan transition-colors">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AuthProvider>
      <DataProvider>
        <div className="min-h-screen bg-brandBlack text-white selection:bg-brandCyan selection:text-black">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/actors" element={<YouthActors />} />
              <Route path="/films" element={<Films />} />
              <Route path="/casting" element={<Casting />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
          </main>
          <Partners />
          <Footer />
          <ChatBot />
        </div>
      </DataProvider>
    </AuthProvider>
  );
}
