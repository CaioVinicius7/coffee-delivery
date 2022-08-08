import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
    transition: 0.1s;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
