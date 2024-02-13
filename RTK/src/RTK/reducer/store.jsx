import {configureStore} from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
import CartSlice from './CartSlice';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    cart: CartSlice,
  },
});
