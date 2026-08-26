"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import { contactDetails } from "@/data/portfolio/portfolioDetails";
import SocialLinks from "@/components/social-links/SocialLinks";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import "./contact.css";

export default function ContactPage() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-eyebrow">{contactDetails.eyebrow}</p>
        <h2 className="section-title">{contactDetails.title}</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <a href={`mailto:${contactDetails.email}`} className="contact-item">
              <div className="contact-icon"><EmailOutlinedIcon /></div>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">{contactDetails.email}</span>
              </div>
            </a>
            <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className="contact-item">
              <div className="contact-icon"><PhoneOutlinedIcon /></div>
              <div>
                <span className="contact-label">Phone</span>
                <span className="contact-value">{contactDetails.phone}</span>
              </div>
            </a>
            <div className="contact-item">
              <div className="contact-icon"><LocationOnOutlinedIcon /></div>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">{contactDetails.location}</span>
              </div>
            </div>
          </div>

          <div className="contact-actions">
            <p className="connect-label">Connect with me on</p>
            <SocialLinks />
            <SecondaryButton href={contactDetails.resumeUrl} download={contactDetails.resumeName}>
              Download Resume
              <span className="btn-icon"><DownloadIcon fontSize="small" /></span>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
