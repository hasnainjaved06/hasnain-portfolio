import type { Metadata } from "next";
import type { CSSProperties } from "react";

import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  Boxes,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  Search,
  Settings2,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

import {
  SiConfluence,
  SiGoogleanalytics,
  SiGooglesheets,
  SiJira,
  SiLooker,
  SiMysql,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";
import { FaFileExcel } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Skills | Hasnain Javed",
  description:
    "Explore Hasnain Javed's analytics and business intelligence skills across Power BI, SQL, DAX, Python, data modeling, reporting automation and business analysis.",
};

const coreStack = [
  {
    name: "Power BI",
    role: "Business Intelligence",
    icon: BarChart3,
    color: "#F2C811",
    glow: "rgba(242,200,17,.20)",
  },
  {
    name: "SQL Server",
    role: "Data Platform",
    icon: DiMsqlServer,
    color: "#E54848",
    glow: "rgba(229,72,72,.18)",
  },
  {
    name: "Python",
    role: "Data Analysis",
    icon: SiPython,
    color: "#3776AB",
    glow: "rgba(55,118,171,.22)",
  },
  {
    name: "Excel",
    role: "Analysis & Modeling",
    icon: FaFileExcel,
    color: "#217346",
    glow: "rgba(33,115,70,.22)",
  },
  {
    name: "PostgreSQL",
    role: "Database",
    icon: SiPostgresql,
    color: "#4169E1",
    glow: "rgba(65,105,225,.22)",
  },
  {
    name: "MySQL",
    role: "Database",
    icon: SiMysql,
    color: "#4479A1",
    glow: "rgba(68,121,161,.22)",
  },
  {
    name: "DAX",
    role: "Analytical Measures",
    icon: Braces,
    color: "#38BDF8",
    glow: "rgba(56,189,248,.20)",
  },
  {
    name: "Power Query",
    role: "Transformation",
    icon: Workflow,
    color: "#22D3EE",
    glow: "rgba(34,211,238,.20)",
  },
  {
    name: "dbt",
    role: "Transformation",
    icon: Boxes,
    color: "#FF694B",
    glow: "rgba(255,105,75,.20)",
  },
  {
    name: "Google Analytics",
    role: "Web Analytics",
    icon: SiGoogleanalytics,
    color: "#E37400",
    glow: "rgba(227,116,0,.20)",
  },
  {
    name: "Looker Studio",
    role: "Reporting",
    icon: SiLooker,
    color: "#4285F4",
    glow: "rgba(66,133,244,.20)",
  },
  {
    name: "Google Sheets",
    role: "Reporting",
    icon: SiGooglesheets,
    color: "#34A853",
    glow: "rgba(52,168,83,.20)",
  },
];

const capabilityGroups = [
  {
    number: "01",
    title: "Business Intelligence",
    subtitle: "Visualization & Reporting",
    description:
      "Designing decision-focused dashboards, KPI frameworks and reporting experiences that help stakeholders understand performance quickly.",
    icon: BarChart3,
    skills: [
      "Power BI Desktop",
      "Power BI Service",
      "DAX",
      "Power Query",
      "Looker Studio",
      "KPI Dashboards",
      "Drillthrough",
      "Hierarchies",
      "Row-Level Security",
      "Report UX",
    ],
  },
  {
    number: "02",
    title: "Data & Programming",
    subtitle: "Analysis & Querying",
    description:
      "Using SQL, Python and spreadsheets to investigate performance, validate data and build reliable analytical outputs.",
    icon: Code2,
    skills: [
      "SQL",
      "Python",
      "pandas",
      "NumPy",
      "Excel",
      "Google Sheets",
      "Trend Analysis",
      "Variance Analysis",
      "Data Validation",
      "Exploratory Analysis",
    ],
  },
  {
    number: "03",
    title: "Data Architecture",
    subtitle: "Modeling & Transformation",
    description:
      "Structuring analytical data using relational models, reusable transformations and reporting-friendly architecture.",
    icon: Layers3,
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "Star Schema",
      "Fact Tables",
      "Dimension Tables",
      "Date Dimensions",
      "Relationships",
      "dbt",
      "ETL Concepts",
    ],
  },
  {
    number: "04",
    title: "Automation & Business",
    subtitle: "Process & Reporting",
    description:
      "Combining reporting automation with business process analysis to reduce repetitive work and improve operational visibility.",
    icon: Settings2,
    skills: [
      "Google Apps Script",
      "Power Automate",
      "Excel VBA",
      "Reporting Automation",
      "KPI Frameworks",
      "Process Mapping",
      "User Stories",
      "Acceptance Criteria",
      "Jira",
      "Confluence",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    detail:
      "Clarify the business question, stakeholder need and decision.",
    icon: Search,
  },
  {
    number: "02",
    title: "Prepare",
    detail:
      "Clean, validate and structure the analytical data.",
    icon: Database,
  },
  {
    number: "03",
    title: "Model",
    detail:
      "Build relationships, dimensions and reusable measures.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Analyze",
    detail:
      "Identify trends, gaps, variances and performance drivers.",
    icon: BarChart3,
  },
  {
    number: "05",
    title: "Deliver",
    detail:
      "Communicate insight through reporting and recommendations.",
    icon: Target,
  },
];

const practicalSkills = [
  {
    title: "Power BI & DAX",
    description:
      "Decision-focused dashboards supported by structured models, reusable measures, time intelligence and report navigation.",
    icon: BarChart3,
    skills: [
      "Star Schema",
      "DAX Measures",
      "YoY / MoM",
      "RLS",
      "Drillthrough",
      "Performance Optimization",
    ],
  },
  {
    title: "SQL & Data Modeling",
    description:
      "Building the reliable data foundation behind reporting through querying, validation, relationships and dimensional structures.",
    icon: Database,
    skills: [
      "Joins",
      "CTEs",
      "Aggregations",
      "Fact Tables",
      "Dimensions",
      "Data Validation",
    ],
  },
  {
    title: "Python Analytics",
    description:
      "Using Python to support analytical workflows, structured data manipulation and reusable transformation logic.",
    icon: Code2,
    skills: [
      "pandas",
      "NumPy",
      "Data Cleaning",
      "Transformation",
      "Exploratory Analysis",
      "Automation Logic",
    ],
  },
];

const supportingTools = [
  {
    name: "Google Analytics",
    icon: SiGoogleanalytics,
  },
  {
    name: "Google Sheets",
    icon: SiGooglesheets,
  },
  {
    name: "Looker Studio",
    icon: SiLooker,
  },
  {
    name: "Jira",
    icon: SiJira,
  },
  {
    name: "Confluence",
    icon: SiConfluence,
  },
];

export default function SkillsPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden pb-10 pt-20 sm:pt-24 lg:pb-14 lg:pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.09) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 92%)",
          }}
        />

        <div className="pointer-events-none absolute -left-52 top-0 h-[560px] w-[560px] rounded-full bg-blue-600/[0.08] blur-3xl" />

        <div className="pointer-events-none absolute -right-52 top-8 h-[580px] w-[580px] rounded-full bg-cyan-500/[0.055] blur-3xl" />

        <div className="site-container relative">
          <div className="grid gap-10 xl:grid-cols-[1.08fr_.92fr] xl:items-end xl:gap-14">
            {/* COPY */}

            <div className="max-w-[810px]">
              <div className="eyebrow">
                Skills & Technologies
              </div>

              <h1 className="mt-5 text-[clamp(3.2rem,5.8vw,6rem)] font-bold leading-[0.93] tracking-[-0.06em] text-white">
                Technical Capability.
                <br />

                <span className="gradient-text">
                  Business Application.
                </span>
              </h1>

              <p className="mt-6 max-w-[720px] text-[1rem] leading-8 text-slate-400">
                My toolkit combines business intelligence, SQL,
                analytical programming, data modeling and automation
                to turn business questions into structured analytical
                solutions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="btn-primary"
                >
                  See Skills in Action
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="btn-secondary"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>

            {/* HERO CAPABILITY GRID */}

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "BI",
                  value: "Power BI",
                  detail: "Dashboards & KPIs",
                },
                {
                  title: "Data",
                  value: "SQL + Python",
                  detail: "Analysis & Querying",
                },
                {
                  title: "Model",
                  value: "Star Schema",
                  detail: "Data Architecture",
                },
                {
                  title: "Automate",
                  value: "Workflows",
                  detail: "Reporting Efficiency",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group relative min-h-[130px] overflow-hidden rounded-[20px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.90),rgba(5,14,26,.98))] p-5 transition hover:border-blue-400/25"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/[0.08] blur-3xl" />

                  <p className="relative font-mono text-[7px] uppercase tracking-[0.18em] text-cyan-400">
                    {item.title}
                  </p>

                  <p className="relative mt-4 text-sm font-semibold text-white">
                    {item.value}
                  </p>

                  <p className="relative mt-1 text-[8px] text-slate-600">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL TECH STACK
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-slate-400/10 bg-[#050f1c] py-8 sm:py-9">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(37,99,235,.07),transparent_30%),radial-gradient(circle_at_85%_65%,rgba(6,182,212,.05),transparent_30%)]" />

        <div className="site-container relative">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="eyebrow">
                Core Analytics Stack
              </div>

              <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                Technology I Use to Build Analytics.
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/[0.025] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(34,197,94,.55)]" />

              <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-500">
                12 Core Technologies
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {coreStack.map((tool, index) => {
              const Icon = tool.icon;

              const iconStyle = {
                color: tool.color,
                filter: `drop-shadow(0 0 8px ${tool.glow})`,
              } satisfies CSSProperties;

              return (
                <article
                  key={tool.name}
                  className="group relative overflow-hidden rounded-[20px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.92),rgba(5,14,26,.98))] p-4 transition duration-300 hover:-translate-y-1 hover:border-slate-300/20 hover:shadow-[0_18px_48px_rgba(0,0,0,.24)]"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl transition group-hover:scale-125"
                    style={{
                      backgroundColor: tool.glow,
                    }}
                  />

                  <div className="relative flex min-h-[120px] flex-col">
                    <div className="flex items-start justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-[14px] border border-white/[0.08] bg-white/[0.035]">
                        <Icon
                          size={22}
                          style={iconStyle}
                        />
                      </div>

                      <span className="font-mono text-[7px] text-slate-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-auto pt-4">
                      <h3 className="text-[11px] font-semibold text-white">
                        {tool.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-2">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            backgroundColor: tool.color,
                            boxShadow: `0 0 8px ${tool.glow}`,
                          }}
                        />

                        <p className="text-[7px] text-slate-500">
                          {tool.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY AREAS
      ===================================================== */}

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="max-w-[760px]">
            <div className="eyebrow">
              Capability Areas
            </div>

            <h2 className="section-title">
              A Focused Analytics{" "}

              <span className="gradient-text">
                Toolkit.
              </span>
            </h2>

            <p className="section-description">
              Skills grouped by how they contribute to solving
              analytical and business problems.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {capabilityGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.number}
                  className="group relative overflow-hidden rounded-[24px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.78),rgba(5,14,26,.97))] p-6 transition hover:border-blue-400/25 sm:p-7"
                >
                  <span className="pointer-events-none absolute -right-3 -top-8 font-mono text-[7rem] font-black leading-none text-white/[0.018]">
                    {group.number}
                  </span>

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-sky-500">
                          {group.number}
                        </span>

                        <p className="mt-3 font-mono text-[7px] uppercase tracking-[0.15em] text-cyan-400">
                          {group.subtitle}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold text-white">
                          {group.title}
                        </h3>
                      </div>

                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                        <Icon size={20} />
                      </div>
                    </div>

                    <p className="mt-4 max-w-[620px] text-[10px] leading-6 text-slate-400">
                      {group.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-slate-400/10 bg-white/[0.02] px-3 py-2 text-[8px] text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ANALYTICS WORKFLOW
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-slate-400/10 bg-white/[0.01] py-10 sm:py-12 lg:py-14">
        <div className="site-container relative">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[740px]">
              <div className="eyebrow">
                Analytics Workflow
              </div>

              <h2 className="section-title">
                Tools Connected Through{" "}

                <span className="gradient-text">
                  One Process.
                </span>
              </h2>

              <p className="section-description">
                The value comes from applying the right capability at
                the right stage of the analytical workflow.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] px-5 py-3">
              <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                Framework
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                5-Step Analytics Process
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative"
                >
                  <article className="glass-card group min-h-[180px] p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] font-bold text-slate-700">
                        {step.number}
                      </span>

                      <div className="grid h-9 w-9 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                        <Icon size={16} />
                      </div>
                    </div>

                    <h3 className="mt-5 text-sm font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[9px] leading-5 text-slate-500">
                      {step.detail}
                    </p>
                  </article>

                  {index < workflow.length - 1 && (
                    <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-cyan-500 lg:block">
                      →
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNICAL DEPTH
      ===================================================== */}

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="max-w-[760px]">
            <div className="eyebrow">
              Technical Depth
            </div>

            <h2 className="section-title">
              Core Areas I Use{" "}

              <span className="gradient-text">
                Most Often.
              </span>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {practicalSkills.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[24px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.75),rgba(5,14,26,.97))] p-6 transition hover:border-blue-400/25"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[10px] leading-5 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {item.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 rounded-xl border border-slate-400/10 bg-white/[0.015] px-3 py-2.5"
                      >
                        <CheckCircle2
                          size={12}
                          className="shrink-0 text-cyan-400"
                        />

                        <span className="text-[8px] text-slate-400">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SUPPORTING PLATFORMS
      ===================================================== */}

      <section className="border-y border-slate-400/10 bg-white/[0.01] py-9 sm:py-10 lg:py-12">
        <div className="site-container">
          <div className="grid gap-7 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <div className="eyebrow">
                Supporting Platforms
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                Tools Around the Analytics Workflow.
              </h2>

              <p className="mt-3 max-w-[540px] text-[10px] leading-5 text-slate-500">
                Supporting platforms used for digital analytics,
                reporting, collaboration and process delivery.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {supportingTools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <article
                    key={tool.name}
                    className="group flex min-h-[100px] flex-col items-center justify-center rounded-[18px] border border-slate-400/10 bg-[#07111f] p-4 text-center transition hover:-translate-y-1 hover:border-blue-400/25"
                  >
                    <Icon
                      size={20}
                      className="text-sky-400 transition group-hover:text-cyan-300"
                    />

                    <p className="mt-3 text-[8px] font-semibold text-slate-400">
                      {tool.name}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POSITIONING
      ===================================================== */}

      <section className="py-9 sm:py-10 lg:py-12">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[26px] border border-blue-400/15 bg-[linear-gradient(115deg,rgba(9,28,51,.95),rgba(8,22,42,.98),rgba(24,18,59,.72))] p-7 sm:p-8">
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-violet-500/[0.10] blur-3xl" />

            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-[760px] items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
                  <Sparkles size={19} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Tools Matter. How They Are Used Matters More.
                  </h2>

                  <p className="mt-2 text-[10px] leading-5 text-slate-500">
                    I select technologies based on the business
                    problem, data structure and reporting requirement
                    rather than forcing every task into the same tool.
                  </p>
                </div>
              </div>

              <Link
                href="/projects"
                className="btn-secondary shrink-0"
              >
                See Application
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="pb-12 pt-2 sm:pb-14">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-[linear-gradient(115deg,rgba(9,28,51,.97),rgba(8,22,42,.98),rgba(30,19,68,.72))] p-7 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/[0.12] blur-3xl" />

            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[700px]">
                <div className="eyebrow">
                  See the Work
                </div>

                <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1] tracking-[-0.05em] text-white">
                  Skills Become Valuable{" "}

                  <span className="gradient-text">
                    Through Application.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Explore my completed case studies to see how these
                  capabilities work together in complete analytics
                  solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="btn-primary"
                >
                  View Projects
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="btn-secondary"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}