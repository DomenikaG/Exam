import axios from "axios";

const HOST = "http://localhost:5000";

class API {
  async booking(clientBookingData) {
    const { data } = await axios.post(
      HOST + "/api/bookings",
      clientBookingData
    );

    return data;
  }

  async editing(clientData) {
    const { data } = await axios.put(
      HOST + `/api/bookings/${clientData.clientId}`,
      clientData
    );

    return data;
  }

  async deleting(clientData) {
    const { data } = await axios.delete(
      HOST + `/api/bookings/${clientData.clientId}`,
      clientData
    );

    return data;
  }
}

const api = new API();

export default api;
