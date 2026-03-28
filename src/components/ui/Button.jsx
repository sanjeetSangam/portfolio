import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent/90 shadow-md shadow-accent/20 font-bold tracking-tight',
    secondary:
      'bg-primary-light text-primary hover:bg-primary-light/90 dark:bg-zinc-800 dark:text-zinc-200 shadow-sm border border-black/5 dark:border-white/5 font-bold tracking-tight',
    outline:
      'bg-transparent border-2 border-accent text-accent hover:bg-accent/5 font-bold tracking-tight',
    ghost:
      'bg-transparent text-primary dark:text-primary-light hover:bg-primary/5 dark:hover:bg-primary-light/5 font-bold',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-2.5 text-[11px]',
    lg: 'px-8 py-3.5 text-xs',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-[0.1em]',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
