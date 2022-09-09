import { combineReducers } from "redux";
import {
  clientBookingReducer,
  clientEditingReducer,
  clientDeletingReducer,
} from "./reducers/userReducers";

export const reducer = combineReducers({
  booking: clientBookingReducer,
  editing: clientEditingReducer,
  deleting: clientDeletingReducer,
});
