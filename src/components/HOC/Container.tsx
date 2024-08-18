import React from "react";
import { Container as MUIContainer, ContainerProps } from "@material-ui/core";

const Container = (props: ContainerProps) => (
  <MUIContainer disableGutters maxWidth={false} {...props} />
);

export default Container;
