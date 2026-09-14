export type PortfolioProject = {
  number: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  highlights: string[];
  featured: boolean;
};

export const projects: PortfolioProject[] = [
  {
    number: "01",
    slug: "corporate-finance-fpa-command-center",
    title: "Corporate Finance & FP&A Command Center",
    category: "Financial Analytics",
    description:
      "An executive-focused financial planning and performance solution built to analyze actuals, budgets, variances, forecasts and business scenarios through an integrated Power BI and SQL Server model.",
    tools: [
      "Power BI",
      "SQL Server",
      "DAX",
      "Financial Analytics",
    ],
    highlights: [
      "Budget vs Actual",
      "Variance Analysis",
      "Forecasting",
      "Scenario Planning",
    ],
    featured: true,
  },
  {
    number: "02",
    slug: "pakistan-atm-performance",
    title: "Pakistan ATM Performance Dashboard",
    category: "Banking Analytics",
    description:
      "A performance analytics solution designed to explore ATM transactions, revenue patterns, performance ranges and regional behavior through an interactive business intelligence experience.",
    tools: [
      "Power BI",
      "DAX",
      "Data Modeling",
      "Excel",
    ],
    highlights: [
      "ATM Performance",
      "Transaction Analysis",
      "Revenue Analysis",
      "Regional Performance",
    ],
    featured: true,
  },
];