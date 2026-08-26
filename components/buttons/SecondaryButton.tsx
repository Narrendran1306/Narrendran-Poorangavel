"use client";

import "./buttons.css";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  download?: boolean | string;
}

export default function SecondaryButton({ children, onClick, href, className = "", download }: Props) {
  if (href) {
    return (
      <a href={href} className={`btn btn-secondary ${className}`} download={download ? download : (href.endsWith(".pdf") || undefined)} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={`btn btn-secondary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
