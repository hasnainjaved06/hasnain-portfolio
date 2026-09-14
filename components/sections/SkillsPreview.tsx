import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  Bot,
  Braces,
  Code2,
  Database,
  FileSpreadsheet,
  GitBranch,
  Settings2,
  Workflow,
} from "lucide-react";

const capabilityGroups = [
  {
    eyebrow: "BI & Visualization",
    title: "Business Intelligence",
    description:
      "Building executive dashboards, KPI frameworks and decision-focused reporting experiences.",
    icon: BarChart3,
    tools: ["Power BI", "DAX", "Power Query", "Looker Studio"],
  },
  {
    eyebrow: "Data & Programming",
    title: "Analytics & Querying",
    description:
      "Using SQL, Python and spreadsheet analysis to turn business data into measurable insight.",
    icon: Code2,
    tools: ["SQL", "Python", "Excel", "Pandas"],
  },
  {
    eyebrow: "Data Infrastructure",
    title: "Modeling & Transformation",
    description:
      "Structuring reliable analytical models and reusable transformation workflows for reporting.",
    icon: Database,
    tools: ["SQL Server", "PostgreSQL", "dbt", "Data Modeling"],
  },
  {
    eyebrow: "Automation & Business",
    title: "Process & Reporting Automation",
    description:
      "Reducing manual reporting work while connecting business processes with measurable performance.",
    icon: Settings2,
    tools: [
      "Google Apps Script",
      "Power Automate",
      "Process Mapping",
      "Jira",
    ],
  },
];

const coreStack = [
  {
    name: "Power BI",
    icon: BarChart3,
  },
  {
    name: "SQL",
    icon: Database,
  },
  {
    name: "DAX",
    icon: Braces,
  },
  {
    name: "Python",
    icon: Code2,
  },
  {
    name: "Excel",
    icon: FileSpreadsheet,
  },
  {
    name: "Automation",
    icon: Bot,
  },
  {
    name: "Data Modeling",
    icon: Workflow,
  },
  {
    name: "Process Analysis",
    icon: GitBranch,
  },
];

export default function SkillsPreview() {
  return (
    <section className="section border-y border-slate-400/10 bg-white/[0.01]">
      <div className="site-container">
        {/* HEADER */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
            <div className="eyebrow">Analytics Stack</div>

            <h2 className="section-title">
              Tools are important.
              <br />
              <span className="gradient-text">
                How they solve problems matters more.
              </span>
            </h2>

            <p className="section-description max-w-[720px]">
              My analytics toolkit combines business intelligence,
              querying, data modeling, automation and process analysis
              to support better business decisions.
            </p>
          </div>

          <Link href="/skills" className="btn-secondary">
            Explore All Skills
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* CORE STACK STRIP */}

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

        {/* CAPABILITY GRID */}

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

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400 transition duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
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

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}