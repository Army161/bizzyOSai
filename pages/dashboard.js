import { useState } from 'react';
import { PremiumLayout } from '../components/layouts/PremiumLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Tabs } from '../components/ui/Tabs';

const stats = [
  { label: 'Active Agents', value: '12', change: '+3', trend: 'up', icon: '🤖' },
  { label: 'Leads Generated', value: '1,284', change: '+18%', trend: 'up', icon: '📋' },
  { label: 'Revenue', value: '$24,890', change: '+12%', trend: 'up', icon: '💰' },
  { label: 'Automations Run', value: '9,410', change: '+32%', trend: 'up', icon: '⚡' },
];

const recentActivity = [
  { id: 1, agent: 'Lead Capture Agent', action: 'Generated 14 new leads from Google Maps', time: '2 min ago', status: 'success' },
  { id: 2, agent: 'Email Outreach Agent', action: 'Sent 52 personalised follow-ups via Twilio', time: '18 min ago', status: 'success' },
  { id: 3, agent: 'Analytics Agent', action: 'Generated weekly performance report', time: '1 hr ago', status: 'success' },
  { id: 4, agent: 'Deployment Agent', action: 'Deployed latest build to Vercel', time: '3 hr ago', status: 'warning' },
  { id: 5, agent: 'Payment Agent', action: 'Processed 8 Stripe subscription renewals', time: '5 hr ago', status: 'success' },
];

const DASHBOARD_TABS = [
  { value: 'overview', label: 'Overview' },
  { value: 'agents', label: 'Agents', count: 12 },
  { value: 'activity', label: 'Activity', count: 5 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <PremiumLayout title="Dashboard">
      <div className="space-y-6 animate-fade-in">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{stat.icon}</span>
                <Badge variant={stat.trend === 'up' ? 'success' : 'danger'} size="sm">
                  {stat.change}
                </Badge>
              </div>
              <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
              <p className="text-sm text-neutral-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs tabs={DASHBOARD_TABS} activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Health</CardTitle>
                <CardDescription>All systems operational</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'API Server', status: 'success' },
                    { name: 'Database', status: 'success' },
                    { name: 'AI Agents', status: 'success' },
                    { name: 'Integrations', status: 'warning' },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between py-1.5">
                      <span className="text-sm text-neutral-700">{item.name}</span>
                      <Badge variant={item.status} dot size="sm">
                        {item.status === 'success' ? 'Operational' : 'Degraded'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks at a glance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: '🤖', label: 'New Agent' },
                    { icon: '🔗', label: 'Add Integration' },
                    { icon: '📋', label: 'Import Leads' },
                    { icon: '📊', label: 'View Reports' },
                  ].map((action) => (
                    <button
                      key={action.label}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm font-medium text-neutral-700"
                    >
                      <span className="text-2xl">{action.icon}</span>
                      {action.label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'activity' && (
          <Card padding="none">
            <div className="divide-y divide-neutral-100">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-start gap-4 px-6 py-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">🤖</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-900">{item.agent}</p>
                    <p className="text-sm text-neutral-500 truncate">{item.action}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Badge variant={item.status} dot size="sm">
                      {item.status === 'success' ? 'Done' : 'Warning'}
                    </Badge>
                    <span className="text-xs text-neutral-400">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {activeTab === 'agents' && (
          <Card>
            <CardHeader>
              <CardTitle>Active Agents</CardTitle>
              <CardDescription>12 agents currently running</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-500">Agent management coming soon.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </PremiumLayout>
  );
}

