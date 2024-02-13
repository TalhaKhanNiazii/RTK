// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// export const fetchProducts = createAsyncThunk(
//   'Products Data', async () => {
//     const res =  await fetch('https://fakestoreapi.com/products',{
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     const data = await res.json()
//     return data
// })

// const ProductSlice = createSlice({
//     name: 'product',
//     initialState: {
//         products: null,
//         loading: false,
//         error: null
//     },
//     extraReducers: (builder) => {
//       builder.addCase(fetchProducts.pending, (state) => {
//           state.loading = true
//         });
//       builder.addCase(fetchProducts.fulfilled, (state, action) => {
//           state.loading = false
//           state.products = action.payload
//         });
//         builder.addCase(fetchProducts.rejected, (state, action) => {
//           state.loading = false
//           state.error = action.payload
//         })
//     }
// })
// export default ProductSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  'Products Data', async () => {
    const res =  await fetch('https://fakestoreapi.com/products',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    return data
  })

  const ProductSlice = createSlice({
    name : 'Products',
    initialState: {
      products: null,
      loading: false,
      error: null
    },
    extraReducers: (builder) => {
      builder.addCase( fetchProducts.pending, (state)=>{
        state.loading = true;
      })
      builder.addCase( fetchProducts.fulfilled, (state, action)=>{
        state.loading = false;
        state.products = action.payload;
      })
      builder.addCase( fetchProducts.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
      })
    }
})

export default ProductSlice.reducer;