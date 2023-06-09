import { createSlice } from "@reduxjs/toolkit";
import { TotalProducts, products } from "../../data/productsItems";
import { INITIAL_LIMIT } from "../../utils/constants";

const initialState = {
  products: products,
  totalProducts: products.length,
  currentPage: 1,
  limit: INITIAL_LIMIT,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => state,

    setInitialPage: (state) => {
      return state.currentPage;
    },

    setSize: (state, action) => {
      return {
        ...state,
        products: { ...state.products, selectedSize: action.payload },
      };
    },
  },
});

export const { getProducts, setInitialPage, setPreviousPage, setNextPage, setSpecificPage } = productsSlice.actions;
export default productsSlice.reducer;
