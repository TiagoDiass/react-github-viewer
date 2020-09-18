import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    min-height: 100%
  }

  body {
    background-color: #7159c1;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
