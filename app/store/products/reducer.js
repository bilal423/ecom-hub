import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  recentProducts: {}
};

export const productStore = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, data) => {
        const { payload } = data || {};
        state.products = payload || {};
    },
    setRecentProducts: (state, data) => {
        const { payload } = data || {};
        state.recentProducts = payload || {};
    }
  },
});

export const { setProducts, setRecentProducts } = productStore.actions;

export default productStore.reducer;
