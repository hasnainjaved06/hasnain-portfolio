import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Code2,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hasnain Javed regarding Data Analyst, Business Intelligence, Power BI, reporting automation and analytics opportunities.",
};

const contactMethods = [
  {
    title: "Email",
    value: contactInfo.email,
    detail:
      "Professional opportunities and project discussions.",
    href: contactInfo.emailHref,
    external: false,
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "Connect on LinkedIn",
    detail:
      "Professional networking and career opportunities.",
    href: contactInfo.linkedin,
    external: true,
    icon: BriefcaseBusiness,
  },
  {
    title: "GitHub",
    value: contactInfo.githubUsername,
    detail:
      "Technical work and portfolio repositories.",
    href: contactInfo.github,
    external: true,
    icon: Code2,
  },
  {
    title: "Location",
    value: contactInfo.location,
    detail:
      "Open to relevant local and international opportunities.",
    href: null,
    external: false,
    icon: MapPin,
  },
];

const reasons = [
  {
    title: "Data & BI Roles",
    detail:
      "Data Analyst, BI Analyst and reporting-focused opportunities.",
    icon: BarChart3,
  },
  {
    title: "Analytics Projects",
    detail:
      "Dashboarding, KPI reporting and analytical problem solving.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Professional Networking",
    detail:
      "Conversations around analytics, BI and data-driven work.",
    icon: MessageSquare,
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden pb-10 pt-16 sm:pb-12 sm:pt-20 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute -left-52 top-20 h-[580px] w-[580px] rounded-full bg-blue-600/[0.08] blur-3xl" />
        <div className="pointer-events-none absolute -right-52 top-0 h-[620px] w-[620px] rounded-full bg-cyan-500/[0.055] blur-3xl" />

        <div className="site-container relative">
          <div className="grid items-end gap-14 xl:grid-cols-[1.08fr_.92fr] xl:gap-20">
            <div className="max-w-[820px]">
              <div className="eyebrow">
                Contact
              </div>

              <h1 className="mt-7 text-[clamp(3.5rem,7vw,6.8rem)] font-bold leading-[0.93] tracking-[-0.065em] text-white">
                Let&apos;s Turn Data Into{" "}
                <span className="gradient-text">
                  Better Decisions.
                </span>
              </h1>

              <p className="mt-7 max-w-[720px] text-[1.03rem] leading-8 text-slate-400">
                I&apos;m open to relevant opportunities where analytics,
                business intelligence, reporting automation and
                data-driven decision support can create meaningful value.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={contactInfo.emailHref}
                  className="btn-primary"
                >
                  <Mail size={16} />
                  Email Me
                </a>

                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              <article className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-green-400/15 bg-green-400/[0.05] text-green-300">
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-600">
                      Current Status
                    </p>

                    <h2 className="mt-2 text-lg font-semibold text-green-300">
                      Open to Opportunities
                    </h2>

                    <p className="mt-1 text-[9px] text-slate-500">
                      Data • BI • Reporting • Analytics
                    </p>
                  </div>
                </div>
              </article>

              <div className="grid grid-cols-2 gap-3">
                <article className="glass-card p-5">
                  <MapPin
                    size={18}
                    className="text-sky-400"
                  />

                  <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">
                    Based In
                  </p>

                  <p className="mt-2 text-xs font-semibold text-white">
                    Karachi
                  </p>

                  <p className="mt-1 text-[8px] text-slate-600">
                    Pakistan
                  </p>
                </article>

                <article className="glass-card p-5">
                  <Clock3
                    size={18}
                    className="text-sky-400"
                  />

                  <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">
                    Focus
                  </p>

                  <p className="mt-2 text-xs font-semibold text-white">
                    Analytics
                  </p>

                  <p className="mt-1 text-[8px] text-slate-600">
                    Business Intelligence
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED CONTACT METHODS */}
      <section className="border-y border-slate-400/10 bg-white/[0.01]">
        <div className="site-container py-8">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              const content = (
                <>
                  <div className="flex items-start justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                      <Icon size={18} />
                    </div>

                    <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(34,197,94,.45)]" />
                  </div>

                  <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
                    {method.title}
                  </p>

                  <p className="mt-2 break-words text-[11px] font-semibold leading-5 text-white">
                    {method.value}
                  </p>

                  <p className="mt-2 text-[8px] leading-4 text-slate-600">
                    {method.detail}
                  </p>

                  {method.href && (
                    <div className="mt-5 flex items-center gap-2 text-[8px] font-semibold text-sky-400">
                      Open
                      <ArrowRight size={11} />
                    </div>
                  )}
                </>
              );

              if (method.href) {
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={
                      method.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      method.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group rounded-2xl border border-slate-400/10 bg-[#07111f] p-5 transition hover:-translate-y-1 hover:border-blue-400/30"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <article
                  key={method.title}
                  className="rounded-2xl border border-slate-400/10 bg-[#07111f] p-5"
                >
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="section relative overflow-hidden"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.03] blur-3xl" />

        <div className="site-container relative">
          <div className="grid gap-14 xl:grid-cols-[.72fr_1.28fr] xl:gap-20">
            <div>
              <div className="eyebrow">
                Get in Touch
              </div>

              <h2 className="section-title">
                Have an Opportunity or{" "}
                <span className="gradient-text">
                  Analytics Challenge?
                </span>
              </h2>

              <p className="section-description">
                Share the role, project or business context you would
                like to discuss.
              </p>

              <div className="mt-9 space-y-3">
                {reasons.map((reason) => {
                  const Icon = reason.icon;

                  return (
                    <article
                      key={reason.title}
                      className="flex gap-4 rounded-2xl border border-slate-400/10 bg-white/[0.018] p-5"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                        <Icon size={18} />
                      </div>

                      <div>
                        <h3 className="text-xs font-semibold text-white">
                          {reason.title}
                        </h3>

                        <p className="mt-1 text-[9px] leading-4 text-slate-500">
                          {reason.detail}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">
                <div className="flex gap-3">
                  <Sparkles
                    size={17}
                    className="mt-0.5 shrink-0 text-cyan-400"
                  />

                  <p className="text-[10px] leading-5 text-slate-400">
                    For the quickest direct contact, email me at{" "}
                    <a
                      href={contactInfo.emailHref}
                      className="font-semibold text-sky-400 hover:text-cyan-300"
                    >
                      {contactInfo.email}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-blue-400/15 bg-[linear-gradient(145deg,rgba(15,30,49,.88),rgba(5,14,26,.97))] shadow-[0_30px_90px_rgba(0,0,0,.28)]">
              <div className="border-b border-slate-400/10 px-6 py-5 sm:px-8">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-cyan-400">
                      Contact Form
                    </p>

                    <h2 className="mt-2 text-lg font-semibold text-white">
                      Start a Conversation
                    </h2>
                  </div>

                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400">
                    <Mail size={18} />
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL PROFILES */}
      <section className="section border-y border-slate-400/10 bg-white/[0.01]">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="eyebrow">
                Professional Profiles
              </div>

              <h2 className="section-title">
                Connect{" "}
                <span className="gradient-text">
                  Directly.
                </span>
              </h2>

              <p className="section-description">
                My verified professional links are now connected to the
                portfolio.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={contactInfo.emailHref}
                className="glass-card group p-6 transition hover:border-blue-400/30"
              >
                <Mail
                  size={20}
                  className="text-sky-400"
                />

                <h3 className="mt-6 text-sm font-semibold text-white">
                  Email
                </h3>

                <p className="mt-3 break-all text-[8px] text-slate-500">
                  {contactInfo.email}
                </p>
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group p-6 transition hover:border-blue-400/30"
              >
                <BriefcaseBusiness
                  size={20}
                  className="text-sky-400"
                />

                <h3 className="mt-6 text-sm font-semibold text-white">
                  LinkedIn
                </h3>

                <p className="mt-3 text-[8px] text-slate-500">
                  Professional Profile
                </p>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group p-6 transition hover:border-blue-400/30"
              >
                <Code2
                  size={20}
                  className="text-sky-400"
                />

                <h3 className="mt-6 text-sm font-semibold text-white">
                  GitHub
                </h3>

                <p className="mt-3 text-[8px] text-slate-500">
                  @{contactInfo.githubUsername}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[30px] border border-blue-400/15 bg-[linear-gradient(145deg,rgba(15,30,49,.94),rgba(5,13,24,.98))] p-8 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-40 -top-40 h-[440px] w-[440px] rounded-full bg-blue-500/[0.08] blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[760px]">
                <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.17em] text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,.55)]" />

                  Open to Relevant Opportunities
                </div>

                <h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-bold leading-[1] tracking-[-0.05em] text-white">
                  Data. BI. Reporting.{" "}
                  <span className="gradient-text">
                    Decision Support.
                  </span>
                </h2>
              </div>

              <a
                href={contactInfo.emailHref}
                className="btn-primary"
              >
                <Mail size={16} />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}