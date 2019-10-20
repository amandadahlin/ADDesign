/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { map } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import StackGrid from "react-stack-grid";
import * as CartActions from "../reducers/cartReducer";
import * as CartSelectors from "../selectors/CartSelectors";
import Painting from "./Painting";
import * as styles from "./Paintings.styles";

const Paintings = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const items = useSelector(state => CartSelectors.getPaintings(state));

  const paintings = map(items, (painting, index) => (
    <Painting
      id={painting.id}
      key={painting.name + index}
      price={painting.price}
      image={painting.image}
      height={painting.height}
      width={painting.width}
      name={painting.name}
      description={painting.description}
    />
  ));

  return (
    <div css={styles.content}>
      <h1 css={styles.header}>{t("paintings")}</h1>

      <StackGrid columnWidth={450}>{paintings}</StackGrid>
    </div>
  );
};

export default Paintings;
