import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Hero = ({ badge, title, description, primaryBtnText, secondaryBtnText, stats, imageSrc, primaryLink, secondaryLink }) => {
  return (
    <section className="relative pt-10 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                {badge}
              </div>
            )}
            <h1 className="text-5xl lg:text-7xl font-heading font-black leading-[1.1] mb-6 tracking-tighter 
bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-cyan">
              {title}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-lg">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              {primaryBtnText && (
                primaryLink ? (
                  <Link to={primaryLink}>
                    <Button variant="primary" size="lg">{primaryBtnText}</Button>
                  </Link>
                ) : (
                  <Button variant="primary" size="lg">{primaryBtnText}</Button>
                )
              )}
              {secondaryBtnText && (
                secondaryLink ? (
                  <Link to={secondaryLink}>
                    <Button variant="secondary" size="lg">{secondaryBtnText}</Button>
                  </Link>
                ) : (
                  <Button variant="secondary" size="lg">{secondaryBtnText}</Button>
                )
              )}
            </div>
            {stats && (
              <div className="flex gap-12 py-8 border-t border-border">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-heading font-bold text-text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-text-muted font-heading font-bold tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-30 rounded-full"></div>
            <img src={imageSrc} alt="Hero" className="relative rounded-3xl shadow-2xl border border-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
