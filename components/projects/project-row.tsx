"use client";

import { getProjectIcon } from "@/utils/projectIcons";
import "./project-row.css";

interface Project {
    id: string;
    name: string;
    eyebrow: string;
    description: string;
    tech: string[];
    icon?: string;
    liveDemo?: string;
    github?: string;
    featured?: boolean;
}

interface ProjectRowProps {
    project: Project;
    /** When true, the details section starts collapsed and expands on hover.
     *  When false (default), the details are always expanded. */
    expandOnHover?: boolean;
}

export default function ProjectRow({
    project,
    expandOnHover = false,
}: ProjectRowProps) {
    const Icon = getProjectIcon(project.icon);

    return (
        <article
            className={`project-row ${project.featured ? "featured" : ""} ${expandOnHover ? "expand-on-hover" : ""
                }`}
        >
            <div className="project-row-main">
                <div className="project-row-icon">
                    <Icon />
                </div>

                <div className="project-row-info">
                    <p className="project-row-eyebrow">{project.eyebrow}</p>
                    <h3 className="project-row-name">{project.name}</h3>
                </div>

                <div className="project-row-tech">
                    {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="tech-pill">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Expandable content */}
            <div className="project-row-details">
                <p className="project-row-desc">{project.description}</p>

                <div className="project-row-tech-full">
                    {project.tech.map((t) => (
                        <span key={t} className="tech-pill">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="project-row-links">
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}