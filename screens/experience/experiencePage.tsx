"use client";

import { experienceDetails } from "@/data/portfolio/portfolioDetails";
import "./experience.css";

export default function ExperiencePage() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-eyebrow">{experienceDetails.eyebrow}</p>
        <h2 className="section-title">{experienceDetails.title}</h2>

        <div className="timeline">
          {experienceDetails.items.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-node" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.title}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-tech">
                  {item.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
