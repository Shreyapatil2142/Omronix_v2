import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import logo from "../../assets/omronix.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Blockchain', path: '/blockchain' },
        { name: 'Agentic AI', path: '/ai' },
        { name: 'Communication', path: '/communication' },
        { name: 'About', path: '/about' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                   

                    <div className="w-14 h-14 flex items-center justify-center">
                        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-heading font-black text-2xl tracking-tighter text-text-primary">OMRONIX</span>
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `font-heading font-bold text-sm tracking-widest uppercase transition-all hover:text-primary ${isActive ? 'text-primary' : 'text-text-secondary'}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/contact">
                        <button className="bg-brand-gradient text-white px-6 py-2 rounded-full font-heading font-bold text-xs tracking-widest hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">
                            CONTACT US
                        </button>
                    </Link>
                </nav>

                <button
                    className="lg:hidden text-text-primary"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu size={28} />
                </button>
            </div>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </header>
    );
};

export default Header;
