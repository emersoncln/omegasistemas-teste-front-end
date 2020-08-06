import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  font-family: Roboto, Arial, Verdana, sans-serif;
  height: 100%;
}

body {
  font: 14px sans-serif;
  background: lavender;
  color: #333;
  -webkit-font-smoothing: antialiased !important;
}

.container-itens > div {
  float: left;
  min-height: 163px;
}

.container-itens {
  display: flex;
}


@media (min-width: 320px) {
  .container-itens {
    flex-direction: column;
  }
}

@media (min-width: 768px) {
  .MuiButton-contained {
    max-width: 200px;
  }

  .container-itens {
    display: inline-block;
  }

  .container-itens > div {
    width: calc(50% - 20px);
    float: left;
  }
}

@media (min-width: 1024px) {
  .container-itens > div {
    width: calc(50% - 20px);
    padding-left: 5px;
  }
}


@media (min-width: 1280px) {
  .container-itens > div {
    width: calc(50% - 20px);
  }
}
`;
