/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as styles from "./Icon.styles";

type Props = {
  size?: number,
  type: string,
  color?: string
};

const Icon = ({ type, size, color }: Props) => {
  const icon = icons[type];

  return (
    <div
      css={styles.icon(color)}
      style={size ? { width: size + "px", height: size + "px" } : ""}
    >
      {icon}
    </div>
  );
};

export default Icon;

const icons = {
  add: (
    <svg viewBox="0 0 448 448">
      <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
    </svg>
  ),
  swedish: (
    <svg viewBox="0 0 128 128">
      <path d="m12 27.751h104v72.497h-104z" fill="#0b55b1" />
      <path
        d="m116 57.667h-60.917v-29.916h-12.666v29.916h-30.417v12.666h30.417v29.916h12.666v-29.916h60.917z"
        fill="#fed953"
      />
    </svg>
  ),
  english: (
    <svg viewBox="0 0 128 128">
      <path d="m12 27.751h104v72.497h-104z" fill="#0b55b1" />
      <path
        d="m116 57.667h-60.917v-29.916h-12.666v29.916h-30.417v12.666h30.417v29.916h12.666v-29.916h60.917z"
        fill="#fed953"
      />
    </svg>
  )
};
