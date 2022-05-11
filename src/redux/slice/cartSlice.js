/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    increment(state, action) {
      if (state[action.payload.i].quan < action.payload.dStock)
        state[action.payload.i].quan++;
    },
    decrement(state, action) {
      if (state[action.payload.i].quan > 1) {
        state[action.payload.i].quan--;
      } else {
        state.splice(action.payload.i, 1);
      }
    },
    orderItem(state, action) {
      let exist = state.find((o) => {
        return o.id === action.payload.id;
      });
      if (exist) {
        exist.quan += action.payload.quan;
      } else {
        state.push(action.payload);
      }
    },
    remove(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export let { increment, decrement, orderItem, remove } = cart.actions;

export default cart;
