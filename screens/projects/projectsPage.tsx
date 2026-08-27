"use client";

import { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projectsDetails } from "@/data/portfolio/portfolioDetails";
import ProjectRow from "@/components/projects/project-row";
import "./projects.css";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("ALL");

  const filtered =
    filter === "ALL"
      ? projectsDetails.projects
      : projectsDetails.projects.filter((p) => p.category.includes(filter));

  const featured = projectsDetails.projects.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-eyebrow">{projectsDetails.eyebrow}</p>
        <h2 className="section-title">{projectsDetails.title}</h2>

        {/* <div className="project-filters">
          {projectsDetails.categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div> */}

        {/* ── Featured Projects ── */}
        {featured.length > 0 && (
          <div className="featured-projects">
            {featured.map((project) => (
              <article key={project.id} className="featured-card">
                {/* LEFT */}
                <div className="featured-left">
                  {project.eyebrow && (
                    <p className="featured-eyebrow">{project.eyebrow}</p>
                  )}
                  <h3 className="featured-title">{project.name}</h3>
                  <p className="featured-desc">{project.description}</p>

                  {project.features && project.features.length > 0 && (
                    <ul className="featured-features">
                      {project.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="featured-actions">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn"
                      >
                        <OpenInNewIcon fontSize="small" /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn secondary"
                      >
                        <GitHubIcon fontSize="small" /> GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* RIGHT – Module Diagram */}
                <div className="featured-right">
                  {project.modules && project.modules.length > 0 ? (
                    <div className="module-diagram">
                      <div className="module-core">
                        ERP
                        <br />
                        core
                      </div>
                      {project.modules.map((mod, i) => {
                        const angle =
                          (360 / project.modules!.length) * i - 90;
                        return (
                          <div
                            key={mod}
                            className="module-node"
                            style={
                              {
                                "--angle": `${angle}deg`,
                              } as React.CSSProperties
                            }
                          >
                            {mod}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="featured-placeholder">
                      {project.name.charAt(0)}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ── Regular Projects (using ProjectRow) ── */}
        <div className="project-rows">
          {regular.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              expandOnHover={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}