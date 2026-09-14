import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
  GraduationCap,
  MapPin,
  Settings2,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    title: "Business Intelligence",
    description:
      "Executive dashboards, KPI frameworks and decision-focused reporting with Power BI and DAX.",
    icon: BarChart3,
  },
  {
    title: "Data Analytics",
    description:
      "SQL, Python and analytical workflows that uncover trends, performance gaps and opportunities.",
    icon: Database,
  },
  {
    title: "Reporting Automation",
    description:
      "Repeatable reporting processes using Power Query, Google Apps Script and automation tools.",
    icon: Settings2,
  },
  {
    title: "Process Analytics",
    description:
      "Connecting business workflows, operational KPIs and process improvement opportunities.",
    icon: Workflow,
  },
];

const profileFacts = [
  {
    label: "Current Role",
    value: "Business Process Analyst",
    detail: "Analytics • Reporting • Process Improvement",
    icon: BriefcaseBusiness,
  },
  {
    label: "Education",
    value: "BS Software Engineering",
    detail: "Air University Islamabad",
    icon: GraduationCap,
  },
  {
    label: "Location",
    value: "Karachi, Pakistan",
    detail: "Open to relevant opportunities",
    icon: MapPin,
  },
];

export default function AboutPreview() {
  return (
    <section className="section relative overflow-hidden !pb-12 lg:!pb-16">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute right-[-220px] top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/[0.045] blur-3xl" />

      <div className="site-container relative">
        <div className="grid gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:gap-20">
          {/* LEFT CONTENT */}
          <div>
            <div className="eyebrow">About Me</div>

            <h2 className="section-title max-w-[600px]">
              Analytical Mind.
              <br />
              <span className="gradient-text">Business Focused.</span>
            </h2>

            <p className="section-description max-w-[610px]">
              I&apos;m Hasnain Javed, a data and business analytics
              professional with 5+ years of experience working across
              reporting, operations, sales, marketing and finance.
            </p>

            <p className="mt-5 max-w-[610px] text-[0.96rem] leading-7 text-slate-400">
              I specialize in transforming complex business data into
              structured KPI frameworks, interactive dashboards and automated
              reporting systems that help teams understand performance and make
              better decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                More About Me
                <ArrowRight size={17} />
              </Link>

              <Link href="/projects" className="btn-secondary">
                View My Projects
              </Link>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="grid gap-4">
            {/* PROFILE FACTS */}
            <div className="grid gap-4 md:grid-cols-3">
              {profileFacts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <article key={fact.label} className="glass-card p-5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                      <Icon size={18} />
                    </div>

                    <span className="mt-5 block font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {fact.label}
                    </span>

                    <strong className="mt-2 block text-[0.9rem] font-semibold text-white">
                      {fact.value}
                    </strong>

                    <span className="mt-2 block text-[10px] leading-4 text-slate-500">
                      {fact.detail}
                    </span>
                  </article>
                );
              })}
            </div>

            {/* WHAT I DO */}
            <div className="glass-card overflow-hidden">
              <div className="border-b border-slate-400/10 px-6 py-5">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                  What I Do
                </span>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                  Turning business questions into measurable insight.
                </h3>
              </div>

              <div className="grid md:grid-cols-2">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className={`group p-6 ${
                        index === 0 || index === 1
                          ? "border-b border-slate-400/10"
                          : ""
                      } ${
                        index % 2 === 0
                          ? "md:border-r md:border-slate-400/10"
                          : ""
                      }`}
                    >
                      <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl border border-blue-400/15 bg-[#091a2d] text-sky-400 transition duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                        <Icon size={18} />
                      </div>

                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-[11px] leading-[1.7] text-slate-400">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}