/** @jsx jsx */
import { css } from "@emotion/core";

export const icon = (color: string) => css`
  cursor: pointer;

  svg {
    path {
      fill: ${color};
    }
    circle {
      fill: ${color};
    }
  }
`;
