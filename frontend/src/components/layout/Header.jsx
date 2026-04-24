import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center font-heading font-bold text-xl text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform">
            O
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight">OMRONIX</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/blockchain" className="text-sm font-medium hover:text-primary transition-colors">Blockchain</Link>
          <Link to="/ai" className="text-sm font-medium hover:text-primary transition-colors">Agentic AI</Link>
          <Link to="/communication" className="text-sm font-medium hover:text-primary transition-colors">Communication</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
          <Link to="/contact" className="px-5 py-2.5 bg-brand-gradient rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95">
            Get Started
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          onClick={openMenu}
          className="lg:hidden w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;
