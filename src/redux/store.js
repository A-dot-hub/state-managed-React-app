import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice.js';
import productReducer from './slices/productSlice.js';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});
