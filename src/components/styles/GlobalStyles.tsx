import React from 'react';
import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        /* global styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          font-size: 16px;
        }

        body {
          --back-main: #ffffff;
          --back-sub: #f8fafb;
          --line: #e1e4e6;
          --text-prime: #363a3c;
          --text-second: #878d91;
          --highlight: #4c80f1;
          --shadow: rgba(54, 58, 60, 0.1);
        }

        body {
          background: var(--back-main);
          color: var(--text-prime);
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          min-height: 100vh;
          height: 100%;
        }

        /* normalize */
        ul {
          list-style: none;
        }

        a {
          color: inherit;
          text-decoration: underline;
        }

        button {
          border: 0;
          background: transparent;
          color: inherit;
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          font-size: inherit;
          cursor: pointer;

          &:focus {
            box-shadow: none;
          }
        }

        input,
        select,
        textarea {
          border: 0;
          background: transparent;
          color: inherit;
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          font-size: inherit;

          &:focus {
            box-shadow: none;
          }
        }

        /* typo */
        body {
          font-size: 16px;
          line-height: 24px;
        }

        h1 {
          font-size: 32px;
          line-height: 40px;
        }

        h2 {
          font-size: 28px;
          line-height: 36px;
        }

        h3 {
          font-size: 22px;
          line-height: 32px;
        }

        h4 {
          font-size: 18px;
          line-height: 28px;
        }
      `}
    />
  );
}
