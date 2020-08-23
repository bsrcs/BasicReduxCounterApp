import * as actionTypes from "./actionTypes";

// aksiyonlarin tanimlarini burada yapariz.
// aksiyonlar bir fonksiyon ve geriye bir obje donduruyor.
// bu obje Reducer'a donen degerdir.
// bu aksiyonlar Reducer'da isletilir.
export const increaseCounter=()=>({
  type:actionTypes.INCREASE_COUNTER,
  payload:1
});

export const decreaseCounter=()=>({
  type:actionTypes.DECREASE_COUNTER,
  payload:1
});

export const increaseByTwoCounter=()=>({
  type:actionTypes.INCREASE_BY_TWO_COUNTER,
  payload:2
});