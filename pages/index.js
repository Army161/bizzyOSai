import Link from 'next/link';

const features = [
  { icon: '🤖', title: 'Autonomous AI Agents', description: 'Deploy intelligent agents that work 24/7 to grow your local business automatically.' },
  { icon: '🔗', title: '16+ Integrations', description: 'Connect Stripe, Twilio, Google, Claude, GitHub, Vercel, and more in minutes.' },
  { icon: '📊', title: 'Real-time Analytics', description: 'Track performance, revenue, and customer insights on a live dashboard.' },
  { icon: '⚡', title: 'No-code Automation', description: 'Build powerful workflows without writing a single line of code.' },
  { icon: '🛡️', title: 'Enterprise Security', description: 'SOC 2 compliant with end-to-end encryption and role-based access control.' },
  { icon: '🚀', title: 'One-click Deploy', description: 'Ship to Vercel or Replit instantly. Scale from 0 to millions of users effortlessly.' },
];

const integrationIcons = [
  { icon: '💳', name: 'Stripe' },
  { icon: '📞', name: 'Twilio' },
  { icon: '🧬', name: 'Claude' },
  { icon: '🐙', name: 'GitHub' },
  { icon: '▲', name: 'Vercel' },
  { icon: '🎨', name: 'Lovable' },
  { icon: '🤖', name: 'Emergent' },
  { icon: '☁️', name: 'Google Cloud' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-neutral-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-bold text-neutral-900">bizzyOS<span className="text-primary-600">ai</span></span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="btn btn-ghost">Sign in</Link>
            <Link href="/auth/register" className="btn btn-primary">Get started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-medium mb-6">
            <span>🚀</span> The AI Operating System for Local Business
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 text-balance mb-6">
            Run your business on{' '}
            <span className="gradient-text">autopilot</span>
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto mb-10 text-balance">
            bizzyOSai orchestrates AI agents, automates workflows, and integrates every tool your business needs — all from one intelligent platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="btn btn-primary btn-lg animate-pulse-glow">
              Start for free →
            </Link>
            <Link href="/dashboard" className="btn btn-secondary btn-lg">
              View demo
            </Link>
          </div>
        </div>
      </section>

      {/* Integrations strip */}
      <section className="py-10 border-y border-neutral-100 bg-neutral-50">
        <div className="container">
          <p className="text-center text-sm font-medium text-neutral-400 mb-6 uppercase tracking-wider">Connects with your favourite tools</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {integrationIcons.map((item) => (
              <div key={item.name} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-neutral-200 shadow-elevation-1 text-sm font-medium text-neutral-600">
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Everything your business needs</h2>
            <p className="text-lg text-neutral-500 max-w-xl mx-auto">
              A complete AI-powered platform built for local businesses that want to compete at the enterprise level.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="stat-card hover:shadow-elevation-2 transition-shadow duration-200">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to automate your business?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-xl mx-auto">
            Join thousands of local businesses already using bizzyOSai to save time and grow revenue.
          </p>
          <Link href="/auth/register" className="btn btn-lg bg-white text-primary-700 hover:bg-primary-50">
            Get started — it&apos;s free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-neutral-400">© {new Date().getFullYear()} bizzyOSai. All rights reserved.</span>
          <div className="flex gap-6 text-sm text-neutral-400">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

