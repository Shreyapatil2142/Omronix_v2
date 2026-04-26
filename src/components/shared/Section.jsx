import React from 'react';

export const SectionHeader = ({ title, subtitle, description, align = 'left' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {subtitle && (
        <span className="text-secondary font-heading font-bold text-xs tracking-[0.2em] uppercase block mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

const Section = ({ children, className = '', variant = 'default', ...props }) => {
  const bgClass = variant === 'alt' ? 'bg-surface-dim' : 'bg-background';
  
  return (
    <section className={`py-20 ${bgClass} ${className}`} {...props}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
