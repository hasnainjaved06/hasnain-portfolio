import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

import CompanyLogo, {
  type CompanyName,
} from "@/components/media/CompanyLogo";

type ExperienceItem = {
  company: CompanyName;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
  tools: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Tekrevol",
    role: "Business Process Analyst",
    period: "Jan 2025 - Present",
    location: "Karachi, Pakistan",
    current: true,
    highlights: [
      "Lead a 5-member analytics team delivering KPI frameworks, BI dashboards and performance reporting for data-driven decision-making.",
      "Integrate multi-source data into Power BI and Looker Studio to improve reporting visibility, accuracy and accessibility.",
      "Use performance analytics to improve engagement by 30% and conversions by 15%, while reducing bounce rate by 20%.",
    ],
    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Looker Studio",
      "Google Analytics",
      "Automation",
    ],
  },
  {
    company: "The Pipeline Group",
    role: "Data Analyst",
    period: "Apr 2023 - Dec 2024",
    location: "Remote - USA",
    highlights: [
      "Processed and analyzed 10,000+ records daily using SQL, Power BI and Excel, improving data accuracy by 25%.",
      "Developed Power BI dashboards and financial reports that strengthened KPI visibility and management reporting.",
      "Validated 1,000+ daily workforce records, improving payroll accuracy by 20% through structured data-quality controls.",
    ],
    tools: [
      "SQL",
      "Power BI",
      "Excel",
      "Google Sheets",
      "Reporting",
    ],
  },
  {
    company: "MEDZnMORE",
    role: "Live Operations Associate",
    period: "Apr 2021 - Mar 2023",
    location: "Islamabad, Pakistan",
    highlights: [
      "Developed and monitored real-time KPI views covering orders, GMV, returns and fulfillment across live operations.",
      "Analyzed 500+ daily orders to identify fulfillment trends, operational gaps and service-performance issues.",
      "Supported 95% fulfillment and 95% on-time shipping while contributing to a 10% reduction in order-processing errors.",
    ],
    tools: [
      "Operations Analytics",
      "Excel",
      "Dashboards",
      "KPI Monitoring",
    ],
  },
];

export default function ExperiencePreview() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-14 lg:py-16">
      {/* BACKGROUND ACCENTS */}

      <div className="pointer-events-none absolute -left-48 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-600/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.035] blur-3xl" />

      <div className="site-container relative">
        {/* HEADER */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
            <div className="eyebrow">
              Professional Journey
            </div>

            <h2 className="section-title">
              Experience Built Around{" "}

              <span className="gradient-text">
                Business Impact.
              </span>
            </h2>

            <p className="section-description">
              5+ years progressing from operational analytics to data
              analysis, business intelligence and process-focused
              decision support.
            </p>
          </div>

          <Link
            href="/experience"
            className="btn-secondary shrink-0"
          >
            Full Experience
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* EXPERIENCE TIMELINE */}

        <div className="relative mt-8">
          <div className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-gradient-to-b from-blue-400/45 via-cyan-400/20 to-transparent md:block" />

          <div className="space-y-4">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.role}`}
                className="relative md:pl-[78px]"
              >
                {/* LOGO TIMELINE NODE */}

                <div className="absolute left-0 top-7 z-10 hidden md:block">
                  <CompanyLogo
                    company={item.company}
                    size="md"
                  />
                </div>

                {/* EXPERIENCE CARD */}

                <div className="group relative overflow-hidden rounded-[26px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.82),rgba(5,14,26,.97))] shadow-[0_18px_60px_rgba(0,0,0,.16)] transition duration-300 hover:border-blue-400/25">
                  <span className="pointer-events-none absolute -right-3 -top-12 font-mono text-[9rem] font-black leading-none text-white/[0.016]">
                    0{index + 1}
                  </span>

                  <div className="relative grid lg:grid-cols-[.72fr_1.28fr]">
                    {/* COMPANY / ROLE */}

                    <div className="border-b border-slate-400/10 p-5 sm:p-6 lg:border-b-0 lg:border-r">
                      <div className="mb-5 md:hidden">
                        <CompanyLogo
                          company={item.company}
                          size="md"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                          {item.period}
                        </span>

                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/15 bg-green-400/[0.045] px-2.5 py-1 text-[7px] font-semibold text-green-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,.65)]" />
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-xl font-bold tracking-[-0.03em] text-white">
                        {item.role}
                      </h3>

                      <div className="mt-3 flex items-center gap-3">
                        <CompanyLogo
                          company={item.company}
                          size="sm"
                          className="hidden lg:block"
                        />

                        <div>
                          <p className="text-[12px] font-semibold text-sky-400">
                            {item.company}
                          </p>

                          <div className="mt-1.5 flex items-center gap-2 text-[8px] text-slate-600">
                            <MapPin size={11} />
                            {item.location}
                          </div>
                        </div>
                      </div>

                      {/* TOOLS */}

                      <div className="mt-6">
                        <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-700">
                          Tools & Capabilities
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-lg border border-slate-400/10 bg-white/[0.02] px-2.5 py-1.5 font-mono text-[7px] text-slate-500"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* IMPACT */}

                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-mono text-[7px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                          Selected Business Impact
                        </p>

                        <span className="font-mono text-[7px] text-slate-700">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="mt-4 grid gap-3">
                        {item.highlights.map(
                          (highlight, highlightIndex) => (
                            <div
                              key={highlight}
                              className="group/item flex items-start gap-4 rounded-2xl border border-slate-400/10 bg-white/[0.015] p-4 transition hover:border-blue-400/20"
                            >
                              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-cyan-400/10 bg-cyan-400/[0.035]">
                                <span className="font-mono text-[7px] font-bold text-cyan-400">
                                  0{highlightIndex + 1}
                                </span>
                              </div>

                              <p className="pt-1 text-[10px] leading-5 text-slate-300">
                                {highlight}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CAREER SNAPSHOT */}

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <article className="glass-card p-5">
            <strong className="text-2xl font-bold text-sky-400">
              5+
            </strong>

            <p className="mt-2 text-[9px] font-semibold text-white">
              Years Experience
            </p>

            <p className="mt-1 text-[8px] text-slate-600">
              Analytics, BI & reporting
            </p>
          </article>

          <article className="glass-card p-5">
            <Sparkles
              size={17}
              className="text-cyan-400"
            />

            <p className="mt-4 text-[9px] font-semibold text-white">
              Cross-Functional
            </p>

            <p className="mt-1 text-[8px] text-slate-600">
              Marketing, sales, finance & operations
            </p>
          </article>

          <article className="glass-card p-5">
            <CheckCircle2
              size={17}
              className="text-cyan-400"
            />

            <p className="mt-4 text-[9px] font-semibold text-white">
              Data + Business
            </p>

            <p className="mt-1 text-[8px] text-slate-600">
              Technical analysis with business context
            </p>
          </article>
        </div>

        {/* CTA */}

        <div className="mt-6 flex justify-center">
          <Link
            href="/experience"
            className="btn-primary"
          >
            Explore Full Career Journey
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}