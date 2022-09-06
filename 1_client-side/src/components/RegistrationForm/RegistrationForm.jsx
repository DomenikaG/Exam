import React from "react";
import { useState } from "react";

import useFetch from "../../hooks/useFetch";

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
  const [user, setUser] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  // Custom functions
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Handling time slots (shown in the dropdown)
  // -- getting users array from database (depening on selection of the date)
  const { data, isLoading, error } = useFetch(user.date);
  // -- getting not available times from the users array (dependig on selection of the date)
  const takenTimes = [];
  if (data) {
    data.map((user) => {
      takenTimes.push(user.time);
    });

    takenTimes.sort();
  } else {
  }
  // -- filtering available times ()
  if (user.date) {
    availableTimes = availableTimes.filter((el) => !takenTimes.includes(el));
  }

  return (
    <>
      <h2>Registration:</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder={"Add full name"}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder={"name@email.com"}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, time: e.target.value }))
            }
          >
            <option value="selecttime">select time</option>

            {availableTimes.map((time) => (
              <option value={time} key={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div>
          <br />
          <input type="submit" value={"Register"} />
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
