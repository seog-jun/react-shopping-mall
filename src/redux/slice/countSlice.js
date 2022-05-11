import { createSlice } from "@reduxjs/toolkit";

let count = createSlice({
  name: "count",
  initialState: 2,
  reducers: {
    countUp(state) {
      state++;
      return state;
    },
  },
});

export let { countUp } = count.actions;

export default count;
