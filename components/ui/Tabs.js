import { clsx } from 'clsx';

export function Tabs({ tabs, activeTab, onChange, className }) {
  return (
    <div className={clsx('border-b border-neutral-200', className)}>
      <nav className="-mb-px flex gap-1" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = tab.value === activeTab;
          return (
            <button
              key={tab.value}
              onClick={() => onChange(tab.value)}
              className={clsx(
                'px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors duration-150',
                'border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                isActive
                  ? 'border-primary-600 text-primary-600 bg-primary-50'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'
              )}
              aria-selected={isActive}
              role="tab"
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={clsx(
                    'ml-2 px-1.5 py-0.5 text-xs rounded-full',
                    isActive ? 'bg-primary-100 text-primary-600' : 'bg-neutral-100 text-neutral-500'
                  )}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
