export type Certification = {
  slug: string;
  title: string;
  issuer: string;
  issued: string;
  completionLabel: string;
  credentialId?: string;
  category: string;
  filters: string[];
  description: string;
  skills: string[];
  image: string;
  logo: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    slug: "google-data-analytics",

    title:
      "Google Data Analytics Professional Certificate",

    issuer:
      "Google",

    issued:
      "Jun 28, 2026",

    completionLabel:
      "9 Courses",

    credentialId:
      "GYQGLF5039L4",

    category:
      "Professional Certificate",

    filters: [
      "Data Analytics"
    ],

    description:
      "A nine-course professional certificate covering the complete data analytics workflow, including data preparation, analysis, visualization, statistical thinking and data storytelling.",

    skills: [
      "R",
      "Data Analytics",
      "Data Visualization",
      "Data Storytelling",
      "ggplot",
      "Spreadsheets",
      "Statistics",
      "Data Validation",
      "Data Ethics"
    ],

    image:
      "/certifications/google-data-analytics.png",

    logo:
      "/certifications/logos/google-transparent.png",

    verifyUrl:
      "https://www.coursera.org/verify/professional-cert/GYQGLF5039L4"
  },

  {
    slug:
      "excel-skills-for-business",

    title:
      "Excel Skills for Business Specialization",

    issuer:
      "Macquarie University",

    issued:
      "Jan 17, 2024",

    completionLabel:
      "4 Courses",

    category:
      "Specialization",

    filters: [
      "Excel"
    ],

    description:
      "Advanced Excel skills for business including dashboards, data analysis, formulas, automation, pivot tables and structured spreadsheet workflows.",

    skills: [
      "Microsoft Excel",
      "Pivot Tables",
      "Dashboards",
      "Excel Macros",
      "Data Validation"
    ],

    image:
      "/certifications/excel-skills-for-business.png",

    logo:
      "/certifications/logos/macquarie-university-transparent.png"
  },

  {
    slug:
      "ibm-data-analyst",

    title:
      "IBM Data Analyst Professional Certificate",

    issuer:
      "IBM",

    issued:
      "Jan 1, 2024",

    completionLabel:
      "9 Courses",

    credentialId:
      "6N49375MTX8H",

    category:
      "Professional Certificate",

    filters: [
      "Data Analytics"
    ],

    description:
      "Applied data analytics covering Python, SQL, Excel, relational databases, pandas, data visualization and real-world analytical projects.",

    skills: [
      "Python",
      "SQL",
      "Pandas",
      "Data Analysis",
      "Data Visualization",
      "MySQL",
      "Microsoft Excel",
      "Dashboards"
    ],

    image:
      "/certifications/ibm-data-analyst.png",

    logo:
      "/certifications/logos/ibm-transparent.png"
  },

  {
    slug:
      "jira-scrum-project",

    title:
      "Jira Scrum Project",

    issuer:
      "Coursera",

    issued:
      "Dec 13, 2023",

    completionLabel:
      "Guided Project",

    category:
      "Project Certificate",

    filters: [
      "Project Management"
    ],

    description:
      "Project-based learning focused on creating and managing a Jira Scrum project within structured Agile delivery workflows.",

    skills: [
      "Jira",
      "Scrum",
      "Agile",
      "Project Management"
    ],

    image:
      "/certifications/jira-scrum-project.png",

    logo:
      "/certifications/logos/coursera-transparent.png"
  },

  {
    slug:
      "power-bi-financial-data-analysis",

    title:
      "Use Power BI for Financial Data Analysis",

    issuer:
      "Coursera",

    issued:
      "Jul 18, 2023",

    completionLabel:
      "Guided Project",

    credentialId:
      "UEX65WVG2YRP",

    category:
      "Project Certificate",

    filters: [
      "Business Intelligence"
    ],

    description:
      "Hands-on Power BI project focused on analysing financial data and communicating financial performance through effective data visualization.",

    skills: [
      "Power BI",
      "Financial Analysis",
      "Data Visualization"
    ],

    image:
      "/certifications/power-bi-financial-data-analysis.png",

    logo:
      "/certifications/logos/coursera-transparent.png"
  }
];

export const certificationFilters = [
  "All",
  "Data Analytics",
  "Business Intelligence",
  "Excel",
  "Project Management"
];
