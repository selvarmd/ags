import React from "react";
import { Box, Typography } from "@mui/material";
import Styles from "./workflow-section.module.scss";
import AgsContainer from "@/components/Container/Container";

import Flow1 from '/images/flow-1.svg';
import Flow2 from '/images/flow-2.svg';
import Flow3 from '/images/flow-3.svg';
import Flow4 from '/images/flow-4.svg';

interface WorkflowStep {
  step: string;
  image: string;
  title: string;
  description: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    image: Flow1,
    title: "Discovery & Alignment",
    description: "Short kickoff call. Goals, scope, timeline, and ‘definition of done’.",
  },
  {
    step: "02",
    image: Flow2,
    title: "Plan & Design with AI",
    description: "We speed up research and first drafts with AI. You see options quickly.",
  },
  {
    step: "03",
    image: Flow3,
    title: "Expert Build & Review",
    description: "An experienced designer checks every deliverable. Clean, accessible build.",
  },
  {
    step: "04",
    image: Flow4,
    title: "Launch & Support",
    description: "Staging review, analytics, and rollback plan. 30 days of support after launch.",
  },
];

const WorkflowSection: React.FC = () => {
  return (
    <Box component="section" className={Styles.workflowSection} data-theme="light" id="stories">
      <AgsContainer>
        <Box className={Styles.titleBlock}>
          <Typography variant="h2" component="h2" className={Styles.workflowTitle}>
              <Box>
                How we deliver premium
              </Box>
              <Box>
                quality at warp speed.
              </Box>
          </Typography>
          <Box className={Styles.subtitle}>
            <Typography component="p" className={Styles.workflowSubtitle}>
              A simple workflow that keeps you informed at every step.
            </Typography>
          </Box>
        </Box>

        <Box className={Styles.workflowCards}>
          {workflowSteps.map((step, index) => (
            <Box key={index} className={Styles.workflowCard}>
              <Box className={Styles.step}>{step.step}</Box>
              <img src={step.image} alt={step.title} />
              <Typography variant="h3">{step.title}</Typography>
              <Typography variant="body2">{step.description}</Typography>
            </Box>
          ))}
        </Box>
      </AgsContainer>
    </Box>
  );
};

export default WorkflowSection;
