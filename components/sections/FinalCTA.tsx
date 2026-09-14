import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Database,
  Mail,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section relative overflow-hidden">

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-3xl" />

      <div className="site-container relative">

        <div className="relative overflow-hidden rounded-[32px] border border-blue-400/20 bg-[linear-gradient(145deg,rgba(15,30,49,.96),rgba(5,13,24,.98))] px-6 py-14 shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:px-10 lg:px-14 lg:py-16">

          <div className="pointer-events-none absolute inset-0 opacity-40">

            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full border border-blue-400/10" />

            <div className="absolute -right-2 top-8 h-52 w-52 rounded-full border border-cyan-400/10" />

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />

          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">

            <div className="max-w-[780px]">

              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-400">

                <Sparkles size={15} />

                Let&apos;s Work Together

              </div>

              <h2 className="mt-6 text-[clamp(2.7rem,5vw,5.2rem)] font-bold leading-[0.96] tracking-[-0.055em] text-white">
                Have Data.
                <br />
                <span className="gradient-text">
                  Need Answers?
                </span>
              </h2>

              <p className="mt-6 max-w-[650px] text-[1rem] leading-8 text-slate-400">
                Let&apos;s turn complex business data into
                dashboards, insights and decisions that
                create measurable value.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Let&apos;s Connect
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/resume"
                  className="btn-secondary"
                >
                  View Resume
                </Link>

              </div>

            </div>

            <div className="grid min-w-[250px] gap-3">

              <div className="flex items-center gap-4 rounded-2xl border border-slate-400/10 bg-white/[0.025] p-4">

                <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.08] text-sky-400">
                  <BarChart3 size={18} />
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
                    Expertise
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    BI & Analytics
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-400/10 bg-white/[0.025] p-4">

                <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.08] text-sky-400">
                  <Database size={18} />
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
                    Core Stack
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    Power BI • SQL • DAX
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-green-400/10 bg-green-400/[0.025] p-4">

                <div className="grid h-10 w-10 place-items-center rounded-xl border border-green-400/15 bg-green-400/[0.06] text-green-300">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
                    Status
                  </p>

                  <p className="mt-1 text-xs font-semibold text-green-300">
                    Open to Opportunities
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
