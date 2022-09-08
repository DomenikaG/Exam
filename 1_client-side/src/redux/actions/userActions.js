import {
  CLIENT_BOOKING_REQUEST,
  CLIENT_BOOKING_SUCCESS,
  CLIENT_BOOKING_FAIL,
  CLIENT_DELETE_REQUEST,
  CLIENT_DELETE_SUCCESS,
  CLIENT_DELETE_FAIL,
} from "../constants/userConstants";

import api from "../shared/api";

export const bookClient = (client) => async (dispatch) => {
  try {
    dispatch({ type: CLIENT_BOOKING_REQUEST });
    const data = await api.booking(client);

    dispatch({ type: CLIENT_BOOKING_SUCCESS, payload: data.token });

    localStorage.setItem("client", JSON.stringify(data.token));
  } catch (error) {
    dispatch({ type: CLIENT_BOOKING_FAIL, payload: error.message });
  }
};

export const deleteClient = (client) => async (dispatch) => {
  try {
    dispatch({ type: CLIENT_DELETE_REQUEST });
    const data = await api.deleting(client);

    dispatch({ type: CLIENT_DELETE_SUCCESS, payload: data.token });

    localStorage.setItem("client", JSON.stringify(data.token));
  } catch (error) {
    dispatch({ type: CLIENT_DELETE_FAIL, payload: error.message });
  }
};
