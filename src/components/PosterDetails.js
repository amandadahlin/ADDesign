// @flow
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { formatPrice } from "../assets/help-functions";
import * as CartSelector from "../selectors/CartSelectors";
import * as CartActions from "../reducers/cartReducer";
import * as styles from "./PosterDetails.styles";

const Item = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [reserved, setReserved] = React.useState(false);

  const poster = useSelector(state => CartSelector.getPosterByPathName(state));

  //   const inCart = useSelector(state =>
  //     CartSelector.isInCart(state, painting.id)
  //   );

  const buyPoster = () => {
    if (reserved) {
      dispatch(CartActions.removeFromCart(poster.id));
    } else {
      dispatch(CartActions.addToCart(poster.id));
    }
    setReserved(!reserved);
  };

  if (!poster) return null;

  return (
    <div css={styles.item}>
      <div css={styles.preview}>
        <img src={poster.image} css={styles.image} />
      </div>
      <div css={styles.info}>
        <div css={styles.name}>{poster.name}</div>
        <div>{poster.description}</div>
        <div css={styles.price}>
          {t("price")}: {formatPrice(poster.price)}
        </div>
        <div css={styles.measures}>
          <div css={styles.measurement}>
            <div css={styles.width}>
              <div>{t("height")}: </div>
              <div>{poster.height} cm</div>
            </div>
            <div css={styles.width}>
              <div>{t("width")}:</div>
              <div> {poster.width} cm</div>
            </div>
          </div>
        </div>

        <div css={styles.button(reserved)} onClick={() => buyPoster()}>
          {reserved ? t("removeFromCart") : t("addToCart")}
        </div>
      </div>
    </div>
  );
};

export default Item;
