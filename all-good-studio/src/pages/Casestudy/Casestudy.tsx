import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import AgsContainer from "@/components/Container/Container";
import CustomButton from "@/components/Button/Button";
import Shutter from "./shutter";

import DiscoveryImg from "/images/case-studies/advance-cm/research-discovery.png";
import Grid1 from "/images/case-studies/advance-cm/grid-1.png";
import Grid2 from "/images/case-studies/advance-cm/grid-2.png";
import Grid3 from "/images/case-studies/advance-cm/grid-3.png";
import Grid4 from "/images/case-studies/advance-cm/grid-4.png";
import Grid5 from "/images/case-studies/advance-cm/grid-5.png";
import Img2 from "/images/case-studies/advance-cm/advance-cm-2.png";
import Logo from "/images/case-studies/advance-cm/all-good-studio.png";
import ResultImg from "/images/case-studies/advance-cm/best-result.png";
import ShutterImg from "/images/case-studies/advance-cm/advance-cm-1.png";
import TestiUser1 from "/images/user-1.png";
import TestiUser2 from "/images/user-2.png";
import TestiUser3 from "/images/user-3.png";
import TestiImg1 from "/images/testi-1.svg";
import TestiImg2 from "/images/testi-2.svg";
import TestiImg3 from "/images/testi-3.svg";
import User1 from "/images/case-studies/advance-cm/user-1.png";
import User2 from "/images/case-studies/advance-cm/user-2.png";

import Styles from "./casestudy.module.scss";

const CaseStudy: React.FC = () => {
  return (
    <Box component="section" className={Styles.caseStudyWrapper}>
      <AgsContainer>
        <Box className={Styles.sectionWrapper}>
          <Typography variant="h5" className={Styles.caseStudyTitle}>
            Case Study
          </Typography>

          <Box className={Styles.caseStudyBlock}>
            <Box className={Styles.titleBlock}>
              <Typography variant="h1" className={Styles.title}>
                AdvanceCM
              </Typography>
              <Typography variant="body1" className={Styles.desc}>
                AdvanceCM (formerly Tokeet) is a comprehensive property
                management platform for vacation rental hosts and property
                managers. The goal of this redesign was to modernize a legacy
                product UI, streamline workflows, and bring a new level of
                visual and functional clarity — without disrupting familiar user
                behaviors.
              </Typography>
            </Box>

            <Box className={Styles.detailsWrapper}>
              <Box className={Styles.detailsItem}>
                <label>Industry</label>
                <p>SaaS / Property Management</p>
              </Box>
              <Box className={Styles.detailsItem}>
                <label>Published</label>
                <p>2025</p>
              </Box>
              <Box className={Styles.detailsItem}>
                <label>Tools</label>
                <p>Figma · UXMint · UX Pilot · Midjourney · Notion</p>
              </Box>
              <Box className={Styles.detailsItem}>
                <label>Deliverables</label>
                <p>
                  Web App Redesign · Design System · High-Fidelity UI ·
                  Developer Handoff
                </p>
              </Box>
            </Box>
          </Box>
        </Box>

        <Shutter
          topImage={ShutterImg}
          bottomImage={ShutterImg}
          initialPercent={50}
        />

        <Box className={Styles.imgBlock} data-theme="dark">
          <img alt="" src={ShutterImg} />
        </Box>

        <Box className={Styles.blockWrapper} data-theme="light">
          <Box className={Styles.blockTitle}>
            <Typography variant="h2">
              Exciting brainstorming challenges
            </Typography>
          </Box>
          <Box className={Styles.descBlock}>
            <Typography variant="body1" className={Styles.desc}>
              The existing interface, while feature-rich, suffered from low
              discoverability and inconsistent hierarchy. Users faced visual
              overload — long data tables, redundant filters, and dated
              components that slowed their daily workflows.
            </Typography>
            <Typography variant="body1" className={Styles.subText}>
              The challenge was to elevate usability, unify the system, and
              improve visual comfort for high-frequency users managing hundreds
              of listings daily.
            </Typography>
          </Box>
        </Box>

        <Box className={Styles.imgBlock} data-theme="dark">
          <img alt="" src={Img2} />
        </Box>

        <Box className={Styles.blockWrapper} data-theme="light">
          <Box className={Styles.blockTitle}>
            <Typography variant="h2">Process Sneak Peek</Typography>
          </Box>
          <Box className={Styles.descBlock}>
            <Typography variant="body1" className={Styles.desc}>
              We followed AllGood's AI-Accelerated 4-Step Framework:
            </Typography>
            <Typography variant="body1" className={Styles.subText}>
              By combining AI-driven audits and automated wireframes, we
              accelerated decision-making and improved consistency across
              modules. The result: a fully modular design system that scaled
              faster and stayed visually consistent.
            </Typography>
          </Box>
        </Box>

        <Box className={Styles.processContainer} data-theme="dark">
          <Box className={`${Styles.processCard} ${Styles.discovery1}`}>
            <Typography variant="h3">Discovery</Typography>
            <Typography variant="body1">
              Uncovering user needs and defining the problem space.
            </Typography>
          </Box>
          <Box className={`${Styles.processCard} ${Styles.design}`}>
            <Typography variant="h3">Design</Typography>
            <Typography variant="body1">
              Turning research into meaningful digital experiences.
            </Typography>
          </Box>
          <Box className={`${Styles.processCard} ${Styles.build}`}>
            <Typography variant="h3">Build</Typography>
            <Typography variant="body1">
              Where design meets development for real-world impact.
            </Typography>
          </Box>
          <Box className={`${Styles.processCard} ${Styles.discovery2}`}>
            <Typography variant="h3">Discovery</Typography>
            <Typography variant="body1">
              Delivering value through a seamless, tested user experience.
            </Typography>
          </Box>
        </Box>

        <Box className={Styles.rdBlock} data-theme="dark">
          <Box className={Styles.rdLeft}>
            <Typography variant="h3">Research & Discovery</Typography>
            <img alt="" src={DiscoveryImg} />
          </Box>
          <Box className={Styles.rdRight}>
            <Typography variant="body1" className={Styles.rdText}>
              We began with a complete UX audit of Tokeet's legacy platform. AI
              tools (UXMint, UX Pilot) helped us analyze repetitive UI pain
              points, navigation friction, and overcomplicated workflows.
            </Typography>
            <Typography variant="body1" className={Styles.rdSubtext}>
              <span>Interviews</span> with property managers revealed that most
              tasks required too many clicks and lacked contextual focus.
            </Typography>
            <Typography variant="body1" className={Styles.rdSubtext}>
              <span>We mapped</span> these pain points into actionable UI
              patterns — resulting in a cleaner, predictable structure for every
              task.
            </Typography>
          </Box>
        </Box>

        <Box className={Styles.blockWrapper} data-theme="light">
          <Box className={Styles.blockTitle}>
            <Typography variant="h2">Design Execution</Typography>
          </Box>
          <Box className={Styles.descBlock}>
            <Typography variant="body1" className={Styles.desc}>
              The new AdvanceCM interface brings a refreshed and humanized
              approach:
            </Typography>
          </Box>
        </Box>

        <Box className={Styles.gridWrapper} data-theme="light">
          <Box className={Styles.gridItem}>
            <Box className={Styles.gridImg}>
              <img alt="" src={Grid1} />
            </Box>
            <Typography variant="body1">
              Introduced an elevated glassy interface with soft gradients and
              calm whitespaces.
            </Typography>
          </Box>
          <Box className={Styles.gridItem}>
            <Box className={Styles.gridImg}>
              <img alt="" src={Grid2} />
            </Box>
            <Typography variant="body1">
              Reduced cognitive load with iconography, soft color-coded
              statuses, and a unified sidebar system.
            </Typography>
          </Box>
          <Box className={Styles.gridItem}>
            <Box className={Styles.gridImg}>
              <img alt="" src={Grid3} />
            </Box>
            <Typography variant="body1">
              Rebuilt all modals and data tables with better spacing, visual
              grouping, an micro-interaction feedback.
            </Typography>
          </Box>
          <Box className={Styles.gridItem}>
            <Box className={Styles.gridImg}>
              <img alt="" src={Grid4} />
            </Box>
            <Typography variant="body1">
              Designed scalable cards and dynamic dashboards with high
              information density yet clean alignment.
            </Typography>
          </Box>
          <Box className={Styles.gridItem}>
            <Box className={Styles.gridImg}>
              <img alt="" src={Grid5} />
            </Box>
            <Typography variant="body1">
              Standardized colors, icons, and components for consistency across
              12+ modules.
            </Typography>
          </Box>
        </Box>

        <Box className={Styles.resultBlock} data-theme="dark">
          <Box className={Styles.resultLeft}>
            <Typography variant="h3">
              The best result on your business
            </Typography>
            <img alt="" src={ResultImg} />
          </Box>
          <Box className={Styles.resultRight}>
            <Box className={Styles.resultItem}>
              <Typography variant="body1" className={Styles.resultText}>
                improvement in task completion time
              </Typography>
              <Box className={Styles.value}>45%</Box>
            </Box>
            <Box className={Styles.resultItem}>
              <Typography variant="body1" className={Styles.resultText}>
                fewer visual errors in user testing
              </Typography>
              <Box className={Styles.value}>32%</Box>
            </Box>
            <Box className={Styles.resultItem}>
              <Typography variant="body1" className={Styles.resultText}>
                faster learning curve for new users
              </Typography>
              <Box className={Styles.value}>60% </Box>
            </Box>
            <Box className={Styles.resultItem}>
              <Typography variant="body1" className={Styles.resultText}>
                reduction in developer rework
              </Typography>
              <Box className={Styles.value}>40%</Box>
            </Box>
          </Box>
        </Box>

        <Box className={Styles.blockWrapper}>
          <Box className={Styles.blockTitle}>
            <Typography variant="h2">Fabulous outcome</Typography>
          </Box>
          <Box className={Styles.descBlock}>
            <Typography variant="body1" className={Styles.desc}>
              The redesign redefined AdvanceCM's product identity — transforming
              it from a transactional admin tool into a premium SaaS platform.
            </Typography>
            <Typography variant="body1" className={Styles.subText}>
              The interface now communicates trust, clarity, and precision —
              helping teams focus on insights, not interfaces.
            </Typography>
          </Box>
        </Box>

        <Box className={Styles.testimonialBlock}>
          <Typography variant="h4">What Clients Saying...</Typography>
          <Box className={Styles.testiWrapper}>
            <Box className={Styles.testiContainer}>
              <Box className={Styles.userWrapper}>
                <Box className={Styles.userImg}>
                  <img alt="" src={User1} />
                </Box>
                <Typography variant="h5">Cambria Palencia</Typography>
              </Box>
              <Box className={Styles.testiContent}>
                <Box className={Styles.templateTag}>AdvanceCM · Dashboard</Box>
                <Box className={Styles.message}>
                  AdvanceCM’s automation tools have cut our workload by more
                  than half—guest messaging, booking calendar, even smart lock
                  codes are handled seamlessly.
                </Box>
                <Box className={Styles.count}>
                  12 screens to 7; cleaner paths.
                </Box>
              </Box>
            </Box>
            <Box className={Styles.testiContainer}>
              <Box className={Styles.userWrapper}>
                <Box className={Styles.userImg}>
                  <img alt="" src={User2} />
                </Box>
                <h5>Joseph Vines</h5>
              </Box>
              <Box className={Styles.testiContent}>
                <Box className={Styles.templateTag}>AdvanceCM · Dashboard</Box>
                <Box className={Styles.message}>
                  AdvanceCM’s automation tools have cut our workload by more
                  than half—guest messaging, booking calendar, even smart lock
                  codes are handled seamlessly.
                </Box>
                <Box className={Styles.count}>
                  12 screens to 7; cleaner paths.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={Styles.saasBlock} data-theme="dark">
          <Box className={Styles.saasLeft}>
            <img alt="" src={Logo} />
          </Box>
          <Box className={Styles.saasRight}>
            <Typography variant="h4">Reflection / Learnings</Typography>
            <Typography variant="body1" className={Styles.saasText}>
              Designing for a mature SaaS platform taught us to balance
              innovation with continuity. AI helped uncover friction fast — but
              empathy shaped the solution.
            </Typography>
            <Typography variant="body1" className={Styles.saasSubtext}>
              The result reflects AllGood Studio's mission: to design clarity at
              speed, without compromise.
            </Typography>
            <CustomButton
              variant="contained"
              href="#"
              target="_blank"
              className={Styles.buildBtn}
              endIcon={
                <svg
                  width="45"
                  height="26"
                  viewBox="0 0 45 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13H44C32.3592 14.1892 32.1243 24.7405 32.0388 25M31.932 1C32.0175 1.25946 32.2524 11.8108 43.8932 13"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
              }
            >
              Let's Build Better SaaS Products Together
            </CustomButton>
          </Box>
        </Box>

        <Box className={Styles.similarBlock} data-theme="light">
          <Typography variant="h4" className={Styles.sectionTitle}>
            Similar works
          </Typography>
          <Box className={Styles.gridContainer}>
            <Box className={Styles.containerItem}>
              <span className={Styles.tag}>Travel · App</span>
              <Box className={Styles.authorName}>
                <Box className={Styles.authorImg}>
                  <img src={TestiUser1} alt="" />
                </Box>
                <Typography variant="h3">Mirza Kim</Typography>
              </Box>
              <Typography variant="h4">checkout, simplified.</Typography>
              <Typography variant="body1">
                From 12 steps to 7. Faster, clearer.
              </Typography>
              <Box className={Styles.testiImg}>
                <img src={TestiImg1} alt="" />
              </Box>
              <Box className={Styles.detWrapper}>
                <Box className={Styles.percentTag}>+38% conversion</Box>
                <Link to="./hybiz.html" className={Styles.readLink}>
                  Read the case
                </Link>
              </Box>
            </Box>
            <Box className={Styles.containerItem}>
              <span className={Styles.tag}>SaaS · App</span>
              <Box className={Styles.authorName}>
                <Box className={Styles.authorImg}>
                  <img src={TestiUser2} alt="" />
                </Box>
                <Typography variant="h3">Robert De Niro</Typography>
              </Box>
              <Typography variant="h4">MVP in 48h.</Typography>
              <Typography variant="body1">
                9 interviews; 2 test rounds; 3 key insights.
              </Typography>
              <Box className={Styles.testiImg}>
                <img src={TestiImg2} alt="" />
              </Box>
              <Box className={Styles.detWrapper}>
                <Box className={Styles.percentTag}>Time-to-test: 48h</Box>
                <Link to="./hybiz.html" className={Styles.readLink}>
                  Read the case
                </Link>
              </Box>
            </Box>
            <Box className={Styles.containerItem}>
              <span className={Styles.tag}>Fintech · Dashboard</span>
              <Box className={Styles.authorName}>
                <Box className={Styles.authorImg}>
                  <img src={TestiUser3} alt="" />
                </Box>
                <Typography variant="h3">Cambria Palencia</Typography>
              </Box>
              <Typography variant="h4">fewer screens, better flow.</Typography>
              <Typography variant="body1">
                12 screens to 7; cleaner paths.
              </Typography>
              <Box className={Styles.testiImg}>
                <img src={TestiImg3} alt="" />
              </Box>
              <Box className={Styles.detWrapper}>
                <Box className={Styles.percentTag}>-47% time-to-task</Box>
                <Link to="./hybiz.html" className={Styles.readLink}>
                  Read the case
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </AgsContainer>
    </Box>
  );
};

export default CaseStudy;
