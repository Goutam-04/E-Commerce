import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/product-list/productListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
