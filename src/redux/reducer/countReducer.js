let count = 2;

function countReducer(state = count, action) {
  if (action.type === "CountUp") {
    console.log(state);
    state++;
    return state;
  }
  return state;
}

export default countReducer;
