import { createStore } from "redux";

const reducer = (state = {}, action) => {
  console.log("action в reducer:", action);
  return state;
};

const store = createStore(reducer);

export default store;
