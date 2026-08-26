"use client";

import "./buttons.css";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  className?: string;
}

export default function PrimaryButton({ children, onClick, href, type = "button", className = "" }: Props) {
  if (href) {
    return (
      <a href={href} className={`btn btn-primary ${className}`} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={`btn btn-primary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
