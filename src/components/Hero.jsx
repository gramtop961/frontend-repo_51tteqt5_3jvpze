import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),rgba(2,6,23,0))]" />
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Launch your SaaS faster with SkyLaunch
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Everything you need to build, deploy, and scale your product. From authentication to billing — shipped in minutes, not months.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
