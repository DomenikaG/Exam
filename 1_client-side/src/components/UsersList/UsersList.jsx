import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteClient, editClient } from "../../redux/actions/userActions";

import {
  StyledSection,
  StyledEditDataContainer,
  StyledBookingsContainer,
  StyledClientWrapper,
  StyledList,
} from "./UsersList.style";
import usePagination from "../../hooks/usePagination";
import useFetch from "../../hooks/useFetch";
import Button from "../Button/Button";
import BOOKING_TIMES from "../../shared/constants/bookingTimes";

const UsersList = () => {
  // Variables
  const dispatch = useDispatch();
  let bookingTimes = BOOKING_TIMES;

  // States
  // -- Pagination
  const [page, setPage] = useState(1);
  const [amount] = useState(10);
  const [pagesArray, setPagesArray] = useState(null);
  // -- Booking section open or closed
  const [isEdit, setIsEdit] = useState(false);
  // -- Client info for booking edit
  const [client, setClient] = useState({
    id: "",
    name: "",
    email: "",
    date: "",
    time: "",
  });

  // FETCH
  // -- all bookings data
  const { data, isLoading, error } = useFetch(
    "http://localhost:5000/api/bookings/"
  );
  // -- all bookings data on the chosen day
  const bookingsData = useFetch(
    `http://localhost:5000/api/bookings/${client.date}`
  );

  // Logic
  // -- Pagination
  const bookings = usePagination(data, amount, page);
  if (data && !pagesArray) {
    const pagesTotal = Math.ceil(data.length / amount);

    setPagesArray(Array.from({ length: pagesTotal }, (_, i) => i + 1));
  }
  // -- Filter available times for booking data
  // ---- getting not available times from the users array (dependig on selection of the date)
  const takenTimes = [];
  if (bookingsData.data) {
    bookingsData.data.map((client) => {
      takenTimes.push(client.time);

      return takenTimes.sort();
    });
  } else {
  }
  // ---- filtering available times
  if (client.date) {
    bookingTimes = bookingTimes.filter((el) => !takenTimes.includes(el));
  }

  // Custom functions
  // -- delete client
  const handleDelete = (id, name, email, date, time) => {
    if (name) {
      dispatch(
        deleteClient({
          clientId: id,
          name: name,
          email: email,
          date: date,
          time: time,
        })
      );
    }
  };
  // -- edit client
  const handleEdit = () => {
    if (client) {
      dispatch(
        editClient({
          clientId: client.id,
          name: client.name,
          email: client.email,
          date: client.date,
          time: client.time,
        })
      );

      setIsEdit(false);
    }
  };
  // -- Client edit data container open
  const editOpen = (id, name, email, date, time) => {
    setIsEdit(true);

    setClient({
      id: id,
      name: name,
      email: email,
      date: date,
      time: time,
    });
  };
  // -- Client edit data container closed
  const editClose = () => setIsEdit(false);

  return (
    <>
      <StyledSection>
        <h2>Client bookings list:</h2>

        {isEdit && (
          <StyledEditDataContainer>
            <div className="editTableHeader">
              <p>Edit client booking information:</p>
            </div>

            <div className="editTable">
              <div className="dataInputs">
                <div className="inputContainer">
                  <input
                    type="text"
                    value={client.name}
                    onChange={(e) =>
                      setClient((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="inputContainer">
                  <input
                    type="email"
                    value={client.email}
                    onChange={(e) =>
                      setClient((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>

                <div className="inputContainer">
                  <input
                    type="date"
                    value={client.date}
                    onChange={(e) =>
                      setClient((prev) => ({ ...prev, date: e.target.value }))
                    }
                  />
                </div>

                <div className="inputContainer">
                  <select
                    className="inputField select"
                    id="time"
                    onChange={(e) =>
                      setClient((prev) => ({ ...prev, time: e.target.value }))
                    }
                  >
                    <option value="selecttime">{client.time}</option>

                    {bookingTimes.map((time) => (
                      <option value={time} key={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="dataControlsContainer">
                <div
                  className="dataControlButton approve"
                  onClick={(e) => {
                    handleEdit();
                  }}
                >
                  <i className="fa-solid fa-check"></i>
                </div>
                <div
                  className="dataControlButton cancel"
                  onClick={(e) => {
                    editClose();
                  }}
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>
          </StyledEditDataContainer>
        )}

        {isLoading ? (
          <p className="message">Loading bookings...</p>
        ) : error ? (
          <p className="message">No bookings found.</p>
        ) : (
          <StyledBookingsContainer>
            <div className="tableHeader">
              <p>Name</p>
              <p>Email</p>
              <p>Date</p>
              <p>Time</p>
            </div>
            {bookings.map((user) => (
              <StyledClientWrapper key={user._id}>
                <StyledList>
                  <li>
                    <b>{user.name}</b>
                  </li>
                  <li>{user.email}</li>
                  <li>{user.date}</li>
                  <li>{user.time}</li>
                </StyledList>

                <div className="dataControlsContainer">
                  <div
                    className="dataControlButton edit"
                    onClick={(e) => {
                      editOpen(
                        user._id,
                        user.name,
                        user.email,
                        user.date,
                        user.time
                      );
                      setClient((prev) => ({
                        ...prev,
                        id: user._id,
                      }));
                    }}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </div>
                  <div
                    className="dataControlButton delete"
                    onClick={(e) => {
                      handleDelete(
                        user._id,
                        user.name,
                        user.email,
                        user.date,
                        user.time
                      );
                    }}
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </div>
                </div>
              </StyledClientWrapper>
            ))}

            <div className="pagination">
              {pagesArray &&
                pagesArray.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setPage(item);
                    }}
                  >
                    <Button
                      type="button"
                      design="secondary"
                      value={item}
                    ></Button>
                  </div>
                ))}
            </div>
          </StyledBookingsContainer>
        )}
      </StyledSection>
    </>
  );
};

export default UsersList;
