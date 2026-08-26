"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import { homeDetails } from "@/data/portfolio/portfolioDetails";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import SocialLinks from "@/components/social-links/SocialLinks";
import "./home.css";
import Typewriter from "@/components/typewriter/typeWriter";

export default function HomePage() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="home">
      <div className="home-bg">
        <div className="home-grid" />
        <div className="home-glow" />
        <div className="home-glow-2" />
      </div>

      <div className="container home-content">
        <div className="home-text">
          <p className="home-greeting anim-fade-up">{homeDetails.greeting}</p>
          <h1 className="home-name anim-fade-up delay-1">{homeDetails.name}</h1>
          {/* <p className="home-title anim-fade-up delay-2">{homeDetails.title}</p> */}
          <p className="home-title anim-fade-up delay-2">
            {/* <Typewriter texts={homeDetails.title} /> */}
            <Typewriter
              texts={homeDetails.titles}
              typingSpeed={70}      // slower typing
              deletingSpeed={35}    // faster deleting
              pauseTime={2000}      // longer pause after full text
            />
          </p>
          <p className="home-desc anim-fade-up delay-3">{homeDetails.description}</p>
          <div className="home-ctas anim-fade-up delay-4">
            <PrimaryButton onClick={scrollToProjects}>
              {homeDetails.primaryCta}
              <span className="btn-icon">
                <ArrowForwardIcon fontSize="small" />
              </span>
            </PrimaryButton>
            <SecondaryButton href={homeDetails.resumeUrl} download={homeDetails.resumeName}>
              {homeDetails.secondaryCta}
              <span className="btn-icon">
                <DownloadIcon fontSize="small" />
              </span>
            </SecondaryButton>
          </div>
          <div className="home-socials anim-fade-up delay-5">
            <SocialLinks />
          </div>
        </div>

        <div className="home-visual anim-fade-in">
          <div className="hero-visual">
            {/* Decorative nodes & lines */}
            <div className="node n1" />
            <div className="node n2" />
            <div className="node n3" />
            <div className="node n4" />
            <div className="node n5" />
            <div className="node n6" />
            <div className="line l1" />
            <div className="line l2" />
            <div className="line l3" />

            {/* Cubes with labels inside */}
            <div className="cube c1">
              <span className="cube-top">{homeDetails.cubeLabels[0].top}</span>
              <span className="cube-bottom">{homeDetails.cubeLabels[0].bottom}</span>
            </div>
            <div className="cube c2">
              <span className="cube-top">{homeDetails.cubeLabels[1].top}</span>
              <span className="cube-bottom">{homeDetails.cubeLabels[1].bottom}</span>
            </div>
            <div className="cube c3">
              <span className="cube-top">{homeDetails.cubeLabels[2].top}</span>
              <span className="cube-bottom">{homeDetails.cubeLabels[2].bottom}</span>
            </div>
            <div className="cube c4">
              <span className="cube-top">{homeDetails.cubeLabels[3].top}</span>
              <span className="cube-bottom">{homeDetails.cubeLabels[3].bottom}</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-mouse" />
        </div>
      </div>

    </section>
  );
}