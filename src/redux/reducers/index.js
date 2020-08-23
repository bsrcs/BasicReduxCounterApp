import {combineReducers} from "redux";
import counterReducer from "./counterReducer";

// burada elimizde bulunan Reducer'lari combine ederiz.
// aslinda js ayni isimde degisken olusturur ve "counterREducer"i onun icine atar.
const reducers = combineReducers({
  counterReducer
});

export default reducers;