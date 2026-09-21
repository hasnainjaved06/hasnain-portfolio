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
    "Explore Hasnain Javed's analytics, business intelligence and data engineering skills across Power BI, Microsoft Fabric, SQL, DAX, Python, PySpark, data modeling, automation and business analysis.",
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
    name: "Microsoft Fabric",
    role: "Data Platform",
    icon: Layers3,
    color: "#38BDF8",
    glow: "rgba(56,189,248,.20)",
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
    role: "Analytics",
    icon: SiPython,
    color: "#3776AB",
    glow: "rgba(55,118,171,.22)",
  },
  {
    name: "PySpark",
    role: "Data Engineering",
    icon: Sparkles,
    color: "#FF8C42",
    glow: "rgba(255,140,66,.20)",
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
    subtitle: "Visualization & Semantic Reporting",
    description:
      "Designing decision-focused dashboards, KPI frameworks and reporting experiences backed by reusable measures and structured semantic models.",
    icon: BarChart3,
    skills: [
      "Power BI Desktop",
      "Power BI Service",
      "DAX",
      "Power Query",
      "Semantic Models",
      "KPI Dashboards",
      "Drillthrough",
      "Hierarchies",
      "Row-Level Security",
      "Report UX",
    ],
  },
  {
    number: "02",
    title: "Microsoft Fabric & Data Engineering",
    subtitle: "Lakehouse & Pipeline Architecture",
    description:
      "Building modern analytical pipelines from ingestion and medallion transformation through governed warehouse, semantic and monitoring layers.",
    icon: Layers3,
    skills: [
      "Microsoft Fabric",
      "Data Factory",
      "OneLake",
      "Lakehouse",
      "Warehouse",
      "SQL Endpoint",
      "PySpark",
      "Delta Tables",
      "Bronze / Silver / Gold",
      "Incremental Loading",
      "SCD Type 2",
      "Data Quality",
    ],
  },
  {
    number: "03",
    title: "Data Analytics & Programming",
    subtitle: "Analysis, Querying & Feature Engineering",
    description:
      "Using SQL, Python and spreadsheets to investigate performance, engineer analytical features, validate data and build reusable analytical outputs.",
    icon: Code2,
    skills: [
      "SQL",
      "Python",
      "pandas",
      "NumPy",
      "Excel",
      "Google Sheets",
      "RFM & CLV",
      "Cohort Analysis",
      "Churn Analysis",
      "Exploratory Analysis",
    ],
  },
  {
    number: "04",
    title: "Modeling, Automation & Business",
    subtitle: "Architecture, Process & Delivery",
    description:
      "Combining dimensional modeling, reporting automation and process analysis to build scalable solutions that remain useful beyond a single dashboard.",
    icon: Settings2,
    skills: [
      "Star Schema",
      "Fact & Dimension Tables",
      "Surrogate Keys",
      "Audit Logging",
      "Reconciliation",
      "Google Apps Script",
      "Power Automate",
      "KPI Frameworks",
      "Process Mapping",
      "Jira",
      "Confluence",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    detail: "Clarify the business question, stakeholder need and decision.",
    icon: Search,
  },
  {
    number: "02",
    title: "Ingest",
    detail: "Bring source data into a controlled analytical environment.",
    icon: Database,
  },
  {
    number: "03",
    title: "Transform",
    detail: "Clean, validate and engineer reporting-ready data.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Model",
    detail: "Build dimensions, relationships and reusable semantic logic.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Analyze",
    detail: "Identify trends, gaps, segments and performance drivers.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Deliver",
    detail: "Publish governed reporting, monitoring and decision-ready insight.",
    icon: Target,
  },
];

const practicalSkills = [
  {
    title: "Power BI & DAX",
    description:
      "Decision-focused dashboards supported by structured semantic models, reusable measures, time intelligence and interactive report navigation.",
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
    title: "Microsoft Fabric",
    description:
      "End-to-end data platform work across ingestion, OneLake, Lakehouse, PySpark transformations, Delta tables, warehouse delivery and monitoring.",
    icon: Layers3,
    skills: [
      "Data Factory",
      "OneLake",
      "Lakehouse",
      "PySpark",
      "Delta Tables",
      "Incremental Loads",
    ],
  },
  {
    title: "SQL & Data Modeling",
    description:
      "Building reliable analytical foundations through querying, validation, dimensional structures, surrogate keys and reusable business models.",
    icon: Database,
    skills: [
      "Joins & CTEs",
      "Aggregations",
      "Fact Tables",
      "Dimensions",
      "SCD Type 2",
      "Data Validation",
    ],
  },
  {
    title: "Python Analytics",
    description:
      "Using Python for data preparation, feature engineering and customer analytics across large multi-table datasets.",
    icon: Code2,
    skills: [
      "pandas",
      "NumPy",
      "Data Cleaning",
      "Feature Engineering",
      "RFM / CLV",
      "Cohort & Churn",
    ],
  },
];

const projectProof = [
  {
    number: "01",
    title: "Corporate Finance & FP&A",
    subtitle: "Financial Analytics",
    description:
      "SQL Server, 97+ DAX measures, executive finance reporting, financial statements, working capital, budget vs forecast and scenario planning.",
    skills: ["Power BI", "SQL Server", "DAX", "FP&A", "Scenario Modeling"],
  },
  {
    number: "02",
    title: "Pakistan ATM Performance",
    subtitle: "Banking Analytics",
    description:
      "ATM-level transaction and revenue analysis with percentage bands, transaction ranges, revenue-performance categories and operational segmentation.",
    skills: ["Power BI", "DAX", "Power Query", "Segmentation", "KPI Design"],
  },
  {
    number: "03",
    title: "Customer Growth Analytics",
    subtitle: "Customer Intelligence",
    description:
      "569K+ source records transformed through Python and SQL Server into RFM, CLV, cohort-retention and churn-risk analytics.",
    skills: ["Python", "pandas", "SQL Server", "RFM / CLV", "Power BI"],
  },
  {
    number: "04",
    title: "Enterprise Sales & Inventory Intelligence",
    subtitle: "Microsoft Fabric Data Engineering",
    description:
      "A Fabric platform spanning Data Factory, OneLake medallion architecture, PySpark, Delta tables, SCD Type 2, incremental processing, warehouse, semantic model and Power BI.",
    skills: ["Microsoft Fabric", "Data Factory", "PySpark", "Delta", "Power BI"],
  },
];

const supportingTools = [
  { name: "Google Analytics", icon: SiGoogleanalytics },
  { name: "Google Sheets", icon: SiGooglesheets },
  { name: "Looker Studio", icon: SiLooker },
  { name: "Jira", icon: SiJira },
  { name: "Confluence", icon: SiConfluence },
];

export default function SkillsPage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-10 pt-20 sm:pt-24 lg:pb-14 lg:pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.09) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage: "linear-gradient(to bottom, black, transparent 92%)",
          }}
        />
        <div className="pointer-events-none absolute -left-52 top-0 h-[560px] w-[560px] rounded-full bg-blue-600/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-52 top-8 h-[580px] w-[580px] rounded-full bg-cyan-500/[0.055] blur-3xl" />

        <div className="site-container relative">
          <div className="grid gap-10 xl:grid-cols-[1.08fr_.92fr] xl:items-end xl:gap-14">
            <div className="max-w-[810px]">
              <div className="eyebrow">Skills & Technologies</div>

              <h1 className="mt-5 text-[clamp(3.2rem,5.8vw,6rem)] font-bold leading-[0.93] tracking-[-0.06em] text-white">
                Analytics Capability.
                <br />
                <span className="gradient-text">Modern Data Delivery.</span>
              </h1>

              <p className="mt-6 max-w-[740px] text-[1rem] leading-8 text-slate-400">
                My toolkit now spans business intelligence, SQL, Python and
                Microsoft Fabric data engineering — connecting ingestion,
                transformation, modeling, analysis and reporting into complete
                analytical solutions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary">
                  See Skills in Action
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Let&apos;s Connect
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "BI", value: "Power BI + DAX", detail: "Semantic BI & KPIs" },
                { title: "Platform", value: "Microsoft Fabric", detail: "Lakehouse & Pipelines" },
                { title: "Data", value: "SQL + Python", detail: "Analytics & Engineering" },
                { title: "Delivery", value: "Automation", detail: "Reliable Reporting Workflows" },
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

      <section className="relative overflow-hidden border-y border-slate-400/10 bg-[#050f1c] py-8 sm:py-9">
        <div className="site-container relative">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="eyebrow">Core Analytics Stack</div>
              <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                Technology I Use to Build Analytics & Data Platforms.
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/[0.025] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(34,197,94,.55)]" />
              <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-500">
                14 Core Technologies
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {coreStack.map((tool, index) => {
              const Icon = tool.icon;
              const iconStyle = {
                color: tool.color,
                filter: `drop-shadow(0 0 8px ${tool.glow})`,
              } satisfies CSSProperties;

              return (
                <article
                  key={tool.name}
                  className="group relative overflow-hidden rounded-[20px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.92),rgba(5,14,26,.98))] p-4 transition duration-300 hover:-translate-y-1 hover:border-slate-300/20"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl"
                    style={{ backgroundColor: tool.glow }}
                  />
                  <div className="relative flex min-h-[120px] flex-col">
                    <div className="flex items-start justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-[14px] border border-white/[0.08] bg-white/[0.035]">
                        <Icon size={22} style={iconStyle} />
                      </div>
                      <span className="font-mono text-[7px] text-slate-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-auto pt-4">
                      <h3 className="text-[11px] font-semibold text-white">
                        {tool.name}
                      </h3>
                      <p className="mt-2 text-[7px] text-slate-500">
                        {tool.role}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="max-w-[780px]">
            <div className="eyebrow">Capability Areas</div>
            <h2 className="section-title">
              A Broader Analytics{" "}
              <span className="gradient-text">Toolkit.</span>
            </h2>
            <p className="section-description">
              Skills grouped by how they contribute to complete analytical
              solutions rather than as an isolated list of tools.
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

      <section className="relative overflow-hidden border-y border-slate-400/10 bg-white/[0.01] py-10 sm:py-12 lg:py-14">
        <div className="site-container relative">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[740px]">
              <div className="eyebrow">Analytics Workflow</div>
              <h2 className="section-title">
                From Business Need to{" "}
                <span className="gradient-text">Production Reporting.</span>
              </h2>
              <p className="section-description">
                The workflow now reflects both traditional BI delivery and the
                data-engineering work demonstrated in Microsoft Fabric.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] px-5 py-3">
              <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                Framework
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                6-Step Analytics & Data Process
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {workflow.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="glass-card min-h-[180px] p-5">
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="max-w-[760px]">
            <div className="eyebrow">Technical Depth</div>
            <h2 className="section-title">
              Capabilities Proven Across{" "}
              <span className="gradient-text">Four Completed Projects.</span>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                        <CheckCircle2 size={12} className="shrink-0 text-cyan-400" />
                        <span className="text-[8px] text-slate-400">{skill}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-400/10 bg-white/[0.01] py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="max-w-[780px]">
            <div className="eyebrow">Project Evidence</div>
            <h2 className="section-title">
              Skills Demonstrated in{" "}
              <span className="gradient-text">Completed Case Studies.</span>
            </h2>
            <p className="section-description">
              Each completed project demonstrates a different layer of the
              analytics stack, from decision reporting to data engineering.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {projectProof.map((project) => (
              <article
                key={project.number}
                className="relative overflow-hidden rounded-[24px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.82),rgba(5,14,26,.98))] p-6"
              >
                <span className="font-mono text-[8px] font-bold text-cyan-400">
                  Project {project.number}
                </span>
                <p className="mt-3 font-mono text-[7px] uppercase tracking-[0.14em] text-slate-600">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-[10px] leading-5 text-slate-500">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-blue-400/10 bg-blue-500/[0.025] px-3 py-2 font-mono text-[7px] text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-9 sm:py-10 lg:py-12">
        <div className="site-container">
          <div className="grid gap-7 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <div className="eyebrow">Supporting Platforms</div>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                Tools Around the Analytics Workflow.
              </h2>
              <p className="mt-3 max-w-[540px] text-[10px] leading-5 text-slate-500">
                Supporting platforms used for digital analytics, reporting,
                collaboration and process delivery.
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
                    <Icon size={20} className="text-sky-400" />
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

      <section className="pb-12 pt-2 sm:pb-14">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-[linear-gradient(115deg,rgba(9,28,51,.97),rgba(8,22,42,.98),rgba(30,19,68,.72))] p-7 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/[0.12] blur-3xl" />
            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[700px]">
                <div className="eyebrow">See the Work</div>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1] tracking-[-0.05em] text-white">
                  Skills Become Valuable{" "}
                  <span className="gradient-text">Through Application.</span>
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Explore all four completed case studies to see how business
                  intelligence, analytics and data engineering work together.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary">
                  View Projects
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-secondary">
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
