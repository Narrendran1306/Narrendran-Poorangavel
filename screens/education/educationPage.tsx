"use client";

import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EditIcon from "@mui/icons-material/Edit";
import { educationDetails } from "@/data/portfolio/portfolioDetails";
import "./education.css";

const iconMap: Record<string, React.ElementType> = {
  School: SchoolIcon,
  MenuBook: MenuBookIcon,
  Edit: EditIcon,
};

export default function EducationPage() {
  return (
    <section id="education" className="education">
      <div className="container">
        <p className="section-eyebrow">{educationDetails.eyebrow}</p>
        <h2 className="section-title">{educationDetails.title}</h2>

        <div className="education-grid">
          {educationDetails.items.map((item, i) => {
            const Icon = iconMap[item.icon] || SchoolIcon;
            return (
              <div key={i} className="education-card">
                <div className="edu-icon"><Icon /></div>
                <h3>{item.degree}</h3>
                <p className="edu-field">{item.field}</p>
                <p className="edu-institution">{item.institution}</p>
                <div className="edu-meta">
                  <span>{item.period}</span>
                  <span className="edu-score">{item.score}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
