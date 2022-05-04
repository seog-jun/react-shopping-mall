import { createStore } from "redux";

let cart = [
  { id: 0, name: "Red Knit", quan: 2, price: 110000 },
  { id: 1, name: "Baby shoes", quan: 1, price: 120000 },
  { id: 2, name: "Flyer", quan: 3, price: 130000 },
];

function reducer(state = cart, action) {
  if (action.type === "Increment") {
    let copyCart = [...cart];
    copyCart[action.payload].quan++;
    return copyCart;
  } else if (action.type === "Decrement") {
    let copyCart = [...cart];
    if (copyCart[action.payload].quan > 0) copyCart[action.payload].quan--;
    return copyCart;
  } else return state;
}

let store = createStore(reducer);

export default store;
