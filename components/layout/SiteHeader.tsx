"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="site-container">
          <div className="header-inner">
            <Link
              href="/"
              className="brand"
              aria-label="Hasnain Javed home"
            >
              <span className="brand-mark">HJ.</span>

              <span
                className="brand-copy"
                style={{
                  display: "flex",
                  minWidth: 0,
                }}
              >
                <strong>Hasnain Javed</strong>
                <small>Data Analyst | BI Analyst</small>
              </span>
            </Link>

            <nav
              className="desktop-nav"
              aria-label="Primary navigation"
            >
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`nav-link ${
                      active ? "nav-link-active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="header-actions">
              <div
                className="availability"
                aria-label="Open to opportunities"
              >
                <span className="availability-dot" />
                <span>Available</span>
              </div>

              <Link
                href="/contact"
                className="header-cta"
              >
                Let&apos;s Talk
                <ArrowRight size={14} />
              </Link>

              <button
                type="button"
                className="menu-button"
                aria-label={
                  mobileOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={() =>
                  setMobileOpen((current) => !current)
                }
              >
                {mobileOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`mobile-menu ${
            mobileOpen ? "mobile-menu-open" : ""
          }`}
        >
          <div className="site-container">
            <nav
              className="mobile-nav"
              aria-label="Mobile navigation"
            >
              {navigation.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`mobile-nav-link ${
                      active
                        ? "mobile-nav-link-active"
                        : ""
                    }`}
                  >
                    <span className="mobile-nav-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item.label}</span>

                    <ArrowRight
                      size={15}
                      className="mobile-nav-arrow"
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="mobile-menu-footer">
              <div className="flex items-center gap-2">
                <span className="availability-dot" />
                <span>
                  Open to relevant opportunities
                </span>
              </div>

              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}