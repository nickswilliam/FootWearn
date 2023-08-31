import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: null,
  loading: false,
  selectedOrder: null,
  error: null,
  currentOrderID: null
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createOrderFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchOrderStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchOrderSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
      };
    },
    fetchOrderFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    clearError: (state) => {
      return {
        ...state,
        error: null,
      };
    },

    selectOrder: (state, action) => {
      return {
        ...state,
        selectedOrder: state.orders.find(
          (order) => order.orderID === action.payload
        ),
      };
    },
    setCurrentOrderID: (state, action)=>{
      return{
        ...state,
        currentOrderID: action.payload
      }
    },
    setOrders: (state, action)=>{
      return{
        ...state,
        orders: action.payload
      }
    }
  },
});

export const { fetchOrderStart, fetchOrderFail, fetchOrderSuccess, createOrderFail, clearError, selectOrder, setCurrentOrderID, setOrders } =
  ordersSlice.actions;
export default ordersSlice.reducer;
