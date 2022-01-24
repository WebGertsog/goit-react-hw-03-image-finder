import { Global, css } from '@emotion/react';

const styles = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background-color: #e1ffff;
    color: #010101;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;

export const GlobalCSS = () => {
  return <Global styles={styles} />;
};
