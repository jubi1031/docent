import {
  css
} from 'styled-components'

const Reset = css`
  :focus-visible {
    outline: 2px auto var(--focus);
    outline-offset: 2px;
  }

  :root[data-theme="dark"] {
    svg {
      filter: invert(100%);
      transition: filter .24s;
    }
  }

  * {
    margin: 0;
    padding: 0;
    letter-spacing: -0.6px;
    -webkit-font-smoothing: antialiased;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    overflow: hidden;
    overscroll-behavior-y: none;
  }

  html {
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: "Spoqa Han Sans Neo", "SF Pro Display", -apple-system, system-ui, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
    font-size: 16px;
    line-height: 1.42857143;
    letter-spacing: -0.6px;
    color: var(--text-01);
    background-color: var(--theme-hex);
    transition: color .24s ease 0s, background .24s ease 0s;
    min-width: 320px;
    user-select: none;
  }

  @supports(padding: max(0px)) {
    body, header, footer {
      padding-left: min(0vmin, env(safe-area-inset-left));
      padding-right: min(0vmin, env(safe-area-inset-right));
      padding-top: min(0vmin, env(safe-area-inset-top));
      padding-bottom: min(0vmin, env(safe-area-inset-bottom));
    }
  }

  h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    word-break: keep-all;
    line-height: 1;
  }

  a {
    color: inherit; 
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    color: var(--text-01);
  }

  button svg,
  a svg {
    pointer-events: none;
  }

  img {
    max-width: 100%;
    vertical-align: top;
    object-fit: cover;
    transition: opacity 0.3s;
    transition-delay: 0.1s;
  }

  input, button, textarea, select {
    font: inherit;
  }

  svg {
    display: block;
  }

  i {
    font-style: normal;
  }

  li {
    list-style: none;
  }

  #root, #__next {
    height: 100vh;
    isolation: isolate;
  }
`

export default Reset