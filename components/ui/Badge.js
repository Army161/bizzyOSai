import { clsx } from 'clsx';

const variantClasses = {
  default: 'bg-neutral-100 text-neutral-700',
  primary: 'bg-primary-100 text-primary-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700',
  accent: 'bg-accent-100 text-accent-700',
};

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-xs px-2.5 py-1',
  lg: 'text-sm px-3 py-1.5',
};

export function Badge({ children, variant = 'default', size = 'md', dot = false, className, ...props }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-medium rounded-full',
        variantClasses[variant] || variantClasses.default,
        sizeClasses[size] || sizeClasses.md,
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={clsx(
            'w-1.5 h-1.5 rounded-full',
            variant === 'success' && 'bg-green-500',
            variant === 'danger' && 'bg-red-500',
            variant === 'warning' && 'bg-yellow-500',
            variant === 'primary' && 'bg-primary-500',
            variant === 'accent' && 'bg-accent-500',
            variant === 'default' && 'bg-neutral-500'
          )}
        />
      )}
      {children}
    </span>
  );
}
