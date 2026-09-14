import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
  Sparkles,
} from "lucide-react";

import ProfilePortrait from "@/components/media/ProfilePortrait";

const stats = [
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "8+",
    label: "Analytics Projects",
  },
  {
    value: "10+",
    label: "Tools & Technologies",
  },
  {
    value: "6",
    label: "Business Domains",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-30 lg:pb-20 lg:pt-32">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-72 top-0 h-[720px] w-[720px] rounded-full bg-blue-600/[0.085] blur-3xl" />

        <div className="absolute -right-72 top-20 h-[650px] w-[650px] rounded-full bg-cyan-500/[0.055] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.13) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 88%)",
          }}
        />
      </div>

      <div className="site-container relative">
        <div className="grid items-center gap-12 xl:grid-cols-[1.1fr_.9fr] xl:gap-14">
          {/* LEFT CONTENT */}

          <div>
            {/* STATUS */}

            <div className="inline-flex items-center gap-3 rounded-full border border-green-400/15 bg-green-400/[0.035] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-green-300">
                Open to Data & BI Opportunities
              </span>
            </div>

            {/* HEADLINE */}

            <h1 className="mt-6 max-w-[820px] text-[clamp(3.25rem,5.3vw,5.4rem)] font-bold leading-[0.9] tracking-[-0.065em] text-white">
              Turning Data
              <br />
              Into{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Business
              </span>
              <br />
              Decisions.
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-[700px] text-[0.98rem] leading-7 text-slate-400">
              I&apos;m Hasnain Javed, a Data Analyst and Business
              Intelligence professional with 5+ years of experience
              transforming complex data into clear reporting,
              actionable insights and decision-ready dashboards.
            </p>

            {/* ROLE CHIPS */}

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Power BI",
                "SQL",
                "DAX",
                "Python",
                "Reporting Automation",
                "Process Analytics",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-400/10 bg-white/[0.025] px-4 py-2 text-[8px] font-medium text-slate-400"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="btn-primary"
              >
                Explore My Projects
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="btn-secondary"
              >
                Let&apos;s Talk
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* STATS */}

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-slate-400/10 bg-white/[0.018] p-4 transition duration-300 hover:border-blue-400/25 hover:bg-blue-400/[0.025]"
                >
                  <strong className="block text-2xl font-bold tracking-[-0.04em] text-white">
                    {stat.value}
                  </strong>

                  <p className="mt-2 text-[7px] leading-4 text-slate-600">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>

            {/* MINI VALUE STRIP */}

            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-slate-400/10 pt-5">
              <div className="flex items-center gap-2 text-[8px] text-slate-500">
                <BarChart3
                  size={13}
                  className="text-sky-400"
                />
                Business Intelligence
              </div>

              <div className="flex items-center gap-2 text-[8px] text-slate-500">
                <Database
                  size={13}
                  className="text-cyan-400"
                />
                Data Analysis
              </div>

              <div className="flex items-center gap-2 text-[8px] text-slate-500">
                <BriefcaseBusiness
                  size={13}
                  className="text-violet-400"
                />
                Business Process Analytics
              </div>
            </div>
          </div>

          {/* PROFILE VISUAL */}

          <div className="relative mx-auto w-full max-w-[470px] xl:mx-0 xl:ml-auto">
            <div className="mb-4 flex items-center justify-end gap-2 font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
              <Sparkles
                size={12}
                className="text-cyan-400"
              />
              Analytics Professional
            </div>

            <ProfilePortrait />
          </div>
        </div>
      </div>
    </section>
  );
}