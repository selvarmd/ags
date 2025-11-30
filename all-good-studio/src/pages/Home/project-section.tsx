import useInView from "@/hooks/useInView/useInView";
import { Link } from "react-router-dom";
import Styles from "./project-section.module.scss";

import PortfolioStackedScroll from "./portfolio-carousel";

import Tokeet from "/images/tokeet.png";
import Iremos from "/images/iremos.png";
import DG from "/images/DG.png";
import Portfolio1 from "/images/portfolio-1.png";
import Portfolio2 from "/images/portfolio-2.png";
import Portfolio3 from "/images/portfolio-3.png";
import AgsContainer from "@/ags-components/Container/Container";

import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

function ProjectSection() {
  const { ref: titleRef, isInView: showTitle } = useInView();

  const items = [
    {
      id: 1,
      title: "Tokeet",
      type: "Web design",
      logo: Tokeet,
      image: Portfolio1,
      href: "/ags/casestudy",
    },
    {
      id: 2,
      title: "Iremos",
      type: "Web design",
      logo: Iremos,
      image: Portfolio2,
      href: "/ags/casestudy",
    },
    {
      id: 3,
      title: "D&G Suite",
      type: "Web design",
      logo: DG,
      image: Portfolio3,
      href: "/ags/casestudy",
    },
    {
      id: "custom-card",
      type: "custom",
    },
  ];
  return (
    <section
      className={Styles.projectWrapperSection}
      id="work"
      data-theme="dark"
      style={{ position: "relative" }}
    >
      <AgsContainer>
        <div className={Styles.projectSection}>
          <div className={Styles.projectTitle}>
            <div ref={titleRef}>
              {showTitle && (
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.025}
                  staggerFrom="first"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 21,
                  }}
                >
                  Explore our work/*
                </VerticalCutReveal>
              )}
            </div>
          </div>

          <div className={Styles.projectDescription}>
            Step into our world of intuitive design
            <br />
            and smart interactions
          </div>
        </div>

        <PortfolioStackedScroll items={items} />
      </AgsContainer>
    </section>
  );
}

export default ProjectSection;
