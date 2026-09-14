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
    "Hasnain Javed | Data Analyst & Business Intelligence Portfolio",
  description:
    "Portfolio of Hasnain Javed, a Data Analyst and Business Intelligence professional specializing in Power BI, SQL, DAX, Python, KPI reporting, automation and business analytics.",
};

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      {/* HERO */}

      <div className={styles.heroSection}>
        <Hero />
      </div>

      {/* PREMIUM ANALYTICS TOOLKIT */}

      <TechStrip />

      {/* ABOUT PREVIEW */}

      <div className={styles.standardSection}>
        <AboutPreview />
      </div>

      {/* ANALYTICAL WORKFLOW */}

      <div className={styles.compactSection}>
        <AnalyticsWorkflow />
      </div>

      {/* SKILLS PREVIEW */}

      <div className={styles.standardSection}>
        <SkillsPreview />
      </div>

      {/* FEATURED CASE STUDIES */}

      <div className={styles.visualSection}>
        <FeaturedProjects />
      </div>

      {/* EXPERIENCE */}

      <div className={styles.standardSection}>
        <ExperiencePreview />
      </div>

      {/* BUSINESS DOMAINS */}

      <div className={styles.compactSection}>
        <BusinessDomains />
      </div>

      {/* CERTIFICATIONS */}

      <div className={styles.standardSection}>
        <CertificationsPreview />
      </div>

      {/* FINAL CTA */}

      <div className={styles.compactSection}>
        <FinalCTA />
      </div>
    </main>
  );
}