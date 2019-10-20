// @flow
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";

export const header = css`
  display: flex;
  justify-content: space-between;
`;

export const language = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 10px;
  margin-left: 20px;
`;

export const languages = css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const links = css`
  display: flex;
  align-items: center;
`;

export const cartLink = css`
  color: gray;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-decoration: none;
  font-size: smaller;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 11px;
`;
