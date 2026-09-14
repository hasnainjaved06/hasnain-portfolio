"use client";

import {
  BarChart3,
  Database,
  Gauge,
  Sparkles,
} from "lucide-react";

import { useState } from "react";

type ProfilePortraitProps = {
  src?: string;
};

export default function ProfilePortrait({
  src = "/portfolio/profile/hasnain-javed.png",
}: ProfilePortraitProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[470px]">
      {/* BACK GLOW */}

      <div className="pointer-events-none absolute inset-10 rounded-full bg-blue-500/[0.14] blur-[80px]" />

      {/* MAIN PORTRAIT FRAME */}

      <div className="relative overflow-hidden rounded-[26px] border border-blue-400/20 bg-[linear-gradient(145deg,rgba(10,27,47,.96),rgba(4,13,24,.99))] p-2.5 shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:rounded-[34px] sm:p-3">
        <div className="relative min-h-[500px] overflow-hidden rounded-[21px] border border-slate-400/10 bg-[#071523] sm:min-h-[520px] sm:rounded-[27px]">
          {!failed ? (
            <img
              src={src}
              alt="Hasnain Javed"
              onError={() => setFailed(true)}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 overflow-hidden">
              {/* FALLBACK ANALYTICS VISUAL */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,.20),transparent_42%),linear-gradient(145deg,#08192b,#04101d)]" />

              <div
                className="absolute inset-0 opacity-[0.20]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(59,130,246,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.13) 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                }}
              />

              <div className="relative flex h-full min-h-[500px] flex-col items-center justify-center p-8 text-center sm:min-h-[520px]">
                <div className="grid h-28 w-28 place-items-center rounded-full border border-blue-400/25 bg-blue-500/[0.10] shadow-[0_0_60px_rgba(37,99,235,.18)]">
                  <span className="text-4xl font-bold tracking-[-0.05em] text-white">
                    HJ
                  </span>
                </div>

                <p className="mt-7 font-mono text-[8px] uppercase tracking-[0.22em] text-cyan-400">
                  Data Analytics Portfolio
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  Hasnain Javed
                </h3>

                <p className="mt-2 text-[10px] text-slate-500">
                  Data Analyst & Business Intelligence
                </p>

                <div className="mt-9 grid grid-cols-3 gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.05] text-sky-400">
                    <BarChart3 size={18} />
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-500/[0.05] text-cyan-400">
                    <Database size={18} />
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-violet-400/15 bg-violet-500/[0.05] text-violet-400">
                    <Gauge size={18} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BOTTOM GRADIENT */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06101d] via-[#06101d]/50 to-transparent" />

          {/* MOBILE + DESKTOP EXPERIENCE BADGE */}

          <div className="absolute left-3 top-4 z-20 rounded-xl border border-blue-400/25 bg-[#071523]/90 px-3 py-2.5 shadow-[0_12px_35px_rgba(0,0,0,.35)] backdrop-blur-xl sm:-left-0 sm:top-16 sm:rounded-2xl sm:px-4 sm:py-3">
            <p className="font-mono text-[5px] uppercase tracking-[0.14em] text-slate-500 sm:text-[7px] sm:tracking-[0.16em] sm:text-slate-600">
              Experience
            </p>

            <p className="mt-1 text-sm font-bold tracking-[-0.03em] text-white sm:text-lg">
              5+ Years
            </p>
          </div>

          {/* MOBILE + DESKTOP PORTFOLIO BADGE */}

          <div className="absolute right-3 top-[220px] z-20 rounded-xl border border-cyan-400/25 bg-[#071523]/90 px-3 py-2.5 text-right shadow-[0_12px_35px_rgba(0,0,0,.35)] backdrop-blur-xl sm:-right-0 sm:top-[285px] sm:rounded-2xl sm:px-4 sm:py-3">
            <p className="font-mono text-[5px] uppercase tracking-[0.14em] text-slate-500 sm:text-[7px] sm:tracking-[0.16em] sm:text-slate-600">
              Portfolio
            </p>

            <p className="mt-1 text-sm font-bold tracking-[-0.03em] text-white sm:text-lg">
              8+ Projects
            </p>
          </div>

          {/* ROLE LABEL */}

          <div className="absolute bottom-3 left-3 right-3 z-20 sm:bottom-5 sm:left-5 sm:right-5">
            <div className="rounded-xl border border-white/10 bg-[#06101d]/82 p-3 backdrop-blur-xl sm:rounded-2xl sm:p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[6px] uppercase tracking-[0.16em] text-cyan-400 sm:text-[7px] sm:tracking-[0.18em]">
                    Professional Focus
                  </p>

                  <p className="mt-1.5 text-[10px] font-semibold text-white sm:mt-2 sm:text-[11px]">
                    Data Analytics • BI • Reporting
                  </p>
                </div>

                <Sparkles
                  size={16}
                  className="shrink-0 text-cyan-400 sm:h-[17px] sm:w-[17px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}