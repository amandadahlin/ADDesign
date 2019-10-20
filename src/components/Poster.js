// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import StackGrid from "react-stack-grid";
import { formatPrice } from "../assets/help-functions";
import * as CartSelectors from "../selectors/CartSelectors";
import * as styles from "./Poster.styles";

type Props = {
  poster: anu
};

const Poster = ({ poster }: Props) => {
  const [hover, setHover] = React.useState(false);
  const { t } = useTranslation();

  return (
    <div
      css={styles.poster}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img css={styles.image} src={poster.image} />
      <div css={styles.overlap(hover)}>
        <div css={styles.name}>{poster.name}</div>
        <div css={styles.price}>{formatPrice(poster.price)}</div>
        {hover && (
          <React.Fragment>
            <div css={styles.description}>{poster.description}</div>
            <div css={styles.buttonWrapper}>
              <Link to={`/poster/${poster.id}`} css={styles.button}>
                {t("moreInfo")}
              </Link>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Poster;
