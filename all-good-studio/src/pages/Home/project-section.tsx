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

import LiquidEther from "../../components/LiquidEther.jsx";

function ProjectSection() {
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
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {/* <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        /> */}
      </div>
      <AgsContainer>
        {/* -------- Title Section -------- */}
        <div className={Styles.projectSection}>
          <div className={Styles.projectTitle}>
            <div>Explore our work/*</div>
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
