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
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Context
import { AuthProvider, useAuth } from './AuthContext';

// Components
import ChatBot from './components/ChatBot';

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const Logo = ({ size = "normal" }: { size?: "normal" | "small" }) => (
  <Link to="/" className="flex items-center gap-3 group">
    <img 
      src="https://i.ibb.co/c4Rn9W9/ALT-LOGO-2400x1800.png" 
      alt="ALT Logo"
      className={`${size === 'small' ? 'h-10' : 'h-14'} w-auto object-contain group-hover:scale-105 transition-transform`}
    />
    <div className="flex flex-col leading-none">
      <span className={`${size === 'small' ? 'text-xl' : 'text-3xl'} font-cinematic font-black brand-gradient-text tracking-tight`}>ALT</span>
      <span className={`${size === 'small' ? 'text-[8px]' : 'text-[10px]'} text-white/80 font-bold tracking-[0.2em] uppercase`}>Hollywood Dream Star</span>
    </div>
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs & History', path: '/programs' },
    { name: 'Actors', path: '/actors' },
    { name: 'Films', path: '/films' },
    { name: 'Jobs & Casting', path: '/casting' },
    { name: 'Apply', path: '/apply' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-brandBlack/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] uppercase tracking-widest font-bold transition-all hover:brand-gradient-text ${
                  isActive(link.path) ? 'brand-gradient-text' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="text-[11px] uppercase tracking-widest font-black brand-gradient-text flex items-center gap-2">
                   <User size={12} /> Dashboard
                </Link>
                <button onClick={logout} className="text-[11px] uppercase tracking-widest font-bold text-red-500 hover:text-red-400">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="p-2 border border-brandCyan/20 rounded-full hover:border-brandCyan text-brandCyan transition-all">
                <Lock size={14} />
              </Link>
            )}
          </div>

          <div className="xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-brandBlack border-b border-white/10 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block text-lg font-bold uppercase tracking-widest ${isActive(link.path) ? 'brand-gradient-text' : 'text-white'}`}>
              {link.name}
            </Link>
          ))}
          {isAuthenticated && <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block text-lg font-bold uppercase tracking-widest brand-gradient-text">Dashboard</Link>}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brandBlack border-t border-white/10 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Logo size="small" />
          <p className="text-brandGray text-sm mt-6 leading-relaxed">
            Professional Youth Film Platform based in Los Angeles, bridging training and real production using Hollywood industry standards.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4 text-sm text-brandGray">
            <li><Link to="/programs" className="hover:brand-gradient-text transition-colors">Programs & History</Link></li>
            <li><Link to="/films" className="hover:brand-gradient-text transition-colors">Films</Link></li>
            <li><Link to="/casting" className="hover:brand-gradient-text transition-colors">Jobs & Casting</Link></li>
            <li><Link to="/apply" className="hover:brand-gradient-text transition-colors">Apply</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Industry Access</h4>
          <ul className="space-y-4 text-sm text-brandGray">
            <li><Link to="/login" className="flex items-center gap-2 hover:brand-gradient-text"><Lock size={12} /> Agent Portal</Link></li>
            <li className="flex items-center gap-2 cursor-pointer hover:brand-gradient-text"><FileDown size={14} /> Application Forms</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Follow Us</h4>
          <div className="flex space-x-4 mb-6">
            <a href="https://www.instagram.com/altdreamstar" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full hover:border-brandCyan hover:text-brandCyan transition-all"><Instagram size={20} /></a>
            <a href="#" className="p-2 border border-white/10 rounded-full hover:border-brandCyan hover:text-brandCyan transition-all"><Facebook size={20} /></a>
            <a href="#" className="p-2 border border-white/10 rounded-full hover:border-brandCyan hover:text-brandCyan transition-all"><Youtube size={20} /></a>
          </div>
          <div className="text-brandGray text-xs space-y-4">
            <div className="flex items-start gap-2">
              <MapPin size={12} className="mt-1 shrink-0" />
              <div>
                <p className="font-bold text-white/90 text-[10px] mb-0.5">HEADQUARTERS</p>
                <p>633 W 5th St, Los Angeles, CA 90071</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={12} className="mt-1 shrink-0" />
              <div>
                <p className="font-bold text-white/90 text-[10px] mb-0.5">BRANCH OFFICE</p>
                <p>17800 Castleton St, Suite 173, City of Industry, CA 91748</p>
              </div>
            </div>
            <p className="flex items-center gap-2"><Mail size={12} /> altdreamstar@gmail.com</p>
            <p className="flex items-center gap-2"><Phone size={12} /> +1 (323) 918-6688</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-brandGray uppercase tracking-[0.2em]">
        <p>© 2025 ALT HOLLYWOOD DREAM STAR.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </AuthProvider>
  );
}