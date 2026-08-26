"use client";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DownloadIcon from "@mui/icons-material/Download";
import { aboutDetails } from "@/data/portfolio/portfolioDetails";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import "./about.css";

const iconMap: Record<string, React.ElementType> = {
  WorkOutline: WorkOutlineIcon,
  LocationOnOutlined: LocationOnOutlinedIcon,
  Language: LanguageIcon,
  PersonOutline: PersonOutlineIcon,
};

export default function AboutPage() {
  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-eyebrow">{aboutDetails.eyebrow}</p>
        <h2 className="section-title">{aboutDetails.title}</h2>
        <div className="about-grid">
          <div className="about-text">
            {aboutDetails.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about-info">
            {aboutDetails.info.map((item) => {
              const Icon = iconMap[item.icon] || WorkOutlineIcon;
              return (
                <div key={item.label} className="info-card">
                  <div className="info-icon"><Icon fontSize="small" /></div>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
