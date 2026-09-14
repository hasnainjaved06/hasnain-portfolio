import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

import IssuerLogo from "@/components/certifications/IssuerLogo";
import { certifications } from "@/data/certifications";

const featuredSlugs = new Set([
  "google-data-analytics",
  "ibm-data-analyst",
  "excel-skills-for-business",
  "power-bi-financial-data-analysis",
]);

const featuredCertifications = certifications.filter((certification) =>
  featuredSlugs.has(certification.slug)
);

export default function CertificationsPreview() {
  return (
    <section className="section relative overflow-hidden">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-72 top-20 h-[560px] w-[560px] rounded-full bg-blue-600/[0.04] blur-3xl" />

        <div className="absolute -right-72 bottom-0 h-[560px] w-[560px] rounded-full bg-violet-600/[0.035] blur-3xl" />
      </div>

      <div className="site-container relative">
        {/* HEADER */}

        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[780px]">
            <div className="eyebrow">
              Certifications
            </div>

            <h2 className="section-title">
              Continuous Learning.
              <br />
              <span className="gradient-text">
                Practical Application.
              </span>
            </h2>

            <p className="section-description max-w-[700px]">
              Selected professional credentials supporting my work across
              data analytics, business intelligence, Excel and analytical
              problem-solving.
            </p>
          </div>

          <Link
            href="/certifications"
            className="btn-secondary shrink-0"
          >
            View All Credentials
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* CERTIFICATION GRID */}

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredCertifications.map((certification) => (
            <article
              key={certification.slug}
              className="group flex overflow-hidden rounded-[24px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(10,24,41,.88),rgba(4,13,24,.96))] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_22px_65px_rgba(37,99,235,.08)]"
            >
              <div className="flex w-full flex-col">
                {/* BRAND */}

                <div className="flex min-h-[78px] items-center justify-between gap-4 px-5 pt-5">
                  <IssuerLogo
                    src={certification.logo}
                    issuer={certification.issuer}
                    compact
                  />

                  <div className="grid h-8 w-8 place-items-center rounded-full border border-green-400/15 bg-green-400/[0.04]">
                    <BadgeCheck
                      size={14}
                      className="text-green-400"
                    />
                  </div>
                </div>

                {/* CERTIFICATE PREVIEW */}

                <div className="px-4 pt-4">
                  <div className="relative aspect-[1.5/1] overflow-hidden rounded-[16px] border border-blue-400/15 bg-white shadow-[0_12px_35px_rgba(0,0,0,.28)]">
                    <Image
                      src={certification.image}
                      alt={`${certification.title} certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* CONTENT */}

                <div className="flex flex-1 flex-col p-5">
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-cyan-400">
                    {certification.category}
                  </span>

                  <h3 className="mt-3 text-[15px] font-semibold leading-6 text-white">
                    {certification.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-[9px] text-slate-500">
                    <CalendarDays
                      size={12}
                      className="text-sky-400"
                    />

                    {certification.issued}
                  </div>

                  <p className="mt-4 text-[10px] leading-5 text-slate-400">
                    {certification.description}
                  </p>

                  {/* SKILLS */}

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {certification.skills
                      .slice(0, 3)
                      .map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-slate-400/10 bg-white/[0.02] px-2.5 py-1.5 text-[7px] text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>

                  {/* ACTIONS */}

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <Link
                      href="/certifications"
                      className="inline-flex items-center gap-2 rounded-xl border border-blue-400/25 bg-blue-500/[0.04] px-3.5 py-2.5 text-[9px] font-semibold text-white transition hover:border-cyan-400/40 hover:bg-blue-500/[0.08]"
                    >
                      View Credential
                      <ArrowRight size={12} />
                    </Link>

                    {certification.verifyUrl && (
                      <a
                        href={certification.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-400/10 bg-white/[0.02] px-3.5 py-2.5 text-[9px] font-semibold text-slate-400 transition hover:border-cyan-400/25 hover:text-cyan-300"
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

        {/* FOOTNOTE */}

        <div className="mt-7 flex justify-center">
          <p className="rounded-full border border-slate-400/10 bg-white/[0.018] px-5 py-3 text-center text-[9px] text-slate-500">
            Additional certifications and credential details are available on
            the full Certifications page.
          </p>
        </div>
      </div>
    </section>
  );
}