import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
  TotalAmount: 0,
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const FindCart = state.cart.find((cart) => cart.id === payload.id);
      if (FindCart) {
      } else {
        state.cart = [...state.cart, { ...payload, quantity: 1 }];
        state.quantity++;
        state.TotalAmount += payload.price;
      }
    },
    removeCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
      state.TotalAmount -= (payload.price * payload.quantity);
      state.quantity--;
    },
    Increase: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === payload.id) {
          item.quantity++;
          state.TotalAmount += payload.price;
        }
        return item;
      });
    },
    Decrease: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        if (item.id === payload.id && payload.quantity > 1 ) {
          item.quantity--;
          state.TotalAmount -= payload.price;
        }
        return item;
      });
    },
  },
});

export const { addToCart, removeCart, Increase,Decrease } = CartSlice.actions;

export default CartSlice.reducer;
