import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
  Layers3,
  Sparkles,
} from "lucide-react";

import ProfilePortrait from "@/components/media/ProfilePortrait";

const stats = [
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "04",
    label: "Completed Case Studies",
  },
  {
    value: "14+",
    label: "Tools & Technologies",
  },
  {
    value: "6",
    label: "Business Domains",
  },
];

const skills = [
  "Power BI",
  "Microsoft Fabric",
  "SQL",
  "Python",
  "PySpark",
  "DAX",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-24">
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
        <div className="grid items-center gap-9 xl:grid-cols-[1.1fr_.9fr] xl:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/15 bg-green-400/[0.035] px-3 py-1.5 sm:gap-3 sm:px-4 sm:py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.14em] text-green-300 sm:text-[8px] sm:tracking-[0.16em]">
                Open to Data, BI & Analytics Opportunities
              </span>
            </div>

            <h1 className="mt-5 max-w-[820px] text-[clamp(2.65rem,12vw,4.1rem)] font-bold leading-[0.93] tracking-[-0.06em] text-white sm:mt-6 sm:text-[clamp(3.25rem,8vw,5.4rem)] lg:leading-[0.9]">
              Turning Data
              <br />
              Into{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Business
              </span>
              <br />
              Decisions.
            </h1>

            <p className="mt-5 max-w-[720px] text-[0.88rem] leading-6 text-slate-400 sm:mt-6 sm:text-[0.98rem] sm:leading-7">
              I&apos;m Hasnain Javed, a Data Analyst and Business
              Intelligence professional with 5+ years of experience
              building decision-ready reporting, analytical models,
              automation workflows and modern Microsoft Fabric data
              solutions.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-400/10 bg-white/[0.025] px-3 py-1.5 text-[7px] font-medium text-slate-400 sm:px-4 sm:py-2 sm:text-[8px]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
              <Link
                href="/projects"
                className="btn-primary w-full px-3 text-[0.78rem] sm:w-auto sm:px-5 sm:text-[0.92rem]"
              >
                Explore My Projects
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="btn-secondary w-full px-3 text-[0.78rem] sm:w-auto sm:px-5 sm:text-[0.92rem]"
              >
                Let&apos;s Talk
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-4 sm:gap-3">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-xl border border-slate-400/10 bg-white/[0.018] p-3.5 transition duration-300 hover:border-blue-400/25 hover:bg-blue-400/[0.025] sm:rounded-2xl sm:p-4"
                >
                  <strong className="block text-xl font-bold tracking-[-0.04em] text-white sm:text-2xl">
                    {stat.value}
                  </strong>

                  <p className="mt-1.5 text-[7px] leading-4 text-slate-600 sm:mt-2">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2.5 border-t border-slate-400/10 pt-4 min-[390px]:grid-cols-3 sm:mt-6 sm:flex sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-3 sm:pt-5">
              <div className="flex items-center gap-2 text-[7px] text-slate-500 sm:text-[8px]">
                <BarChart3 size={13} className="text-sky-400" />
                Business Intelligence
              </div>

              <div className="flex items-center gap-2 text-[7px] text-slate-500 sm:text-[8px]">
                <Database size={13} className="text-cyan-400" />
                Data Analytics
              </div>

              <div className="flex items-center gap-2 text-[7px] text-slate-500 sm:text-[8px]">
                <Layers3 size={13} className="text-violet-400" />
                Microsoft Fabric
              </div>

              <div className="flex items-center gap-2 text-[7px] text-slate-500 sm:text-[8px]">
                <BriefcaseBusiness size={13} className="text-violet-400" />
                Business Process Analytics
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-2 w-full max-w-[470px] sm:mt-4 xl:mx-0 xl:ml-auto xl:mt-0">
            <div className="mb-3 flex items-center justify-end gap-2 font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600 sm:mb-4">
              <Sparkles size={12} className="text-cyan-400" />
              Analytics Professional
            </div>

            <ProfilePortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
