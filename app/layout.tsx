import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default:
      "Hasnain Javed — Data Analyst & Business Intelligence",
    template: "%s | Hasnain Javed",
  },

  description:
    "Data Analyst and Business Intelligence professional specializing in Power BI, SQL, DAX, reporting automation, KPI frameworks and data-driven decision making.",

  keywords: [
    "Hasnain Javed",
    "Data Analyst",
    "Business Intelligence",
    "BI Analyst",
    "Power BI",
    "SQL",
    "DAX",
    "Python",
    "Reporting Automation",
    "Data Analytics",
  ],

  authors: [
    {
      name: "Hasnain Javed",
    },
  ],

  creator: "Hasnain Javed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <div id="top" className="site-shell">
          <SiteHeader />

          <div id="main-content">{children}</div>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}


