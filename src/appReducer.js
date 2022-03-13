import ACTIONS from "./Constants/actions";

let initialState = {
  sampleData: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_DATA:
      return { ...state, sampleData: [...action.payload] };

    default:
      return state;
  }
}

export default appReducer;
