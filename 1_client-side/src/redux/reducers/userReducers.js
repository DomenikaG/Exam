import {
  CLIENT_BOOKING_REQUEST,
  CLIENT_BOOKING_SUCCESS,
  CLIENT_BOOKING_FAIL,
  CLIENT_DELETE_REQUEST,
  CLIENT_DELETE_SUCCESS,
  CLIENT_DELETE_FAIL,
  CLIENT_EDIT_REQUEST,
  CLIENT_EDIT_SUCCESS,
  CLIENT_EDIT_FAIL,
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

export const clientEditingReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_EDIT_REQUEST:
      return { loading: true };
    case CLIENT_EDIT_SUCCESS:
      return { loading: false, client: action.payload };
    case CLIENT_EDIT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const clientDeletingReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_DELETE_REQUEST:
      return { loading: true };
    case CLIENT_DELETE_SUCCESS:
      return { loading: false, client: action.payload };
    case CLIENT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
