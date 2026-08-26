"use client";

import { footerDetails } from "@/data/portfolio/portfolioDetails";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>{footerDetails.text}</p>
      </div>
    </footer>
  );
}
