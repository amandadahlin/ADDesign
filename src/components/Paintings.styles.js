// @flow
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";

export const content = css`
  font-weight: 500;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const header = css`
  color: gray;
  font-weight: 500;

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const text = css`
  font-weight: 500;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 14px;
`;

export const info = css`
  color: darkslategray;
  font-weight: 500;
  font-size: 12px;
`;

// @media (max-width: 768px) {
//     .paintings {
//         display: flex;
//         align-content: center;
//         align-items: center;
//         flex-direction: column;
//     }
// }
