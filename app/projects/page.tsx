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

      <section className="relative overflow-hidden pb-10 pt-16 sm:pt-20 lg:pb-14 lg:pt-24">
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
          <div className="grid gap-8 xl:grid-cols-[1.08fr_.92fr] xl:items-end xl:gap-14">
            <div className="max-w-[820px]">
              <div className="eyebrow">
                Analytics Portfolio
              </div>

              <h1 className="mt-5 text-[clamp(2.7rem,12vw,6rem)] font-bold leading-[0.94] tracking-[-0.06em] text-white sm:text-[clamp(3.2rem,5.8vw,6rem)] sm:leading-[0.93]">
                Projects Built for{" "}

                <span className="gradient-text">
                  Business Decisions.
                </span>
              </h1>

              <p className="mt-5 max-w-[720px] text-[0.9rem] leading-7 text-slate-400 sm:mt-6 sm:text-[1rem] sm:leading-8">
                Completed business intelligence projects demonstrating
                data modeling, KPI design, analytical logic, dashboard
                development and decision-focused reporting.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:flex sm:flex-wrap">
                <a
                  href="#case-studies"
                  className="btn-primary w-full px-3 text-[0.76rem] sm:w-auto sm:px-5 sm:text-[0.92rem]"
                >
                  Explore Case Studies
                  <ArrowRight size={15} />
                </a>

                <Link
                  href="/contact"
                  className="btn-secondary w-full px-3 text-[0.76rem] sm:w-auto sm:px-5 sm:text-[0.92rem]"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>

            {/* PORTFOLIO SUMMARY */}

            <div className="grid grid-cols-2 gap-3">
              <article className="glass-card p-4 sm:p-5">
                <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
                  Analytics Work
                </p>

                <strong className="mt-2 block text-2xl font-bold text-sky-400 sm:mt-3 sm:text-3xl">
                  8+
                </strong>

                <p className="mt-2 text-[8px] leading-4 text-slate-500 sm:text-[9px] sm:leading-5">
                  Analytics projects across professional, learning
                  and portfolio work.
                </p>
              </article>

              <article className="glass-card p-4 sm:p-5">
                <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
                  Published Cases
                </p>

                <strong className="mt-2 block text-2xl font-bold text-cyan-400 sm:mt-3 sm:text-3xl">
                  {String(featuredProjects.length).padStart(2, "0")}
                </strong>

                <p className="mt-2 text-[8px] leading-4 text-slate-500 sm:text-[9px] sm:leading-5">
                  Completed case studies currently available for
                  detailed review.
                </p>
              </article>

              <article className="glass-card col-span-2 flex items-center gap-4 p-4 sm:p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-green-400/15 bg-green-400/[0.05] text-green-300 sm:h-11 sm:w-11">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
                    Portfolio Standard
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-white sm:text-sm">
                    Real dashboards. Complete case studies.
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-slate-500 sm:text-[9px]">
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
                  className="flex items-center gap-4 bg-[#07111f] p-4 sm:p-5"
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
            {featuredProjects.map((project, index) => {
              const isFinance =
                project.slug ===
                "corporate-finance-fpa-command-center";

              const media = isFinance
                ? portfolioMedia.finance
                : portfolioMedia.atm;

              const copyColumnClass =
                index % 2 === 0
                  ? "xl:col-start-2"
                  : "xl:col-start-1";

              const mediaColumnClass =
                index % 2 === 0
                  ? "xl:col-start-1 xl:border-r"
                  : "xl:col-start-2 xl:border-l";

              return (
                <article
                  key={project.slug}
                  className="group relative overflow-hidden rounded-[26px] border border-slate-400/10 bg-[linear-gradient(135deg,rgba(12,27,46,.96),rgba(5,14,26,.99))] shadow-[0_28px_90px_rgba(0,0,0,.22)] transition duration-300 hover:border-blue-400/25 sm:rounded-[30px]"
                >
                  <span className="pointer-events-none absolute -right-5 -top-14 font-mono text-[10rem] font-black leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[14rem]">
                    0{index + 1}
                  </span>

                  <div
                    className={`relative z-10 grid ${
                      index % 2 === 0
                        ? "xl:grid-cols-[1.16fr_.84fr]"
                        : "xl:grid-cols-[.84fr_1.16fr]"
                    }`}
                  >
                    {/* =================================================
                        PROJECT INTRO
                        Mobile: first
                        Desktop: same copy column as before
                    ================================================= */}

                    <div
                      className={`order-1 px-5 pb-4 pt-6 sm:px-8 sm:pb-5 sm:pt-8 lg:px-9 ${copyColumnClass} xl:row-start-1 xl:self-end xl:px-9 xl:pb-3 xl:pt-9`}
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

                      <p className="mt-4 font-mono text-[7px] uppercase tracking-[0.17em] text-slate-600 sm:mt-5 sm:text-[8px]">
                        {project.category}
                      </p>

                      <h2 className="mt-2.5 text-[clamp(1.75rem,9vw,3.2rem)] font-bold leading-[1.03] tracking-[-0.045em] text-white sm:mt-3 sm:text-[clamp(2rem,3.4vw,3.2rem)]">
                        {project.title}
                      </h2>

                      <p className="mt-4 max-w-[600px] text-[10px] leading-5 text-slate-400 sm:mt-5 sm:text-[11px] sm:leading-6">
                        {project.description}
                      </p>
                    </div>

                    {/* =================================================
                        DASHBOARD MEDIA
                        Mobile: second
                        Desktop: original media column
                    ================================================= */}

                    <div
                      className={`order-2 border-slate-400/10 px-4 py-4 sm:p-6 ${mediaColumnClass} xl:row-span-2 xl:row-start-1 xl:p-6`}
                    >
                      <div className="overflow-hidden rounded-[18px] border border-blue-400/15 bg-[#030a12] shadow-[0_24px_70px_rgba(0,0,0,.42)] sm:rounded-[23px]">
                        <div className="flex h-9 items-center justify-between border-b border-white/[0.06] bg-[#071321] px-3 sm:h-10 sm:px-4">
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

                            <span className="font-mono text-[6px] uppercase tracking-[0.12em] text-slate-600 sm:text-[7px] sm:tracking-[0.14em]">
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

                      {/* SCREENSHOT PREVIEWS */}

                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {media.screenshots
                          .slice(0, 3)
                          .map((screen, screenIndex) => (
                            <div
                              key={screen.src}
                              className="relative overflow-hidden rounded-lg border border-slate-400/10 bg-[#06101d] p-1 sm:rounded-xl sm:p-1.5"
                            >
                              <PortfolioImage
                                src={screen.src}
                                alt={screen.alt}
                                label={screen.label}
                                aspectClass="aspect-[16/9]"
                              />

                              <div className="absolute inset-x-1 bottom-1 rounded-b-[7px] bg-gradient-to-t from-[#02070d]/95 to-transparent px-1.5 pb-1.5 pt-4 sm:inset-x-1.5 sm:bottom-1.5 sm:rounded-b-[10px] sm:px-2 sm:pb-2 sm:pt-5">
                                <p className="truncate text-[5px] font-medium text-slate-300 sm:text-[6px]">
                                  {screen.label}
                                </p>
                              </div>

                              <span className="absolute right-1.5 top-1.5 rounded-md border border-white/10 bg-[#06101d]/80 px-1 py-0.5 font-mono text-[5px] text-slate-500 backdrop-blur-md sm:right-2 sm:top-2 sm:px-1.5 sm:py-1 sm:text-[6px]">
                                0{screenIndex + 1}
                              </span>
                            </div>
                          ))}
                      </div>

                      {/* SCREEN COUNT */}

                      <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-slate-400/10 bg-white/[0.015] px-3 py-2.5 sm:px-4 sm:py-3">
                        <div className="flex min-w-0 items-center gap-2">
                          <Layers3
                            size={13}
                            className="shrink-0 text-cyan-400"
                          />

                          <span className="truncate text-[7px] text-slate-500 sm:text-[8px]">
                            Complete dashboard experience
                          </span>
                        </div>

                        <span className="shrink-0 font-mono text-[7px] font-semibold text-sky-400 sm:text-[8px]">
                          {media.screenshots.length} Views
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        PROJECT DETAILS
                        Mobile: third
                        Desktop: directly beneath intro copy
                    ================================================= */}

                    <div
                      className={`order-3 px-5 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-5 lg:px-9 ${copyColumnClass} xl:row-start-2 xl:self-start xl:px-9 xl:pb-9 xl:pt-3`}
                    >
                      {/* TECHNOLOGY */}

                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-lg border border-blue-400/10 bg-blue-500/[0.03] px-2.5 py-1.5 font-mono text-[7px] font-medium text-sky-300 sm:px-3 sm:py-2 sm:text-[8px]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* HIGHLIGHTS */}

                      <div className="mt-5 sm:mt-6">
                        <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
                          Analytical Coverage
                        </p>

                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {project.highlights
                            .slice(0, 4)
                            .map((highlight) => (
                              <div
                                key={highlight}
                                className="flex items-start gap-3 rounded-xl border border-slate-400/10 bg-white/[0.015] px-3 py-2.5 sm:px-4 sm:py-3"
                              >
                                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,.5)]" />

                                <span className="text-[8px] leading-4 text-slate-400 sm:text-[9px] sm:leading-5">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="mt-6 sm:mt-7">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="btn-primary w-full sm:w-auto"
                        >
                          Explore Full Case Study
                          <ArrowRight size={15} />
                        </Link>
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
          <div className="relative overflow-hidden rounded-[24px] border border-blue-400/20 bg-[linear-gradient(115deg,rgba(9,28,51,.97),rgba(8,22,42,.98),rgba(30,19,68,.72))] p-6 sm:rounded-[28px] sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/[0.12] blur-3xl" />

            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[720px]">
                <div className="eyebrow">
                  Work With Data
                </div>

                <h2 className="mt-4 text-[clamp(1.9rem,9vw,3.5rem)] font-bold leading-[1] tracking-[-0.05em] text-white sm:text-[clamp(2rem,4vw,3.5rem)]">
                  Looking for Analytics That{" "}

                  <span className="gradient-text">
                    Supports Better Decisions?
                  </span>
                </h2>

                <p className="mt-4 text-[0.82rem] leading-6 text-slate-400 sm:text-sm sm:leading-7">
                  I&apos;m open to relevant Data Analyst, BI,
                  reporting and analytics opportunities.
                </p>
              </div>

              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto"
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