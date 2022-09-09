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

import api from "../../shared/api";

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

export const editClient = (client) => async (dispatch) => {
  try {
    dispatch({ type: CLIENT_EDIT_REQUEST });
    const data = await api.editing(client);

    dispatch({ type: CLIENT_EDIT_SUCCESS, payload: data.token });

    localStorage.setItem("client", JSON.stringify(data.token));
  } catch (error) {
    dispatch({ type: CLIENT_EDIT_FAIL, payload: error.message });
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
