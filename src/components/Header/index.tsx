import React from "react";
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Container } from "../HOC";

const useStyles = makeStyles(styles, {
  name: "Header",
  meta: "Header",
});

const Header = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h5" align="center">
        File Utility
      </Typography>
    </Container>
  );
};

export default Header;
