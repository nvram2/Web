import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-brand-lime text-brand-dark hover:bg-[#cbe300]",
      secondary: "bg-brand-text text-brand-bg hover:bg-brand-text/90",
      outline: "border border-brand-text bg-transparent text-brand-text hover:bg-brand-text hover:text-brand-bg",
      ghost: "hover:bg-brand-grey text-brand-text",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
