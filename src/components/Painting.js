/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatPrice } from "../assets/help-functions";
import * as CartActions from "../reducers/cartReducer";
import * as CartSelectors from "../selectors/CartSelectors";
import { isInCart } from "../selectors/CartSelectors";
import * as styles from "./Painting.styles";

type Props = {
  id: number,
  price: number,
  image: string,
  height: number,
  width: number,
  name: string,
  description: string
};

const Painting = ({ image, price, name, id }: Props) => {
  const [hover, setHover] = React.useState(false);
  const [reserved, setReserved] = React.useState(false);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const addToCart = () => {
    if (!id) return;
    // dispatch(CartActions.addToCart(id));
    // setReserved(true);
  };

  return (
    <div
      div
      css={styles.painting}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div css={styles.imageWrapper}>
        <img css={styles.image} src={image} />
        {hover && (
          <div css={styles.overlay} onClick={() => addToCart()}>
            <Link css={styles.link} to={`/painting/${id}`}>
              <div css={styles.moreInfo}>{t("moreInfo")}</div>
            </Link>
          </div>
        )}
      </div>
      <div>
        <div css={styles.name}>{name}</div>
        <div css={styles.price}>
          {t("price")}: {formatPrice(price)}
        </div>
      </div>
    </div>
  );
};

export default Painting;
