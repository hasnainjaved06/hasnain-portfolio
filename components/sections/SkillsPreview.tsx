import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  Code2,
  Database,
  Layers3,
  Settings2,
} from "lucide-react";

const capabilityGroups = [
  {
    eyebrow: "BI & Semantic Reporting",
    title: "Business Intelligence",
    description:
      "Building executive dashboards, KPI frameworks, reusable DAX measures and decision-focused reporting experiences.",
    icon: BarChart3,
    tools: ["Power BI", "DAX", "Power Query", "Semantic Models"],
  },
  {
    eyebrow: "Modern Data Platform",
    title: "Microsoft Fabric & Data Engineering",
    description:
      "Building governed analytical pipelines across Data Factory, OneLake, Lakehouse, PySpark, Delta and warehouse layers.",
    icon: Layers3,
    tools: ["Microsoft Fabric", "Data Factory", "PySpark", "Lakehouse"],
  },
  {
    eyebrow: "Data & Programming",
    title: "Analytics & Querying",
    description:
      "Using SQL and Python for data preparation, validation, feature engineering and customer-focused analytical workflows.",
    icon: Code2,
    tools: ["SQL", "Python", "pandas", "RFM / CLV"],
  },
  {
    eyebrow: "Automation & Business",
    title: "Process & Reporting Automation",
    description:
      "Connecting business processes, KPI frameworks and automated reporting workflows to measurable performance.",
    icon: Settings2,
    tools: ["Apps Script", "Power Automate", "Process Mapping", "Jira"],
  },
];

const coreStack = [
  { name: "Power BI", icon: BarChart3 },
  { name: "Microsoft Fabric", icon: Layers3 },
  { name: "SQL", icon: Database },
  { name: "Python", icon: Code2 },
  { name: "PySpark", icon: Layers3 },
  { name: "DAX", icon: BarChart3 },
  { name: "Power Query", icon: Settings2 },
  { name: "Data Modeling", icon: Database },
];

export default function SkillsPreview() {
  return (
    <section className="section border-y border-slate-400/10 bg-white/[0.01]">
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[780px]">
            <div className="eyebrow">Analytics & Data Stack</div>

            <h2 className="section-title">
              Tools are important.
              <br />
              <span className="gradient-text">
                Complete analytical delivery matters more.
              </span>
            </h2>

            <p className="section-description max-w-[740px]">
              My toolkit now spans business intelligence, SQL, Python,
              Microsoft Fabric data engineering, automation and business
              analysis — demonstrated across four completed portfolio case
              studies.
            </p>
          </div>

          <Link href="/skills" className="btn-secondary">
            Explore All Skills
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {coreStack.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex items-center gap-2 rounded-full border border-slate-400/10 bg-white/[0.02] px-4 py-2.5 text-[10px] font-medium text-slate-400"
              >
                <Icon size={13} className="text-sky-400" />
                {item.name}
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {capabilityGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article
                key={group.title}
                className="group relative overflow-hidden rounded-[24px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(15,30,49,.72),rgba(7,17,31,.92))] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:shadow-[0_22px_60px_rgba(37,99,235,.08)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                      {group.eyebrow}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                    <Icon size={20} />
                  </div>
                </div>

                <p className="mt-4 max-w-[560px] text-[12px] leading-6 text-slate-400">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-slate-400/10 bg-white/[0.025] px-3 py-2 font-mono text-[8px] text-slate-500"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
