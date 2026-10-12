import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, className = '', ...props }, ref) => {
    const inputId = id || props.name || Math.random().toString(36).substring(2, 9);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            {label}
            {props.required && <span className="ml-1 text-neutral-400">*</span>}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`w-full px-3.5 py-2.5 text-sm rounded-md border transition-colors bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white focus:border-transparent ${
            error
              ? 'border-neutral-900 dark:border-white ring-1 ring-neutral-900 dark:ring-white'
              : 'border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600'
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-xs font-medium text-neutral-900 dark:text-neutral-200 mt-0.5 flex items-center gap-1">
            <span aria-hidden="true">■</span>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, id, className = '', ...props }, ref) => {
    const textareaId = id || props.name || Math.random().toString(36).substring(2, 9);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            {label}
            {props.required && <span className="ml-1 text-neutral-400">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={`w-full px-3.5 py-2.5 text-sm rounded-md border transition-colors bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-white focus:border-transparent min-h-[120px] resize-y ${
            error
              ? 'border-neutral-900 dark:border-white ring-1 ring-neutral-900 dark:ring-white'
              : 'border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600'
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-xs font-medium text-neutral-900 dark:text-neutral-200 mt-0.5 flex items-center gap-1">
            <span aria-hidden="true">■</span>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
