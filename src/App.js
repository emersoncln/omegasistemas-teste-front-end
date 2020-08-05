import React from "react";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/header/Header";
import SearchBox from "./components/searchBox/SearchBox";

const App = () => {
  return (
    <>
      <Header />
      <SearchBox />
      <GlobalStyles />
    </>
  );
};

export default App;
