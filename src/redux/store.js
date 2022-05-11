/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import cart from "./slice/cartSlice";
import alert from "./slice/alertSlice";
import count from "./slice/countSlice";

export default configureStore({
  reducer: {
    cart: cart.reducer,
    alert: alert.reducer,
    count: count.reducer,
  },
});
