import { combineReducers } from "redux";
import { clientBookingReducer } from "./reducers/userReducers";

export const reducer = combineReducers({
  booking: clientBookingReducer,
});
