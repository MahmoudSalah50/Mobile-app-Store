const initialState = [];

export const addItems = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];
    case "DELETEITEM":
      return state.filter((x) => x.id !== action.payload.id);
    default:
      return state;
  }
};

export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
export default addItems;
