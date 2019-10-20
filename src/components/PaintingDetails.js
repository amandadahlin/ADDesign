// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { formatPrice } from "../assets/help-functions";
import * as CartSelector from "../selectors/CartSelectors";
import * as CartActions from "../reducers/cartReducer";
import * as styles from "./PaintingDetails.styles";

const Item = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [reserved, setReserved] = React.useState(false);

  const painting = useSelector(state =>
    CartSelector.getPaintingByPathName(state)
  );

  const inCart = useSelector(state =>
    CartSelector.isInCart(state, painting.id)
  );

  const buyPainting = () => {
    if (reserved) {
      dispatch(CartActions.removeFromCart(painting.id));
    } else {
      dispatch(CartActions.addToCart(painting.id));
    }
    setReserved(!reserved);
  };

  if (!painting) return null;

  return (
    <div css={styles.item}>
      <div css={styles.preview}>
        <img src={painting.image} css={styles.image} />
      </div>
      <div css={styles.info}>
        <div css={styles.name}>{painting.name}</div>
        <div>{painting.description}</div>
        <div css={styles.price}>
          {t("price")}: {formatPrice(painting.price)}
        </div>
        <div css={styles.measures}>
          <div css={styles.measurement}>
            <div css={styles.width}>
              <div>{t("height")}: </div>
              <div>{painting.height} cm</div>
            </div>
            <div css={styles.width}>
              <div>{t("width")}:</div>
              <div> {painting.width} cm</div>
            </div>
          </div>
        </div>

        <div css={styles.button(reserved)} onClick={() => buyPainting()}>
          {reserved ? t("removeFromCart") : t("addToCart")}
        </div>
      </div>
    </div>
  );
};

export default Item;
