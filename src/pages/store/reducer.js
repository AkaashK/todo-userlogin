const reducer = (state = [], action) => {
  switch (action.type) {
    case "Add-user":
      return [...state, action.data];
    default:
      return state;
  }
};

// export const activateUser = state => state.a

export default reducer;
