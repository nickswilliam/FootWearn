import { createSlice } from "@reduxjs/toolkit";
import { ORDER_START } from "../../utils/constants";

const initialState = {
  ordersList: [],
  loading: false,
  orderID: ORDER_START,
  selectedOrder: null
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    orderStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    orderSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        orderID: state.orderID + 1,
        ordersList: [...state.ordersList, {...action.payload, orderID: state.orderID + 1 }]
      };
    },
    clearOrders: (state) => {
      return {
        ...state,
        ordersList: [],
        selectedOrder: null
      };
    },
    selectOrder: (state, action)=>{
      return {
        ...state,
        selectedOrder: state.ordersList.find(order=> order.orderID === action.payload)
      }
    }
  },

});

export const { orderStart, orderSuccess, clearOrders, selectOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
