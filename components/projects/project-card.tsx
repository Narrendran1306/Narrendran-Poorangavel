"use client";

import { getProjectIcon } from "@/utils/projectIcons";
import "./project-card.css";

interface Project {
    id: string;
    name: string;
    eyebrow: string;
    description: string;
    tech: string[];
    image?: string;
    icon?: string;
    liveDemo?: string;
    github?: string;
    featured?: boolean;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const Icon = getProjectIcon(project.icon);

    return (
        <article className={`project-card ${project.featured ? "featured" : ""}`}>
            <div className="project-image-wrapper">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.name}
                        className="project-image"
                        loading="lazy"
                    />
                ) : (
                    <div className="project-icon-fallback">
                        <Icon />
                    </div>
                )}
            </div>

            <div className="project-content">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                    {project.tech.slice(0, 6).map((tech) => (
                        <span key={tech} className="tech-pill">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="project-links">
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