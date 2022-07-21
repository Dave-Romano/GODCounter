export const myAction = {
  type: "MY_ACTION",
  payload: "super payload",
};

export const myAction2 = (value) => ({
  type: "MY_ACTION2",
  payload: "super payload2",
});

export const myAction3 = (value) => {
  return {
    type: "MY_ACTION3",
    payload: "super payload3",
  };
};

export const torniha = (value) => {
  return {};
};
