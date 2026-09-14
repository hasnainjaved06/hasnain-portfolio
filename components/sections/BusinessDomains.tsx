import {
  Activity,
  BriefcaseBusiness,
  HeartPulse,
  Megaphone,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

const domains = [
  {
    title: "Finance",
    description:
      "Financial performance, FP&A, budgeting, forecasting and variance analysis.",
    icon: TrendingUp,
  },
  {
    title: "Sales",
    description:
      "Revenue performance, productivity, conversion and commercial KPI reporting.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Marketing",
    description:
      "Digital performance, engagement, conversion and behavioral analytics.",
    icon: Megaphone,
  },
  {
    title: "Operations",
    description:
      "Operational KPIs, SLA monitoring, workflow visibility and process improvement.",
    icon: Activity,
  },
  {
    title: "Healthcare",
    description:
      "Live operations, fulfillment, service performance and healthcare process analytics.",
    icon: HeartPulse,
  },
  {
    title: "E-commerce",
    description:
      "Transactions, orders, revenue, customer behavior and performance analysis.",
    icon: ShoppingCart,
  },
];

export default function BusinessDomains() {
  return (
    <section className="section relative overflow-hidden border-y border-slate-400/10 bg-white/[0.01]">

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-3xl" />

      <div className="site-container relative">

        <div className="mx-auto max-w-[820px] text-center">

          <div className="eyebrow justify-center">
            Business Exposure
          </div>

          <h2 className="section-title">
            Analytics Across{" "}
            <span className="gradient-text">
              Business Functions.
            </span>
          </h2>

          <p className="section-description mx-auto">
            My analytics experience spans multiple
            business areas, helping connect technical
            reporting with the operational and commercial
            questions teams actually need to answer.
          </p>

        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {domains.map((domain) => {
            const Icon = domain.icon;

            return (
              <article
                key={domain.title}
                className="glass-card group relative overflow-hidden p-6 sm:p-7"
              >

                <div className="flex items-start justify-between gap-5">

                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.07] text-sky-400 transition duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                    <Icon size={21} />
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-700">
                    Domain
                  </span>

                </div>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  {domain.title}
                </h3>

                <p className="mt-3 text-[11px] leading-6 text-slate-400">
                  {domain.description}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />

              </article>
            );
          })}

        </div>

        <div className="mt-7 flex justify-center">

          <div className="rounded-full border border-slate-400/10 bg-white/[0.018] px-5 py-3 text-[9px] text-slate-500">
            Finance • Sales • Marketing • Operations • Healthcare • E-commerce
          </div>

        </div>

      </div>
    </section>
  );
}
