import {
  Search,
  Database,
  WandSparkles,
  Network,
  ChartNoAxesCombined,
  LayoutDashboard,
  Lightbulb,
} from "lucide-react";

const workflow = [
  {
    number: "01",
    title: "Business Question",
    description:
      "Define the decision, business objective and metrics that matter.",
    icon: Search,
  },
  {
    number: "02",
    title: "Data Collection",
    description:
      "Bring together the right operational, financial or customer data.",
    icon: Database,
  },
  {
    number: "03",
    title: "Clean & Transform",
    description:
      "Validate, standardize and prepare reliable analysis-ready data.",
    icon: WandSparkles,
  },
  {
    number: "04",
    title: "Data Modeling",
    description:
      "Build relationships and structures that support accurate analysis.",
    icon: Network,
  },
  {
    number: "05",
    title: "Analyze",
    description:
      "Use SQL, DAX and analytical techniques to uncover patterns.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "06",
    title: "Visualize",
    description:
      "Turn complexity into focused dashboards and clear KPI stories.",
    icon: LayoutDashboard,
  },
  {
    number: "07",
    title: "Recommend",
    description:
      "Translate insight into practical actions and better decisions.",
    icon: Lightbulb,
  },
];

export default function AnalyticsWorkflow() {
  return (
    <section className="section relative overflow-hidden !pt-12 lg:!pt-16">

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.035] blur-3xl" />

      <div className="site-container relative">

        <div className="max-w-[760px]">

          <div className="eyebrow">
            My Analytics Process
          </div>

          <h2 className="section-title">
            From Raw Data to{" "}
            <span className="gradient-text">
              Business Impact.
            </span>
          </h2>

          <p className="section-description">
            Strong analytics starts before the dashboard.
            My approach connects the business question,
            reliable data, analytical thinking and clear
            communication into one decision-making process.
          </p>

        </div>

        <div className="relative mt-14">

          <div className="absolute left-[7%] right-[7%] top-[49px] hidden h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent xl:block" />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">

            {workflow.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="glass-card group relative min-h-[220px] p-5"
                >
                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-600">
                      {step.number}
                    </span>

                    <div className="relative z-10 grid h-11 w-11 place-items-center rounded-xl border border-blue-400/15 bg-[#091a2d] text-sky-400 shadow-[0_0_26px_rgba(37,99,235,.08)] transition duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                      <Icon size={19} />
                    </div>

                  </div>

                  <h3 className="mt-7 text-[0.93rem] font-semibold leading-5 text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-[1.7] text-slate-400">
                    {step.description}
                  </p>

                  <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition duration-300 group-hover:scale-x-100" />
                </article>
              );
            })}

          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.17em] text-slate-600">
          <span className="h-px w-10 bg-slate-400/10" />
          Data
          <span className="text-sky-500">→</span>
          Insight
          <span className="text-sky-500">→</span>
          Action
          <span className="h-px w-10 bg-slate-400/10" />
        </div>

      </div>
    </section>
  );
}
