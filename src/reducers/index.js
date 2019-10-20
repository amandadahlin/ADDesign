import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { cart, stock } from "./cartReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    cart,
    stock
  });
