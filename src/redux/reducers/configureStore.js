import {createStore} from "redux";
import reducers from "./index";
// store'u state veritabani gibi dusunebilirsin.

export default function configureStore(){
  return createStore(reducers)
}