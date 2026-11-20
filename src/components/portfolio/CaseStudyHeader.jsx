"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Moon, Sun } from "lucide-react";

export default function CaseStudyHeader() {
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const currentTheme = savedTheme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = currentTheme;
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <header className="case-header">
      <div className="case-header__inner">
        <Link className="case-header__brand" href="/#top" aria-label="Home">
          MA
        </Link>
        <Link className="case-header__back" href="/#work">
          <ArrowLeft size={14} aria-hidden="true" />
          All work
        </Link>
        <div className="case-header__actions">
          <button
            className="case-header__theme"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            <Moon className="theme-icon--moon" size={17} aria-hidden="true" />
            <Sun className="theme-icon--sun" size={17} aria-hidden="true" />
          </button>
          <Link className="case-header__contact" href="/#contact">
            Contact <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
