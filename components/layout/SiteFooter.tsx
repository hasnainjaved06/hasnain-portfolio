import Link from "next/link";

import {
  ArrowUp,
  BarChart3,
  Database,
  Mail,
  MapPin,
} from "lucide-react";

import { contactInfo } from "@/data/contact";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          {/* BRAND */}

          <div className="footer-brand-column">
            <Link
              href="/"
              className="footer-logo"
              aria-label="Hasnain Javed home"
            >
              HJ.
            </Link>

            <h2 className="footer-name">
              Hasnain Javed
            </h2>

            <p className="footer-role">
              Data Analyst • Business Intelligence • Analytics
            </p>

            <p className="footer-description">
              Turning business questions into structured analytics,
              reporting systems and decision-focused insights.
            </p>

            <div className="footer-tech-row">
              <span>
                <BarChart3 size={13} />
                Power BI
              </span>

              <span>
                <Database size={13} />
                SQL
              </span>
            </div>
          </div>

          {/* NAVIGATION */}

          <div className="footer-column">
            <p className="footer-heading">
              Navigation
            </p>

            <nav
              className="footer-links"
              aria-label="Footer navigation"
            >
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONNECT */}

          <div className="footer-column">
            <p className="footer-heading">
              Connect
            </p>

            <div className="footer-info">
              <div>
                <MapPin size={14} />

                <span>
                  {contactInfo.location}
                </span>
              </div>

              <div>
                <span className="availability-dot" />

                <span>
                  Available for Opportunities
                </span>
              </div>

              <div>
                <Mail size={14} />

                <a
                  href={contactInfo.emailHref}
                  className="transition hover:text-sky-400"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                LinkedIn
                <span>↗</span>
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                GitHub
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">
          <p>
            © 2026 Hasnain Javed. Built as a data analytics portfolio.
          </p>

          <a
            href="#top"
            className="back-to-top"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}