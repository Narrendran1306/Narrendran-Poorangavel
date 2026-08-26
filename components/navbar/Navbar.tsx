"use client";

import { useState, useEffect, useCallback } from "react";
import { navbarDetails, personalInfo } from "@/data/portfolio/portfolioDetails";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import MobileMenu from "@/components/mobile-menu/MobileMenu";
import "./navbar.css";

export default function Navbar() {
  const [active, setActive] = useState(navbarDetails[0]?.id ?? "home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navbarDetails.map((n) => document.getElementById(n.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <header className={`navbar`}>
      <div className="container navbar-inner">
        <a
          href={`#${navbarDetails[0]?.id ?? "home"}`}
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(navbarDetails[0]?.id ?? "home");
          }}
        >
          <span className="logo-mark">{personalInfo.initials}</span>
          <span className="logo-text">{personalInfo.name}</span>
        </a>

        <nav className="navbar-links" aria-label="Main navigation">
          {navbarDetails.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${active === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollTo}
        active={active}
      />
    </header>
  );
}