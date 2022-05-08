import { combineReducers, createStore } from "redux";
import cartReducer from "../redux/reducer/cartReducer";
import alertReducer from "../redux/reducer/alertReducer";
import countReducer from "../redux/reducer/countReducer";

let store = createStore(
  combineReducers({ cartReducer, alertReducer, countReducer })
);

export default store;

// import { configureStore } from "@reduxjs/toolkit";

// export default configureStore({
//   reducer: {},
// });
