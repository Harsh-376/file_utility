import React from "react";
import Header from "./components/Header";
import styles from "./App.styles";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import { Container } from "./components/HOC";
import Footer from "./components/Footer";

const useStyles = makeStyles(styles, {
  name: "App",
  meta: "App",
});

function App() {
  const classes = useStyles();
  return (
    <Container id="App-root" classes={{ root: classes.root }}>
      <Header />
      <Container id="App-content" classes={{ root: classes.contentContainer }}>
        <SideBar />
        <Content />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
