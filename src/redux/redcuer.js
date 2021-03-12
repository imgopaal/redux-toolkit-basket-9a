// type Bros = {
//   basket: Number;
//   initialState: object;
// };
const initialState = {
  basket: 0,
};
export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      return {
        ...state,
        basket: state.basket + 1,
      };
    }
    default: {
      return state;
    }
  }
};
