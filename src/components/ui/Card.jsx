import React from 'react';

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Card = ({ children, className = '', blur = 'none', ...props }) => {
  const blurClass = {
    none: '',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  }[blur];

  return (
    <div 
      className={`bg-surface-card border border-border rounded-3xl transition-all duration-300 ${blurClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
