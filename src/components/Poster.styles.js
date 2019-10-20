// @flow
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";

export const poster = css`
  position: relative;
`;

export const image = css`
  width: 100%;
`;

export const overlap = (hover: boolean) => css`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  transition: all 0.4s ease;
  height: ${hover ? "140px" : "80px"};
  padding: 20px;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, ${hover ? 1 : 0.75}),
    transparent
  );
`;

export const buttonWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const name = css`
  font-size: 1.5em;
  margin-bottom: 5px;
  color: white;
`;

export const price = css`
  font-size: 0.8em;
  color: white;
`;

export const description = css`
  color: white;
  margin-top: 10px;
  font-size: 0.9em;
  font-weight: 100;
`;

export const button = css`
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  color: white;
  padding: 5px 10px;
  transition: all 0.4s ease;
  border: 1px solid white;
  width: fit-content;
  font-size: 0.8em;
  border-radius: 5px;

  &:first-letter {
    text-transform: capitalize;
  }
`;
