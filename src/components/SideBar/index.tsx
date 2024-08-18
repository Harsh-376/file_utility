import React from "react";
import { makeStyles } from "@material-ui/core";
import styles from "./styles";
import { Container } from "../HOC";

const useStyles = makeStyles(styles, {
  name: "SideBar",
  meta: "SideBar",
});

const SideBar = () => {
  const classes = useStyles();
  return (
    <Container classes={{ root: classes.root }}>
      {new Array(5).fill(0).map((el, indx) => (
        <button type="button">{indx}</button>
      ))}
    </Container>
  );
};

export default SideBar;
