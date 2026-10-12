import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  subtle?: boolean;
  interactive?: boolean;
}

export function Card({ children, subtle = false, interactive = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-neutral-200 dark:border-neutral-800 transition-colors duration-150 ${
        subtle
          ? 'bg-neutral-50 dark:bg-neutral-900/60'
          : 'bg-white dark:bg-[#121212]'
      } ${
        interactive
          ? 'hover:border-neutral-400 dark:hover:border-neutral-600'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
