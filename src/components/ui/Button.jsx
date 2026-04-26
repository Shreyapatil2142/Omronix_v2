import React from 'react';

const Button = ({ 
  children, 
  variant = 'secondary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-gradient text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] rounded-full",
    secondary: "bg-black/5 border border-white/10 text-black hover:bg-white/10 hover:border-primary/50 rounded-full",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10 rounded-full",
    ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5 rounded-lg",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
