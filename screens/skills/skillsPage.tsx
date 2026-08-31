"use client";

import { useState, useEffect, useRef } from "react";
import { skillsDetails, expertiseDetails, expertiseIntro, expertiseConfig } from "@/data/portfolio/portfolioDetails";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import StorageIcon from "@mui/icons-material/Storage";
import GitHubIcon from "@mui/icons-material/GitHub";
import ApiIcon from "@mui/icons-material/Api";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import DnsIcon from "@mui/icons-material/Dns";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VerifiedIcon from "@mui/icons-material/Verified";
import "./skills.css";

const iconMap: Record<string, React.ElementType> = {
  Html: HtmlIcon, Css: CssIcon, Javascript: JavascriptIcon, Code: CodeIcon,
  Storage: StorageIcon, GitHub: GitHubIcon, Api: ApiIcon,
  DesktopWindows: DesktopWindowsIcon, Dns: DnsIcon, AccountTree: AccountTreeIcon,
  Lightbulb: LightbulbIcon, Verified: VerifiedIcon,
};

export default function SkillsPage() {
  const [filter, setFilter] = useState<string>("ALL");
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered = filter === "ALL" ? skillsDetails.skills : skillsDetails.skills.filter(s => s.category === filter);

  const globalSkillPct = (skillsDetails as { showPercentage?: boolean }).showPercentage ?? true;
  const globalSkillBar = (skillsDetails as { showBar?: boolean }).showBar ?? true;

  const globalExpertisePct = expertiseConfig?.showPercentage ?? true;
  const globalExpertiseBar = expertiseConfig?.showBar ?? true;
  const expertiseTitle = expertiseConfig?.title || "MY EXPERTISE";

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow">{skillsDetails.eyebrow}</p>
        <h2 className="section-title">{skillsDetails.title}</h2>
        <p className="skills-desc">{skillsDetails.description}</p>

        <div className="skills-layout">
          <div className="skills-main">
            <div className="skill-filters">
              {skillsDetails.categories.map(cat => (
                <button key={cat} className={`filter-btn ${filter === cat ? "active" : ""}`} onClick={() => setFilter(cat)}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="skill-grid">
              {filtered.map(skill => {
                const Icon = iconMap[skill.icon] || CodeIcon;
                const hasLevel = typeof skill.level === "number";
                const showPct = hasLevel && ((skill as { showPercentage?: boolean }).showPercentage ?? globalSkillPct);
                const showBar = hasLevel && ((skill as { showBar?: boolean }).showBar ?? globalSkillBar);

                return (
                  <div key={skill.name} className={`skill-card ${!showBar && !showPct ? "skill-card-compact" : ""}`}>
                    <div className="skill-card-header">
                      <Icon className="skill-icon" fontSize="small" />
                      <span className="skill-name">{skill.name}</span>
                      {showPct && !showBar && (
                        <span className="skill-pct-badge">{skill.level}%</span>
                      )}
                    </div>
                    {showBar && (
                      <div className="skill-bar-wrap">
                        <div className="skill-bar" style={{ width: animated ? `${skill.level}%` : "0%" }} />
                      </div>
                    )}
                    {showPct && showBar && (
                      <span className="skill-pct">{skill.level}%</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="expertise-panel">
            <h3>{expertiseTitle}</h3>
            {expertiseDetails.map(item => {
              const Icon = iconMap[item.icon] || CodeIcon;
              const hasLevel = typeof item.level === "number";
              const showPct = hasLevel && ((item as { showPercentage?: boolean }).showPercentage ?? globalExpertisePct);
              const showBar = hasLevel && ((item as { showBar?: boolean }).showBar ?? globalExpertiseBar);

              return (
                <div key={item.name} className={`expertise-row ${!showBar && !showPct ? "expertise-row-compact" : ""}`}>
                  <div className="expertise-label">
                    <div className="expertise-label-left">
                      <Icon fontSize="small" />
                      <span>{item.name}</span>
                    </div>
                    {showPct && !showBar && (
                      <span className="expertise-pct-badge">{item.level}%</span>
                    )}
                  </div>
                  {showBar && (
                    <div className="expertise-bar-wrap">
                      <div className="expertise-bar" style={{ width: animated ? `${item.level}%` : "0%" }} />
                    </div>
                  )}
                  {showPct && showBar && (
                    <span className="expertise-pct">{item.level}%</span>
                  )}
                </div>
              );
            })}
            <p className="expertise-intro">{expertiseIntro}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
