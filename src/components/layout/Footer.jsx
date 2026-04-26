import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-dim border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-gradient rounded flex items-center justify-center font-heading font-bold text-lg text-white">
                O
              </div>
              <span className="font-heading font-bold text-xl text-text-primary tracking-tight">OMRONIX</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Securing the future with blockchain and agentic AI solutions. High-velocity infrastructure for the digital age.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-text-primary mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/blockchain" className="text-text-secondary hover:text-primary text-sm transition-colors">Blockchain Ledger</Link></li>
              <li><Link to="/ai" className="text-text-secondary hover:text-primary text-sm transition-colors">Agentic AI</Link></li>
              <li><Link to="/communication" className="text-text-secondary hover:text-primary text-sm transition-colors">CPaaS Platform</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-text-primary mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-text-secondary hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-primary text-sm transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-text-secondary hover:text-primary text-sm transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-text-primary mb-6">Newsletter</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 rounded-md text-xs font-bold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">© 2026 Omronix. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
