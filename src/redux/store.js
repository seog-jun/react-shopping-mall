import { combineReducers, createStore } from "redux";
import cartReducer from "../redux/reducer/cartReducer";
import alertReducer from "../redux/reducer/alertReducer";

let store = createStore(combineReducers({ cartReducer, alertReducer }));

export default store;
