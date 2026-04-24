import React from 'react';
import Button from '../ui/Button';

const Hero = ({ 
  badge, 
  title, 
  description, 
  primaryBtnText, 
  secondaryBtnText,
  stats = [],
  imageSrc
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#050D1A]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          {badge && (
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/20 text-secondary font-heading font-bold text-xs tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              {badge}
            </div>
          )}
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-brand-gradient">
            {title}
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg">{primaryBtnText}</Button>
            <Button variant="secondary" size="lg">{secondaryBtnText}</Button>
          </div>
          
          {stats.length > 0 && (
            <div className="flex overflow-x-auto md:overflow-visible gap-8 pt-8 border-t border-white/5 no-scrollbar pb-4 md:pb-0">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col min-w-[100px] md:min-w-0">
                  <span className="text-xl md:text-2xl font-heading font-bold text-primary">{stat.value}</span>
                  <span className="text-[10px] md:text-xs font-heading font-bold text-white/40 tracking-widest uppercase whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="relative hidden lg:block perspective-1000">
          <div className="absolute -inset-20 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="relative z-10 p-1 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl transition-all duration-700 hover:rotate-0 hover:scale-[1.02] cursor-pointer group shadow-2xl"
               style={{ transform: 'rotateX(4deg) rotateY(-8deg) rotateZ(1deg)' }}>
            <div className="rounded-[2.2rem] overflow-hidden border border-white/10 relative h-[450px]">
              <img 
                src={imageSrc} 
                alt="Omronix Interface" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-60"></div>
            </div>
          </div>
          
          {/* Floating Accents */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
