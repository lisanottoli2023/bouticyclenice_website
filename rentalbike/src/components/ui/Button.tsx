import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import { ArrowRight } from 'lucide-react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bouticycle focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap';

export const Button = ({ variant = 'filled', size = 'md', fullWidth = false, withArrow = false, className, children, ...props }: ButtonProps) => {
  const classes = clsx(
    baseClasses,
    // Variants
    variant === 'filled' && 'bg-bouticycle text-black hover:bg-bouticycle/90',
    variant === 'ghost' && 'bg-transparent text-white hover:text-bouticycle',
    // Sizes
    size === 'sm' && 'px-4 py-2 text-sm',
    size === 'md' && 'px-6 py-3 text-base',
    size === 'lg' && 'px-8 py-4 text-lg',
    // Full width
    fullWidth && 'w-full',
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
      {withArrow && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};