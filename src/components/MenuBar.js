/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { formatPrice } from "../assets/help-functions";
import * as CartSelector from "../selectors/CartSelectors";
import * as styles from "./MenuBar.styles";

const MenuBar = () => {
  const { t } = useTranslation();

  const cartSize = useSelector(state => CartSelector.getCartSize(state));
  const cart = useSelector(state => CartSelector.getShoppingCart(state));
  const totalCost = useSelector(state => CartSelector.getCost(state));

  return (
    <div css={styles.cart}>
      <img
        css={styles.cartIcon}
        alt="shopping cart logo"
        height="25"
        width="25"
        src="https://image.flaticon.com/icons/png/128/25/25619.png"
      />
      <div css={styles.cartInfo}>
        <div>Varukorg ({cartSize})</div>
        <div> {formatPrice(totalCost)}</div>
      </div>
    </div>
  );
};

export default MenuBar;
