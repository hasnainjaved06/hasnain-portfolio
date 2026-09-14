import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Layers3,
} from "lucide-react";

import PortfolioImage from "@/components/media/PortfolioImage";
import { portfolioMedia } from "@/data/portfolioMedia";

const showcaseScreens = [
  {
    project: "Finance & FP&A",
    href: "/projects/corporate-finance-fpa-command-center",
    screen:
      portfolioMedia.finance.screenshots[1],
  },
  {
    project: "Finance & FP&A",
    href: "/projects/corporate-finance-fpa-command-center",
    screen:
      portfolioMedia.finance.screenshots[2],
  },
  {
    project: "Finance & FP&A",
    href: "/projects/corporate-finance-fpa-command-center",
    screen:
      portfolioMedia.finance.screenshots[4],
  },
  {
    project: "Pakistan ATM",
    href: "/projects/pakistan-atm-performance",
    screen:
      portfolioMedia.atm.screenshots[1],
  },
  {
    project: "Pakistan ATM",
    href: "/projects/pakistan-atm-performance",
    screen:
      portfolioMedia.atm.screenshots[2],
  },
];

export default function DashboardShowcase() {
  const totalScreens =
    portfolioMedia.finance.screenshots.length +
    portfolioMedia.atm.screenshots.length;

  return (
    <section className="relative overflow-hidden py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div className="site-container relative">
        {/* HEADER */}

        <div className="grid gap-6 xl:grid-cols-[1fr_auto] xl:items-end">
          <div className="max-w-[760px]">
            <div className="eyebrow">
              Dashboard Showcase
            </div>

            <h2 className="section-title">
              See the{" "}

              <span className="gradient-text">
                Analytics Experience.
              </span>
            </h2>

            <p className="section-description">
              Selected screens from the completed Power BI projects,
              showing different analytical views rather than repeating
              a single dashboard preview.
            </p>
          </div>

          {/* STATS */}

          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] px-4 py-3 text-center">
              <strong className="block text-lg font-bold text-white">
                {totalScreens}
              </strong>

              <span className="mt-1 block text-[7px] text-slate-600">
                Dashboard Views
              </span>
            </div>

            <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] px-4 py-3 text-center">
              <strong className="block text-lg font-bold text-white">
                2
              </strong>

              <span className="mt-1 block text-[7px] text-slate-600">
                Case Studies
              </span>
            </div>

            <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] px-4 py-3 text-center">
              <strong className="block text-lg font-bold text-cyan-300">
                BI
              </strong>

              <span className="mt-1 block text-[7px] text-slate-600">
                Power BI
              </span>
            </div>
          </div>
        </div>

        {/* BENTO DASHBOARD WALL */}

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          {/* LARGE FINANCE SCREEN */}

          <DashboardTile
            href={showcaseScreens[0].href}
            project={showcaseScreens[0].project}
            screen={showcaseScreens[0].screen}
            className="lg:col-span-7"
            aspectClass="aspect-[16/9]"
            featured
          />

          {/* FINANCE SECONDARY */}

          <DashboardTile
            href={showcaseScreens[1].href}
            project={showcaseScreens[1].project}
            screen={showcaseScreens[1].screen}
            className="lg:col-span-5"
            aspectClass="aspect-[16/10]"
          />

          {/* ATM */}

          <DashboardTile
            href={showcaseScreens[3].href}
            project={showcaseScreens[3].project}
            screen={showcaseScreens[3].screen}
            className="lg:col-span-5"
            aspectClass="aspect-[16/10]"
          />

          {/* FORECAST */}

          <DashboardTile
            href={showcaseScreens[2].href}
            project={showcaseScreens[2].project}
            screen={showcaseScreens[2].screen}
            className="lg:col-span-7"
            aspectClass="aspect-[16/9]"
            featured
          />

          {/* ATM REGIONAL FULL WIDTH */}

          <DashboardTile
            href={showcaseScreens[4].href}
            project={showcaseScreens[4].project}
            screen={showcaseScreens[4].screen}
            className="lg:col-span-12"
            aspectClass="aspect-[2.05/1]"
            wide
          />
        </div>

        {/* BOTTOM BAR */}

        <div className="mt-6 flex flex-col gap-4 rounded-[22px] border border-slate-400/10 bg-[linear-gradient(90deg,rgba(8,22,38,.92),rgba(5,14,26,.98))] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
              <Layers3 size={18} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={12}
                  className="text-green-300"
                />

                <p className="text-[9px] font-semibold text-white">
                  Real Project Screens
                </p>
              </div>

              <p className="mt-1 text-[8px] leading-4 text-slate-600">
                Screens shown here are taken directly from the
                completed Power BI portfolio projects.
              </p>
            </div>
          </div>

          <Link
            href="/projects"
            className="btn-secondary shrink-0"
          >
            Explore Case Studies
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function DashboardTile({
  href,
  project,
  screen,
  className,
  aspectClass,
  featured = false,
  wide = false,
}: {
  href: string;
  project: string;
  screen: {
    src: string;
    alt: string;
    label: string;
  };
  className: string;
  aspectClass: string;
  featured?: boolean;
  wide?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${className} group relative overflow-hidden rounded-[24px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.94),rgba(5,14,26,.99))] p-3 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_24px_70px_rgba(37,99,235,.10)]`}
    >
      {/* BROWSER FRAME */}

      <div className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#030a12]">
        <div className="flex h-9 items-center justify-between border-b border-white/[0.06] bg-[#071321] px-3">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
          </div>

          <div className="flex items-center gap-2">
            <BarChart3
              size={11}
              className="text-cyan-400"
            />

            <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-slate-600">
              Analytics View
            </span>
          </div>
        </div>

        <PortfolioImage
          src={screen.src}
          alt={screen.alt}
          label={screen.label}
          aspectClass={aspectClass}
        />
      </div>

      {/* OVERLAY INFO */}

      <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-b-[18px] bg-gradient-to-t from-[#030a12]/95 via-[#030a12]/55 to-transparent px-4 pb-4 pt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-cyan-400">
              {project}
            </p>

            <h3
              className={`mt-1 font-semibold text-white ${
                featured
                  ? "text-sm sm:text-base"
                  : "text-xs sm:text-sm"
              }`}
            >
              {screen.label}
            </h3>
          </div>

          {!wide && (
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/30 text-slate-400 backdrop-blur-md transition group-hover:border-cyan-400/30 group-hover:text-cyan-300">
              <ArrowRight size={13} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}