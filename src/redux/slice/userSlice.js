import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    addAge(state, action) {
      state.age += action.payload.age;
      state.name = action.payload.name;
    },
  },
});
export let { changeName, addAge } = user.actions;

export default user;
