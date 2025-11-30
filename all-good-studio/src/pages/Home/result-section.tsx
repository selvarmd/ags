import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Typography, Box } from "@mui/material";

import AgsContainer from "@/ags-components/Container/Container";

import Logo1 from "/images/logo-1.svg";
import Logo2 from "/images/logo-2.svg";
import Logo3 from "/images/logo-3.svg";
import Logo4 from "/images/logo-4.svg";
import Logo5 from "/images/logo-5.svg";

import Styles from "./result-section.module.scss";
import { LogoCloud } from "@/components/logo-cloud-3";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

const logos = [
  {
    src: Logo1,
    alt: "Logo",
  },
  {
    src: Logo2,
    alt: "Logo",
  },
  {
    src: Logo3,
    alt: "Logo",
  },
  {
    src: Logo4,
    alt: "Logo",
  },
  {
    src: Logo5,
    alt: "Logo",
  },
  {
    src: Logo1,
    alt: "Logo",
  },
  {
    src: Logo2,
    alt: "Logo",
  },
];

interface Stat {
  number: string;
  label: string;
}

const stats: Stat[] = [
  { number: "15+", label: "rapid launches / quarter" },
  { number: "100+", label: "clients served since 2019" },
  { number: "10+", label: "specialists on call" },
  { number: "5+", label: "business-day average for standard" },
  { number: "99%", label: "on-time delivery (last 12 months)" },
];

const RollingDigit: React.FC<{ digit: string; trigger: boolean }> = ({
  digit,
  trigger,
}) => {
  const [rolled, setRolled] = useState(false);

  useEffect(() => {
    if (trigger) {
      const timeout = setTimeout(() => setRolled(true), Math.random() * 500);
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  return (
    <Box className={`${Styles.digitWrapper} ${rolled ? Styles.roll : ""}`}>
      <Box className={Styles.digitList}>
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i}>{i}</span>
        ))}
        <span>{digit}</span>
      </Box>
    </Box>
  );
};

const OdometerNumber: React.FC<{ number: string; animate: boolean }> = ({
  number,
  animate,
}) => {
  const digits = number.replace(/\D/g, "").split("");
  const suffix = number.replace(/[0-9]/g, "");
  return (
    <Box className={Styles.odometerWrapper}>
      {digits.map((digit, i) => (
        <RollingDigit key={i} digit={digit} trigger={animate} />
      ))}
      {suffix && <span className={Styles.suffix}>{suffix}</span>}
    </Box>
  );
};

const ResultsSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: titleRef, inView: showTitle } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      component="section"
      className={Styles.resultSection}
      id="process"
      data-theme="light"
      ref={ref}
    >
      <AgsContainer>
        <Box className={Styles.titleBlock}>
          <Typography
            variant="h2"
            component="h2"
            className={Styles.resultTitle}
            ref={titleRef}
          >
            {/* <Box>Results that speak</Box>
            <Box>for themselves.</Box> */}
            {showTitle && (
              <>
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
                  Rapid, premium digital
                </VerticalCutReveal>
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.025}
                  staggerFrom="last"
                  reverse={true}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 21,
                    delay: 0.5,
                  }}
                >
                  solutions—expertly
                </VerticalCutReveal>
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.025}
                  staggerFrom="center"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 21,
                    delay: 1.1,
                  }}
                >
                  delivered.
                </VerticalCutReveal>
              </>
            )}
          </Typography>
        </Box>

        <Box className={Styles.stats}>
          {stats.map((stat, i) => (
            <Box key={i} className={Styles.statItem}>
              <Box className={Styles.numberWrapper}>
                <OdometerNumber number={stat.number} animate={inView} />
              </Box>
              <Typography variant="body2" className={Styles.labelText}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

        <LogoCloud logos={logos} className="logo-cloud-wrapper" />
      </AgsContainer>
    </Box>
  );
};

export default ResultsSection;
