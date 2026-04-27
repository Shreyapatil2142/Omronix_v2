import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const menuItems = [
  { name: 'Blockchain', path: '/blockchain' },
  { name: 'Agentic AI', path: '/ai' },
  { name: 'Communication', path: '/communication' },
  { name: 'About Us', path: '/about' },
];

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  const prevPathname = React.useRef(location.pathname);

  useEffect(() => {
    if (isOpen && location.pathname !== prevPathname.current) {
      onClose();
    }
    prevPathname.current = location.pathname;
  }, [location.pathname, isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        onClick={onClose}
        className={`absolute inset-0 w-full h-full bg-slate-900/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Close mobile menu overlay"
      />

      <aside
        className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white border-l border-border shadow-2xl transition-transform duration-300 ease-out z-[110] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="h-20 px-6 border-b border-border flex items-center justify-between">
          <Link to="/" onClick={onClose} className="font-heading font-bold text-xl tracking-tight text-text-primary">
            OMRONIX
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-surface-dim flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="p-6 flex flex-col gap-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-heading font-bold text-lg transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'bg-transparent text-text-secondary hover:bg-surface-dim hover:text-text-primary border border-transparent'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="px-6 pt-2">
          <NavLink
            to="/contact"
            onClick={onClose}
            className={({ isActive }) =>
              `block w-full text-center px-5 py-3 rounded-full text-sm font-bold transition-all ${
                isActive
                  ? 'bg-brand-gradient text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]'
                  : 'bg-brand-gradient text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.35)] active:scale-95'
              }`
            }
          >
            Get Started
          </NavLink>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
