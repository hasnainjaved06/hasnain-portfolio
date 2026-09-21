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

  {
    number: "03",
    slug: "customer-growth-analytics",
    title: "Customer Growth Analytics",
    category: "Customer & Retention Analytics",
    description:
      "An end-to-end customer analytics solution built across 569K+ operational records using Python, SQL Server and Power BI to analyze customer value, purchasing behavior, RFM segmentation, lifetime value, retention and churn risk.",
    tools: [
      "Power BI",
      "Python",
      "SQL Server",
      "DAX",
    ],
    highlights: [
      "569K+ Source Records",
      "93K+ Customer Profiles",
      "RFM & CLV Segmentation",
      "Retention & Churn Risk",
    ],
    featured: true,
  },

  {
    number: "04",
    slug: "enterprise-sales-inventory-intelligence",
    title: "Enterprise Sales & Inventory Intelligence Platform",
    category: "Microsoft Fabric • Data Engineering • Power BI",
    description:
      "A production-style Microsoft Fabric data engineering and analytics platform spanning SQL Server ingestion, Data Factory orchestration, OneLake Medallion Architecture, PySpark transformation, data-quality controls, incremental processing, Fabric Warehouse, Direct Lake semantic modeling and Power BI.",
    tools: [
      "Microsoft Fabric",
      "Data Factory",
      "PySpark",
      "Fabric Warehouse",
      "Direct Lake",
      "Power BI",
    ],
    highlights: [
      "Bronze • Silver • Gold Architecture",
      "Data Quality & Reconciliation",
      "Incremental Watermark Processing",
      "Direct Lake + Platform Monitoring",
    ],
    featured: true,
  },
];
