import {head, sumBy, find} from "lodash";

export const getCartSize = state => { return state.shop.cart.products.length };
export const getStock = state => {
    if (!state || !state.shop || !state.shop.stock) return;
    return state.shop.stock.paintings };
export const getShoppingCart = state => {return state.shop.cart.products}
export const getPainting = state => { return head(getStock()) }
export const getCost = state => {
    const cart = state.shop.cart.products;
    return sumBy(cart, item => item.price);
};

export const isInCart = (state, id) => {
    const cart = state.shop.cart.products;
    return find(cart, product => product.id === id)
};

export const isModalOpen = (state) => {
    
}