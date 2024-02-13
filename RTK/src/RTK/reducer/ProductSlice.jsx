import {createSlice} from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: () => {
    return {
      addProduct: (state, action) => {
        state.products.push(action.payload);
      },
    };
  },
});

export const {addProduct} = ProductSlice.actions;
export default ProductSlice.reducer;
