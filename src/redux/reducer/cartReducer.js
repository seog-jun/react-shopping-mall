let cart = [
  //   { id: 1, name: "Red Knit", quan: 2, price: 110000 },
  //   { id: 4, name: "Baby shoes", quan: 1, price: 120000 },
  //   { id: 8, name: "Flyer", quan: 3, price: 130000 },
];

function cartReducer(state = cart, action) {
  if (action.type === "Increment") {
    if (state[action.payload].quan < action.payload2) {
      let copyCart = [...state];
      copyCart[action.payload].quan++;
      return copyCart;
    } else {
      return state;
    }
  } else if (action.type === "Decrement") {
    let copyCart = [...state];
    if (copyCart[action.payload].quan > 1) {
      copyCart[action.payload].quan--;
    } else {
      copyCart.splice(action.payload, 1);
    }
    return copyCart;
  } else if (action.type === "Order") {
    let exist = state.find((o) => {
      return o.id === action.payload.id;
    });
    if (exist) {
      exist.quan = exist.quan + action.payload.quan;
      return state;
    } else {
      let copyCart = [...state];
      copyCart.push(action.payload);
      return copyCart;
    }
  } else if (action.type === "Remove") {
    let copyCart = [...state];
    copyCart.splice(action.payload, 1);
    return copyCart;
  } else return state;
}

export default cartReducer;
