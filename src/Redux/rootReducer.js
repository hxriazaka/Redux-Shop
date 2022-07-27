import { combineReducers } from "redux";
import shopReducer from "./Reducers/shopReducer"

const rootReducer = combineReducers({
  shop: shopReducer,
})

export default rootReducer;