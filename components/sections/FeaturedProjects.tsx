import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Layers3,
  Sparkles,
} from "lucide-react";

import PortfolioImage from "@/components/media/PortfolioImage";
import { projects } from "@/data/projects";
import { portfolioMedia } from "@/data/portfolioMedia";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const mediaBySlug = {
    "corporate-finance-fpa-command-center":
      portfolioMedia.finance,

    "pakistan-atm-performance":
      portfolioMedia.atm,

    "customer-growth-analytics":
      portfolioMedia.customerGrowth,

    "enterprise-sales-inventory-intelligence":
      portfolioMedia.fabricEnterpriseSales,
  } as const;

  return (
    <section className="relative overflow-hidden border-y border-slate-400/10 bg-white/[0.01] py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute -left-48 top-24 h-[520px] w-[520px] rounded-full bg-blue-600/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-[560px] w-[560px] rounded-full bg-cyan-500/[0.035] blur-3xl" />

      <div className="site-container relative">
        {/* HEADER */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[790px]">
            <div className="eyebrow">
              Featured Case Studies
            </div>

            <h2 className="section-title">
              Analytics Built for{" "}
              <span className="gradient-text">
                Business Decisions.
              </span>
            </h2>

            <p className="section-description max-w-[720px]">
              Completed end-to-end case studies spanning corporate
              finance, banking performance, customer intelligence,
              retention analytics and Microsoft Fabric data
              engineering.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] px-4 py-3 sm:flex">
              <Sparkles
                size={15}
                className="text-cyan-400"
              />

              <div>
                <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                  Published
                </p>

                <p className="mt-1 text-[10px] font-semibold text-white">
                  {featuredProjects.length} Complete Case Studies
                </p>
              </div>
            </div>

            <Link
              href="/projects"
              className="btn-secondary"
            >
              All Projects
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* PROJECTS */}

        <div className="mt-9 space-y-6">
          {featuredProjects.map((project, index) => {
            const media =
              mediaBySlug[
                project.slug as keyof typeof mediaBySlug
              ];

            if (!media) {
              return null;
            }

            return (
              <article
                key={project.slug}
                className="group relative overflow-hidden rounded-[26px] border border-slate-400/10 bg-[linear-gradient(135deg,rgba(12,27,46,.96),rgba(5,14,26,.99))] shadow-[0_28px_90px_rgba(0,0,0,.2)] transition duration-300 hover:border-blue-400/25 hover:shadow-[0_34px_110px_rgba(37,99,235,.08)] sm:rounded-[30px]"
              >
                {/* PROJECT NUMBER WATERMARK */}

                <span className="pointer-events-none absolute -right-3 -top-10 z-0 font-mono text-[9rem] font-black leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[12rem]">
                  {project.number}
                </span>

                <div
                  className={`relative z-10 grid ${
                    index % 2 === 0
                      ? "xl:grid-cols-[1.14fr_.86fr]"
                      : "xl:grid-cols-[.86fr_1.14fr]"
                  }`}
                >
                  {/* PROJECT INTRO */}

                  <div
                    className={`order-1 px-5 pb-4 pt-6 sm:px-8 sm:pb-5 sm:pt-8 lg:p-9 ${
                      index % 2 === 1
                        ? "xl:order-1"
                        : "xl:order-2"
                    } xl:flex xl:flex-col xl:justify-center`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[8px] font-bold uppercase tracking-[0.17em] text-cyan-400">
                        Case Study {project.number}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/[0.03] px-3 py-1.5 text-[8px] font-medium text-green-300">
                        <CheckCircle2 size={11} />
                        Completed
                      </span>
                    </div>

                    <p className="mt-4 font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600 sm:mt-5 sm:text-[8px]">
                      {project.category}
                    </p>

                    <h3 className="mt-2.5 max-w-[580px] text-[clamp(1.75rem,9vw,3rem)] font-bold leading-[1.03] tracking-[-0.045em] text-white sm:mt-3 sm:text-[clamp(1.8rem,3vw,3rem)]">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-[600px] text-[10px] leading-5 text-slate-400 sm:mt-5 sm:text-[11px] sm:leading-6">
                      {project.description}
                    </p>
                  </div>

                  {/* DASHBOARD */}

                  <div
                    className={`relative order-2 border-slate-400/10 p-4 sm:p-6 ${
                      index % 2 === 1
                        ? "xl:order-2 xl:border-l"
                        : "xl:order-1 xl:border-r"
                    }`}
                  >
                    <div className="overflow-hidden rounded-[18px] border border-blue-400/15 bg-[#040c16] shadow-[0_24px_70px_rgba(0,0,0,.42)] sm:rounded-[22px]">
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
                            {project.number === "04"
                              ? "Microsoft Fabric • Project 04"
                              : `Power BI • Project ${project.number}`}
                          </span>
                        </div>
                      </div>

                      <div className="p-2 sm:p-3">
                        <PortfolioImage
                          src={media.hero}
                          alt={`${project.title} showcase`}
                          label={`Project ${project.number}`}
                          aspectClass="aspect-[16/9]"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-400/10 bg-white/[0.015] px-3 py-2.5 sm:px-4 sm:py-3">
                      <div className="flex items-center gap-2">
                        <Layers3
                          size={12}
                          className="text-cyan-400"
                        />

                        <span className="text-[7px] text-slate-500 sm:text-[8px]">
                          {project.number === "04"
                            ? "Enterprise data platform & analytics"
                            : "Premium dashboard experience"}
                        </span>
                      </div>

                      <span className="font-mono text-[7px] font-semibold text-sky-400 sm:text-[8px]">
                        {media.screenshots.length} Views
                      </span>
                    </div>
                  </div>

                  {/* DETAILS */}

                  <div
                    className={`order-3 px-5 pb-6 pt-3 sm:px-8 sm:pb-8 sm:pt-4 lg:p-9 ${
                      index % 2 === 1
                        ? "xl:col-start-1 xl:row-start-2"
                        : "xl:col-start-2 xl:row-start-2"
                    }`}
                  >
                    {/* TOOLS */}

                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-blue-400/10 bg-blue-500/[0.025] px-2.5 py-1.5 font-mono text-[7px] text-slate-400 sm:px-3 sm:py-2 sm:text-[8px]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* HIGHLIGHTS */}

                    <div className="mt-5 grid gap-2 sm:mt-6 sm:grid-cols-2">
                      {project.highlights
                        .slice(0, 4)
                        .map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-3 rounded-xl border border-slate-400/10 bg-white/[0.015] px-3 py-2.5 sm:px-4 sm:py-3"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,.5)]" />

                            <span className="text-[8px] leading-4 text-slate-400 sm:text-[9px] sm:leading-5">
                              {highlight}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* CTA */}

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

        {/* VIEW ALL */}

        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[10px] font-semibold text-sky-400 transition hover:text-cyan-300"
          >
            Explore Complete Analytics Portfolio
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
