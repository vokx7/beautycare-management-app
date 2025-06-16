import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    font-style: ${({ theme }) => theme.fonts.primary}
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;
