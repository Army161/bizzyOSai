import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const shadowClasses = {
  none: '',
  sm: 'shadow-elevation-1',
  md: 'shadow-elevation-2',
  lg: 'shadow-elevation-3',
};

const variantClasses = {
  default: 'bg-white border border-neutral-200',
  bordered: 'bg-white border-2 border-primary-200',
  elevated: 'bg-white border border-neutral-100',
  glass: 'bg-white/70 backdrop-blur-sm border border-white/20',
};

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
  shadow = 'sm',
}: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl',
        variantClasses[variant],
        paddingClasses[padding],
        shadowClasses[shadow],
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx('mb-4', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={clsx('text-lg font-semibold text-neutral-900', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx('text-sm text-neutral-500 mt-1', className)}>
      {children}
    </p>
  );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx(className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx('mt-4 pt-4 border-t border-neutral-100 flex items-center', className)}>
      {children}
    </div>
  );
}
