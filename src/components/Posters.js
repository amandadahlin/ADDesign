// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { map } from "lodash";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import StackGrid from "react-stack-grid";
import { formatPrice } from "../assets/help-functions";
import Poster from "./Poster";
import * as CartSelectors from "../selectors/CartSelectors";
import * as styles from "./Posters.styles";

const Posters = () => {
  const { t } = useTranslation();

  const posters = useSelector(state => CartSelectors.getPosters(state));

  return (
    <div css={styles.content}>
      <h1 css={styles.header}>{t("posters")}</h1>

      <StackGrid columnWidth={300} gutterWidth={15} gutterHeight={15}>
        {map(posters, (poster, index) => (
          <Poster poster={poster} key={index} />
        ))}
      </StackGrid>
    </div>
  );
};

export default Posters;
