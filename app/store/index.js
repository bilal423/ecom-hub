import {
    configureStore,
    combineReducers
} from "@reduxjs/toolkit";

import userStore from "@app/store/users/reducer";

import productStore from "@app/store/products/reducer";

import cartStore from "@app/store/cart/reducer";

  
const store = configureStore({
    reducer: combineReducers({
        user: userStore,
        products: productStore,
        cart: cartStore
    })
});
  
  
  export default store;
  