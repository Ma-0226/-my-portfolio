"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { sectionLinks } from "@/data/portfolio";

export default function SectionDock() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 360);

      // Trigger line: 35% from the top of the screen
      const triggerLine = window.innerHeight * 0.35;

      for (let i = sectionLinks.length - 1; i >= 0; i--) {
        const el = document.querySelector(`section#${sectionLinks[i].id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            setActiveSection(sectionLinks[i].id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`floating-ui${visible ? " is-visible" : ""}`}>
      <nav className="section-dock" aria-label="Page sections">
        {sectionLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-current={activeSection === link.id ? "location" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a className="back-to-top" href="#top" aria-label="Back to top">
        <ArrowUp size={19} />
      </a>
    </div>
  );
}