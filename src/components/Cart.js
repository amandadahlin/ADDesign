import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { map, isEmpty } from "lodash";
import { useTranslation, initReactI18next } from "react-i18next";
import Checkout from "./Checkout";
import { Route, Link } from "react-router-dom";
import * as CartActions from "../reducers/cartReducer";
import * as CartSelectors from "../selectors/CartSelectors";
import { formatPrice } from "../assets/help-functions";
import "./Cart.css";

const Cart = () => {
  const [storedCart, setStoredCart] = React.useState("");
  const dispatch = useDispatch();

  const cart = useSelector(state => CartSelectors.getShoppingCart(state));
  const totalCost = useSelector(state => CartSelectors.getCost(state));

  const goToCheckout = () => {
    return <Route exact path="/" component={Checkout} />;
  };

  const removeItem = id => {
    dispatch(CartActions.removeFromCart(id));
  };

  const mergeCart = (stored, cart) => {
    return cart.concat(stored);
  };

  const table = map(cart, (product, index) => (
    <div className="preview" key={product.name + index}>
      <div
        className="thumbnail"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="info">
        <h2>{product.name}:</h2>
        <p>{formatPrice(product.price)}</p>
      </div>
      <div className="removeProduct">
        <button onClick={() => removeItem(product)}>
          Ta bort från varukorg
        </button>
      </div>
    </div>
  ));

  const content = isEmpty(table) ? <p>Inga varor i korgen</p> : table;

  return (
    <div className="body">
      <h1 className="header">Varukorg</h1>
      <hr />
      <div>{content}</div>
      <div className="summary">
        <div>Totalt pris: {formatPrice(totalCost)}</div>
        <Link to="/checkout">Till kassan</Link>
      </div>
    </div>
  );
};

export default Cart;
