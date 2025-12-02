import {useState} from 'react';

/**
 * Newsletter signup section
 */
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Integrate with Shopify customer API or email service
    // For now, just simulate success
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 bg-dark-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-red-glow opacity-30" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-red">
          Join the Movement
        </h2>
        <p className="text-xl text-white/70 mb-8">
          Stay updated with exclusive drops, deals, and behind-the-scenes content.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
            className="input flex-1"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="hero-cta whitespace-nowrap disabled:opacity-50"
            style={{height: '3.25rem', padding: '0 2.5rem'}}
          >
            {status === 'loading' ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-green-400 animate-pulse">
            ✓ Thanks for joining! Check your inbox.
          </p>
        )}

        {status === 'error' && (
          <p className="mt-4 text-red-400">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="text-sm text-white/40 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
