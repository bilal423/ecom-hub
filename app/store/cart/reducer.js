import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

export const cartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, payload) => {
        const { payload: product } = payload || {};

        const { cart: existingCart } = state || {};

        const cartItem = {
            ...product,
            quantity: 1
        }

        const newItems = [cartItem, ...existingCart]

        state.cart =  newItems;
    },

    updateCartItems: (state, data) => {
      const { payload } = data || {};

      const { product, actionType } = payload || {};

      const { id } = product || {};

      const { cart: cartItems } = state || {};

      const newCartItems = (cartItems || []).map((item) => {
        const { id: productId, quantity: productQuantity } = item || {};
        if(productId === id) {
          const newQuantity = actionType === "decrement" ? productQuantity - 1 : productQuantity + 1;

          return {
            ...item,
            quantity: newQuantity < 0 ? 0 : newQuantity
          }
        } 
        return item; 
      }).filter((item) => item.quantity > 0);

      state.cart = newCartItems || [];
    },
    removeCartItem: (state, payload) => {
        const { product } = payload || {};

        const { cart: existingCart } = state || {};

        const { id } = product || {};

        const filterCartItems = (existingCart || []).filter((item) => item.id !== id);
        
        state.cart = filterCartItems || [];
    },

    clearCart: (state) => {
        state.cart = [];
    }
  }
});  

export const { addCartItem, removeCartItem, clearCart, updateCartItems } = cartStore.actions;

export default cartStore.reducer;