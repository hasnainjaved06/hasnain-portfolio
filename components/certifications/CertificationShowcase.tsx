import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  FileSpreadsheet,
  Sparkles,
} from "lucide-react";

import IssuerLogo from "@/components/certifications/IssuerLogo";
import { certifications } from "@/data/certifications";

const credentialStats = [
  {
    value: "5",
    label: "Credentials",
    icon: Award,
  },
  {
    value: "4",
    label: "Issuers",
    icon: Building2,
  },
  {
    value: "15+",
    label: "Skills Covered",
    icon: BarChart3,
  },
  {
    value: "2023–26",
    label: "Learning Journey",
    icon: CalendarDays,
  },
];

const learningAreas = [
  {
    title: "Data Analytics",
    description:
      "Structured analysis, data preparation, visualization and analytical problem solving.",
    icon: BarChart3,
  },
  {
    title: "Business Intelligence",
    description:
      "Power BI, financial analysis, reporting logic and decision-focused dashboards.",
    icon: Award,
  },
  {
    title: "Excel & Reporting",
    description:
      "Spreadsheet modeling, analytical workflows and business reporting.",
    icon: FileSpreadsheet,
  },
  {
    title: "Agile Delivery",
    description:
      "Jira, Scrum concepts and structured project collaboration.",
    icon: CheckCircle2,
  },
];

export default function CertificationShowcase() {
  const featuredCertificate = certifications[0];

  const remainingCertificates = certifications.slice(1);

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden pb-10 pt-20 sm:pt-24 lg:pb-12 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(37,99,235,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.12)_1px,transparent_1px)] [background-size:54px_54px]" />

        <div className="pointer-events-none absolute -left-52 top-0 h-[520px] w-[520px] rounded-full bg-blue-600/[0.07] blur-3xl" />

        <div className="pointer-events-none absolute -right-52 top-0 h-[560px] w-[560px] rounded-full bg-violet-500/[0.045] blur-3xl" />

        <div className="site-container relative">
          <div className="grid gap-9 xl:grid-cols-[1.08fr_.92fr] xl:items-end xl:gap-14">
            {/* HERO COPY */}

            <div className="max-w-[800px]">
              <div className="eyebrow">
                Certifications
              </div>

              <h1 className="mt-5 text-[clamp(3rem,5.5vw,5.6rem)] font-bold leading-[0.93] tracking-[-0.06em] text-white">
                Continuous Learning.
                <br />

                <span className="gradient-text">
                  Practical Application.
                </span>
              </h1>

              <p className="mt-6 max-w-[700px] text-[0.98rem] leading-7 text-slate-400">
                Professional credentials across data analytics,
                business intelligence, Excel, financial analysis and
                Agile delivery that strengthen the skills I apply in
                real analytical work.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#credentials"
                  className="btn-primary"
                >
                  View Credentials
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/projects"
                  className="btn-secondary"
                >
                  Explore Projects
                </Link>
              </div>
            </div>

            {/* HERO STATS */}

            <div className="grid grid-cols-2 gap-3">
              {credentialStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <article
                    key={stat.label}
                    className="glass-card flex min-h-[118px] items-center gap-4 p-5"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                      <Icon size={18} />
                    </div>

                    <div>
                      <strong className="block text-2xl font-bold text-white">
                        {stat.value}
                      </strong>

                      <span className="mt-1 block text-[8px] text-slate-500">
                        {stat.label}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED CREDENTIAL
      ===================================================== */}

      <section
        id="credentials"
        className="scroll-mt-24 border-y border-slate-400/10 bg-white/[0.01] py-10 sm:py-12 lg:py-14"
      >
        <div className="site-container">
          <div className="max-w-[720px]">
            <div className="eyebrow">
              Featured Credential
            </div>

            <h2 className="section-title">
              Structured Learning.
              <br />

              <span className="gradient-text">
                Verified Achievement.
              </span>
            </h2>
          </div>

          <article className="mt-8 overflow-hidden rounded-[28px] border border-blue-400/15 bg-[linear-gradient(145deg,rgba(15,30,49,.82),rgba(5,13,24,.98))]">
            <div className="grid xl:grid-cols-[1.05fr_.95fr] xl:items-center">
              {/* CERTIFICATE */}

              <div className="border-b border-slate-400/10 p-5 sm:p-6 xl:border-b-0 xl:border-r">
                <div className="relative overflow-hidden rounded-[22px] border border-blue-400/20 bg-[#06101d] p-3 sm:p-4">
                  <div className="relative aspect-[1.56/1] overflow-hidden rounded-[15px] border border-white/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                    <Image
                      src={featuredCertificate.image}
                      alt={`${featuredCertificate.title} certificate`}
                      fill
                      priority
                      sizes="(max-width: 1280px) 100vw, 52vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* DETAILS */}

              <div className="p-6 sm:p-8 lg:p-9">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <IssuerLogo
                    src={featuredCertificate.logo}
                    issuer={featuredCertificate.issuer}
                  />

                  <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-2 text-[8px] font-semibold text-cyan-300">
                    Featured
                  </span>
                </div>

                <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.16em] text-cyan-400">
                  {featuredCertificate.category}
                </p>

                <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white">
                  {featuredCertificate.title}
                </h2>

                <p className="mt-3 text-sm font-medium text-sky-400">
                  {featuredCertificate.issuer}
                </p>

                <div className="mt-5 flex flex-wrap gap-4 text-[9px] text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays
                      size={13}
                      className="text-sky-400"
                    />
                    {featuredCertificate.issued}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2
                      size={13}
                      className="text-green-300"
                    />
                    {featuredCertificate.completionLabel}
                  </span>
                </div>

                <p className="mt-5 text-[11px] leading-6 text-slate-400">
                  {featuredCertificate.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredCertificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-400/10 bg-white/[0.02] px-3 py-2 text-[8px] text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {featuredCertificate.credentialId && (
                  <div className="mt-5 flex items-center gap-3 rounded-xl border border-slate-400/10 bg-white/[0.015] px-4 py-3">
                    <BadgeCheck
                      size={14}
                      className="shrink-0 text-cyan-400"
                    />

                    <div>
                      <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-slate-600">
                        Credential ID
                      </p>

                      <p className="mt-1 break-all text-[8px] text-slate-400">
                        {featuredCertificate.credentialId}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={featuredCertificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>

                  {featuredCertificate.verifyUrl && (
                    <a
                      href={featuredCertificate.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Verify Credential
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          ALL OTHER CREDENTIALS
      ===================================================== */}

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[720px]">
              <div className="eyebrow">
                Professional Credentials
              </div>

              <h2 className="section-title">
                Additional{" "}
                <span className="gradient-text">
                  Certifications.
                </span>
              </h2>

              <p className="section-description">
                Credentials supporting my work across analytics,
                reporting, business intelligence and project delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] px-5 py-3">
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
                Total Credentials
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                {certifications.length}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {remainingCertificates.map((certification) => (
              <article
                key={certification.slug}
                className="group overflow-hidden rounded-[24px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(15,30,49,.62),rgba(5,13,24,.94))] transition duration-300 hover:border-blue-400/25 hover:shadow-[0_22px_65px_rgba(37,99,235,.06)]"
              >
                <div className="grid sm:grid-cols-[0.92fr_1.08fr]">
                  {/* IMAGE */}

                  <div className="border-b border-slate-400/10 p-4 sm:border-b-0 sm:border-r">
                    <div className="relative aspect-[1.56/1] overflow-hidden rounded-[15px] border border-slate-400/10 bg-white">
                      <Image
                        src={certification.image}
                        alt={`${certification.title} certificate`}
                        fill
                        sizes="(max-width: 640px) 100vw, 40vw"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* DETAILS */}

                  <div className="flex flex-col p-5">
                    <div className="flex items-start justify-between gap-4">
                      <IssuerLogo
                        src={certification.logo}
                        issuer={certification.issuer}
                        compact
                      />

                      <span className="rounded-full border border-slate-400/10 bg-white/[0.02] px-2.5 py-1.5 text-[7px] text-slate-500">
                        {certification.category}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-semibold leading-6 text-white">
                      {certification.title}
                    </h3>

                    <p className="mt-2 text-[9px] font-medium text-sky-400">
                      {certification.issuer}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3 text-[8px] text-slate-600">
                      <span>
                        {certification.issued}
                      </span>

                      <span>
                        •
                      </span>

                      <span>
                        {certification.completionLabel}
                      </span>
                    </div>

                    <p className="mt-4 text-[9px] leading-5 text-slate-500">
                      {certification.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {certification.skills
                        .slice(0, 4)
                        .map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-slate-400/10 bg-white/[0.02] px-2.5 py-1.5 text-[7px] text-slate-400"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      <a
                        href={certification.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/[0.04] px-4 py-2.5 text-[8px] font-semibold text-sky-300 transition hover:border-blue-400/35 hover:bg-blue-500/[0.07]"
                      >
                        View Certificate
                        <ExternalLink size={12} />
                      </a>

                      {certification.verifyUrl && (
                        <a
                          href={certification.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-400/10 bg-white/[0.02] px-4 py-2.5 text-[8px] font-semibold text-slate-400 transition hover:border-cyan-400/25 hover:text-white"
                        >
                          Verify
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING AREAS
      ===================================================== */}

      <section className="border-y border-slate-400/10 bg-white/[0.01] py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-start xl:gap-14">
            <div>
              <div className="eyebrow">
                Skills Reinforced
              </div>

              <h2 className="section-title">
                Learning Connected to{" "}
                <span className="gradient-text">
                  Practical Work.
                </span>
              </h2>

              <p className="section-description">
                These credentials strengthen areas that connect directly
                with my analytics, reporting and business intelligence
                work.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] p-5">
                <Sparkles
                  size={18}
                  className="text-cyan-400"
                />

                <p className="mt-4 text-[11px] leading-6 text-slate-400">
                  Certifications support the foundation. Practical
                  projects and professional application demonstrate how
                  those skills are used.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {learningAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="glass-card p-5"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-white">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-[10px] leading-5 text-slate-500">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[28px] border border-blue-400/15 bg-[linear-gradient(145deg,rgba(15,30,49,.94),rgba(5,13,24,.98))] p-7 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-violet-500/[0.075] blur-3xl" />

            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[690px]">
                <div className="eyebrow">
                  From Learning to Application
                </div>

                <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1] tracking-[-0.05em] text-white">
                  See the Skills{" "}
                  <span className="gradient-text">
                    Applied in Projects.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Explore my completed analytics case studies to see how
                  these technical foundations translate into practical
                  business intelligence solutions.
                </p>
              </div>

              <Link
                href="/projects"
                className="btn-primary"
              >
                Explore Projects
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}