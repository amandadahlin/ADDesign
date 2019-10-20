import { sumBy, find, map } from "lodash";

export const getCartSize = state => {
  if (state.cart && state.cart.products) return state.cart.products.length;
  return 0;
};

export const getStock = state => state.stock;
export const getPaintings = state => state.stock.paintings;
export const getPosters = state => {
  return state.stock.posters;
};

export const getShoppingCart = state => {
  const productIDsInCart = state.cart.products;
  const cart = [];

  map(productIDsInCart, id => {
    const product = getProductByID(state, id);
    cart.push(product);
  });
  return cart;
};

export const getProductByID = (state, id) => {
  const paintings = getPaintings(state);
  const posters = getPosters(state);
  const products = paintings.concat(posters);

  return find(products, product => product.id.toString() === id.toString());
};

export const getPaintingByID = (state, id) => {
  const paintings = getPaintings(state);
  return find(paintings, painting => painting.id.toString() === id.toString());
};

export const getPosterByID = (state, id) => {
  const posters = getPosters(state);
  return find(posters, poster => poster.id.toString() === id.toString());
};

export const getCost = state => {
  const cart = getShoppingCart(state);
  return sumBy(cart, item => item.price);
};

export const isInCart = (state, id) => {
  const cart = state.cart.products;

  const inCart = find(cart, itemId => itemId.toString() === id.toString());
  if (inCart) return true;
  return false;
};

export const getPaintingByPathName = state => {
  const pathname = state.router.location.pathname;
  var path = pathname.split("/");
  const id = path[path.length - 1];
  return getPaintingByID(state, id);
};

export const getPosterByPathName = state => {
  const pathname = state.router.location.pathname;
  var path = pathname.split("/");
  const id = path[path.length - 1];
  return getPosterByID(state, id);
};

export const isModalOpen = state => {};
