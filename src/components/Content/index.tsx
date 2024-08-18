import React from "react";
import { makeStyles } from "@material-ui/core";
import styles from "./styles";
import { Container } from "../HOC";

const useStyles = makeStyles(styles, {
  name: "Content",
  meta: "Content",
});

const Content = () => {
  const classes = useStyles();
  return <Container classes={{ root: classes.root }}>Content</Container>;
};

export default Content;
