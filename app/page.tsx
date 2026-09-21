import type { Metadata } from "next";

import AboutPreview from "@/components/sections/AboutPreview";
import AnalyticsWorkflow from "@/components/sections/AnalyticsWorkflow";
import BusinessDomains from "@/components/sections/BusinessDomains";
import CertificationsPreview from "@/components/sections/CertificationsPreview";
import ExperiencePreview from "@/components/sections/ExperiencePreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import SkillsPreview from "@/components/sections/SkillsPreview";
import TechStrip from "@/components/sections/TechStrip";

import styles from "./home.module.css";

export const metadata: Metadata = {
  title:
    "Hasnain Javed | Data Analyst, BI & Microsoft Fabric Portfolio",
  description:
    "Portfolio of Hasnain Javed, a Data Analyst and Business Intelligence professional specializing in Power BI, Microsoft Fabric, SQL, DAX, Python, PySpark, KPI reporting, automation and modern analytics engineering.",
};

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <div className={styles.heroSection}>
        <Hero />
      </div>

      <TechStrip />

      <div className={styles.standardSection}>
        <AboutPreview />
      </div>

      <div className={styles.compactSection}>
        <AnalyticsWorkflow />
      </div>

      <div className={styles.standardSection}>
        <SkillsPreview />
      </div>

      <div className={styles.visualSection}>
        <FeaturedProjects />
      </div>

      <div className={styles.standardSection}>
        <ExperiencePreview />
      </div>

      <div className={styles.compactSection}>
        <BusinessDomains />
      </div>

      <div className={styles.standardSection}>
        <CertificationsPreview />
      </div>

      <div className={styles.compactSection}>
        <FinalCTA />
      </div>
    </main>
  );
}
