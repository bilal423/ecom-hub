import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  recentProducts: [],
  favorites: []
};

export const productStore = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, data) => {
        const { payload: products } = data || {};
        const productItems = (products || []).map((product) => {
          return {
            ...product,
            isFavorite: false,
            isCartAdded: false
          }
        });
        state.products = productItems || [];
    },
    setRecentProducts: (state, data) => {
      const { payload: products } = data || {};
      const recentProducts = (products || []).map((product) => {
        return {
          ...product,
          isFavorite: false,
          isCartAdded: false
        }
      });
      state.recentProducts = recentProducts || [];
    },
    addFavorites: (state, data) => {
      const { payload } = data || {};

      const { product, productType } = payload || {};

      const { id } = product || {};

      const { recentProducts, products, favorites } = state || {};

      let items = recentProducts;

      if(productType === "products") {
        items = products;
      }

      const newItems = (items || []).map((item) => {
        const { id: productId, isFavorite: favorite } = item || {};

        if(productId === id) {
          return {
            ...item,
            isFavorite: !favorite || false
          }
        }

        return item;
      });


      favorites.push(id);

      state.favorites = favorites;

      if(productType === "products") {
        state.products = newItems || [];
        return;
      }

      state.recentProducts = newItems || [];
    },
    removeFavorite: (state, data) => {
      const { payload } = data || {};

      const { product, productType } = payload || {};

      const { id } = product || {};

      const { recentProducts, products, favorites } = state || {};

      const newFavorites = (favorites || []).filter((item) => parseInt(item) !== parseInt(id));

      let items = recentProducts;

      if(productType === "products") {
        items = products;
      }

      const newItems = (items || []).map((item) => {
        const { id: productId, isFavorite: favorite } = item || {};

        if(productId === id) {
          return {
            ...item,
            isFavorite: !favorite || false
          }
        }

        return item;
      });

      state.favorites = newFavorites;

      if(productType === "products") {
        state.products = newItems || [];
        return;
      }

      state.recentProducts = newItems || [];
    }
  },
});

export const { setProducts, setRecentProducts, addFavorites, removeFavorite } = productStore.actions;

export default productStore.reducer;
