import React, { useState } from 'react';
import Link from 'next/link';

const features = [
  {
    title: 'AI Agents',
    description: 'Deploy autonomous AI agents that handle your business operations 24/7.',
    icon: '🤖',
  },
  {
    title: '16+ Integrations',
    description: 'Connect Stripe, Twilio, Claude, GitHub, Vercel, Google Cloud, and more.',
    icon: '🔗',
  },
  {
    title: 'Lead Intelligence',
    description: 'AI-powered lead capture, scoring, and automated follow-up workflows.',
    icon: '📈',
  },
  {
    title: 'Smart Payments',
    description: 'Stripe-powered billing with subscription management and analytics.',
    icon: '💳',
  },
  {
    title: 'Cloud Deployment',
    description: 'One-click deploy to Vercel, Google Cloud, or Replit environments.',
    icon: '☁️',
  },
  {
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with JWT auth, audit logs, and role-based access.',
    icon: '🔒',
  },
];

const integrations = [
  'Claude AI', 'Stripe', 'Twilio', 'GitHub', 'Vercel',
  'Google Cloud', 'Lovable', 'Emergent', 'Replit', 'AntiGravity',
];

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-400/15 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-12 h-16 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="font-semibold text-lg">bizzyOSai</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/auth/login" className="text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2">
            Sign in
          </Link>
          <Link
            href="/auth/register"
            className="text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 text-center px-6 py-24 lg:py-36 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
          Now with 16+ AI integrations
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          The AI OS for<br />Local Business
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Deploy autonomous AI agents, automate workflows, and scale your operations with the most powerful AI platform built for local businesses.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/auth/register"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-base transition-all shadow-glow-primary hover:shadow-glow-primary"
          >
            Start for free →
          </Link>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium text-base transition-all"
          >
            View demo
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 lg:px-12 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Everything you need to scale</h2>
        <p className="text-neutral-400 text-center mb-12 max-w-xl mx-auto">
          From AI agents to payment processing — bizzyOSai has every tool your business needs in one platform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="relative z-10 px-6 py-16 bg-white/3 border-y border-white/10">
        <p className="text-center text-sm text-neutral-500 mb-6 uppercase tracking-widest font-medium">
          Integrates with your favorite tools
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
          {integrations.map((name) => (
            <span
              key={name}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-neutral-300"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 text-center px-6 py-24 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Ready to automate your business?</h2>
        <p className="text-neutral-400 mb-8">Join thousands of local businesses already using bizzyOSai.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 text-sm"
          />
          <Link
            href={`/auth/register${email ? `?email=${encodeURIComponent(email)}` : ''}`}
            className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Get started free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} bizzyOSai. All rights reserved.
      </footer>
    </div>
  );
}
