import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'Forever',
    description: 'All the essentials to kick off your project.',
    features: ['Unlimited projects', 'Community support', 'Basic analytics'],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    cadence: 'per month',
    description: 'Advanced features for growing teams.',
    features: ['Everything in Starter', 'Team collaboration', 'Advanced analytics', 'Priority support'],
    cta: 'Go Pro',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: '$99',
    cadence: 'per month',
    description: 'Performance and support at scale.',
    features: ['Everything in Pro', 'SLA + SSO', 'Custom limits', 'Dedicated manager'],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Choose a plan that fits your stage. Upgrade or downgrade anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-slate-900/40 p-6 shadow-lg backdrop-blur transition ${
                tier.highlighted
                  ? 'border-blue-500/60 shadow-blue-500/20 ring-2 ring-blue-500/40'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate-300">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                <span className="text-sm text-slate-400">{tier.cadence}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                      <Check size={14} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#get-started"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-500'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
