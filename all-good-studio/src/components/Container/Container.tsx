import React from "react";
import { Container } from "@mui/material";

import Styles from './Container.module.scss';

interface AgsContainerProps {
  children: React.ReactNode;
}

function AgsContainer({ children }: AgsContainerProps) {
  return (
    <Container
      maxWidth={false} // disable default MUI maxWidth
      className={Styles.container}
    >
      {children}
    </Container>
  );
}

export default AgsContainer;
