import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookClient } from "../../redux/actions/userActions";

import useFetch from "../../hooks/useFetch";
import {
  StyledSection,
  StyledFormWrapper,
  StyledButtonsContainer,
} from "./RegistrationForm.style";
import Button from "../Button/Button";
import BOOKING_TIMES from "../../shared/constants/bookingTimes";

const RegistrationForm = () => {
  // Variables
  const dispatch = useDispatch();
  let bookingTimes = BOOKING_TIMES;

  // States
  const [client, setClient] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Custom functions
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!client.name || !client.email || !client.date || !client.time) {
      setErrorMessage("Please fill all the form fields");
      setMessage("");
    } else {
      dispatch(bookClient(client));

      setClient({ name: "", email: "", date: "", time: "" });
      setMessage("Booking successful!");
      setErrorMessage("");

      // window.location.reload(false);
    }
  };

  const handleClear = (e) => {
    setMessage("");
    setErrorMessage("");
    setClient({ name: "", email: "", date: "", time: "" });
  };

  // Handling time slots (shown in the dropdown)
  // -- getting users array from database (depening on selection of the date)
  const { data } = useFetch(
    `http://localhost:5000/api/bookings/${client.date}`
  );
  // -- getting not available times from the users array (dependig on selection of the date)
  const takenTimes = [];
  if (data) {
    data.map((client) => {
      takenTimes.push(client.time);

      return takenTimes.sort();
    });
  } else {
  }
  // -- filtering available times ()
  if (client.date) {
    bookingTimes = bookingTimes.filter((el) => !takenTimes.includes(el));
  }

  return (
    <>
      <StyledSection>
        <h2>New client registration:</h2>

        <StyledFormWrapper>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                className="inputField"
                type="text"
                value={client.name}
                placeholder={"Add full name"}
                onChange={(e) =>
                  setClient((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                className="inputField"
                type="email"
                value={client.email}
                placeholder={"name@email.com"}
                onChange={(e) =>
                  setClient((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                className="inputField"
                type="date"
                value={client.date}
                onChange={(e) =>
                  setClient((prev) => ({ ...prev, date: e.target.value }))
                }
              />
            </div>
            <div>
              <label htmlFor="time">Time:</label>
              <select
                className="inputField select"
                id="time"
                value={client.time}
                onChange={(e) =>
                  setClient((prev) => ({ ...prev, time: e.target.value }))
                }
              >
                <option value="selecttime">Select time</option>

                {bookingTimes.map((time) => (
                  <option value={time} key={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <StyledButtonsContainer>
              <div className="button">
                <Button type="submit" value="Register" design="primary" />
              </div>
              <div className="button" onClick={handleClear}>
                <Button type="button" value="Clear" design="secondary" />
              </div>
            </StyledButtonsContainer>
          </form>

          {message && <p className="green">{message}</p>}
          {errorMessage && <p className="red">{errorMessage}</p>}
        </StyledFormWrapper>
      </StyledSection>
    </>
  );
};

export default RegistrationForm;
