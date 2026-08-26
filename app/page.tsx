"use client";

import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/screens/home/homePage";
import AboutPage from "@/screens/about/aboutPage";
import SkillsPage from "@/screens/skills/skillsPage";
import ProjectsPage from "@/screens/projects/projectsPage";
import ExperiencePage from "@/screens/experience/experiencePage";
import EducationPage from "@/screens/education/educationPage";
import ContactPage from "@/screens/contact/contactPage";
import Footer from "@/components/footer/Footer";
import CursorGlow from "@/components/cursor-glow/CursorGlow";
import ScrollToTop from "@/components/scroll-to-top/ScrollToTop";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ExperiencePage />
        <EducationPage />
        <ContactPage />
      </main>
      <Footer />
      <CursorGlow />
      <ScrollToTop />
    </>
  );
}
