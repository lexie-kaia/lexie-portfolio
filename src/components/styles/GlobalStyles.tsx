import React from 'react';
import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
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
          line-height: 1;
          min-height: 100vh;
        }

        ul {
          list-style: none;
        }

        a {
          color: inherit;
          text-decoration: none;
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
      `}
    />
  );
}
