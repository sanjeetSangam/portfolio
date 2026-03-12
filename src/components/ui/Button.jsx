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
      'bg-steel dark:bg-mint text-white dark:text-navy hover:bg-steel/90 dark:hover:bg-mint/90 shadow-lg shadow-steel/20 dark:shadow-mint/10 font-black tracking-tight',
    secondary:
      'bg-navy dark:bg-ghost text-white dark:text-navy hover:bg-navy/90 dark:hover:bg-ghost/90',
    outline:
      'bg-transparent border-2 border-steel dark:border-mint text-steel dark:text-mint hover:bg-steel/5 dark:hover:bg-mint/10 font-black tracking-tight',
    ghost:
      'bg-transparent text-navy dark:text-ghost hover:bg-navy/5 dark:hover:bg-ghost/10 font-bold',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs md:text-sm',
    md: 'px-6 py-3 text-sm md:text-base',
    lg: 'px-8 py-4 text-sm md:text-lg',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest',
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
