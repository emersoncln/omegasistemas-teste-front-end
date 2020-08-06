import React from "react";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/header/Header";
import SearchBox from "./components/searchBox/SearchBox";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchBox />
        <GlobalStyles />
      </Container>
    </>
  );
};

export default App;
