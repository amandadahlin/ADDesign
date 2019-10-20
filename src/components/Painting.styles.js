// @flow
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";

export const painting = css`
  position: relative;
  margin-bottom: 20px;
`;

export const overlay = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const imageWrapper = css`
  position: relative;
`;

export const image = css`
  width: 100%;
`;

export const name = css`
  font-size: 1.5em;
  font-weight: 200;
`;

export const price = css`
  font-size: 0.8em;
  color: gray;
  margin-top: 3px;

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const link = css`
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }
`;

export const moreInfo = css`
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px 15px;
  color: white;

  &:first-letter {
    text-transform: capitalize;
  }
`;
