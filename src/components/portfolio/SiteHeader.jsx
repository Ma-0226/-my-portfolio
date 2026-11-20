"use client";

import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, Moon, Sun, X } from "lucide-react";
import { sectionLinks } from "@/data/portfolio";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <a className="site-brand" href="#top" aria-label="Your Name, back to top">
        MA
      </a>

      <button
        className={`drawer-scrim${menuOpen ? " is-open" : ""}`}
        type="button"
        tabIndex={menuOpen ? 0 : -1}
        aria-label="Close navigation menu"
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        id="site-menu"
        className={`site-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Main navigation"
      >
        {sectionLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="site-header__actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label="Toggle color theme"
          title="Toggle color theme"
          onClick={toggleTheme}
        >
          <Moon className="theme-icon--moon" size={18} aria-hidden="true" />
          <Sun className="theme-icon--sun" size={18} aria-hidden="true" />
        </button>
        <a className="desktop-link" href="#contact">
          Résumé <ArrowDownToLine size={14} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
