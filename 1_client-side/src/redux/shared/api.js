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
}

const api = new API();

export default api;
