import * as acionTypes from "../actions/actionTypes";

// Reducer'in amaci state bilgisini dondurmektir.
const countReducer=(state=0,action)=>{
  let newState;
  switch (action.type) {
    case acionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case acionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case acionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }
};

export default countReducer;