// @flow
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";

export const info = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const preview = css`
  flex: 1;
`;

export const measures = css`
  margin-top: 30px;
`;

export const price = css`
  margin-top: 20px;
  color: gray;
  font-size: 14px;

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const item = css`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const name = css`
  font-size: 2em;
  margin-bottom: 10px;
`;

export const image = css`
  width: 100%;
`;

export const button = (disabled: boolean) => css`
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid ${disabled ? "gray" : "black"};
  width: fit-content;
  cursor: pointer;
  color: ${disabled ? "gray" : "black"};
  margin-top: 30px;

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const width = css`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  font-size: 12px;

  & > div {
    width: 60px;
    margin-top: 3px;
  }

  & > div:first-letter {
    text-transform: capitalize;
  }
`;

export const measurement = css`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  color: gray;

  & > span:first-letter {
    text-transform: capitalize;
  }
`;
