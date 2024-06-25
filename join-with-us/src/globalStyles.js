// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: ${({ theme }) => theme.lineHeight};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.primary};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default GlobalStyle;
