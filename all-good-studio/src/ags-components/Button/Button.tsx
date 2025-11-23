// src/components/UI/CustomButton/CustomButton.tsx
import React, { ReactNode } from "react";
import { Box, Button, IconButton } from "@mui/material";
import Styles from "./Button.module.scss";

interface CustomButtonProps {
  children: ReactNode;
  href?: string; // external or internal link
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained" | "icon";
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export default function CustomButton({
  children,
  href,
  onClick,
  variant = "contained",
  className,
  target,
  rel,
  disabled,
  startIcon,
  endIcon,
}: CustomButtonProps) {
  return (
    <Box className={Styles.btnWrapper}>
      {variant === "icon" ? (
        <IconButton
          component={href ? "a" : "button"}
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          disabled={disabled}
          className={`${Styles.button} ${Styles.icon} ${className}`}
        >
          {startIcon || endIcon || children}
        </IconButton>
      ) : (
        <Button
          variant={variant}
          component={href ? "a" : "button"}
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
          className={`${Styles.button} ${Styles[variant]} ${className}`}
        >
          {children}
        </Button>
      )}
    </Box>
  );
}
