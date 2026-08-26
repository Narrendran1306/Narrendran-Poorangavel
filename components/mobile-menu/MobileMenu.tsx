"use client";

import { useEffect } from "react";
import { navbarDetails } from "@/data/portfolio/portfolioDetails";
import "./mobile-menu.css";

interface Props {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  active: string;
}

export default function MobileMenu({ open, onClose, onNavigate, active }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div className={`mobile-menu ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="mobile-menu-backdrop" onClick={onClose} />
      <nav className="mobile-menu-panel">
        {navbarDetails.map((item) => (
          <button
            key={item.id}
            className={`mobile-link ${active === item.id ? "active" : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
