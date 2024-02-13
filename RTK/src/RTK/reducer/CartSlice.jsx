import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: () => {
    return {
      addProductToCart: (state, action) => {
        // state.cart.push(action.payload);
        let myIndex = -1;
        state.cart.map((item, index) => {
          if (item.id == action.payload.id) {
            myIndex = index;
          }
        });
        if (myIndex == -1) {
          state.cart.push({
            id: action.payload.id,
            title: action.payload.title,
            imageURL: action.payload.imageURL,
            description: action.payload.description,
            price: action.payload.price,
            ratings: action.payload.ratings,
            quantity: action.payload.quantity + 1,
          });
        } else {
          state.cart[myIndex].quantity += 1;
        }
      },
      removeProductFromCart: (state, action) => {
        let myIndex = -1;
        state.cart.map((item, index) => {
          if (item.id == action.payload.id) {
            myIndex = index;
          }
        });
        if (myIndex != -1) {
          state.cart[myIndex].quantity = state.cart[myIndex].quantity - 1;
        }
      },
      deleteProductFromCart: (state, action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      },
    };
  },
});

export const {addProductToCart, removeProductFromCart, deleteProductFromCart} =
  CartSlice.actions;
export default CartSlice.reducer;
