import css from "minify-css.macro";
// Slightly augments the original by Andy Bell
// https://hankchizljaw.com/wrote/a-modern-css-reset/
export default css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    word-wrap: break-word;
    text-size-adjust: 100%;
  }

  body {
    scroll-behavior: smooth;
  }

  ul,
  ol {
    padding: 0;
    list-style: none;
  }

  nav {
    border: 0;
  }

  video,
  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  [hidden] {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
