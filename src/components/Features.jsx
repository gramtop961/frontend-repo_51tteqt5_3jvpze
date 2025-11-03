import { Zap, Shield, BarChart3, Users } from 'lucide-react';

const features = [
  {
    title: 'Blazing Fast',
    description: 'Optimized stack and CDN-first delivery keep your app snappy worldwide.',
    icon: Zap,
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Built-in best practices and secure defaults protect your data.',
    icon: Shield,
  },
  {
    title: 'Actionable Analytics',
    description: 'Understand your users with real-time dashboards and insights.',
    icon: BarChart3,
  },
  {
    title: 'Collaborative by Design',
    description: 'Teams ship faster with roles, permissions, and comments.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Features that power growth</h2>
          <p className="mt-3 text-slate-300">Modern building blocks designed to help you move from idea to launch in record time.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg backdrop-blur transition hover:border-blue-500/40 hover:shadow-blue-500/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
