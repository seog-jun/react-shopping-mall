let alert = true;

function alertReducer(state = alert, action) {
  if (action.type === "Close") {
    state = false;
    return state;
  } else return state;
}

export default alertReducer;
