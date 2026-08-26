"use client";

import "./ExperienceCard.css";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    tech?: string[];
}

interface ExperienceCardProps {
    experience: ExperienceItem;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <article className="experience-card">
            <div className="experience-card__content">
                <div className="experience-card__header">
                    <h3 className="experience-card__company">{experience.company}</h3>
                    <span className="experience-card__period">{experience.period}</span>
                </div>
                <p className="experience-card__position">{experience.title}</p>
                <p className="experience-card__desc">{experience.description}</p>
                {experience.tech && experience.tech.length > 0 && (
                    <ul className="experience-card__tech" aria-label="Technologies used">
                        {experience.tech.map((t) => (
                            <li key={t} className="experience-card__badge">
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    );
}