var reducers = function (
  state = {
    get_detail: null,
  },
  action
) {
  switch (action.type) {
    case "GET_DETAIL": {
      state = { ...state };
      state["get_detail"] = action.payload;
      return state;
    }

    default:
      return state;
  }
};
export default reducers;
