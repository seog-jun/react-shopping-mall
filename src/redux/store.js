import { createStore } from "redux";

let store = createStore(() => {
  return [
    { id: 0, name: "Red Knit", quan: 2, price: 220000 },
    { id: 1, name: "Baby shoes", quan: 1, price: 120000 },
    { id: 2, name: "Flyer", quan: 3, price: 360000 },
  ];
});

export default store;
