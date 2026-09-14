import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  Database,
  HeartPulse,
  Lightbulb,
  MapPin,
  Megaphone,
  Network,
  Search,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

import CompanyLogo from "@/components/media/CompanyLogo";
import ProfilePortrait from "@/components/media/ProfilePortrait";

export const metadata: Metadata = {
  title: "About | Hasnain Javed",
  description:
    "Learn more about Hasnain Javed, a Data Analyst and Business Intelligence professional with 5+ years of experience specializing in Power BI, SQL, DAX, reporting automation, KPI frameworks and business analytics.",
};

const profileStats = [
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

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the business question, stakeholder need and decision that requires support.",
    icon: Search,
  },
  {
    number: "02",
    title: "Define",
    description:
      "Translate business objectives into meaningful KPIs, measures and success criteria.",
    icon: Target,
  },
  {
    number: "03",
    title: "Structure",
    description:
      "Validate, transform and model the data into a reliable analytical foundation.",
    icon: Database,
  },
  {
    number: "04",
    title: "Analyze",
    description:
      "Identify trends, gaps, variances and the drivers behind business performance.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "Communicate insights through focused dashboards and practical recommendations.",
    icon: Lightbulb,
  },
];

const strengths = [
  {
    number: "01",
    title: "Business Intelligence",
    description:
      "Decision-focused Power BI dashboards, executive reporting and KPI frameworks built around stakeholder needs.",
    icon: BarChart3,
    tags: ["Power BI", "DAX", "Power Query", "Looker Studio"],
  },
  {
    number: "02",
    title: "Data Analytics",
    description:
      "Structured analysis using SQL, Python and spreadsheets to uncover trends, gaps and performance drivers.",
    icon: Database,
    tags: ["SQL", "Python", "Excel", "Data Analysis"],
  },
  {
    number: "03",
    title: "Reporting Automation",
    description:
      "Automating repetitive reporting and transformation workflows to improve speed and consistency.",
    icon: Workflow,
    tags: ["Power Query", "Apps Script", "Power Automate"],
  },
  {
    number: "04",
    title: "Process Analytics",
    description:
      "Connecting business processes, KPIs and operational performance with measurable improvement opportunities.",
    icon: BriefcaseBusiness,
    tags: ["KPI Frameworks", "Process Mapping", "Reporting"],
  },
];

const domains = [
  {
    title: "Finance",
    detail: "FP&A • Budgeting • Forecasting",
    icon: TrendingUp,
  },
  {
    title: "Sales",
    detail: "Revenue • Conversion • Productivity",
    icon: BriefcaseBusiness,
  },
  {
    title: "Marketing",
    detail: "Engagement • Digital Performance",
    icon: Megaphone,
  },
  {
    title: "Operations",
    detail: "SLA • Efficiency • Process KPIs",
    icon: Workflow,
  },
  {
    title: "Healthcare",
    detail: "Live Operations • Fulfillment",
    icon: HeartPulse,
  },
  {
    title: "E-commerce",
    detail: "Orders • Revenue • Transactions",
    icon: ShoppingCart,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden pb-10 pt-20 sm:pt-24 lg:pb-14 lg:pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.09) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        <div className="pointer-events-none absolute -left-52 top-0 h-[560px] w-[560px] rounded-full bg-blue-600/[0.08] blur-3xl" />

        <div className="pointer-events-none absolute -right-44 top-16 h-[560px] w-[560px] rounded-full bg-cyan-500/[0.06] blur-3xl" />

        <div className="site-container relative">
          <div className="grid gap-12 xl:grid-cols-[1.06fr_.94fr] xl:items-center xl:gap-16">
            {/* COPY */}

            <div className="max-w-[790px]">
              <div className="eyebrow">
                About Me
              </div>

              <h1 className="mt-5 text-[clamp(3.2rem,5.8vw,5.9rem)] font-bold leading-[0.94] tracking-[-0.06em] text-white">
                Analyst by Skill.
                <br />

                <span className="gradient-text">
                  Business Problem-Solver
                </span>

                <br />
                by Mindset.
              </h1>

              <p className="mt-6 max-w-[700px] text-[1rem] leading-8 text-slate-400">
                I&apos;m Hasnain Javed, a Data Analyst and Business
                Intelligence professional with 5+ years of experience
                across analytics, reporting, operations and business
                process improvement.
              </p>

              <p className="mt-4 max-w-[700px] text-[0.92rem] leading-7 text-slate-500">
                I combine technical analytics with business context —
                understanding the question first, structuring the data
                correctly and building reporting that helps people make
                better decisions.
              </p>

              {/* CURRENT ROLE + LOCATION */}

              <div className="mt-7 grid max-w-[680px] gap-3 sm:grid-cols-2">
                <article className="relative overflow-hidden rounded-2xl border border-orange-400/15 bg-[linear-gradient(145deg,rgba(251,146,60,.045),rgba(7,17,31,.92))] p-4">
                  <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-orange-500/[0.08] blur-2xl" />

                  <div className="relative flex items-center gap-4">
                    <CompanyLogo
                      company="Tekrevol"
                      size="sm"
                    />

                    <div>
                      <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                        Current Role
                      </p>

                      <p className="mt-1 text-[11px] font-semibold text-white">
                        Business Process Analyst
                      </p>

                      <p className="mt-1 text-[8px] font-medium text-sky-400">
                        Tekrevol
                      </p>

                      <p className="mt-1 text-[7px] text-slate-600">
                        Jan 2025 - Present
                      </p>
                    </div>
                  </div>
                </article>

                <article className="flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                      Based In
                    </p>

                    <p className="mt-1 text-[11px] font-semibold text-white">
                      Karachi, Pakistan
                    </p>

                    <p className="mt-1 text-[8px] text-slate-500">
                      Data Analytics & Business Intelligence
                    </p>
                  </div>
                </article>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="btn-primary"
                >
                  Explore My Projects
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/resume"
                  className="btn-secondary"
                >
                  View Resume
                </Link>

                <Link
                  href="/contact"
                  className="btn-secondary"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>

            {/* PORTRAIT */}

            <div className="relative">
              <ProfilePortrait />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFILE STATS
      ===================================================== */}

      <section className="border-y border-slate-400/10 bg-white/[0.01]">
        <div className="site-container py-5">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-slate-400/10 bg-slate-400/10 lg:grid-cols-4">
            {profileStats.map((stat) => (
              <article
                key={stat.label}
                className="bg-[#07111f] px-5 py-5 text-center"
              >
                <strong className="text-2xl font-bold tracking-[-0.04em] text-white">
                  {stat.value}
                </strong>

                <p className="mt-1 text-[8px] uppercase tracking-[0.1em] text-slate-600">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL STORY
      ===================================================== */}

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="grid gap-5 xl:grid-cols-[.82fr_1.18fr]">
            <article className="relative overflow-hidden rounded-[28px] border border-blue-400/15 bg-[linear-gradient(145deg,rgba(14,30,50,.92),rgba(5,14,26,.98))] p-7 sm:p-8">
              <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.08] blur-3xl" />

              <div className="relative">
                <div className="eyebrow">
                  Professional Story
                </div>

                <h2 className="mt-5 text-[clamp(2rem,3.6vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.05em] text-white">
                  Data Becomes Valuable{" "}

                  <span className="gradient-text">
                    When It Drives Action.
                  </span>
                </h2>

                <div className="mt-7 h-px w-14 bg-gradient-to-r from-blue-500 to-cyan-400" />

                <p className="mt-6 text-[12px] leading-7 text-slate-400">
                  My career has developed at the intersection of
                  analytics, reporting, operations and business
                  processes. That experience shaped how I approach
                  data: not as an isolated technical exercise, but as
                  a way to understand performance and support
                  decisions.
                </p>

                <div className="mt-7 flex items-start gap-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">
                  <Sparkles
                    size={18}
                    className="mt-0.5 shrink-0 text-cyan-400"
                  />

                  <p className="text-[11px] leading-6 text-slate-300">
                    The goal is not simply to build another dashboard.
                    The goal is to make performance easier to
                    understand, investigate and act on.
                  </p>
                </div>
              </div>
            </article>

            <div className="grid gap-3">
              <article className="group rounded-[22px] border border-slate-400/10 bg-white/[0.018] p-5 transition hover:border-blue-400/20">
                <div className="flex items-start gap-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                    <BarChart3 size={19} />
                  </div>

                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-cyan-400">
                      Business Intelligence
                    </p>

                    <h3 className="mt-2 text-base font-semibold text-white">
                      From Reporting to Decision Support
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-slate-500">
                      My work has progressed from operational
                      monitoring into KPI frameworks, executive
                      dashboards, reporting automation and
                      cross-functional analytical support.
                    </p>
                  </div>
                </div>
              </article>

              <article className="group rounded-[22px] border border-slate-400/10 bg-white/[0.018] p-5 transition hover:border-blue-400/20">
                <div className="flex items-start gap-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                    <Database size={19} />
                  </div>

                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-cyan-400">
                      Analytical Foundation
                    </p>

                    <h3 className="mt-2 text-base font-semibold text-white">
                      Data Structure Before Visualization
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-slate-500">
                      SQL, data validation, modeling, transformation
                      and reusable measures form the foundation behind
                      reliable reporting experiences.
                    </p>
                  </div>
                </div>
              </article>

              <article className="group rounded-[22px] border border-slate-400/10 bg-white/[0.018] p-5 transition hover:border-blue-400/20">
                <div className="flex items-start gap-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                    <BriefcaseBusiness size={19} />
                  </div>

                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-cyan-400">
                      Business Context
                    </p>

                    <h3 className="mt-2 text-base font-semibold text-white">
                      Analytics Connected to Operations
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-slate-500">
                      Exposure across finance, marketing, sales,
                      operations, healthcare and e-commerce helps me
                      connect metrics with the processes behind them.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ANALYTICAL APPROACH
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-slate-400/10 bg-white/[0.01] py-10 sm:py-12 lg:py-14">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-3xl" />

        <div className="site-container relative">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[730px]">
              <div className="eyebrow">
                Analytical Approach
              </div>

              <h2 className="section-title">
                From Business Question to{" "}

                <span className="gradient-text">
                  Actionable Insight.
                </span>
              </h2>

              <p className="section-description">
                Strong dashboards start with a strong analytical
                process.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] px-5 py-3">
              <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                Framework
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                5-Step Workflow
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {approach.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="relative"
                >
                  <article className="glass-card group min-h-[190px] p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] font-bold text-slate-700">
                        {item.number}
                      </span>

                      <div className="grid h-9 w-9 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400 transition group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                        <Icon size={16} />
                      </div>
                    </div>

                    <h3 className="mt-5 text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[9px] leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </article>

                  {index < approach.length - 1 && (
                    <span className="absolute -right-[10px] top-1/2 z-10 hidden -translate-y-1/2 lg:grid h-6 w-6 place-items-center rounded-full border border-cyan-400/15 bg-[#07111f] text-cyan-400">
                      <ArrowRight size={12} />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE STRENGTHS
      ===================================================== */}

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[.7fr_1.3fr] xl:items-start xl:gap-12">
            <div>
              <div className="eyebrow">
                Core Strengths
              </div>

              <h2 className="section-title">
                Where Data Meets{" "}

                <span className="gradient-text">
                  Business Thinking.
                </span>
              </h2>

              <p className="section-description">
                My strongest work combines technical analytics with
                practical decision support.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] p-5">
                <Network
                  size={18}
                  className="text-cyan-400"
                />

                <p className="mt-4 text-[10px] leading-5 text-slate-400">
                  Business question → reliable data → analytical model
                  → insight → recommendation.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <article
                    key={strength.title}
                    className="group relative overflow-hidden rounded-[22px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.80),rgba(5,14,26,.96))] p-5 transition hover:border-blue-400/25"
                  >
                    <span className="absolute right-5 top-4 font-mono text-[8px] text-slate-700">
                      {strength.number}
                    </span>

                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400 transition group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-white">
                      {strength.title}
                    </h3>

                    <p className="mt-3 text-[10px] leading-5 text-slate-500">
                      {strength.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {strength.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-400/10 bg-white/[0.02] px-2.5 py-1.5 font-mono text-[7px] text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS EXPOSURE + EDUCATION
      ===================================================== */}

      <section className="border-y border-slate-400/10 bg-white/[0.01] py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="grid gap-5 xl:grid-cols-[1.16fr_.84fr]">
            {/* BUSINESS DOMAINS */}

            <article className="rounded-[28px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.70),rgba(5,14,26,.95))] p-6 sm:p-7">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <div className="eyebrow">
                    Business Exposure
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                    Analytics Across{" "}

                    <span className="gradient-text">
                      Multiple Domains.
                    </span>
                  </h2>
                </div>

                <strong className="hidden text-4xl font-bold tracking-[-0.05em] text-sky-400 sm:block">
                  6
                </strong>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {domains.map((domain) => {
                  const Icon = domain.icon;

                  return (
                    <article
                      key={domain.title}
                      className="flex items-center gap-4 rounded-2xl border border-slate-400/10 bg-white/[0.018] p-4 transition hover:border-blue-400/25"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                        <Icon size={17} />
                      </div>

                      <div>
                        <h3 className="text-[11px] font-semibold text-white">
                          {domain.title}
                        </h3>

                        <p className="mt-1 text-[8px] text-slate-500">
                          {domain.detail}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </article>

            {/* EDUCATION */}

            <article className="relative overflow-hidden rounded-[28px] border border-blue-400/15 bg-[linear-gradient(145deg,rgba(14,30,50,.92),rgba(5,14,26,.98))] p-7">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.07] blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-blue-400/15 bg-white p-1.5 shadow-[0_12px_30px_rgba(0,0,0,.25)]">
                    <Image
                      src="/portfolio/education/air-university-logo.jpg"
                      alt="Air University logo"
                      fill
                      sizes="64px"
                      className="object-contain p-1"
                    />
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/[0.03] px-3 py-1.5 text-[8px] text-green-300">
                    <CheckCircle2 size={11} />
                    Completed
                  </span>
                </div>

                <p className="mt-7 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                  Education
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white">
                  BS Software Engineering
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Air University Islamabad
                </p>

                <p className="mt-5 text-[10px] leading-6 text-slate-500">
                  A technical foundation in software engineering,
                  databases, programming and structured problem
                  solving that supports my analytical work today.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Databases",
                    "Programming",
                    "Systems Thinking",
                    "Software Engineering",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-400/10 bg-white/[0.02] px-3 py-2 text-[8px] text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL PRINCIPLES
      ===================================================== */}

      <section className="py-9 sm:py-10 lg:py-12">
        <div className="site-container">
          <div className="grid gap-3 md:grid-cols-3">
            <article className="glass-card p-5">
              <Building2
                size={19}
                className="text-sky-400"
              />

              <p className="mt-5 font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                Perspective
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white">
                Business First
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-slate-500">
                Start with the problem and decision before selecting
                the visualization or technology.
              </p>
            </article>

            <article className="glass-card p-5">
              <Database
                size={19}
                className="text-sky-400"
              />

              <p className="mt-5 font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                Foundation
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white">
                Reliable Data
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-slate-500">
                Consistent definitions, validation and sound data
                models create trustworthy reporting.
              </p>
            </article>

            <article className="glass-card p-5">
              <Lightbulb
                size={19}
                className="text-sky-400"
              />

              <p className="mt-5 font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                Outcome
              </p>

              <h3 className="mt-2 text-sm font-semibold text-white">
                Actionable Insight
              </h3>

              <p className="mt-2 text-[9px] leading-5 text-slate-500">
                Analytics should make performance easier to understand
                and the next action easier to identify.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="pb-12 pt-4 sm:pb-14">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-[linear-gradient(115deg,rgba(9,28,51,.97),rgba(8,22,42,.98),rgba(30,19,68,.72))] p-7 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full bg-violet-500/[0.13] blur-3xl" />

            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[720px]">
                <div className="eyebrow">
                  Explore My Work
                </div>

                <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1] tracking-[-0.05em] text-white">
                  See How I Turn Data Into{" "}

                  <span className="gradient-text">
                    Business Decisions.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Explore my completed Power BI case studies or get
                  in touch to discuss analytics, BI and reporting
                  opportunities.
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