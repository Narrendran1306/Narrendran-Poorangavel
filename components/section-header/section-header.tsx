import "./SectionHeader.css";

interface SectionHeaderProps {
    label?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}

export default function SectionHeader({
    label,
    title,
    description,
    align = "center",
}: SectionHeaderProps) {
    return (
        <header className={`section-header section-header--${align}`}>
            {label && <span className="section-header__label">{label}</span>}
            <h2 className="section-header__title">{title}</h2>
            {description && <p className="section-header__desc">{description}</p>}
        </header>
    );
}