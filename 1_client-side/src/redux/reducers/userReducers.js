import {
  CLIENT_BOOKING_REQUEST,
  CLIENT_BOOKING_SUCCESS,
  CLIENT_BOOKING_FAIL,
} from "../constants/userConstants";

export const clientBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_BOOKING_REQUEST:
      return { loading: true };
    case CLIENT_BOOKING_SUCCESS:
      return { loading: false, client: action.payload };
    case CLIENT_BOOKING_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
