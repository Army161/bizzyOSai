import { useState } from 'react';
import Link from 'next/link';
import { Input } from '../../components/ui/Input';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = 'Full name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.password) next.password = 'Password is required';
    else if (form.password.length < 8) next.password = 'Password must be at least 8 characters';
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setErrors({ submit: data.error || 'Registration failed' });
      }
    } catch {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 no-underline">
            <span className="text-3xl">⚡</span>
            <span className="text-2xl font-bold text-neutral-900">bizzyOS<span className="text-primary-600">ai</span></span>
          </Link>
          <p className="text-neutral-500 text-sm mt-2">Create your free account</p>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 shadow-elevation-2 p-8">
          {success ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">🎉</div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-2">Account created!</h2>
              <p className="text-neutral-500 text-sm mb-6">Welcome to bizzyOSai. You can now sign in.</p>
              <Link href="/auth/login" className="btn btn-primary w-full justify-center">Go to sign in</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <h1 className="text-xl font-semibold text-neutral-900 mb-1">Create account</h1>
              <p className="text-sm text-neutral-500 mb-4">Start automating your business today.</p>

              <Input
                label="Full name"
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                error={errors.name}
                autoComplete="name"
              />
              <Input
                label="Email address"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                error={errors.email}
                autoComplete="email"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                error={errors.password}
                helpText="Must be at least 8 characters"
                autoComplete="new-password"
              />

              {errors.submit && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3">{errors.submit}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full justify-center mt-2"
              >
                {loading ? 'Creating account…' : 'Create account'}
              </button>

              <p className="text-center text-sm text-neutral-500">
                Already have an account?{' '}
                <Link href="/auth/login" className="font-medium">Sign in</Link>
              </p>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-neutral-400 mt-6">
          By signing up you agree to our{' '}
          <Link href="/terms">Terms</Link> and{' '}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
