"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function ExperienceAccordion() {
  const [openRole, setOpenRole] = useState(null);

  return (
    <div className="experience-list">
      {experience.map((item) => {
        const isOpen = openRole === item.id;
        const buttonId = `experience-toggle-${item.id}`;
        const panelId = `experience-panel-${item.id}`;

        return (
          <article className="experience-item" key={item.id}>
            <div className="experience-item__meta">
              <span>{item.dates}</span>
              <span>{item.location}</span>
            </div>
            <div>
              <h3>
                <button
                  id={buttonId}
                  className="experience-item__title"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenRole(isOpen ? null : item.id)}
                >
                  <span className="experience-item__title-main">
                    <span>{item.role}</span>
                    <span className="experience-item__company">— {item.company}</span>
                  </span>
                  <span className="experience-item__chevron" aria-hidden="true">
                    <ChevronDown size={18} />
                  </span>
                </button>
              </h3>
              <div
                className="experience-item__body"
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                data-open={isOpen}
                aria-hidden={!isOpen}
              >
                <div className="experience-item__body-inner">
                  <div className="experience-item__details">
                    <p>{item.summary}</p>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
