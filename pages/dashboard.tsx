import React from 'react';
import PremiumLayout from '../components/layouts/PremiumLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const stats = [
  { label: 'Active Agents', value: '12', change: '+3 this week', trend: 'up' },
  { label: 'Leads Captured', value: '1,284', change: '+18% vs last month', trend: 'up' },
  { label: 'Revenue', value: '$24,500', change: '+12% vs last month', trend: 'up' },
  { label: 'Integrations', value: '8', change: '2 pending setup', trend: 'neutral' },
];

const recentActivity = [
  { id: 1, title: 'New lead captured', description: 'John Smith via chatbot', time: '2 min ago', status: 'success' as const },
  { id: 2, title: 'Payment received', description: '$299 - Pro Plan subscription', time: '15 min ago', status: 'success' as const },
  { id: 3, title: 'Agent deployed', description: 'Sales Follow-up Agent v2', time: '1 hr ago', status: 'primary' as const },
  { id: 4, title: 'Integration synced', description: 'Google Sheets data updated', time: '3 hr ago', status: 'info' as const },
];

const quickActions = [
  { label: 'Create Agent', icon: '🤖', href: '/agents/new' },
  { label: 'Add Integration', icon: '🔗', href: '/integrations' },
  { label: 'View Leads', icon: '📈', href: '/leads' },
  { label: 'Billing', icon: '💳', href: '/billing' },
];

export default function Dashboard() {
  return (
    <PremiumLayout>
      <div className="animate-fade-in">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
          <p className="text-neutral-500 text-sm mt-1">Welcome back. Here's what's happening today.</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} variant="default" shadow="sm">
              <CardContent>
                <p className="text-sm font-medium text-neutral-500">{stat.label}</p>
                <p className="text-3xl font-bold text-neutral-900 mt-1">{stat.value}</p>
                <p className={`text-xs mt-1.5 ${stat.trend === 'up' ? 'text-green-600' : 'text-neutral-400'}`}>
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent activity */}
          <div className="lg:col-span-2">
            <Card variant="default" shadow="sm">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest events across your platform</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recentActivity.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-neutral-900">{item.title}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">{item.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <Badge variant={item.status} size="sm">{item.status}</Badge>
                        <span className="text-xs text-neutral-400">{item.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Quick actions */}
          <div>
            <Card variant="default" shadow="sm">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-all text-center group"
                    >
                      <span className="text-2xl">{action.icon}</span>
                      <span className="text-xs font-medium text-neutral-600 group-hover:text-primary-700">
                        {action.label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PremiumLayout>
  );
}
