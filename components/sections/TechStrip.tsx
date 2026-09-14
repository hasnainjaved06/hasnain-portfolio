import type { CSSProperties } from "react";

import {
  BarChart3,
  Boxes,
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

const tools = [
  {
    name: "Power BI",
    category: "Business Intelligence",
    icon: BarChart3,
    color: "#F2C811",
    glow: "rgba(242, 200, 17, 0.22)",
  },
  {
    name: "SQL Server",
    category: "Database",
    icon: DiMsqlServer,
    color: "#E54848",
    glow: "rgba(229, 72, 72, 0.20)",
  },
  {
    name: "Python",
    category: "Data Analysis",
    icon: SiPython,
    color: "#3776AB",
    glow: "rgba(55, 118, 171, 0.22)",
  },
  {
    name: "Excel",
    category: "Analysis & Modeling",
    icon: FaFileExcel,
    color: "#217346",
    glow: "rgba(33, 115, 70, 0.22)",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    color: "#4169E1",
    glow: "rgba(65, 105, 225, 0.22)",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
    color: "#4479A1",
    glow: "rgba(68, 121, 161, 0.22)",
  },
  {
    name: "dbt",
    category: "Data Transformation",
    icon: Boxes,
    color: "#FF694B",
    glow: "rgba(255, 105, 75, 0.22)",
  },
  {
    name: "Google Analytics",
    category: "Web Analytics",
    icon: SiGoogleanalytics,
    color: "#E37400",
    glow: "rgba(227, 116, 0, 0.22)",
  },
  {
    name: "Looker Studio",
    category: "BI Reporting",
    icon: SiLooker,
    color: "#4285F4",
    glow: "rgba(66, 133, 244, 0.22)",
  },
  {
    name: "Google Sheets",
    category: "Reporting",
    icon: SiGooglesheets,
    color: "#34A853",
    glow: "rgba(52, 168, 83, 0.22)",
  },
  {
    name: "Jira",
    category: "Agile Delivery",
    icon: SiJira,
    color: "#2684FF",
    glow: "rgba(38, 132, 255, 0.22)",
  },
  {
    name: "Confluence",
    category: "Documentation",
    icon: SiConfluence,
    color: "#2684FF",
    glow: "rgba(38, 132, 255, 0.20)",
  },
];

export default function TechStrip() {
  return (
    <section className="relative overflow-hidden border-y border-slate-400/10 bg-[#050f1c]">
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,.10),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(6,182,212,.07),transparent_32%)]" />

      {/* GRID */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />

      <div className="site-container relative py-7 sm:py-8">
        {/* HEADER */}

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-cyan-400" />

              <span className="font-mono text-[8px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                Analytics Technology Stack
              </span>
            </div>

            <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
              Tools I Work With
            </h2>

            <p className="mt-2 max-w-[620px] text-[10px] leading-5 text-slate-500">
              A professional analytics stack spanning business
              intelligence, databases, programming, transformation,
              reporting and delivery.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-green-400/10 bg-green-400/[0.025] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,.65)]" />

            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-500">
              12 Core Technologies
            </span>
          </div>
        </div>

        {/* TOOLKIT */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            const iconStyle = {
              color: tool.color,
              filter: `drop-shadow(0 0 9px ${tool.glow})`,
            } satisfies CSSProperties;

            return (
              <article
                key={tool.name}
                className="group relative overflow-hidden rounded-[21px] border border-slate-400/[0.10] bg-[linear-gradient(145deg,rgba(12,27,46,.92),rgba(5,14,26,.98))] transition duration-300 hover:-translate-y-1 hover:border-slate-300/[0.20] hover:shadow-[0_20px_55px_rgba(0,0,0,.30)]"
              >
                {/* TOOL GLOW */}

                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition duration-500 group-hover:scale-125"
                  style={{
                    backgroundColor: tool.glow,
                  }}
                />

                <div className="relative flex min-h-[145px] flex-col p-4">
                  {/* ICON + NUMBER */}

                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-[15px] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.015))] shadow-[inset_0_1px_0_rgba(255,255,255,.05)] transition duration-300 group-hover:scale-105 group-hover:border-white/[0.15]"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-25 blur-xl"
                        style={{
                          backgroundColor: tool.color,
                        }}
                      />

                      <Icon
                        size={24}
                        className="relative z-10"
                        style={iconStyle}
                      />
                    </div>

                    <span className="font-mono text-[7px] font-semibold tracking-[0.12em] text-slate-700">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>

                  {/* COPY */}

                  <div className="mt-auto pt-5">
                    <h3 className="text-[12px] font-semibold tracking-[-0.01em] text-white">
                      {tool.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{
                          backgroundColor:
                            tool.color,
                          boxShadow: `0 0 9px ${tool.glow}`,
                        }}
                      />

                      <p className="text-[8px] text-slate-500">
                        {tool.category}
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM ACCENT */}

                  <div
                    className="absolute bottom-0 left-5 right-5 h-px origin-center scale-x-0 transition duration-300 group-hover:scale-x-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${tool.color}, transparent)`,
                    }}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* FOOT */}

        <div className="mt-5 flex flex-col gap-2 border-t border-slate-400/[0.07] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[8px] text-slate-600">
            Business Intelligence • Analytics • Data Modeling •
            Automation
          </p>

          <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-slate-700">
            Professional Analytics Toolkit
          </p>
        </div>
      </div>
    </section>
  );
}