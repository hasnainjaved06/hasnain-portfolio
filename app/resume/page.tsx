import type { Metadata } from "next";

import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers3,
  MapPin,
  Sparkles,
  Workflow,
} from "lucide-react";

import CompanyLogo, {
  type CompanyName,
} from "@/components/media/CompanyLogo";

export const metadata: Metadata = {
  title: "Resume | Hasnain Javed",
  description:
    "Resume of Hasnain Javed, Data Analyst and Business Intelligence professional with 5+ years of experience across Power BI, Microsoft Fabric, SQL, DAX, Python, reporting automation and business process analytics.",
};

const resumePath = "/resume/Hasnain-Javed-Resume.pdf";

type ResumeExperience = {
  role: string;
  company: CompanyName;
  period: string;
  location: string;
  summary: string;
};

const experience: ResumeExperience[] = [
  {
    role: "Business Process Analyst",
    company: "Tekrevol",
    period: "Jan 2025 - Present",
    location: "Karachi, Pakistan",
    summary:
      "Business intelligence, KPI frameworks, reporting automation and process analysis across cross-functional business teams.",
  },
  {
    role: "Data Analyst",
    company: "The Pipeline Group",
    period: "Apr 2023 - Dec 2024",
    location: "Remote - USA",
    summary:
      "SQL, Power BI, workforce analytics, operational reporting, finance reporting and structured data-validation workflows.",
  },
  {
    role: "Live Operations Associate",
    company: "MEDZnMORE",
    period: "Apr 2021 - Mar 2023",
    location: "Islamabad, Pakistan",
    summary:
      "Real-time operational reporting, SLA monitoring, fulfillment analysis and healthcare operations analytics.",
  },
];

const skillGroups = [
  {
    title: "Business Intelligence",
    skills: ["Power BI", "DAX", "Power Query", "Semantic Models", "Looker Studio"],
    icon: BarChart3,
  },
  {
    title: "Data Engineering",
    skills: [
      "Microsoft Fabric",
      "Data Factory",
      "OneLake",
      "Lakehouse",
      "Warehouse",
      "PySpark",
    ],
    icon: Layers3,
  },
  {
    title: "Data & Programming",
    skills: ["SQL", "Python", "pandas", "NumPy", "Excel"],
    icon: Code2,
  },
  {
    title: "Modeling & Automation",
    skills: [
      "Star Schema",
      "SCD Type 2",
      "Incremental Loading",
      "Google Apps Script",
      "Power Automate",
    ],
    icon: Workflow,
  },
];

const highlights = [
  {
    value: "5+",
    label: "Years Experience",
    detail: "Analytics, BI, reporting and process work",
  },
  {
    value: "04",
    label: "Completed Case Studies",
    detail: "Finance, banking, customer analytics and Fabric",
  },
  {
    value: "14+",
    label: "Core Technologies",
    detail: "BI, SQL, Python, Fabric and automation",
  },
  {
    value: "06",
    label: "Business Domains",
    detail: "Cross-functional analytical exposure",
  },
];

const portfolioProjects = [
  {
    number: "01",
    title: "Corporate Finance & FP&A Command Center",
    detail: "Power BI • SQL Server • DAX • Scenario Planning",
  },
  {
    number: "02",
    title: "Pakistan ATM Performance Dashboard",
    detail: "Power BI • DAX • Performance Segmentation",
  },
  {
    number: "03",
    title: "Customer Growth Analytics",
    detail: "Python • SQL Server • RFM • CLV • Churn",
  },
  {
    number: "04",
    title: "Enterprise Sales & Inventory Intelligence Platform",
    detail: "Microsoft Fabric • PySpark • Lakehouse • Power BI",
  },
];

export default function ResumePage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-10 pt-20 sm:pt-24 lg:pb-14 lg:pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.09) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage: "linear-gradient(to bottom, black, transparent 92%)",
          }}
        />
        <div className="pointer-events-none absolute -left-52 top-0 h-[560px] w-[560px] rounded-full bg-blue-600/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-52 top-10 h-[580px] w-[580px] rounded-full bg-cyan-500/[0.055] blur-3xl" />

        <div className="site-container relative">
          <div className="grid gap-10 xl:grid-cols-[1.08fr_.92fr] xl:items-end xl:gap-14">
            <div className="max-w-[820px]">
              <div className="eyebrow">Professional Resume</div>

              <h1 className="mt-5 text-[clamp(3.2rem,5.8vw,6rem)] font-bold leading-[0.93] tracking-[-0.06em] text-white">
                Experience.
                <br />
                Skills.{" "}
                <span className="gradient-text">Business Impact.</span>
              </h1>

              <p className="mt-6 max-w-[740px] text-[1rem] leading-8 text-slate-400">
                A concise professional overview covering 5+ years across data
                analytics, business intelligence, reporting automation,
                operations analytics, business process improvement and modern
                Microsoft Fabric data engineering.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={16} />
                  View Resume
                </a>

                <a
                  href={resumePath}
                  download="Hasnain-Javed-Resume.pdf"
                  className="btn-secondary"
                >
                  <Download size={16} />
                  Download PDF
                </a>

                <Link href="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[26px] border border-blue-400/15 bg-[linear-gradient(145deg,rgba(13,29,48,.94),rgba(5,14,26,.99))] p-6 shadow-[0_24px_70px_rgba(0,0,0,.22)]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/[0.10] blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <CompanyLogo company="Tekrevol" size="lg" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_9px_rgba(34,197,94,.7)]" />
                      <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-green-300">
                        Current Position
                      </p>
                    </div>
                    <h2 className="mt-3 text-lg font-bold text-white">
                      Business Process Analyst
                    </h2>
                    <p className="mt-1 text-[10px] font-semibold text-sky-400">
                      Tekrevol
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-[8px] text-slate-500">
                      <MapPin size={11} />
                      Karachi, Pakistan
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <article className="rounded-xl border border-slate-400/10 bg-white/[0.018] p-4">
                    <strong className="text-2xl font-bold text-sky-400">5+</strong>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.1em] text-slate-600">
                      Years Experience
                    </p>
                  </article>
                  <article className="rounded-xl border border-slate-400/10 bg-white/[0.018] p-4">
                    <strong className="text-2xl font-bold text-cyan-400">4</strong>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.1em] text-slate-600">
                      Completed Case Studies
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-400/10 bg-white/[0.01]">
        <div className="site-container py-5">
          <div className="grid gap-px overflow-hidden rounded-[20px] border border-slate-400/10 bg-slate-400/10 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article key={item.label} className="bg-[#07111f] p-5">
                <strong className="text-2xl font-bold tracking-[-0.04em] text-white">
                  {item.value}
                </strong>
                <p className="mt-2 text-[9px] font-semibold text-sky-400">
                  {item.label}
                </p>
                <p className="mt-1 text-[8px] leading-4 text-slate-600">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[.68fr_1.32fr] xl:gap-12">
            <div>
              <div className="eyebrow">Resume Snapshot</div>
              <h2 className="section-title">
                Professional Profile{" "}
                <span className="gradient-text">at a Glance.</span>
              </h2>
              <p className="section-description">
                A recruiter-focused summary of my professional positioning,
                education and analytical specialization.
              </p>

              <div className="mt-7 space-y-3">
                <article className="flex items-center gap-4 rounded-2xl border border-slate-400/10 bg-white/[0.018] p-5">
                  <CompanyLogo company="Tekrevol" size="sm" />
                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                      Current Role
                    </p>
                    <p className="mt-2 text-[11px] font-semibold text-white">
                      Business Process Analyst
                    </p>
                    <p className="mt-1 text-[9px] text-sky-400">Tekrevol</p>
                  </div>
                </article>

                <article className="flex items-center gap-4 rounded-2xl border border-slate-400/10 bg-white/[0.018] p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                    <GraduationCap size={19} />
                  </div>
                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                      Education
                    </p>
                    <p className="mt-2 text-[11px] font-semibold text-white">
                      BS Software Engineering
                    </p>
                    <p className="mt-1 text-[9px] text-slate-500">
                      Air University Islamabad
                    </p>
                  </div>
                </article>

                <article className="flex items-center gap-4 rounded-2xl border border-slate-400/10 bg-white/[0.018] p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
                    <Layers3 size={19} />
                  </div>
                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-slate-600">
                      Modern Data Platform
                    </p>
                    <p className="mt-2 text-[11px] font-semibold text-white">
                      Microsoft Fabric
                    </p>
                    <p className="mt-1 text-[9px] text-slate-500">
                      Data Factory • Lakehouse • PySpark • Warehouse
                    </p>
                  </div>
                </article>

                <Link href="/experience" className="btn-secondary mt-2">
                  Detailed Experience
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-slate-400/10 bg-[#dfe5ec] p-3 shadow-[0_35px_100px_rgba(0,0,0,.32)] sm:p-4">
              <div className="rounded-[20px] bg-white p-6 text-slate-900 sm:p-8 lg:p-10">
                <div className="border-b border-slate-200 pb-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-3xl font-bold tracking-[-0.04em] text-slate-950">
                        Hasnain Javed
                      </h2>
                      <p className="mt-2 text-[11px] font-semibold text-blue-600">
                        Data Analyst | Business Intelligence | Data Engineering
                      </p>
                      <p className="mt-3 max-w-[560px] text-[9px] leading-5 text-slate-500">
                        Analytics professional with 5+ years of experience
                        across business intelligence, KPI frameworks, data
                        analysis, operational reporting, process improvement
                        and modern analytical platform development.
                      </p>
                    </div>

                    <div className="text-right text-[8px] leading-5 text-slate-500">
                      <p>Karachi, Pakistan</p>
                      <p>hasnainjaved0123@gmail.com</p>
                      <p>LinkedIn: hasnain-javed-203076202</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-blue-600">
                    Professional Experience
                  </p>
                  <div className="mt-4 space-y-5">
                    {experience.map((item) => (
                      <div
                        key={`${item.company}-${item.role}`}
                        className="grid grid-cols-[42px_1fr] gap-3"
                      >
                        <CompanyLogo company={item.company} size="sm" />
                        <div>
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className="text-[10px] font-bold text-slate-900">
                                {item.role}
                              </h3>
                              <p className="mt-0.5 text-[8px] font-semibold text-blue-600">
                                {item.company}
                              </p>
                              <p className="mt-0.5 text-[7px] text-slate-400">
                                {item.location}
                              </p>
                            </div>
                            <span className="text-[7px] font-semibold text-slate-400">
                              {item.period}
                            </span>
                          </div>
                          <p className="mt-2 text-[8px] leading-4 text-slate-500">
                            {item.summary}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-blue-600">
                    Core Skills
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {skillGroups.map((group) => (
                      <div key={group.title}>
                        <p className="text-[8px] font-bold text-slate-800">
                          {group.title}
                        </p>
                        <p className="mt-1 text-[7px] leading-4 text-slate-500">
                          {group.skills.join(" | ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-blue-600">
                    Education
                  </p>
                  <div className="mt-4 flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[9px] font-bold text-slate-900">
                        BS Software Engineering
                      </p>
                      <p className="mt-1 text-[7px] text-slate-500">
                        Air University Islamabad
                      </p>
                    </div>
                    <BadgeCheck size={15} className="text-blue-600" />
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-blue-600">
                    Completed Portfolio Case Studies
                  </p>
                  <div className="mt-4 grid gap-2">
                    {portfolioProjects.map((project) => (
                      <div
                        key={project.number}
                        className="rounded-lg bg-slate-100 px-3 py-2.5"
                      >
                        <div className="flex items-start gap-3">
                          <span className="font-mono text-[7px] font-bold text-blue-600">
                            {project.number}
                          </span>
                          <div>
                            <p className="text-[7px] font-semibold text-slate-700">
                              {project.title}
                            </p>
                            <p className="mt-1 text-[6px] text-slate-400">
                              {project.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-400/10 bg-white/[0.01] py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[750px]">
              <div className="eyebrow">Career Summary</div>
              <h2 className="section-title">
                Professional{" "}
                <span className="gradient-text">Experience.</span>
              </h2>
              <p className="section-description">
                Progression from operations analytics into data analytics,
                business intelligence, process-focused reporting and modern
                analytical platform delivery.
              </p>
            </div>

            <Link href="/experience" className="btn-secondary">
              Full Career Journey
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.role}`}
                className="group relative overflow-hidden rounded-[24px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.82),rgba(5,14,26,.98))] p-6 transition hover:border-blue-400/25"
              >
                <span className="pointer-events-none absolute -right-3 -top-9 font-mono text-[7rem] font-black leading-none text-white/[0.018]">
                  0{index + 1}
                </span>
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <CompanyLogo company={item.company} size="md" />
                    <span className="text-right font-mono text-[7px] font-semibold uppercase tracking-[0.12em] text-cyan-400">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-[10px] font-semibold text-sky-400">
                    {item.company}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-[8px] text-slate-600">
                    <MapPin size={11} />
                    {item.location}
                  </div>
                  <p className="mt-4 text-[10px] leading-5 text-slate-500">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-12">
            <div>
              <div className="eyebrow">Core Capabilities</div>
              <h2 className="section-title">
                Analytics +{" "}
                <span className="gradient-text">Data Engineering.</span>
              </h2>
              <p className="section-description">
                Practical capabilities aligned with the four completed case
                studies now presented throughout the portfolio.
              </p>
              <Link href="/skills" className="btn-secondary mt-6">
                Explore All Skills
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article key={group.title} className="glass-card p-5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-white">
                      {group.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-slate-400/10 bg-white/[0.02] px-3 py-2 text-[8px] text-slate-500"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-400/10 bg-white/[0.01] py-9 sm:py-10 lg:py-12">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[26px] border border-blue-400/20 bg-[linear-gradient(145deg,rgba(12,27,46,.86),rgba(5,14,26,.98))] p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.08] blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                <FileText size={22} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_9px_rgba(34,197,94,.7)]" />
                  <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-green-300">
                    Latest Resume Connected
                  </p>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  View or download my current professional resume.
                </h2>
                <p className="mt-2 max-w-[720px] text-[10px] leading-5 text-slate-500">
                  The portfolio uses one canonical PDF so the view and download
                  actions always point to the latest resume version.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink size={15} />
                  View PDF
                </a>
                <a
                  href={resumePath}
                  download="Hasnain-Javed-Resume.pdf"
                  className="btn-primary"
                >
                  <Download size={15} />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 pt-10 sm:pb-14 lg:pt-12">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-[linear-gradient(115deg,rgba(9,28,51,.97),rgba(8,22,42,.98),rgba(30,19,68,.72))] p-7 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/[0.12] blur-3xl" />
            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[710px]">
                <div className="flex items-center gap-3 font-mono text-[8px] font-bold uppercase tracking-[0.17em] text-cyan-400">
                  <Sparkles size={14} />
                  Beyond the Resume
                </div>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1] tracking-[-0.05em] text-white">
                  See the Work{" "}
                  <span className="gradient-text">Behind the Experience.</span>
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  The resume provides the professional summary. Four completed
                  case studies show how these capabilities are applied across
                  finance, banking, customer analytics and Microsoft Fabric.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary">
                  Explore Projects
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
