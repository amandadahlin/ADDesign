import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {cart, stock} from './cartReducer'
import shop from './cartReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  cart,
  shop
})

export default rootReducer;