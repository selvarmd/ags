import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <Box className={Styles.notFoundWrapper}>
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFound;
