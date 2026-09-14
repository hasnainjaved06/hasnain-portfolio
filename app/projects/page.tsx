import type { Metadata } from "next";

import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Layers3,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import PortfolioImage from "@/components/media/PortfolioImage";
import { portfolioMedia } from "@/data/portfolioMedia";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Hasnain Javed",
  description:
    "Explore Hasnain Javed's business intelligence and data analytics portfolio featuring Power BI, SQL Server, DAX, financial analytics, banking analytics and decision-focused dashboard projects.",
};

const capabilities = [
  {
    title: "Business Intelligence",
    detail: "Executive dashboards, KPI frameworks and reporting",
    icon: BarChart3,
  },
  {
    title: "Data Modeling",
    detail: "Fact tables, dimensions and analytical relationships",
    icon: Layers3,
  },
  {
    title: "SQL & Analytics",
    detail: "Data preparation, querying and analytical logic",
    icon: Database,
  },
  {
    title: "Business Insights",
    detail: "Analysis connected to performance and decisions",
    icon: TrendingUp,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden pb-10 pt-20 sm:pt-24 lg:pb-14 lg:pt-24">
        {/* GRID */}

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

        <div className="pointer-events-none absolute -right-48 top-10 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.055] blur-3xl" />

        <div className="site-container relative">
          <div className="grid gap-10 xl:grid-cols-[1.08fr_.92fr] xl:items-end xl:gap-14">
            {/* COPY */}

            <div className="max-w-[820px]">
              <div className="eyebrow">
                Analytics Portfolio
              </div>

              <h1 className="mt-5 text-[clamp(3.2rem,5.8vw,6rem)] font-bold leading-[0.93] tracking-[-0.06em] text-white">
                Projects Built for{" "}

                <span className="gradient-text">
                  Business Decisions.
                </span>
              </h1>

              <p className="mt-6 max-w-[720px] text-[1rem] leading-8 text-slate-400">
                Completed business intelligence projects demonstrating
                data modeling, KPI design, analytical logic, dashboard
                development and decision-focused reporting.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#case-studies"
                  className="btn-primary"
                >
                  Explore Case Studies
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/contact"
                  className="btn-secondary"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>

            {/* PORTFOLIO SUMMARY */}

            <div className="grid grid-cols-2 gap-3">
              <article className="glass-card p-5">
                <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
                  Analytics Work
                </p>

                <strong className="mt-3 block text-3xl font-bold text-sky-400">
                  8+
                </strong>

                <p className="mt-2 text-[9px] leading-5 text-slate-500">
                  Analytics projects across professional, learning
                  and portfolio work.
                </p>
              </article>

              <article className="glass-card p-5">
                <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
                  Published Cases
                </p>

                <strong className="mt-3 block text-3xl font-bold text-cyan-400">
                  {String(featuredProjects.length).padStart(2, "0")}
                </strong>

                <p className="mt-2 text-[9px] leading-5 text-slate-500">
                  Completed case studies currently available for
                  detailed review.
                </p>
              </article>

              <article className="glass-card col-span-2 flex items-center gap-4 p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-green-400/15 bg-green-400/[0.05] text-green-300">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
                    Portfolio Standard
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Real dashboards. Complete case studies.
                  </p>

                  <p className="mt-1 text-[9px] text-slate-500">
                    Published projects include real Power BI screenshots
                    and documented analytical thinking.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY STRIP
      ===================================================== */}

      <section className="border-y border-slate-400/10 bg-white/[0.01]">
        <div className="site-container py-5">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-400/10 bg-slate-400/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="flex items-center gap-4 bg-[#07111f] p-5"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h2 className="text-[11px] font-semibold text-white">
                      {capability.title}
                    </h2>

                    <p className="mt-1 text-[8px] leading-4 text-slate-500">
                      {capability.detail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDIES
      ===================================================== */}

      <section
        id="case-studies"
        className="scroll-mt-24 py-10 sm:py-12 lg:py-14"
      >
        <div className="site-container">
          {/* HEADER */}

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[770px]">
              <div className="eyebrow">
                Featured Case Studies
              </div>

              <h2 className="section-title">
                Real Dashboards.{" "}

                <span className="gradient-text">
                  Real Analytical Work.
                </span>
              </h2>

              <p className="section-description">
                Each project combines analytical architecture,
                business KPIs and a complete Power BI reporting
                experience.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] px-5 py-3">
              <Sparkles
                size={15}
                className="text-cyan-400"
              />

              <div>
                <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                  Published
                </p>

                <p className="mt-1 text-[10px] font-semibold text-white">
                  2 Complete BI Case Studies
                </p>
              </div>
            </div>
          </div>

          {/* PROJECTS */}

          <div className="mt-8 space-y-7">
            {featuredProjects.map(
              (project, index) => {
                const isFinance =
                  project.slug ===
                  "corporate-finance-fpa-command-center";

                const media = isFinance
                  ? portfolioMedia.finance
                  : portfolioMedia.atm;

                return (
                  <article
                    key={project.slug}
                    className="group relative overflow-hidden rounded-[30px] border border-slate-400/10 bg-[linear-gradient(135deg,rgba(12,27,46,.96),rgba(5,14,26,.99))] shadow-[0_28px_90px_rgba(0,0,0,.22)] transition duration-300 hover:border-blue-400/25"
                  >
                    {/* HUGE NUMBER */}

                    <span className="pointer-events-none absolute -right-5 -top-14 font-mono text-[11rem] font-black leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[14rem]">
                      0{index + 1}
                    </span>

                    <div
                      className={`relative z-10 grid ${
                        index % 2 === 0
                          ? "xl:grid-cols-[1.16fr_.84fr]"
                          : "xl:grid-cols-[.84fr_1.16fr]"
                      }`}
                    >
                      {/* REAL DASHBOARD MEDIA */}

                      <div
                        className={`border-slate-400/10 p-4 sm:p-6 ${
                          index % 2 === 1
                            ? "xl:order-2 xl:border-l"
                            : "xl:border-r"
                        }`}
                      >
                        {/* BROWSER FRAME */}

                        <div className="overflow-hidden rounded-[23px] border border-blue-400/15 bg-[#030a12] shadow-[0_24px_70px_rgba(0,0,0,.42)]">
                          <div className="flex h-10 items-center justify-between border-b border-white/[0.06] bg-[#071321] px-4">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-red-400/70" />
                              <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                              <span className="h-2 w-2 rounded-full bg-green-400/70" />
                            </div>

                            <div className="flex items-center gap-2">
                              <BarChart3
                                size={12}
                                className="text-cyan-400"
                              />

                              <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-slate-600">
                                Power BI • Project 0{index + 1}
                              </span>
                            </div>
                          </div>

                          <div className="p-2 sm:p-3">
                            <PortfolioImage
                              src={media.hero}
                              alt={`${project.title} dashboard overview`}
                              label={`Case Study 0${index + 1}`}
                              aspectClass="aspect-[16/9]"
                              priority={index === 0}
                            />
                          </div>
                        </div>

                        {/* REAL SCREENSHOT PREVIEWS */}

                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {media.screenshots
                            .slice(0, 3)
                            .map((screen, screenIndex) => (
                              <div
                                key={screen.src}
                                className="relative overflow-hidden rounded-xl border border-slate-400/10 bg-[#06101d] p-1.5"
                              >
                                <PortfolioImage
                                  src={screen.src}
                                  alt={screen.alt}
                                  label={screen.label}
                                  aspectClass="aspect-[16/9]"
                                />

                                <div className="absolute inset-x-1.5 bottom-1.5 rounded-b-[10px] bg-gradient-to-t from-[#02070d]/95 to-transparent px-2 pb-2 pt-5">
                                  <p className="truncate text-[6px] font-medium text-slate-300">
                                    {screen.label}
                                  </p>
                                </div>

                                <span className="absolute right-2 top-2 rounded-md border border-white/10 bg-[#06101d]/80 px-1.5 py-1 font-mono text-[6px] text-slate-500 backdrop-blur-md">
                                  0{screenIndex + 1}
                                </span>
                              </div>
                            ))}
                        </div>

                        {/* SCREEN COUNT */}

                        <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-400/10 bg-white/[0.015] px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Layers3
                              size={13}
                              className="text-cyan-400"
                            />

                            <span className="text-[8px] text-slate-500">
                              Complete dashboard experience
                            </span>
                          </div>

                          <span className="font-mono text-[8px] font-semibold text-sky-400">
                            {media.screenshots.length} Views
                          </span>
                        </div>
                      </div>

                      {/* PROJECT COPY */}

                      <div
                        className={`flex flex-col justify-center p-6 sm:p-8 lg:p-9 ${
                          index % 2 === 1
                            ? "xl:order-1"
                            : ""
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-cyan-400">
                            Case Study {project.number}
                          </span>

                          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/15 bg-green-400/[0.04] px-3 py-1.5 text-[8px] font-semibold text-green-300">
                            <CheckCircle2 size={11} />
                            Completed
                          </span>
                        </div>

                        <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.17em] text-slate-600">
                          {project.category}
                        </p>

                        <h2 className="mt-3 text-[clamp(2rem,3.4vw,3.2rem)] font-bold leading-[1.03] tracking-[-0.045em] text-white">
                          {project.title}
                        </h2>

                        <p className="mt-5 max-w-[600px] text-[11px] leading-6 text-slate-400">
                          {project.description}
                        </p>

                        {/* TECHNOLOGY */}

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-lg border border-blue-400/10 bg-blue-500/[0.03] px-3 py-2 font-mono text-[8px] font-medium text-sky-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        {/* HIGHLIGHTS */}

                        <div className="mt-6">
                          <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
                            Analytical Coverage
                          </p>

                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            {project.highlights
                              .slice(0, 4)
                              .map((highlight) => (
                                <div
                                  key={highlight}
                                  className="flex items-start gap-3 rounded-xl border border-slate-400/10 bg-white/[0.015] px-4 py-3"
                                >
                                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,.5)]" />

                                  <span className="text-[9px] leading-5 text-slate-400">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>

                        <div className="mt-7">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="btn-primary"
                          >
                            Explore Full Case Study
                            <ArrowRight size={15} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          ANALYTICAL PROCESS
      ===================================================== */}

      <section className="border-y border-slate-400/10 bg-white/[0.01] py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[.72fr_1.28fr] xl:items-start xl:gap-12">
            <div>
              <div className="eyebrow">
                Behind the Dashboard
              </div>

              <h2 className="section-title">
                Built Beyond the{" "}

                <span className="gradient-text">
                  Visual Layer.
                </span>
              </h2>

              <p className="section-description">
                Each case study reflects the full analytics workflow,
                from business requirements and data preparation to
                modeling, measures and final reporting.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Business Problem",
                  description:
                    "Define the performance question and stakeholder decision.",
                },
                {
                  number: "02",
                  title: "Data Preparation",
                  description:
                    "Clean, validate and structure the source data.",
                },
                {
                  number: "03",
                  title: "Data Model",
                  description:
                    "Design relationships, dimensions and analytical structures.",
                },
                {
                  number: "04",
                  title: "KPI Framework",
                  description:
                    "Build the measures and metrics required for analysis.",
                },
                {
                  number: "05",
                  title: "Dashboard UX",
                  description:
                    "Create clear navigation and decision-focused visuals.",
                },
                {
                  number: "06",
                  title: "Business Insight",
                  description:
                    "Translate analytical findings into meaningful recommendations.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="glass-card p-5"
                >
                  <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-sky-500">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-5 text-slate-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-[linear-gradient(115deg,rgba(9,28,51,.97),rgba(8,22,42,.98),rgba(30,19,68,.72))] p-7 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/[0.12] blur-3xl" />

            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[720px]">
                <div className="eyebrow">
                  Work With Data
                </div>

                <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1] tracking-[-0.05em] text-white">
                  Looking for Analytics That{" "}

                  <span className="gradient-text">
                    Supports Better Decisions?
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  I&apos;m open to relevant Data Analyst, BI,
                  reporting and analytics opportunities.
                </p>
              </div>

              <Link
                href="/contact"
                className="btn-primary"
              >
                Let&apos;s Connect
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}