import { createStore } from "redux";

const initialState = {
  hpJake: 100,
  hpIuda: 100,
  hpLeo: 100,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "counter/Increment":
      return {
        hpJake: state.hpJake + payload,
      };
    case "counter/Decrement":
      return {
        hpJake: state.hpJake - payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
