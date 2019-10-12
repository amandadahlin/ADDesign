import { combineReducers } from 'redux'
import getStock from "../assets/mockData"

export const ADD_TO_CART = 'reducers/ADD_TO_CART'
export const REMOVE_FROM_CART = 'reducers/REMOVE_FROM_CART';
export const GET_COST = 'recuders/GET_COST'
export const GET_CART_SIZE = 'reducers/GET_CART_SIZE'
export const RECEIVE_SHOPPING_CART = 'reducers/RECEIVE_SHOPPING_CART'
export const REQUEST_PAINTING = 'reducers/REQUEST_PAINTING'
export const RECEIVE_PAINTING = 'reducers/RECEIVE_PAINTING'
export const REQUEST_SHOPPING_CART = 'reducers/REQUEST_SHOPPING_CART'
export const REQUEST_ALL_PAINTINGS = 'reducers/REQUEST_ALL_PAINTINGS'
export const RECEIVE_ALL_PAINTINGS = 'reducers/RECEIVE_ALL_PAINTINGS'

export const OPEN_MODAL = 'reducers/OPEN_MODAL';

const initialState = {
  products: []
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TO_CART:
        return {
            ...state,
            products: state.products.concat(action.payload)
        }
      case REMOVE_FROM_CART:
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload.id)
        }
      case RECEIVE_SHOPPING_CART:
        return {
          ...state,
        }
      case REQUEST_PAINTING:
        return {
          ...state,
          id: action.id
        }
      case RECEIVE_PAINTING: 
        return {
          ...state,
          id: action.payload
        }
      case GET_COST:
        return {
          ...state
        }
      case OPEN_MODAL:
        return {
            ...state,
            modalOpen: true
        }
      default:
          return state
  }
}

export const addToCart = (painting) => {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: painting
    })
  }
}

export const removeFromCart = (id) => {
  return dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id
    })
  }
}

export const requestPainting = (id) => {
  return dispatch => {
    dispatch({
      type: REQUEST_PAINTING,
      id: id
    })
  }
}

export const receivePainting = (painting) => {
  return dispatch => {
    dispatch({
      type: RECEIVE_PAINTING,
      payload: painting
    })
  }
}

export const requestShoppingCart = () => {
  dispatch => {
    dispatch({
      type: REQUEST_SHOPPING_CART
    })
  }
}

export const receiveShoppingCart = () => {
  return dispatch => {
    dispatch({
      type: RECEIVE_SHOPPING_CART
    })
  }
}

export const stock = (state = {paintings: []}, action) => {
  switch (action.type) {
    case REQUEST_ALL_PAINTINGS:
      return {
        ...state
      }
    case RECEIVE_ALL_PAINTINGS:
      return {
        ...state,
        paintings: action.payload
      }
    default:
      return state
  }
}

export const requestStock = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_ALL_PAINTINGS
    })
    getStock().then( (stock) => dispatch(receiveStock(stock)))
  }
}

export const receiveStock = (paintings) => {
  return {
    type: RECEIVE_ALL_PAINTINGS,
    payload: paintings
  }
}

export const openModal = (painting) => {
  return dispatch => {
    dispatch({
      type: OPEN_MODAL,
      payload: painting
    })
  }
}

const shop = combineReducers({
  stock,
  cart
})

export default shop;