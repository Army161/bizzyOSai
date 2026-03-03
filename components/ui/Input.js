import { clsx } from 'clsx';
import { useState } from 'react';

export function Input({
  label,
  helpText,
  error,
  icon,
  iconRight,
  type = 'text',
  size = 'md',
  className,
  inputClassName,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      {label && (
        <label className="text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <div className={clsx('relative flex items-center', focused && 'ring-2 ring-primary-500 ring-offset-0 rounded-lg')}>
        {icon && (
          <span className="absolute left-3 text-neutral-400 pointer-events-none">
            {icon}
          </span>
        )}
        <input
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={clsx(
            'w-full border rounded-lg bg-white text-neutral-900 placeholder-neutral-400',
            'transition-colors duration-150 outline-none',
            error
              ? 'border-red-400 focus:border-red-500'
              : 'border-neutral-300 focus:border-primary-500',
            size === 'sm' && 'py-1.5 text-sm',
            size === 'md' && 'py-2.5 text-sm',
            size === 'lg' && 'py-3 text-base',
            icon ? 'pl-10' : 'pl-3',
            iconRight ? 'pr-10' : 'pr-3',
            inputClassName
          )}
          {...props}
        />
        {iconRight && (
          <span className="absolute right-3 text-neutral-400">
            {iconRight}
          </span>
        )}
      </div>
      {helpText && !error && (
        <p className="text-xs text-neutral-500">{helpText}</p>
      )}
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
