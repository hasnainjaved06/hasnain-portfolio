import type { Metadata } from "next";

import CertificationShowcase from "@/components/certifications/CertificationShowcase";


export const metadata: Metadata = {
  title:
    "Certifications | Hasnain Javed",

  description:
    "Professional certifications completed by Hasnain Javed across Google Data Analytics, IBM Data Analyst, Excel, Power BI, Jira and Scrum.",
};


export default function CertificationsPage() {

  return (
    <main>
      <CertificationShowcase />
    </main>
  );
}
