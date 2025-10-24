import React from "react";
import { Box, Typography } from "@mui/material";

import AgsContainer from "@/components/Container/Container";

import Styles from './comparison-section.module.scss';

const comparisonData = [
  { label: "Speed", us: "Up to 5 pages", agency: "4–12 weeks" },
  { label: "Access", us: "Talk directly to the lead designer", agency: "Account layers" },
  { label: "Visibility", us: "Daily updates", agency: "Weekly status" },
  { label: "Pricing", us: "Fixed scopes • Clear pricing", agency: "Change orders" },
  { label: "Accountability", us: "On-time or credit", agency: "-" },
  { label: "Support", us: "30-day included", agency: "Paid retainer" },
];

function ComparisonSection() {
  return (
    <Box component="section" id="connect" data-theme="dark" className={Styles.comparisonSection}>
      <AgsContainer>
        <Box className={Styles.titleBlock}>
          <Typography variant="h2" className={Styles.title}>
              <Box>Why choose us over a</Box>
              <Box>traditional agency?</Box>
          </Typography>
          <Box className={Styles.subtitleWrapper}>
            <Typography variant="body1" className={Styles.subtitle}>
              Fast where it helps. Careful where it counts. Fixed scopes. Clear pricing.
            </Typography>
          </Box>
        </Box>

        <Box className={Styles.comparisonBlock}>
          <Box className={Styles.comparisonTable}>
            <Box className={`${Styles.comparisonRow} ${Styles.comparisonHeader}`}>
              <Box className={`${Styles.comparisonCell} ${Styles.empty}`}></Box>
              <Box className={Styles.comparisonCell}>US</Box>
              <Box className={Styles.comparisonCell}>Traditional Agency</Box>
            </Box>

            {comparisonData.map((row, index) => (
              <Box key={index} className={Styles.comparisonRow}>
                <Box className={Styles.comparisonCell}>{row.label}</Box>
                <Box className={Styles.comparisonCell}>{row.us}</Box>
                <Box className={Styles.comparisonCell}><span>{row.agency}</span></Box>
              </Box>
            ))}
          </Box>
        </Box>
      </AgsContainer>
    </Box>
  );
}

export default ComparisonSection;
