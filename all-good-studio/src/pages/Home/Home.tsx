// src/pages/Home/Home.tsx
import { useEffect } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import HeroSection from "./hero-section";
import ServiceSection from "./service-section";
import ResultsSection from "./result-section";
import WorkflowSection from "./workflow-section";
import TestimonialSection from "./testimonial-section";
import ComparisonSection from "./comparison-section";
import FaqSection from "./faq-section";
import ProjectSection from "./project-section";

const HEADER_HEIGHT = 80; // same as your fixed header

type ContextType = { onThemeChange: (theme: "light" | "dark") => void };

export default function Home() {
  const location = useLocation();
  const { onThemeChange } = useOutletContext<ContextType>();

  useEffect(() => {
    document.title = "All Good Studio";
  }, []);

  // 🧭 Scroll to hash section on page load or when hash changes (your existing logic)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const y =
          el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash]);

  // 🌓 NEW: Detect which section is in view and update header theme
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-theme]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme") as
              | "light"
              | "dark";
            onThemeChange(theme);
          }
        });
      },
      { threshold: 0.5 } // active when 50% visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onThemeChange]);

  return (
    <>
      <HeroSection />
      <ProjectSection />
      <ServiceSection />
      <ResultsSection />
      <WorkflowSection />
      <TestimonialSection />
      <ComparisonSection />
      <FaqSection />
      {/* <Link to="/portfolio" state={{ category: "enterpriseux" }}>
        Enterprise UX
      </Link>
      <Link to="/portfolio" state={{ category: "websites" }}>
        Websites
      </Link> */}
    </>
  );
}
