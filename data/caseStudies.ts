export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  overview: string;
  businessProblem: string;
  objectives: string[];
  architecture: string[];
  preparation: string[];
  kpis: string[];
  technical: string[];
  walkthrough: {
    title: string;
    description: string;
  }[];
  insights: string[];
  recommendations: string[];
  tools: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "corporate-finance-fpa-command-center",
    number: "01",
    title: "Corporate Finance & FP&A Command Center",
    shortTitle: "Finance & FP&A",
    category: "Financial Analytics",
    description:
      "An end-to-end financial analytics solution combining SQL Server, dimensional modeling, DAX and Power BI to support performance reporting, Budget vs Actual analysis, forecasting and scenario planning.",
    overview:
      "This project demonstrates a complete business intelligence workflow from SQL-based data preparation through dimensional modeling, reusable DAX measures and executive Power BI reporting. The reporting experience brings historical performance, planning and forward-looking analysis into one structured environment.",
    businessProblem:
      "Financial analysis becomes difficult when actual performance, budgets, forecasts and scenario assumptions are reviewed independently. The goal was to create a consistent analytical environment where these views could be compared through the same business logic and reporting structure.",
    objectives: [
      "Build a structured financial analytics model using SQL Server and Power BI.",
      "Provide clear Actual vs Budget and variance analysis.",
      "Support reusable time-intelligence analysis.",
      "Create forward-looking forecast reporting.",
      "Support scenario-based financial planning.",
      "Design an executive-focused reporting experience."
    ],
    architecture: [
      "SQL Server",
      "Staging Layer",
      "Dimensional Model",
      "DAX Measures",
      "Power BI"
    ],
    preparation: [
      "Created a dedicated SQL Server portfolio database for the analytical solution.",
      "Built a date dimension to support calendar filtering and time intelligence.",
      "Structured staging and analytical tables before report development.",
      "Created relationships suitable for dimensional financial reporting.",
      "Separated analytical measures from visual-level calculations.",
      "Prepared reusable reporting logic for Actual, Budget, Forecast and Scenario analysis."
    ],
    kpis: [
      "Actual Performance",
      "Budget Performance",
      "Budget vs Actual",
      "Variance Analysis",
      "Forecast Analysis",
      "Scenario Planning",
      "Prior Period Comparison",
      "Time Intelligence"
    ],
    technical: [
      "SQL Server analytical database",
      "Dimensional data model",
      "Dedicated date dimension",
      "Reusable DAX measure layer",
      "Budget vs Actual calculations",
      "Variance calculations",
      "Forecast measures",
      "Scenario-selection logic",
      "Time-intelligence measures",
      "Multi-view Power BI reporting"
    ],
    walkthrough: [
      {
        title: "Executive Overview",
        description:
          "High-level financial reporting designed to surface key performance information quickly."
      },
      {
        title: "Actual vs Budget",
        description:
          "Comparison reporting designed to identify areas where financial performance differs from plan."
      },
      {
        title: "Variance Analysis",
        description:
          "Analytical views used to investigate differences between planned and actual performance."
      },
      {
        title: "Forecasting",
        description:
          "Forward-looking reporting that connects historical performance with forecast expectations."
      },
      {
        title: "Scenario Planning",
        description:
          "Scenario-based analysis designed to compare alternative planning assumptions."
      }
    ],
    insights: [
      "Identify areas where actual financial performance differs from budget.",
      "Compare performance across reporting periods.",
      "Evaluate the direction and consistency of financial trends.",
      "Compare forecast expectations with current performance.",
      "Understand how alternative scenarios affect the financial outlook."
    ],
    recommendations: [
      "Prioritize categories showing meaningful and persistent budget variance.",
      "Use period comparison to distinguish temporary movements from longer-term trends.",
      "Review forecast assumptions when actual performance moves away from plan.",
      "Use scenario analysis before making planning or resource-allocation decisions."
    ],
    tools: [
      "Power BI",
      "SQL Server",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Financial Analytics"
    ]
  },
  {
    slug: "pakistan-atm-performance",
    number: "02",
    title: "Pakistan ATM Performance Dashboard",
    shortTitle: "ATM Performance",
    category: "Banking Analytics",
    description:
      "A Power BI banking analytics solution designed to evaluate ATM performance through transactions, revenue, analytical performance ranges and regional comparison.",
    overview:
      "This project converts ATM-level source data into an interactive reporting experience. It demonstrates data preparation, range-based performance segmentation, KPI design, data modeling and interactive business intelligence reporting.",
    businessProblem:
      "ATM performance is harder to interpret when transaction activity, revenue and location performance are evaluated separately. The project organizes these measures into a consistent reporting framework that supports performance comparison and segmentation.",
    objectives: [
      "Create a clear ATM performance-monitoring experience.",
      "Analyze transaction activity across the portfolio.",
      "Evaluate revenue performance.",
      "Create meaningful percentage and transaction ranges.",
      "Support regional comparison.",
      "Enable interactive KPI-based exploration."
    ],
    architecture: [
      "Source Data",
      "Data Preparation",
      "Power BI Model",
      "DAX Measures",
      "Interactive Report"
    ],
    preparation: [
      "Prepared ATM-level source data for Power BI analysis.",
      "Created percentage-based performance ranges for clearer segmentation.",
      "Created transaction ranges instead of relying on a single broad category.",
      "Prepared revenue-performance categories for comparative reporting.",
      "Retained geographic fields to support regional analysis.",
      "Structured the analytical model for filtering and KPI comparison."
    ],
    kpis: [
      "ATM Performance",
      "Transaction Activity",
      "Revenue Performance",
      "Transaction Ranges",
      "Performance Bands",
      "Regional Analysis",
      "Location Comparison",
      "KPI Distribution"
    ],
    technical: [
      "Power BI report development",
      "Power Query transformation",
      "Analytical range bucketing",
      "DAX measures",
      "Performance segmentation",
      "Regional analysis",
      "Interactive filtering",
      "Dashboard navigation",
      "KPI-based reporting"
    ],
    walkthrough: [
      {
        title: "Performance Overview",
        description:
          "Summary reporting designed to provide an immediate view of overall ATM activity and performance."
      },
      {
        title: "Transaction Analysis",
        description:
          "Transaction-focused reporting used to compare activity across ATMs and transaction ranges."
      },
      {
        title: "Revenue Analysis",
        description:
          "Views designed to compare revenue behavior and performance categories."
      },
      {
        title: "Regional Analysis",
        description:
          "Geographic reporting used to compare ATM performance across regions."
      },
      {
        title: "Performance Segmentation",
        description:
          "Range-based reporting that groups ATM results into clearer analytical bands."
      }
    ],
    insights: [
      "Identify ATM groups operating within stronger and weaker performance bands.",
      "Compare transaction behavior across analytical ranges.",
      "Evaluate revenue performance across the ATM portfolio.",
      "Compare performance across regional groupings.",
      "Use segmentation to identify areas requiring deeper investigation."
    ],
    recommendations: [
      "Investigate consistently lower-performing ATM groups using transaction and location context.",
      "Use analytical performance bands to prioritize management attention.",
      "Evaluate transaction and revenue performance together before drawing operational conclusions.",
      "Use regional trends as a starting point for deeper location-level analysis."
    ],
    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Excel / CSV",
      "Banking Analytics"
    ]
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
