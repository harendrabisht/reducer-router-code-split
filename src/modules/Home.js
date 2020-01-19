export const reducer = (state = 0, action) => {
  switch (action.type) {
    case "HOME_INCREMENT":
      return state + 1;

    case "HOME_DECREMENT":
      return state - 1;

    default:
      return state;
  }
};
