import { clsx } from 'clsx';

export function Card({ children, className, padding = 'md', shadow = 'elevation-1', border = true, ...props }) {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl',
        border && 'border border-neutral-200',
        shadow === 'elevation-1' && 'shadow-elevation-1',
        shadow === 'elevation-2' && 'shadow-elevation-2',
        shadow === 'elevation-3' && 'shadow-elevation-3',
        shadow === 'none' && '',
        padding === 'sm' && 'p-4',
        padding === 'md' && 'p-6',
        padding === 'lg' && 'p-8',
        padding === 'none' && '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={clsx('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={clsx('text-lg font-semibold text-neutral-900', className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={clsx('text-sm text-neutral-500 mt-1', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div className={clsx('mt-4 pt-4 border-t border-neutral-100 flex items-center', className)} {...props}>
      {children}
    </div>
  );
}
