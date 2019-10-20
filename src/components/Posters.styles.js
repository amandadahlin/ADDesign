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
