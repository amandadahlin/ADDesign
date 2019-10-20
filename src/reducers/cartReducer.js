import { remove } from "lodash";
import { initialStockState } from "../assets/mockData";

export const ADD_TO_CART = "reducers/ADD_TO_CART";
export const REMOVE_FROM_CART = "reducers/REMOVE_FROM_CART";
export const GET_COST = "recuders/GET_COST";
export const GET_CART_SIZE = "reducers/GET_CART_SIZE";
export const RECEIVE_SHOPPING_CART = "reducers/RECEIVE_SHOPPING_CART";
export const REQUEST_PAINTING = "reducers/REQUEST_PAINTING";
export const RECEIVE_PAINTING = "reducers/RECEIVE_PAINTING";
export const REQUEST_SHOPPING_CART = "reducers/REQUEST_SHOPPING_CART";
export const REQUEST_ALL_PAINTINGS = "reducers/REQUEST_ALL_PAINTINGS";
export const RECEIVE_ALL_PAINTINGS = "reducers/RECEIVE_ALL_PAINTINGS";

export const OPEN_MODAL = "reducers/OPEN_MODAL";

const initialState = {
  products: []
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.concat(action.payload)
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: remove(
          state.products,
          product => product === action.payload.id
        )
      };
    case RECEIVE_SHOPPING_CART:
      return {
        ...state
      };
    case REQUEST_PAINTING:
      return {
        ...state,
        id: action.id
      };
    case RECEIVE_PAINTING:
      return {
        ...state,
        id: action.payload
      };
    case GET_COST:
      return {
        ...state
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true
      };
    default:
      return state;
  }
};

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: id
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const requestPainting = id => {
  return dispatch => {
    dispatch({
      type: REQUEST_PAINTING,
      id: id
    });
  };
};

export const receivePainting = painting => {
  return dispatch => {
    dispatch({
      type: RECEIVE_PAINTING,
      payload: painting
    });
  };
};

export const requestShoppingCart = () => {
  dispatch => {
    dispatch({
      type: REQUEST_SHOPPING_CART
    });
  };
};

export const receiveShoppingCart = () => {
  return dispatch => {
    dispatch({
      type: RECEIVE_SHOPPING_CART
    });
  };
};

export const stock = (state = initialStockState, action) => {
  switch (action.type) {
    case REQUEST_ALL_PAINTINGS:
      return {
        ...state,
        paintings: initialStockState
      };
    default:
      return state;
  }
};

export const getStock = () => ({
  type: REQUEST_ALL_PAINTINGS
});

export default stock;
