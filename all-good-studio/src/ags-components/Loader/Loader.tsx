// src/components/Loader/Loader.tsx
import React from "react";
import Box from "@mui/material/Box";
import Styles from "./Loader.module.scss";

import PageLoaderImg from '/images/loader/logo.gif';
import IconLoaderImg from '/images/loader/logo-icon.gif';

interface LoaderProps {
  /** 'page' for full-screen overlay, 'section' for inline loader */
  mode?: "page" | "section";
}

function Loader({ mode = "page" }: LoaderProps) {
  if (mode === "page") {
    return (
      <Box className={Styles.pageLoader}>
        <img alt="All Good Studio" src={PageLoaderImg}/>
      </Box>
    );
  }

  // Section loader
  return (
    <Box className={Styles.sectionLoader}>
        <img alt="All Good Studio" src={IconLoaderImg}/>
    </Box>
  );
}

export default Loader;
