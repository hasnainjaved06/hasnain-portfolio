import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hasnain-portfolio-iliac.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Hasnain Javed | Data Analyst & Business Intelligence",
    template: "%s | Hasnain Javed",
  },

  description:
    "Portfolio of Hasnain Javed, a Data Analyst and Business Intelligence professional specializing in Power BI, SQL, DAX, Python, KPI reporting, dashboard development and reporting automation.",

  keywords: [
    "Hasnain Javed",
    "Hasnain Javed Data Analyst",
    "Data Analyst",
    "Business Intelligence Analyst",
    "BI Analyst",
    "Power BI Developer",
    "Power BI",
    "SQL",
    "DAX",
    "Python",
    "Data Analytics",
    "Business Intelligence",
    "Reporting Automation",
    "Dashboard Development",
    "KPI Reporting",
    "Data Visualization",
    "Karachi Data Analyst",
    "Pakistan Data Analyst",
  ],

  authors: [
    {
      name: "Hasnain Javed",
      url: siteUrl,
    },
  ],

  creator: "Hasnain Javed",
  publisher: "Hasnain Javed",

  applicationName: "Hasnain Javed Portfolio",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Hasnain Javed Portfolio",
    title: "Hasnain Javed | Data Analyst & Business Intelligence",
    description:
      "Explore data analytics, business intelligence and Power BI projects by Hasnain Javed, specializing in SQL, DAX, Python, KPI reporting and reporting automation.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hasnain Javed | Data Analyst & Business Intelligence",
    description:
      "Data Analyst and Business Intelligence portfolio featuring Power BI, SQL, DAX, Python, KPI reporting and analytics projects.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id="top" className="site-shell">
          <SiteHeader />

          <div id="main-content">{children}</div>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}