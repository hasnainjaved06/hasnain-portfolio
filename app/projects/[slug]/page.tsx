import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Gauge,
  Layers3,
  LineChart,
  PieChart,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ScaleStat = {
  value: string;
  label: string;
  detail: string;
};

type DatasetItem = {
  name: string;
  rows: string;
  detail: string;
  layer: "Source" | "Analytical";
};

type PipelineStep = {
  number: string;
  title: string;
  description: string;
};

type SpotlightStat = {
  value: string;
  label: string;
  detail: string;
};

type SpotlightItem = {
  title: string;
  description: string;
};

type ProjectSpotlight = {
  eyebrow: string;
  title: string;
  description: string;
  stats: SpotlightStat[];
  items: SpotlightItem[];
};

type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  overview: string;
  heroImage: string;

  screenshots: {
    src: string;
    title: string;
    description: string;
  }[];

  tools: string[];
  capabilities: string[];
  objectives: string[];

  process: {
    number: string;
    title: string;
    description: string;
  }[];

  highlights: {
    title: string;
    description: string;
  }[];

  scaleStats?: ScaleStat[];
  datasetFootprint?: DatasetItem[];
  pipeline?: PipelineStep[];
  spotlight?: ProjectSpotlight;
  embedUrl?: string;
};

const projects: Record<string, Project> = {
  "corporate-finance-fpa-command-center": {
    slug: "corporate-finance-fpa-command-center",
    number: "01",
    title: "Corporate Finance & FP&A Command Center",
    shortTitle: "Finance & FP&A",
    category: "Financial Analytics • Power BI • SQL",

    description:
      "A multi-page financial analytics solution designed to bring executive reporting, financial statements, working-capital analysis and scenario forecasting into one structured Power BI experience.",

    overview:
      "The project was developed as an end-to-end FP&A portfolio case study. SQL Server was used to structure the analytical foundation, while Power BI and DAX were used to build financial measures, statement views, KPI reporting and scenario-based forecasting.",

    heroImage:
      "/portfolio/projects/corporate-finance-fpa/finance-01.png",

    embedUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiZDRkOTdmMzQtZDdhYi00YjEyLTllODEtOTU1OWExNmNmZjgwIiwidCI6ImMxMzdiNGU2LTUyM2UtNGE5Ny04ZjRmLWU5YWE0MmRkMDU1YiJ9&pageName=b31cfce3a97e920e50a7",

    spotlight: {
      eyebrow: "FP&A Architecture & Planning Scope",
      title: "A Finance Model Built Beyond the Dashboard.",
      description:
        "This case study is differentiated by the depth of the finance reporting layer: SQL Server structures the analytical foundation, a reusable DAX measure layer supports management reporting, and the final Power BI experience connects historical performance with forward-looking planning.",
      stats: [
        {
          value: "97+",
          label: "DAX Measures",
          detail:
            "Reusable measures covering performance, statements, working capital and forecasting.",
        },
        {
          value: "5",
          label: "Report Pages",
          detail:
            "Executive, statement, working-capital and scenario-focused reporting.",
        },
        {
          value: "3",
          label: "Scenario Views",
          detail:
            "Base, optimistic and pessimistic planning perspectives.",
        },
        {
          value: "2024–26",
          label: "Planning Calendar",
          detail:
            "Dedicated date model supporting historical and forward-looking analysis.",
        },
      ],
      items: [
        {
          title: "Executive Performance",
          description:
            "Management-level KPIs bring revenue, profitability, variance and overall financial performance into one decision view.",
        },
        {
          title: "Financial Statements",
          description:
            "Structured P&L, balance-sheet and cash-flow reporting connects headline KPIs with statement-level detail.",
        },
        {
          title: "Working Capital",
          description:
            "Operational finance analysis focuses on receivables, payables, inventory efficiency and cash-conversion performance.",
        },
        {
          title: "Budget & Forecast",
          description:
            "Actuals, budget and forecast measures support period comparison, variance analysis and planning review.",
        },
        {
          title: "Scenario Planning",
          description:
            "Base, optimistic and pessimistic forecasts extend the model into forward-looking FP&A decision support.",
        },
        {
          title: "SQL-to-Power BI Architecture",
          description:
            "FinancePortfolioDB, calendar modeling, fact structures and the DAX layer create a reusable reporting foundation instead of isolated visuals.",
        },
      ],
    },

    screenshots: [
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-01.png",
        title: "Executive Overview",
        description:
          "High-level revenue, profitability, variance and financial-performance reporting for management review.",
      },
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-02.png",
        title: "Profit & Loss Analysis",
        description:
          "Structured P&L reporting designed to compare financial performance across periods and scenarios.",
      },
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-03.png",
        title: "Balance Sheet & Cash Flow",
        description:
          "Financial-statement analysis combining balance-sheet structure with cash-flow visibility.",
      },
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-04.png",
        title: "Working Capital",
        description:
          "Operational finance view focused on working-capital efficiency and cash-conversion performance.",
      },
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-05.png",
        title: "Scenario Forecasting",
        description:
          "Forecast analysis across business scenarios to support forward-looking planning.",
      },
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-06.png",
        title: "Forecast & Budget Analysis",
        description:
          "Monthly forecast and budget comparison with scenario-oriented management reporting.",
      },
    ],

    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "SQL Server",
      "SSMS",
      "Data Modeling",
      "Financial Analytics",
      "Scenario Analysis",
    ],

    capabilities: [
      "Executive KPI Reporting",
      "Profit & Loss Analysis",
      "Balance Sheet Analysis",
      "Cash Flow Reporting",
      "Working Capital Analytics",
      "Budget vs Forecast",
      "Scenario Forecasting",
      "Time Intelligence",
    ],

    objectives: [
      "Create one consistent analytical layer for finance and FP&A reporting.",
      "Bring executive KPIs and detailed financial statements into a connected reporting experience.",
      "Support period comparisons, variance analysis and forward-looking scenario planning.",
      "Structure the model so financial measures can be reused consistently across report pages.",
    ],

    process: [
      {
        number: "01",
        title: "Data Foundation",
        description:
          "Created the finance portfolio database in SQL Server and structured the analytical tables required for reporting.",
      },
      {
        number: "02",
        title: "Calendar & Model",
        description:
          "Built a dedicated date dimension and connected finance data through a structured analytical model.",
      },
      {
        number: "03",
        title: "Measure Layer",
        description:
          "Created a comprehensive DAX measure layer covering performance, time intelligence, statements and forecasting.",
      },
      {
        number: "04",
        title: "Financial Reporting",
        description:
          "Designed executive, P&L, balance-sheet, cash-flow and working-capital reporting experiences.",
      },
      {
        number: "05",
        title: "Scenario Analysis",
        description:
          "Extended the model with base, optimistic and pessimistic forecasting views for planning analysis.",
      },
    ],

    highlights: [
      {
        title: "Executive Finance View",
        description:
          "A management-oriented overview designed to surface the most important financial indicators quickly.",
      },
      {
        title: "Statement Reporting",
        description:
          "Structured P&L, balance-sheet and cash-flow analysis within a consistent Power BI design system.",
      },
      {
        title: "Working Capital",
        description:
          "Focused analysis of operational finance measures and cash-conversion performance.",
      },
      {
        title: "Scenario Forecasting",
        description:
          "Forward-looking analysis that compares multiple business scenarios against budget and forecast expectations.",
      },
    ],
  },

  "pakistan-atm-performance": {
    slug: "pakistan-atm-performance",
    number: "02",
    title: "Pakistan ATM Performance Dashboard",
    shortTitle: "ATM Performance",
    category: "Banking Analytics • Power BI • DAX",

    description:
      "A banking analytics dashboard designed to evaluate ATM transaction activity, revenue performance and operational patterns through an executive-friendly Power BI experience.",

    overview:
      "The project transforms ATM-level source data into structured performance categories and interactive reporting. It focuses on making transaction and revenue behavior easier to compare across locations, performance ranges and operational segments.",

    heroImage:
      "/portfolio/projects/pakistan-atm/atm-01.png",

    embedUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiMTk4YmU5YTQtMGFhYS00Mzc1LTk1MTYtMzVhODY5ODY3OWZiIiwidCI6ImMxMzdiNGU2LTUyM2UtNGE5Ny04ZjRmLWU5YWE0MmRkMDU1YiJ9&pageName=a507002169278fee2685",

    spotlight: {
      eyebrow: "ATM Segmentation & Performance Framework",
      title: "Turning Raw ATM Metrics Into Comparable Performance Bands.",
      description:
        "The defining requirement of this project was not simply plotting ATM totals. Raw transaction and revenue values were converted into structured analytical ranges so operational performance could be compared consistently across ATMs, regions and performance groups.",
      stats: [
        {
          value: "3",
          label: "Dashboard Views",
          detail:
            "Overview, performance segmentation and operational analysis.",
        },
        {
          value: "3",
          label: "Segmentation Layers",
          detail:
            "Percentage ranges, transaction ranges and revenue-performance groups.",
        },
        {
          value: "ATM",
          label: "Analysis Grain",
          detail:
            "Performance is evaluated at ATM level before regional and grouped comparison.",
        },
        {
          value: "BI",
          label: "Decision Focus",
          detail:
            "Compact KPI reporting designed for fast operational interpretation.",
        },
      ],
      items: [
        {
          title: "Percentage Bucketing",
          description:
            "Continuous performance values are translated into defined percentage bands, making relative ATM behavior easier to interpret.",
        },
        {
          title: "Transaction Ranges",
          description:
            "Transaction activity is grouped into meaningful ranges so high-, mid- and lower-activity ATMs can be compared consistently.",
        },
        {
          title: "Revenue Performance",
          description:
            "Revenue is classified into performance categories instead of relying only on raw totals, helping stronger and weaker groups stand out.",
        },
        {
          title: "Regional Comparison",
          description:
            "ATM-level metrics roll into regional views so geographic differences and operational concentration are easier to identify.",
        },
        {
          title: "Interactive Filtering",
          description:
            "Power BI slicers and DAX-driven visuals allow the report to move quickly between overall performance and targeted operational segments.",
        },
        {
          title: "Executive Usability",
          description:
            "The report prioritizes compact visual hierarchy, consistent categories and decision-focused comparisons over unnecessary visual complexity.",
        },
      ],
    },

    screenshots: [
      {
        src: "/portfolio/projects/pakistan-atm/atm-01.png",
        title: "ATM Performance Overview",
        description:
          "Executive reporting view covering transaction, revenue and ATM-level performance indicators.",
      },
      {
        src: "/portfolio/projects/pakistan-atm/atm-02.png",
        title: "Performance Segmentation",
        description:
          "ATM comparison using structured percentage, transaction and revenue-performance ranges.",
      },
      {
        src: "/portfolio/projects/pakistan-atm/atm-03.png",
        title: "Operational Analysis",
        description:
          "Detailed visual analysis designed to surface differences in ATM performance across the dataset.",
      },
    ],

    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Excel / CSV",
      "Data Modeling",
      "KPI Analysis",
    ],

    capabilities: [
      "ATM Performance Analysis",
      "Transaction Analysis",
      "Revenue Analysis",
      "Performance Bucketing",
      "KPI Reporting",
      "Interactive Filtering",
      "Operational Segmentation",
      "Executive Visualization",
    ],

    objectives: [
      "Create a clear executive view of ATM transaction and revenue performance.",
      "Convert raw values into meaningful performance bands for easier comparison.",
      "Make underperforming and stronger-performing ATM segments easier to identify.",
      "Present banking-operational data through a compact and decision-focused dashboard.",
    ],

    process: [
      {
        number: "01",
        title: "Source Preparation",
        description:
          "Prepared the ATM source dataset and standardized the fields required for analytical reporting.",
      },
      {
        number: "02",
        title: "Performance Bucketing",
        description:
          "Created percentage, transaction and revenue-performance categories to support meaningful segmentation.",
      },
      {
        number: "03",
        title: "Data Modeling",
        description:
          "Structured the Power BI model and measures required for reusable ATM-level analysis.",
      },
      {
        number: "04",
        title: "Dashboard Design",
        description:
          "Designed a compact banking analytics interface with KPI cards, comparisons and interactive visual analysis.",
      },
      {
        number: "05",
        title: "Reporting Validation",
        description:
          "Reviewed categories, measures and dashboard behavior to maintain consistent reporting across views.",
      },
    ],

    highlights: [
      {
        title: "Performance Ranges",
        description:
          "Structured percentage bands make relative ATM performance easier to interpret and compare.",
      },
      {
        title: "Transaction Segmentation",
        description:
          "Transaction ranges provide a clearer view of ATM activity instead of relying only on raw totals.",
      },
      {
        title: "Revenue Performance",
        description:
          "Revenue-oriented categorization helps identify stronger and weaker performing groups.",
      },
      {
        title: "Executive Usability",
        description:
          "The visual hierarchy keeps the dashboard focused on quick interpretation and operational comparison.",
      },
    ],
  },

  "customer-growth-analytics": {
    slug: "customer-growth-analytics",
    number: "03",
    title: "Customer Growth Analytics",
    shortTitle: "Customer Growth",
    category:
      "Customer Analytics • Python • SQL Server • Power BI",

    description:
      "An end-to-end customer analytics solution built across more than half a million source records to connect revenue performance, purchasing behavior, customer value, segmentation, retention and churn risk through Python, SQL Server and Power BI.",

    overview:
      "This project was designed as a full customer-growth analytics workflow rather than only a visualization exercise. Eight operational source datasets were cleaned and transformed, customer-level analytical features were engineered for RFM segmentation, lifetime value, cohort retention and churn-risk analysis, and 13 datasets were validated through the SQL Server staging layer before the final Power BI reporting experience was developed.",

    heroImage:
      "/portfolio/projects/customer-growth-analytics/customer-growth-hero.png",

    embedUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiOWQxNTVlNDUtOWM4NS00NmM0LTlhNDYtY2NlOTkyOWQzYzI1IiwidCI6ImMxMzdiNGU2LTUyM2UtNGE5Ny04ZjRmLWU5YWE0MmRkMDU1YiJ9&pageName=07792dd1e832288081ab",

    screenshots: [
      {
        src:
          "/portfolio/projects/customer-growth-analytics/customer-growth-01.png",
        title: "Executive Overview",
        description:
          "Executive-level reporting combining revenue, orders, active customers, average order value, purchasing behavior and customer-growth performance.",
      },
      {
        src:
          "/portfolio/projects/customer-growth-analytics/customer-growth-02.png",
        title: "Customer Intelligence",
        description:
          "Customer intelligence layer combining RFM segmentation, customer lifetime value, customer-value tiers and geographic revenue analysis.",
      },
      {
        src:
          "/portfolio/projects/customer-growth-analytics/customer-growth-03.png",
        title: "Retention & Risk",
        description:
          "Retention-focused analysis covering cohort behavior, churn probability, revenue at risk, retention priority and high-risk customer monitoring.",
      },
    ],

    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Python",
      "pandas",
      "SQL Server",
      "Data Modeling",
      "RFM & CLV",
    ],

    capabilities: [
      "Executive Customer KPI Reporting",
      "Revenue & Order Analysis",
      "Python Feature Engineering",
      "RFM Customer Segmentation",
      "Customer Lifetime Value",
      "Cohort Retention Analysis",
      "Churn Risk Analysis",
      "Revenue-at-Risk Reporting",
    ],

    objectives: [
      "Transform fragmented customer, order, payment, review, product, seller and geographic data into a validated analytical foundation.",
      "Build reusable customer-level features that connect purchasing behavior, value, frequency and recency.",
      "Segment customers through RFM and customer-lifetime-value analysis to support differentiated customer strategies.",
      "Measure retention through cohort analysis and surface higher-risk customers through churn and revenue-at-risk reporting.",
      "Deliver an executive-to-detail Power BI experience covering customer growth, customer intelligence, retention and risk.",
    ],

    process: [
      {
        number: "01",
        title: "Source Integration",
        description:
          "Integrated eight operational datasets covering customers, orders, order items, payments, reviews, products, sellers and geographic information.",
      },
      {
        number: "02",
        title: "Python Preparation",
        description:
          "Used Python and pandas to clean, standardize and transform source data and create a reusable customer-level analytical feature layer.",
      },
      {
        number: "03",
        title: "Customer Analytics",
        description:
          "Produced RFM segments, customer-lifetime-value analysis, cohort-retention outputs and churn-risk classifications for the customer population.",
      },
      {
        number: "04",
        title: "SQL Validation",
        description:
          "Loaded 13 datasets into SQL Server staging and validated processed CSV row counts against SQL table row counts before reporting.",
      },
      {
        number: "05",
        title: "Power BI Delivery",
        description:
          "Built the semantic reporting layer, DAX KPIs and three connected dashboard experiences for executive, customer and retention analysis.",
      },
    ],

    highlights: [
      {
        title: "Large-Scale Customer Data",
        description:
          "The core operational source layer contains 569,703 records across eight customer, transaction and supporting datasets.",
      },
      {
        title: "RFM & CLV Intelligence",
        description:
          "Customer-level analytical outputs classify 93,358 profiles by behavior, recency, frequency, monetary value and lifetime value.",
      },
      {
        title: "Retention Analytics",
        description:
          "Cohort-oriented retention reporting tracks how customer activity develops after acquisition across customer groups and periods.",
      },
      {
        title: "Churn & Revenue Risk",
        description:
          "Risk-oriented customer features help identify higher-risk customers and connect customer attrition exposure with commercial value.",
      },
    ],

    scaleStats: [
      {
        value: "569,703",
        label: "Core Source Rows",
        detail:
          "Across eight operational source datasets.",
      },
      {
        value: "93,358",
        label: "Customer Profiles",
        detail:
          "Customer-level analytical population.",
      },
      {
        value: "13",
        label: "Validated Datasets",
        detail:
          "Loaded and row-count validated in SQL Server staging.",
      },
      {
        value: "3",
        label: "Dashboard Views",
        detail:
          "Executive, intelligence and retention analysis.",
      },
    ],

    datasetFootprint: [
      {
        name: "Customers",
        rows: "99,441",
        detail: "Customer master records",
        layer: "Source",
      },
      {
        name: "Orders",
        rows: "99,441",
        detail: "Order-level transactional records",
        layer: "Source",
      },
      {
        name: "Order Items",
        rows: "112,650",
        detail: "Product-level order activity",
        layer: "Source",
      },
      {
        name: "Payments",
        rows: "103,886",
        detail: "Payment transaction records",
        layer: "Source",
      },
      {
        name: "Reviews",
        rows: "99,224",
        detail: "Customer review records",
        layer: "Source",
      },
      {
        name: "Products",
        rows: "32,951",
        detail: "Product master data",
        layer: "Source",
      },
      {
        name: "Sellers",
        rows: "3,095",
        detail: "Seller master records",
        layer: "Source",
      },
      {
        name: "Geolocation",
        rows: "19,015",
        detail: "Geographic reference data",
        layer: "Source",
      },

      {
        name: "Customer Features",
        rows: "93,358 × 34",
        detail: "Engineered customer analytical features",
        layer: "Analytical",
      },
      {
        name: "RFM Segments",
        rows: "93,358 × 25",
        detail: "Recency, frequency and monetary segmentation",
        layer: "Analytical",
      },
      {
        name: "CLV Analysis",
        rows: "93,358 × 32",
        detail: "Customer lifetime-value analytical output",
        layer: "Analytical",
      },
      {
        name: "Churn Risk",
        rows: "93,358 × 27",
        detail: "Customer churn and risk features",
        layer: "Analytical",
      },
      {
        name: "Cohort Retention",
        rows: "219 × 6",
        detail: "Long-form cohort-retention output",
        layer: "Analytical",
      },
    ],

    pipeline: [
      {
        number: "01",
        title: "Operational Sources",
        description:
          "Customer, order, item, payment, review, product, seller and geographic datasets form the operational source layer.",
      },
      {
        number: "02",
        title: "Python & pandas",
        description:
          "Cleaning, standardization, feature engineering and preparation of reusable customer-level analytical outputs.",
      },
      {
        number: "03",
        title: "SQL Server",
        description:
          "Processed datasets loaded into CustomerGrowthAnalyticsDB staging tables with source-to-SQL row-count validation.",
      },
      {
        number: "04",
        title: "Analytical Model",
        description:
          "Customer features, RFM, CLV, cohorts and churn-risk outputs organized for reusable business analysis.",
      },
      {
        number: "05",
        title: "Power BI & DAX",
        description:
          "Interactive KPI reporting delivered through Executive Overview, Customer Intelligence and Retention & Risk dashboards.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const sourceDatasets =
    project.datasetFootprint?.filter(
      (dataset) => dataset.layer === "Source"
    ) ?? [];

  const analyticalDatasets =
    project.datasetFootprint?.filter(
      (dataset) => dataset.layer === "Analytical"
    ) ?? [];

  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden pb-8 pt-10 sm:pb-10 sm:pt-16 lg:pb-14 lg:pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.09) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        <div className="pointer-events-none absolute -left-52 top-0 h-[560px] w-[560px] rounded-full bg-blue-600/[0.08] blur-3xl" />

        <div className="pointer-events-none absolute -right-48 top-10 h-[560px] w-[560px] rounded-full bg-cyan-500/[0.05] blur-3xl" />

        <div className="site-container relative">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[9px] font-medium text-slate-400 transition hover:text-sky-400"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          <div className="mt-5 grid gap-7 sm:mt-7 sm:gap-9 xl:grid-cols-[.88fr_1.12fr] xl:items-center xl:gap-14">
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Case Study {project.number}
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-600" />

                <span className="font-mono text-[7px] uppercase tracking-[0.1em] text-slate-500 sm:text-[8px] sm:tracking-[0.12em]">
                  {project.category}
                </span>
              </div>

              <h1 className="mt-4 text-[clamp(2.25rem,10.5vw,3.4rem)] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:mt-5 sm:text-[clamp(2.8rem,5.2vw,5.2rem)] sm:leading-[0.95] sm:tracking-[-0.055em]">
                {project.title}
              </h1>

              <p className="mt-5 max-w-[720px] text-[0.88rem] leading-7 text-slate-400 sm:mt-6 sm:text-[0.98rem] sm:leading-8">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {project.tools.slice(0, 6).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-400/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] font-medium text-slate-400 sm:px-3.5 sm:py-2"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">
                <a
                  href={
                    project.embedUrl
                      ? "#interactive-dashboard"
                      : "#dashboard-gallery"
                  }
                  className="btn-primary w-full px-2.5 text-center text-[0.7rem] sm:w-auto sm:px-5 sm:text-[0.92rem]"
                >
                  {project.embedUrl
                    ? "Try Interactive Dashboard"
                    : "Explore Dashboard"}
                  <ArrowRight
                    size={14}
                    className="shrink-0"
                  />
                </a>

                <Link
                  href="/contact"
                  className="btn-secondary w-full px-2.5 text-center text-[0.7rem] sm:w-auto sm:px-5 sm:text-[0.92rem]"
                >
                  Discuss This Project
                </Link>
              </div>
            </div>

            {/* HERO DASHBOARD */}

            <div className="relative mt-1 sm:mt-2 xl:mt-0">
              <div className="pointer-events-none absolute -inset-8 rounded-full bg-blue-500/[0.06] blur-3xl" />

              <div className="relative overflow-hidden rounded-[20px] border border-blue-400/15 bg-[#081426] p-2 shadow-[0_28px_90px_rgba(0,0,0,.38)] sm:rounded-[26px] sm:p-2.5">
                <div className="flex items-center gap-1.5 border-b border-slate-400/10 px-2.5 pb-2 sm:px-3 sm:pb-2.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />

                  <span className="ml-2 font-mono text-[6px] uppercase tracking-[0.1em] text-slate-600 sm:ml-3 sm:text-[7px] sm:tracking-[0.12em]">
                    Power BI Case Study
                  </span>
                </div>

                <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded-[14px] bg-[#050d18] sm:rounded-[18px]">
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} dashboard`}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 55vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT SNAPSHOT
      ===================================================== */}

      <section className="border-y border-slate-400/10 bg-white/[0.01]">
        <div className="site-container py-4 sm:py-5">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-slate-400/10 bg-slate-400/10 lg:grid-cols-4 lg:rounded-[20px]">
            <article className="bg-[#07111f] p-4 sm:p-5">
              <BarChart3
                size={17}
                className="text-sky-400 sm:h-[18px] sm:w-[18px]"
              />

              <p className="mt-3 text-[9px] font-semibold text-white sm:mt-4">
                Power BI
              </p>

              <p className="mt-1 text-[7px] leading-4 text-slate-500 sm:text-[8px]">
                Interactive analytical reporting
              </p>
            </article>

            <article className="bg-[#07111f] p-4 sm:p-5">
              <Database
                size={17}
                className="text-cyan-400 sm:h-[18px] sm:w-[18px]"
              />

              <p className="mt-3 text-[9px] font-semibold text-white sm:mt-4">
                Data Modeling
              </p>

              <p className="mt-1 text-[7px] leading-4 text-slate-500 sm:text-[8px]">
                Structured analytical foundation
              </p>
            </article>

            <article className="bg-[#07111f] p-4 sm:p-5">
              <Gauge
                size={17}
                className="text-violet-400 sm:h-[18px] sm:w-[18px]"
              />

              <p className="mt-3 text-[9px] font-semibold text-white sm:mt-4">
                KPI Framework
              </p>

              <p className="mt-1 text-[7px] leading-4 text-slate-500 sm:text-[8px]">
                Decision-focused performance measures
              </p>
            </article>

            <article className="bg-[#07111f] p-4 sm:p-5">
              <Layers3
                size={17}
                className="text-blue-400 sm:h-[18px] sm:w-[18px]"
              />

              <p className="mt-3 text-[9px] font-semibold text-white sm:mt-4">
                End-to-End
              </p>

              <p className="mt-1 text-[7px] leading-4 text-slate-500 sm:text-[8px]">
                Data preparation through visualization
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT-SPECIFIC DEEP DIVE — PROJECTS 01 & 02
      ===================================================== */}

      {project.spotlight && (
        <section className="py-9 sm:py-12 lg:py-14">
          <div className="site-container">
            <div className="max-w-[840px]">
              <div className="eyebrow">
                {project.spotlight.eyebrow}
              </div>

              <h2 className="section-title">
                {project.spotlight.title}
              </h2>

              <p className="section-description">
                {project.spotlight.description}
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 lg:grid-cols-4">
              {project.spotlight.stats.map((stat) => (
                <article
                  key={stat.label}
                  className="relative overflow-hidden rounded-[18px] border border-blue-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.9),rgba(5,14,26,.98))] p-4 sm:rounded-[22px] sm:p-5"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/[0.07] blur-2xl" />

                  <strong className="relative block text-[1.35rem] font-bold tracking-[-0.04em] text-sky-400 sm:text-2xl">
                    {stat.value}
                  </strong>

                  <p className="relative mt-2 text-[8px] font-semibold uppercase tracking-[0.11em] text-slate-300 sm:text-[9px]">
                    {stat.label}
                  </p>

                  <p className="relative mt-2 text-[7px] leading-4 text-slate-500 sm:text-[8px]">
                    {stat.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-7 grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
              {project.spotlight.items.map((item, index) => (
                <article
                  key={item.title}
                  className="glass-card p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] font-bold text-cyan-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <CheckCircle2
                      size={15}
                      className="text-slate-500"
                    />
                  </div>

                  <h3 className="mt-4 text-[0.8rem] font-semibold text-white sm:text-sm">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-5 text-slate-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          PROJECT SCALE — PROJECT 03
      ===================================================== */}

      {project.scaleStats &&
        project.datasetFootprint &&
        project.pipeline && (
          <section className="py-9 sm:py-12 lg:py-14">
            <div className="site-container">
              <div className="max-w-[820px]">
                <div className="eyebrow">
                  Project Scale & Architecture
                </div>

                <h2 className="section-title">
                  Built on{" "}
                  <span className="gradient-text">
                    Real Analytical Volume.
                  </span>
                </h2>

                <p className="section-description">
                  The reporting layer is backed by a multi-stage
                  customer analytics workflow covering operational
                  source data, Python feature engineering, SQL Server
                  validation and Power BI delivery.
                </p>
              </div>

              {/* SCALE STATS */}

              <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 lg:grid-cols-4">
                {project.scaleStats.map((stat) => (
                  <article
                    key={stat.label}
                    className="relative overflow-hidden rounded-[18px] border border-blue-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.9),rgba(5,14,26,.98))] p-4 sm:rounded-[22px] sm:p-5"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/[0.07] blur-2xl" />

                    <strong className="relative block text-[1.35rem] font-bold tracking-[-0.04em] text-sky-400 sm:text-2xl">
                      {stat.value}
                    </strong>

                    <p className="relative mt-2 text-[8px] font-semibold uppercase tracking-[0.11em] text-slate-300 sm:text-[9px]">
                      {stat.label}
                    </p>

                    <p className="relative mt-2 text-[7px] leading-4 text-slate-500 sm:text-[8px]">
                      {stat.detail}
                    </p>
                  </article>
                ))}
              </div>

              {/* PIPELINE */}

              <div className="mt-7 rounded-[22px] border border-slate-400/10 bg-white/[0.012] p-4 sm:mt-8 sm:rounded-[26px] sm:p-6">
                <div className="flex items-center gap-3">
                  <Workflow
                    size={17}
                    className="text-cyan-400"
                  />

                  <div>
                    <p className="font-mono text-[7px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                      End-to-End Pipeline
                    </p>

                    <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">
                      From source data to customer intelligence
                    </h3>
                  </div>
                </div>

                <div className="mt-5 grid gap-2.5 md:grid-cols-5">
                  {project.pipeline.map((step) => (
                    <article
                      key={step.number}
                      className="rounded-xl border border-slate-400/10 bg-[#07111f] p-4"
                    >
                      <span className="font-mono text-[7px] font-bold text-sky-400">
                        {step.number}
                      </span>

                      <h4 className="mt-3 text-[10px] font-semibold text-white">
                        {step.title}
                      </h4>

                      <p className="mt-2 text-[8px] leading-4 text-slate-500">
                        {step.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              {/* DATASET FOOTPRINT */}

              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                <article className="rounded-[22px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.76),rgba(5,14,26,.96))] p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[7px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                        Source Layer
                      </p>

                      <h3 className="mt-2 text-base font-semibold text-white">
                        Operational Data
                      </h3>
                    </div>

                    <span className="rounded-lg border border-blue-400/10 bg-blue-500/[0.03] px-3 py-2 font-mono text-[7px] text-sky-300">
                      569,703 Rows
                    </span>
                  </div>

                  <div className="mt-5 space-y-2">
                    {sourceDatasets.map((dataset) => (
                      <div
                        key={dataset.name}
                        className="flex items-center justify-between gap-4 rounded-xl border border-slate-400/10 bg-white/[0.015] px-3 py-2.5"
                      >
                        <div className="min-w-0">
                          <p className="text-[9px] font-semibold text-slate-300">
                            {dataset.name}
                          </p>

                          <p className="mt-0.5 truncate text-[7px] text-slate-600">
                            {dataset.detail}
                          </p>
                        </div>

                        <span className="shrink-0 font-mono text-[8px] font-semibold text-sky-400">
                          {dataset.rows}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[22px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.76),rgba(5,14,26,.96))] p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[7px] font-semibold uppercase tracking-[0.16em] text-violet-400">
                        Analytical Layer
                      </p>

                      <h3 className="mt-2 text-base font-semibold text-white">
                        Engineered Outputs
                      </h3>
                    </div>

                    <span className="rounded-lg border border-violet-400/10 bg-violet-500/[0.03] px-3 py-2 font-mono text-[7px] text-violet-300">
                      Customer-Level
                    </span>
                  </div>

                  <div className="mt-5 space-y-2">
                    {analyticalDatasets.map((dataset) => (
                      <div
                        key={dataset.name}
                        className="flex items-center justify-between gap-4 rounded-xl border border-slate-400/10 bg-white/[0.015] px-3 py-2.5"
                      >
                        <div className="min-w-0">
                          <p className="text-[9px] font-semibold text-slate-300">
                            {dataset.name}
                          </p>

                          <p className="mt-0.5 truncate text-[7px] text-slate-600">
                            {dataset.detail}
                          </p>
                        </div>

                        <span className="shrink-0 font-mono text-[8px] font-semibold text-violet-300">
                          {dataset.rows}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <div className="mt-4 flex gap-3 rounded-xl border border-green-400/10 bg-green-400/[0.025] px-4 py-3 sm:rounded-2xl">
                <CheckCircle2
                  size={15}
                  className="mt-0.5 shrink-0 text-green-300"
                />

                <p className="text-[8px] leading-5 text-slate-400 sm:text-[9px]">
                  All 13 processed datasets were loaded into SQL Server
                  staging and checked against their source CSV row
                  counts before the reporting layer was finalized.
                </p>
              </div>
            </div>
          </section>
        )}

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="border-t border-slate-400/10 bg-white/[0.01] py-9 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="grid gap-7 sm:gap-8 xl:grid-cols-[.72fr_1.28fr] xl:gap-14">
            <div>
              <div className="eyebrow">
                Project Overview
              </div>

              <h2 className="section-title">
                Built Around{" "}
                <span className="gradient-text">
                  Analytical Decision-Making.
                </span>
              </h2>

              <p className="section-description">
                {project.overview}
              </p>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              {project.objectives.map((objective, index) => (
                <article
                  key={objective}
                  className="glass-card p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <Target
                      size={16}
                      className="text-cyan-400 sm:h-[17px] sm:w-[17px]"
                    />

                    <span className="font-mono text-[7px] text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-3 text-[10px] leading-5 text-slate-400 sm:mt-4">
                    {objective}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ANALYTICAL PROCESS
      ===================================================== */}

      <section className="border-y border-slate-400/10 bg-white/[0.01] py-9 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="max-w-[760px]">
            <div className="eyebrow">
              Development Process
            </div>

            <h2 className="section-title">
              From Raw Data to{" "}
              <span className="gradient-text">
                Reporting Experience.
              </span>
            </h2>

            <p className="section-description">
              The project follows a structured analytics workflow rather
              than treating visualization as the starting point.
            </p>
          </div>

          <div className="mt-7 grid gap-2.5 sm:mt-8 sm:gap-3 md:grid-cols-2 xl:grid-cols-5">
            {project.process.map((item) => (
              <article
                key={item.number}
                className="glass-card p-4 sm:min-h-[190px] sm:p-5 xl:min-h-[205px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] font-bold text-cyan-400">
                    {item.number}
                  </span>

                  <Workflow
                    size={15}
                    className="text-slate-500 sm:h-4 sm:w-4"
                  />
                </div>

                <h3 className="mt-4 text-[0.8rem] font-semibold text-white sm:mt-5 sm:text-sm">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-slate-400 sm:mt-3 sm:text-[9px] sm:text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LIVE INTERACTIVE DASHBOARD
      ===================================================== */}

      {project.embedUrl && (
        <section
          id="interactive-dashboard"
          className="scroll-mt-24 border-y border-slate-400/10 bg-white/[0.01] py-9 sm:py-12 lg:py-14"
        >
          <div className="site-container">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[780px]">
                <div className="flex items-center gap-3">
                  <div className="eyebrow">
                    Interactive Power BI Experience
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-green-400/15 bg-green-400/[0.04] px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.1em] text-green-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-300 shadow-[0_0_8px_rgba(134,239,172,.75)]" />
                    Live
                  </span>
                </div>

                <h2 className="section-title">
                  Use the{" "}
                  <span className="gradient-text">
                    Dashboard Yourself.
                  </span>
                </h2>

                <p className="section-description">
                  This is the live published Power BI report. Use the
                  report navigation, slicers, filters, tooltips and
                  interactive visuals to explore the analytical
                  experience directly.
                </p>
              </div>

              <a
                href={project.embedUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                Open Full Dashboard
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="mt-7 overflow-hidden rounded-[20px] border border-blue-400/15 bg-[#030a12] p-2 shadow-[0_28px_90px_rgba(0,0,0,.35)] sm:mt-8 sm:rounded-[28px] sm:p-3">
              <div className="flex h-9 items-center justify-between border-b border-white/[0.06] bg-[#071321] px-3 sm:h-10 sm:px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />
                </div>

                <div className="flex items-center gap-2">
                  <BarChart3
                    size={12}
                    className="text-cyan-400"
                  />

                  <span className="font-mono text-[6px] uppercase tracking-[0.12em] text-slate-600 sm:text-[7px] sm:tracking-[0.14em]">
                    Live Fabric Report • Case Study {project.number}
                  </span>
                </div>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-b-[14px] bg-[#050d18] sm:rounded-b-[20px]">
                <iframe
                  title={`${project.title} interactive Power BI dashboard`}
                  src={project.embedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-3 flex items-start gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.025] px-4 py-3 sm:rounded-2xl">
              <Sparkles
                size={14}
                className="mt-0.5 shrink-0 text-cyan-400"
              />

              <p className="text-[8px] leading-5 text-slate-400 sm:text-[9px]">
                Best viewed on desktop for the full report experience.
                On smaller screens, use the full-dashboard button above
                whenever you want more space for report interaction.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          DASHBOARD GALLERY
      ===================================================== */}

      <section
        id="dashboard-gallery"
        className="scroll-mt-24 py-9 sm:py-12 lg:py-14"
      >
        <div className="site-container">
          <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <div className="eyebrow">
                Dashboard Gallery
              </div>

              <h2 className="section-title">
                Inside the{" "}
                <span className="gradient-text">
                  Analysis.
                </span>
              </h2>

              <p className="section-description">
                Premium portfolio showcases of the completed Power BI
                reporting experience.
              </p>
            </div>

            <div className="rounded-xl border border-blue-400/10 bg-blue-500/[0.025] px-4 py-3 sm:rounded-2xl sm:px-5">
              <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-slate-600">
                Screens
              </p>

              <p className="mt-1 text-[0.8rem] font-semibold text-white sm:text-sm">
                {project.screenshots.length} Dashboard Views
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
            {project.screenshots.map((screenshot, index) => (
              <article
                key={screenshot.src}
                className="grid gap-3 rounded-[20px] border border-slate-400/10 bg-[linear-gradient(145deg,rgba(12,27,46,.76),rgba(5,14,26,.96))] p-3 sm:gap-5 sm:rounded-[28px] sm:p-5 lg:grid-cols-[1.35fr_.65fr] lg:items-center"
              >
                <div className="overflow-hidden rounded-[15px] border border-slate-400/10 bg-[#050d18] sm:rounded-[20px]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={screenshot.src}
                      alt={`${project.title} - ${screenshot.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 68vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="px-1 pb-1 pt-1 sm:p-2 lg:p-4">
                  <span className="font-mono text-[8px] font-semibold text-cyan-400">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-[1rem] font-semibold text-white sm:mt-3 sm:text-xl">
                    {screenshot.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-400 sm:mt-3 sm:text-[10px] sm:leading-6 sm:text-slate-500">
                    {screenshot.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="border-y border-slate-400/10 bg-white/[0.01] py-9 sm:py-12 lg:py-14">
        <div className="site-container">
          <div className="grid gap-7 sm:gap-8 xl:grid-cols-[.7fr_1.3fr] xl:gap-12">
            <div>
              <div className="eyebrow">
                Analytical Coverage
              </div>

              <h2 className="section-title">
                What the Project{" "}
                <span className="gradient-text">
                  Demonstrates.
                </span>
              </h2>

              <p className="section-description">
                The case study combines technical data preparation,
                customer analytics, BI development and
                business-oriented reporting design.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {project.capabilities.map((capability) => (
                <article
                  key={capability}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-400/10 bg-white/[0.018] p-3 sm:gap-3 sm:rounded-2xl sm:p-4"
                >
                  <CheckCircle2
                    size={14}
                    className="shrink-0 text-cyan-400 sm:h-[15px] sm:w-[15px]"
                  />

                  <p className="text-[8px] font-medium leading-4 text-slate-300 sm:text-[10px]">
                    {capability}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
            {project.highlights.map((highlight, index) => {
              const icons = [
                BarChart3,
                LineChart,
                PieChart,
                FileSpreadsheet,
              ];

              const Icon = icons[index % icons.length];

              return (
                <article
                  key={highlight.title}
                  className="glass-card p-4 sm:p-5"
                >
                  <Icon
                    size={17}
                    className="text-sky-400 sm:h-[18px] sm:w-[18px]"
                  />

                  <h3 className="mt-3 text-[0.8rem] font-semibold text-white sm:mt-4 sm:text-sm">
                    {highlight.title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-5 text-slate-400 sm:text-slate-500">
                    {highlight.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ===================================================== */}

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="site-container">
          <div className="rounded-[22px] border border-blue-400/10 bg-blue-500/[0.02] p-5 sm:rounded-[26px] sm:p-7">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                  Technology Stack
                </p>

                <h2 className="mt-2 text-[1rem] font-semibold text-white sm:text-xl">
                  Tools Used in This Case Study
                </h2>
              </div>

              <div className="flex max-w-[820px] flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-slate-400/10 bg-[#07111f] px-3 py-1.5 text-[9px] font-medium text-slate-300 sm:rounded-xl sm:px-3.5 sm:py-2 sm:text-[8px] sm:text-slate-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="pb-10 pt-2 sm:pb-14 sm:pt-3">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[22px] border border-blue-400/20 bg-[linear-gradient(115deg,rgba(9,28,51,.97),rgba(8,22,42,.98),rgba(30,19,68,.72))] p-5 sm:rounded-[28px] sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-500/[0.12] blur-3xl" />

            <div className="relative grid gap-6 sm:gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[720px]">
                <div className="flex items-center gap-3 font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-cyan-400">
                  <Sparkles size={14} />
                  Explore More
                </div>

                <h2 className="mt-4 text-[clamp(1.9rem,9vw,3.5rem)] font-bold leading-[1] tracking-[-0.05em] text-white sm:text-[clamp(2rem,4vw,3.5rem)]">
                  See More of My{" "}
                  <span className="gradient-text">
                    Analytics Work.
                  </span>
                </h2>

                <p className="mt-4 text-[0.82rem] leading-6 text-slate-400 sm:text-sm sm:leading-7">
                  Explore the rest of my portfolio or view my
                  professional background and experience.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
                <Link
                  href="/projects"
                  className="btn-primary w-full px-3 text-[0.76rem] sm:w-auto sm:px-5 sm:text-[0.92rem]"
                >
                  All Projects
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href="/resume"
                  className="btn-secondary w-full px-3 text-[0.76rem] sm:w-auto sm:px-5 sm:text-[0.92rem]"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}