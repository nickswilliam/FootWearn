import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  removeItemToCart,
  resetShippingCost,
} from "./cartUtils";
import { SHIPPING_COST } from "../../utils/constants";

const initialState = {
  cartItems: [],
  cartMenu: false,
  shippingCost: 0,
};

const cartSlices = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    toggleCartMenu: (state) => {
      return {
        ...state,
        cartMenu: !state.cartMenu,
      };
    },
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        shippingCost: SHIPPING_COST,
      };
    },
    removeToCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload),
        shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
        shippingCost: 0,
      };
    },
  },
});

export const { toggleCartMenu, addToCart, removeToCart, clearCart } =
  cartSlices.actions;
export default cartSlices.reducer;
