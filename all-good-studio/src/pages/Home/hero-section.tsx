import CustomButton from "@/components/Button/Button";
import AgsContainer from "@/components/Container/Container";
import { Box, Link, Typography } from "@mui/material";

import HeroImg from '/images/hero-banner-img.svg';

import Styles from './hero-section.module.scss';

const HeroSection: React.FC = () => {
  return (
    <Box component="section" className={Styles.heroSection} data-theme="light">
      <AgsContainer>
        <Box className={Styles.heroWrapper}>
          <Box className={Styles.heroImg}>
            <img alt="Hero Banner" src={HeroImg}/>
          </Box>
          <Box className={Styles.heroContent}>
            <Typography component="h1" className={Styles.heroTitle}>
                <Box className={Styles.heroTitleTop}>
                  Launch your
                </Box>
                <Box className={Styles.heroTitleMiddle}>
                  next big idea—
                </Box>
                <Box className={Styles.heroTitleBottom}>
                  tomorrow.
              </Box>
            </Typography>
            <Box className={Styles.heroSubContent}>
              <Typography
                variant="body1"
                className={Styles.heroDescription}
              >
                Work directly with the lead designer. We use modern AI tools to work faster. We measure
                results. If we miss the agreed timebox, you get a credit.*
              </Typography>
              <Box className={Styles.linkWrapper}>
                <CustomButton
                  variant="contained"
                  href="https://calendly.com/divanshu/15min"
                  target="_blank"
                  className={Styles.linkButton}
                  endIcon={
                    <svg width="45" height="26" viewBox="0 0 45 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 13H44C32.3592 14.1892 32.1243 24.7405 32.0388 25M31.932 1C32.0175 1.25946 32.2524 11.8108 43.8932 13"
                        stroke="currentColor" stroke-width="1.5" />
                    </svg>
                  }
                >
                  Book a 15-min intro
                </CustomButton>
                <Link href="#" underline="hover" color="primary" className={Styles.link}>
                  Get a free UX audit
                </Link>
              </Box>
              <Box className={Styles.detailWrapper}>
                4.9★ client rating / 150+ launches / On-time or credit*
              </Box>
            </Box>
          </Box>
        </Box>
      </AgsContainer>
    </Box>
  );
};

export default HeroSection;
