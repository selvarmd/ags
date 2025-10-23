import React from "react";
import { Box } from "@mui/material";
import AgsContainer from "../Container/Container";
import CustomButton from "../Button/Button";

import LogoIcon from "/images/logo-icon.svg";

import Styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={Styles.siteFooter} data-theme="dark">
      <AgsContainer>
        <Box className={Styles.footerTop}>
          <Box className={Styles.titleBlock}>
            <h2 className={Styles.title}>
              <Box className={Styles.footerTitleTop}>
                Don't just <span>dream.</span>
              </Box>
              <Box className={Styles.footerTitleBottom}>launch.</Box>
            </h2>
            <Box className={Styles.footerSubtitleWrapper}>
              <p className={Styles.footerSubtitle}>
                No sales pressure. Clear scope & quote in 24h.
              </p>
            </Box>
          </Box>
          <Box className={Styles.footerCta}>
            <CustomButton
              variant="contained"
              href="https://calendly.com/divanshu/15min"
              target="_blank"
              className={Styles.footerCtaBtn}
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
          </Box>
        </Box>
      </AgsContainer>

      <Box className={Styles.footerBottom}>
        <AgsContainer>
          <Box className={Styles.footerBottomContent}>
            <Box className={Styles.footerRight}>
              <img src={LogoIcon} alt="Logo" className={Styles.logo} />
              <p>We reply within 1 business day.</p>
            </Box>

            <Box className={Styles.footerLeft}>
              <p className={Styles.label}>Prefer email?</p>
              <a href="mailto:hellow@allgoodstudio.com" className={Styles.email}>
                hellow@allgoodstudio.com
              </a>
              <ul className={Styles.social}>
                <li>
                  <a href="#">Tw</a>
                </li>
                <li>
                  <a href="#">Lk</a>
                </li>
                <li>
                  <a href="#">In</a>
                </li>
                <li>
                  <a href="#">Bc</a>
                </li>
                <li>
                  <a href="#">Pt</a>
                </li>
              </ul>
              <p className={Styles.label}>© 2025 – Allgood Studio.</p>
            </Box>
          </Box>
        </AgsContainer>
      </Box>
    </footer>
  );
};

export default Footer;
