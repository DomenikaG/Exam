import { combineReducers } from "redux";
import {
  clientBookingReducer,
  clientDeletingReducer,
} from "./reducers/userReducers";

export const reducer = combineReducers({
  booking: clientBookingReducer,
  deleting: clientDeletingReducer,
});
