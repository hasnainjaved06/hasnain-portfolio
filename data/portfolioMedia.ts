export type PortfolioScreenshot = {
  src: string;
  alt: string;
  label: string;
};

type ProjectMedia = {
  hero: string | null;
  screenshots: PortfolioScreenshot[];
  embedUrl: string | null;
};

type PortfolioMedia = {
  profile: {
    src: string | null;
    alt: string;
  };
  finance: ProjectMedia;
  atm: ProjectMedia;
  customerGrowth: ProjectMedia;
  fabricEnterpriseSales: ProjectMedia;
};

export const portfolioMedia: PortfolioMedia = {
  profile: {
    src: "/portfolio/profile/hasnain-javed.png",
    alt: "Professional portrait of Hasnain Javed",
  },

  finance: {
    hero: "/portfolio/projects/corporate-finance-fpa/finance-01.png",
    screenshots: [
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-01.png",
        alt: "Corporate Finance and FP&A Command Center dashboard overview",
        label: "Executive Overview",
      },
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-02.png",
        alt: "Corporate Finance and FP&A profit and loss analysis dashboard",
        label: "P&L Analysis",
      },
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-03.png",
        alt: "Corporate Finance and FP&A balance sheet and cash flow dashboard",
        label: "Balance Sheet & Cash Flow",
      },
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-04.png",
        alt: "Corporate Finance and FP&A working capital dashboard",
        label: "Working Capital",
      },
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-05.png",
        alt: "Corporate Finance and FP&A scenario forecasting dashboard",
        label: "Scenario Forecasting",
      },
      {
        src: "/portfolio/projects/corporate-finance-fpa/finance-06.png",
        alt: "Corporate Finance and FP&A analytical dashboard",
        label: "Financial Analysis",
      },
    ],
    embedUrl: null,
  },

  atm: {
    hero: "/portfolio/projects/pakistan-atm/atm-01.png",
    screenshots: [
      {
        src: "/portfolio/projects/pakistan-atm/atm-01.png",
        alt: "Pakistan ATM Performance Dashboard overview",
        label: "ATM Performance Overview",
      },
      {
        src: "/portfolio/projects/pakistan-atm/atm-02.png",
        alt: "Pakistan ATM transaction and revenue analysis dashboard",
        label: "Transaction & Revenue Analysis",
      },
      {
        src: "/portfolio/projects/pakistan-atm/atm-03.png",
        alt: "Pakistan ATM regional performance dashboard",
        label: "Regional Performance",
      },
    ],
    embedUrl: null,
  },

  customerGrowth: {
    hero:
      "/portfolio/projects/customer-growth-analytics/customer-growth-hero.png",

    screenshots: [
      {
        src:
          "/portfolio/projects/customer-growth-analytics/customer-growth-01.png",
        alt:
          "Customer Growth Analytics Executive Overview premium dashboard showcase",
        label: "Executive Overview",
      },
      {
        src:
          "/portfolio/projects/customer-growth-analytics/customer-growth-02.png",
        alt:
          "Customer Growth Analytics Customer Intelligence premium dashboard showcase",
        label: "Customer Intelligence",
      },
      {
        src:
          "/portfolio/projects/customer-growth-analytics/customer-growth-03.png",
        alt:
          "Customer Growth Analytics Retention and Risk premium dashboard showcase",
        label: "Retention & Risk",
      },
    ],

    embedUrl: null,
  },

  fabricEnterpriseSales: {
    hero: "/projects/fabric-enterprise-sales/showcase.png",

    screenshots: [
      {
        src:
          "/projects/fabric-enterprise-sales/page-01-executive-sales.png",
        alt:
          "Enterprise Sales and Inventory Intelligence Executive Sales premium dashboard showcase",
        label: "Executive Sales",
      },
      {
        src:
          "/projects/fabric-enterprise-sales/page-02-product-inventory.png",
        alt:
          "Enterprise Sales and Inventory Intelligence Product and Inventory premium dashboard showcase",
        label: "Product & Inventory",
      },
      {
        src:
          "/projects/fabric-enterprise-sales/page-03-customer-store.png",
        alt:
          "Enterprise Sales and Inventory Intelligence Customer and Store premium dashboard showcase",
        label: "Customer & Store",
      },
      {
        src:
          "/projects/fabric-enterprise-sales/page-04-platform-monitoring.png",
        alt:
          "Enterprise Sales and Inventory Intelligence Platform Monitoring premium dashboard showcase",
        label: "Platform Monitoring",
      },
    ],

    embedUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiMGMxZmNhNGUtNGMzYy00ZDdmLWFmOTktNGFlMjhhZTI4OTA0IiwidCI6ImMxMzdiNGU2LTUyM2UtNGE5Ny04ZjRmLWU5YWE0MmRkMDU1YiJ9&pageName=ba28dade80ab02042b49",
  },
};
