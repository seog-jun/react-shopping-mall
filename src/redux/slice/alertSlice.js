import { createSlice } from "@reduxjs/toolkit";

let alert = createSlice({
  name: "alert",
  initialState: true,
  reducers: {
    close(state) {
      state = false;
      return state;
    },
  },
});

export let { close } = alert.actions;

export default alert;
