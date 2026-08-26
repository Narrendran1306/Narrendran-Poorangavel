"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { socialLinks } from "@/data/portfolio/portfolioDetails";
import "./social-links.css";

const iconMap: Record<string, React.ElementType> = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  X: XIcon,
  Instagram: InstagramIcon,
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`social-links ${className}`}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon] || LinkedInIcon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="social-link"
          >
            <Icon fontSize="small" />
          </a>
        );
      })}
    </div>
  );
}
