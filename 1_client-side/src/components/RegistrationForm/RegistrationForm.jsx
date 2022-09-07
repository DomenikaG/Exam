import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookClient } from "../../redux/actions/userActions";

import useFetch from "../../hooks/useFetch";
import {
  StyledSection,
  StyledFormWrapper,
  StyledButtonsContainer,
} from "./RegistrationForm.style";
import Button from "../Button/Button";

const RegistrationForm = () => {
  let availableTimes = [
    "8:00:00",
    "8:30:00",
    "9:00:00",
    "9:30:00",
    "10:00:00",
    "10:30:00",
    "11:00:00",
    "11:30:00",
    "12:00:00",
    "12:30:00",
    "13:00:00",
    "13:30:00",
    "14:00:00",
    "14:30:00",
    "15:00:00",
    "15:30:00",
    "16:00:00",
    "16:30:00",
  ];

  // State
  const [client, setClient] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Redux
  const {
    loading,
    client: clientData,
    error,
  } = useSelector((state) => state.booking);

  const dispatch = useDispatch();

  // Custom functions
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!client.name || !client.email || !client.date || !client.time) {
      setErrorMessage("Please fill all the form fields");
      setMessage("");
    } else {
      dispatch(bookClient(client));

      setClient({ name: "", email: "", date: "", time: "" });
      setMessage("Booking successful");
      setErrorMessage("");
    }
  };

  const handleClear = (e) => {
    setMessage("");
    setErrorMessage("");
    setClient({ name: "", email: "", date: "", time: "" });
  };

  // Handling time slots (shown in the dropdown)
  // -- getting users array from database (depening on selection of the date)
  const { data } = useFetch(client.date);
  // -- getting not available times from the users array (dependig on selection of the date)
  const takenTimes = [];
  if (data) {
    data.map((client) => {
      takenTimes.push(client.time);
    });

    takenTimes.sort();
  } else {
  }
  // -- filtering available times ()
  if (client.date) {
    availableTimes = availableTimes.filter((el) => !takenTimes.includes(el));
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

                {availableTimes.map((time) => (
                  <option value={time} key={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <StyledButtonsContainer>
              <div className="button">
                <Button type="submit" value="Register" style="primary" />
              </div>
              <div className="button" onClick={handleClear}>
                <Button type="button" value="Clear" style="secondary" />
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
