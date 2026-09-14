import type { Metadata } from "next";

import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Gauge,
  Layers3,
  MapPin,
  Settings2,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

import CompanyLogo, {
  type CompanyName,
} from "@/components/media/CompanyLogo";

export const metadata: Metadata = {
  title: "Experience | Hasnain Javed",
  description:
    "Explore Hasnain Javed's professional journey across business intelligence, data analytics, reporting automation, KPI frameworks and business process improvement.",
};

type ExperienceItem = {
  number: string;
  period: string;
  role: string;
  company: CompanyName;
  location: string;
  type: string;
  current?: boolean;
  summary: string;
  scope: string[];
  contributions: string[];
  impact: {
    value: string;
    label: string;
    detail: string;
  }[];
  tools: string[];
};

const experience: ExperienceItem[] = [
  {
    number: "01",
    period: "Jan 2025 — Present",
    role: "Business Process Analyst",
    company: "Tekrevol",
    location: "Karachi, Pakistan",
    type: "Business Intelligence & Process Analytics",
    current: true,
    summary:
      "Working across business intelligence, performance reporting, KPI frameworks and process improvement to help cross-functional teams understand business performance and make better decisions.",
    scope: [
      "Marketing Analytics",
      "Sales Performance",
      "Production Reporting",
      "Operations Analytics",
    ],
    contributions: [
      "Lead a 5-member analytics team delivering KPI frameworks, management reporting and BI solutions across multiple business functions.",
      "Build Power BI and Looker Studio reporting experiences that combine business data with Google Analytics, Microsoft Clarity and internal reporting sources.",
      "Develop KPI structures for Marketing, Sales, Production and Operations to improve consistency in performance measurement and management visibility.",
      "Automate recurring reporting workflows using Google Sheets, Power Query and Google Apps Script to reduce repetitive manual reporting effort.",
      "Analyze workflows, reporting gaps and operational bottlenecks while supporting business requirements through user stories, acceptance criteria and process documentation.",
    ],
    impact: [
      {
        value: "+30%",
        label: "Engagement",
        detail:
          "Improvement supported through performance analytics and optimization.",
      },
      {
        value: "+15%",
        label: "Conversion",
        detail:
          "Improvement in conversion performance through analytical reporting.",
      },
      {
        value: "-20%",
        label: "Bounce Rate",
        detail:
          "Reduction supported through digital performance analysis.",
      },
    ],
    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Looker Studio",
      "Google Analytics",
      "Microsoft Clarity",
      "Google Apps Script",
      "Jira",
      "Confluence",
      "Process Mapping",
    ],
  },
  {
    number: "02",
    period: "Apr 2023 — Dec 2024",
    role: "Data Analyst",
    company: "The Pipeline Group",
    location: "Remote — USA",
    type: "Data Analytics & Reporting",
    summary:
      "Delivered recurring workforce, operational, finance and performance reporting in a high-volume remote analytics environment using SQL, Power BI, Excel and Google Sheets.",
    scope: [
      "Workforce Analytics",
      "Finance Reporting",
      "Performance KPIs",
      "Data Validation",
    ],
    contributions: [
      "Processed and analyzed 10,000+ records daily using SQL, Power BI and Excel to support recurring operational and management reporting.",
      "Built KPI dashboards and structured reports covering attendance, incentives, dialing activity, productivity and workforce performance.",
      "Developed Power BI reporting for finance and operational stakeholders to strengthen visibility into business performance and resource planning.",
      "Validated 1,000+ daily workforce records and implemented structured data-quality controls supporting more reliable payroll and incentive reporting.",
      "Improved recurring reporting workflows using SQL, Excel, Google Sheets and Power BI while increasing consistency and reducing reporting errors.",
    ],
    impact: [
      {
        value: "10K+",
        label: "Records Daily",
        detail:
          "High-volume operational data processed in recurring workflows.",
      },
      {
        value: "+25%",
        label: "Data Accuracy",
        detail:
          "Improvement supported through structured validation controls.",
      },
      {
        value: "+20%",
        label: "Payroll Accuracy",
        detail:
          "Improvement through workforce-data validation and reporting controls.",
      },
    ],
    tools: [
      "SQL",
      "Power BI",
      "Excel",
      "Google Sheets",
      "Data Validation",
      "KPI Reporting",
      "Workforce Analytics",
      "Finance Reporting",
    ],
  },
  {
    number: "03",
    period: "Apr 2021 — Mar 2023",
    role: "Live Operations Associate",
    company: "MEDZnMORE",
    location: "Islamabad, Pakistan",
    type: "Operations Analytics",
    summary:
      "Supported fast-moving healthcare and e-commerce operations through real-time dashboard monitoring, SLA reporting, fulfillment analysis and operational performance tracking.",
    scope: [
      "Live Operations",
      "Order Analytics",
      "SLA Monitoring",
      "Fulfillment Performance",
    ],
    contributions: [
      "Monitored and developed real-time KPI views covering orders, GMV, returns, fulfillment and other operational performance indicators.",
      "Analyzed 500+ daily orders to identify fulfillment trends, operational gaps and service-performance issues.",
      "Supported B2B and B2C operational reporting across multiple locations, helping teams monitor service levels and fulfillment performance.",
      "Tracked SLA performance, operational exceptions and order-processing issues to support faster identification of performance bottlenecks.",
      "Prepared recurring operational reports and contributed to SOPs and performance-monitoring processes used by live operations teams.",
    ],
    impact: [
      {
        value: "500+",
        label: "Daily Orders",
        detail:
          "Operational volume analyzed and monitored through live reporting.",
      },
      {
        value: "95%",
        label: "Fulfillment",
        detail:
          "Fulfillment performance supported through operational monitoring.",
      },
      {
        value: "-10%",
        label: "Processing Errors",
        detail:
          "Reduction supported through stronger operational monitoring.",
      },
    ],
    tools: [
      "Operations Analytics",
      "Excel",
      "Dashboards",
      "KPI Monitoring",
      "SLA Reporting",
      "Performance Reporting",
    ],
  },
];

const capabilities = [
  {
    title: "Business Intelligence",
    detail: "Power BI dashboards, DAX and KPI reporting",
    icon: BarChart3,
  },
  {
    title: "Data Analytics",
    detail: "SQL, validation and performance analysis",
    icon: Database,
  },
  {
    title: "Automation",
    detail: "Repeatable reporting and transformation workflows",
    icon: Settings2,
  },
  {
    title: "Process Analytics",
    detail: "Business workflows, KPIs and improvement",
    icon: Workflow,
  },
];

const progression = [
  {
    number: "01",
    period: "Apr 2021 — Mar 2023",
    title: "Operations Analytics",
    description:
      "Built the foundation through real-time monitoring, fulfillment analysis, SLA tracking and operational reporting.",
    icon: Gauge,
  },
  {
    number: "02",
    period: "Apr 2023 — Dec 2024",
    title: "Data Analytics",
    description:
      "Expanded into SQL, Power BI, high-volume data analysis, workforce reporting, finance reporting and structured validation.",
    icon: Database,
  },
  {
    number: "03",
    period: "Jan 2025 — Present",
    title: "Business Process Analytics",
    description:
      "Progressed into KPI frameworks, BI delivery, reporting automation, process analysis and cross-functional decision support.",
    icon: Workflow,
  },
];

export default function ExperiencePage() {
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

        <div className="pointer-events-none absolute -right-52 top-10 h-[580px] w-[580px] rounded-full bg-cyan-500/[0.055] blur-3xl" />

        <div className="site-container relative">
          <div className="grid gap-10 xl:grid-cols-[1.08fr_.92fr] xl:items-end xl:gap-14">
            <div className="max-w-[820px]">
              <div className="eyebrow">
                Professional Journey
              </div>

              <h1 className="mt-5 text-[clamp(3.2rem,5.8vw,6rem)] font-bold leading-[0.93] tracking-[-0.06em] text-white">
                Experience Built Through
                <br />

                <span className="gradient-text">
                  Data, BI & Business.
                </span>
              </h1>

              <p className="mt-6 max-w-[720px] text-[1rem] leading-8 text-slate-400">
                5+ years progressing from live operations analytics
                into data analysis, business intelligence, reporting
                automation and business process improvement.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="btn-primary"
                >
                  Explore My Work
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/resume"
                  className="btn-secondary"
                >
                  View Resume
                </Link>
              </div>
            </div>

            {/* CURRENT POSITION */}

            <div className="relative overflow-hidden rounded-[26px] border border-blue-400/15 bg-[linear-gradient(145deg,rgba(13,29,48,.94),rgba(5,14,26,.99))] p-6 shadow-[0_24px_70px_rgba(0,0,0,.22)]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/[0.1] blur-3xl" />

              <div className="relative flex items-start gap-5">
                <CompanyLogo
                  company="Tekrevol"
                  size="lg"
                />

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_9px_rgba(34,197,94,.7)]" />

                    <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-green-300">
                      Current Position
                    </p>
                  </div>

                  <h2 className="mt-3 text-xl font-bold tracking-[-0.03em] text-white">
                    Business Process Analyst
                  </h2>

                  <p className="mt-1 text-sm font-semibold text-sky-400">
                    Tekrevol
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-[9px] text-slate-500">
                    <MapPin size={12} />
                    Karachi, Pakistan
                  </div>
                </div>
              </div>

              <div className="relative mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-slate-400/10 bg-slate-400/10">
                {[
                  ["5+", "Years"],
                  ["03", "Core Roles"],
                  ["5", "Team Members"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="bg-[#071321] px-3 py-4 text-center"
                  >
                    <strong className="text-xl font-bold text-white">
                      {value}
                    </strong>

                    <p className="mt-1 font-mono text-[6px] uppercase tracking-[0.12em] text-slate-600">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAREER CAPABILITIES
      ===================================================== */}

      <section className="border-y border-slate-400/10 bg-white/[0.01]">
        <div className="site-container py-5">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-400/10 bg-slate-400/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex items-center gap-4 bg-[#07111f] p-5"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h2 className="text-[11px] font-semibold text-white">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-[8px] leading-4 text-slate-500">
                      {item.detail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILED PROFESSIONAL JOURNEY
      ===================================================== */}

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[790px]">
              <div className="eyebrow">
                Detailed Experience
              </div>

              <h2 className="section-title">
                Professional Journey{" "}

                <span className="gradient-text">
                  in Depth.
                </span>
              </h2>

              <p className="section-description">
                The homepage provides a quick career snapshot. Here,
                each role goes deeper into scope, responsibilities,
                business contribution and measurable impact.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] px-5 py-3">
              <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                Career Direction
              </p>

              <p className="mt-1 text-[10px] font-semibold text-white">
                Operations → Data → BI → Process
              </p>
            </div>
          </div>

          <div className="relative mt-9">
            <div className="absolute bottom-0 left-[35px] top-9 hidden w-px bg-gradient-to-b from-blue-400/55 via-cyan-400/20 to-transparent md:block" />

            <div className="space-y-7">
              {experience.map((item) => (
                <article
                  key={item.number}
                  className="relative md:pl-[98px]"
                >
                  {/* COMPANY LOGO TIMELINE NODE */}

                  <div className="absolute left-0 top-8 z-10 hidden md:block">
                    <CompanyLogo
                      company={item.company}
                      size="lg"
                    />
                  </div>

                  {/* ROLE CARD */}

                  <div className="group relative overflow-hidden rounded-[30px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(13,29,48,.94),rgba(5,14,26,.99))] shadow-[0_28px_85px_rgba(0,0,0,.18)] transition duration-300 hover:border-blue-400/25">
                    <span className="pointer-events-none absolute -right-5 -top-16 font-mono text-[13rem] font-black leading-none tracking-[-0.08em] text-white/[0.016]">
                      {item.number}
                    </span>

                    {/* ROLE IDENTITY */}

                    <div className="relative p-6 sm:p-8">
                      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                        <div className="flex items-start gap-5">
                          <div className="md:hidden">
                            <CompanyLogo
                              company={item.company}
                              size="md"
                            />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                                {item.period}
                              </span>

                              <span className="rounded-full border border-blue-400/15 bg-blue-500/[0.05] px-3 py-1.5 font-mono text-[7px] text-sky-300">
                                {item.type}
                              </span>

                              {item.current && (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/15 bg-green-400/[0.045] px-3 py-1.5 font-mono text-[7px] font-semibold text-green-300">
                                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,.7)]" />
                                  Current
                                </span>
                              )}
                            </div>

                            <h3 className="mt-4 text-[clamp(1.8rem,3vw,2.7rem)] font-bold tracking-[-0.045em] text-white">
                              {item.role}
                            </h3>

                            <div className="mt-3 flex items-center gap-3">
                              <CompanyLogo
                                company={item.company}
                                size="sm"
                                className="hidden md:block"
                              />

                              <div>
                                <p className="text-sm font-semibold text-sky-400">
                                  {item.company}
                                </p>

                                <div className="mt-1 flex items-center gap-2 text-[9px] text-slate-600">
                                  <MapPin size={12} />
                                  {item.location}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-400/10 bg-white/[0.015] px-5 py-4">
                          <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                            Experience
                          </p>

                          <p className="mt-2 font-mono text-lg font-bold text-sky-400">
                            {item.number}
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 max-w-[950px] text-[11px] leading-6 text-slate-400">
                        {item.summary}
                      </p>

                      {/* BUSINESS SCOPE */}

                      <div className="mt-6">
                        <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-700">
                          Business Scope
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.scope.map((scope) => (
                            <span
                              key={scope}
                              className="rounded-lg border border-cyan-400/10 bg-cyan-400/[0.025] px-3 py-2 text-[8px] font-medium text-slate-400"
                            >
                              {scope}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* IMPACT */}

                    <div className="relative grid border-y border-slate-400/10 sm:grid-cols-3">
                      {item.impact.map((metric, index) => (
                        <article
                          key={metric.label}
                          className={`relative overflow-hidden p-5 sm:p-6 ${
                            index < item.impact.length - 1
                              ? "border-b border-slate-400/10 sm:border-b-0 sm:border-r"
                              : ""
                          }`}
                        >
                          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/[0.05] blur-3xl" />

                          <div className="relative">
                            <strong className="text-3xl font-bold tracking-[-0.04em] text-sky-400">
                              {metric.value}
                            </strong>

                            <p className="mt-2 text-[10px] font-semibold text-white">
                              {metric.label}
                            </p>

                            <p className="mt-1 max-w-[250px] text-[8px] leading-4 text-slate-600">
                              {metric.detail}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>

                    {/* DETAILED CONTRIBUTIONS */}

                    <div className="relative grid xl:grid-cols-[1.35fr_.65fr]">
                      <div className="border-b border-slate-400/10 p-6 sm:p-8 xl:border-b-0 xl:border-r">
                        <div className="flex items-center justify-between gap-5">
                          <div>
                            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                              Key Contributions
                            </p>

                            <p className="mt-2 text-[9px] text-slate-500">
                              Detailed responsibilities and analytical
                              contribution within the role.
                            </p>
                          </div>

                          <BriefcaseBusiness
                            size={18}
                            className="text-cyan-400"
                          />
                        </div>

                        <div className="mt-5 space-y-3">
                          {item.contributions.map(
                            (contribution, index) => (
                              <div
                                key={contribution}
                                className="group/item flex items-start gap-4 rounded-2xl border border-slate-400/10 bg-white/[0.015] p-4 transition hover:border-blue-400/20 hover:bg-blue-500/[0.02]"
                              >
                                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-cyan-400/10 bg-cyan-400/[0.035]">
                                  <span className="font-mono text-[7px] font-bold text-cyan-400">
                                    0{index + 1}
                                  </span>
                                </div>

                                <p className="pt-1 text-[10px] leading-[1.75] text-slate-300">
                                  {contribution}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* TOOLS */}

                      <aside className="p-6 sm:p-8">
                        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                          Tools & Capabilities
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-lg border border-slate-400/10 bg-white/[0.02] px-3 py-2 font-mono text-[8px] text-slate-500"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] p-5">
                          <CheckCircle2
                            size={16}
                            className="text-cyan-400"
                          />

                          <p className="mt-4 font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                            Role Value
                          </p>

                          <p className="mt-2 text-[9px] leading-5 text-slate-400">
                            Combining analytical execution, reporting
                            discipline and business context to improve
                            performance visibility.
                          </p>
                        </div>
                      </aside>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAREER PROGRESSION
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-slate-400/10 bg-white/[0.01] py-10 sm:py-12 lg:py-14">
        <div className="site-container relative">
          <div className="grid gap-9 xl:grid-cols-[.72fr_1.28fr] xl:items-start xl:gap-14">
            <div>
              <div className="eyebrow">
                Career Progression
              </div>

              <h2 className="section-title">
                Building More{" "}

                <span className="gradient-text">
                  Analytical Responsibility.
                </span>
              </h2>

              <p className="section-description">
                Each stage added another layer — from monitoring
                operational performance to building the analytical
                systems used to manage it.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] p-5">
                <TrendingUp
                  size={18}
                  className="text-cyan-400"
                />

                <p className="mt-4 text-[10px] leading-6 text-slate-400">
                  The progression reflects a move toward broader
                  ownership of KPI design, BI reporting, automation,
                  stakeholder requirements and process improvement.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {progression.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group relative overflow-hidden rounded-[22px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.75),rgba(5,14,26,.97))] p-5 transition hover:border-blue-400/20"
                  >
                    <div className="flex items-start gap-5">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                        <Icon size={19} />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-cyan-400">
                              Career Stage {index + 1}
                            </p>

                            <h3 className="mt-2 text-base font-semibold text-white">
                              {item.title}
                            </h3>
                          </div>

                          <span className="font-mono text-[8px] text-slate-600">
                            {item.period}
                          </span>
                        </div>

                        <p className="mt-3 text-[10px] leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL POSITIONING
      ===================================================== */}

      <section className="py-9 sm:py-10 lg:py-12">
        <div className="site-container">
          <div className="grid gap-3 md:grid-cols-3">
            <article className="glass-card p-5">
              <Users
                size={19}
                className="text-sky-400"
              />

              <p className="mt-5 font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                Collaboration
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white">
                Cross-Functional
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-slate-500">
                Experience supporting marketing, sales, finance,
                operations and production stakeholders.
              </p>
            </article>

            <article className="glass-card p-5">
              <Layers3
                size={19}
                className="text-sky-400"
              />

              <p className="mt-5 font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                Perspective
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white">
                End-to-End Analytics
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-slate-500">
                Understanding the journey from source data and models
                through KPIs, dashboards and business interpretation.
              </p>
            </article>

            <article className="glass-card p-5">
              <Settings2
                size={19}
                className="text-sky-400"
              />

              <p className="mt-5 font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                Improvement
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white">
                Automation Mindset
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-slate-500">
                Looking for opportunities to reduce repetitive work
                and improve reporting consistency.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="pb-12 pt-2 sm:pb-14">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-[linear-gradient(115deg,rgba(9,28,51,.97),rgba(8,22,42,.98),rgba(30,19,68,.72))] p-7 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/[0.12] blur-3xl" />

            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[710px]">
                <div className="flex items-center gap-3 font-mono text-[8px] font-bold uppercase tracking-[0.17em] text-cyan-400">
                  <Sparkles size={14} />
                  Experience in Practice
                </div>

                <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1] tracking-[-0.05em] text-white">
                  See How the Experience{" "}

                  <span className="gradient-text">
                    Translates Into Work.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Explore my completed business intelligence case
                  studies to see how these capabilities come together
                  in practical analytics solutions.
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