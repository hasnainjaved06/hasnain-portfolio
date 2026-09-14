"use client";

import {
  BarChart3,
  Database,
  Gauge,
  Sparkles,
} from "lucide-react";

import {
  useState,
} from "react";


type ProfilePortraitProps = {
  src?: string;
};


export default function ProfilePortrait({
  src = "/portfolio/profile/hasnain-javed.png",
}: ProfilePortraitProps) {

  const [failed, setFailed] =
    useState(false);


  return (
    <div className="relative mx-auto w-full max-w-[470px]">

      {/* BACK GLOW */}

      <div className="pointer-events-none absolute inset-10 rounded-full bg-blue-500/[0.14] blur-[80px]" />


      {/* MAIN PORTRAIT FRAME */}

      <div className="relative overflow-hidden rounded-[34px] border border-blue-400/20 bg-[linear-gradient(145deg,rgba(10,27,47,.96),rgba(4,13,24,.99))] p-3 shadow-[0_35px_100px_rgba(0,0,0,.35)]">

        <div className="relative min-h-[520px] overflow-hidden rounded-[27px] border border-slate-400/10 bg-[#071523]">

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
                  backgroundSize:
                    "38px 38px",
                }}
              />


              <div className="relative flex h-full min-h-[520px] flex-col items-center justify-center p-8 text-center">

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
                  Add your professional portrait when ready
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

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#06101d] via-[#06101d]/45 to-transparent" />


          {/* ROLE LABEL */}

          <div className="absolute bottom-5 left-5 right-5">

            <div className="rounded-2xl border border-white/10 bg-[#06101d]/80 p-4 backdrop-blur-xl">

              <div className="flex items-center justify-between gap-4">

                <div>

                  <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-cyan-400">
                    Professional Focus
                  </p>

                  <p className="mt-2 text-[11px] font-semibold text-white">
                    Data Analytics • BI • Reporting
                  </p>

                </div>


                <Sparkles
                  size={17}
                  className="shrink-0 text-cyan-400"
                />

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* FLOATING CARD */}

      <div className="absolute -left-5 top-20 hidden rounded-2xl border border-blue-400/20 bg-[#071523]/90 px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,.28)] backdrop-blur-xl sm:block">

        <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
          Experience
        </p>

        <p className="mt-1 text-lg font-bold text-white">
          5+ Years
        </p>

      </div>


      <div className="absolute -right-5 top-[285px] hidden rounded-2xl border border-cyan-400/20 bg-[#071523]/90 px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,.28)] backdrop-blur-xl sm:block">

        <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-slate-600">
          Portfolio
        </p>

        <p className="mt-1 text-lg font-bold text-white">
          8+ Projects
        </p>

      </div>

    </div>
  );
}
