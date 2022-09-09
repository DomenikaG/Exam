import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteClient } from "../../redux/actions/userActions";
import axios from "axios";

import {
  StyledSection,
  StyledEditDataContainer,
  StyledBookingsContainer,
  StyledClientWrapper,
  StyledList,
} from "./UsersList.style";
import usePagination from "../../hooks/usePagination";
import Button from "../Button/Button";

const UsersList = () => {
  // States
  const [data, setData] = useState(null);
  const [dataForEdit, setDataForEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  // -- Pagination
  const [page, setPage] = useState(1);
  const [amount] = useState(10);
  const [pagesArray, setPagesArray] = useState(null);
  // -- Client info edited
  const [client, setClient] = useState({
    id: "",
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  // Logic
  // -- Pagination
  const bookings = usePagination(data, amount, page);
  if (data && !pagesArray) {
    const pagesTotal = Math.ceil(data.length / amount);

    setPagesArray(Array.from({ length: pagesTotal }, (_, i) => i + 1));
  }

  // Redux
  const {
    loading,
    client: clientData,
    error,
  } = useSelector((state) => state.deleting);

  const dispatch = useDispatch();

  // Custom functions
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

  const handleEdit = (id, name, email, date, time) => {
    setIsEdit(true);

    setClient({
      id: id,
      name: name,
      email: email,
      date: date,
      time: time,
    });
  };

  // Side effects
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/bookings/");

        setData(data);
        setDataForEdit(data);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
      }
    })();
  }, [page, data, client]);

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
                <div>
                  <input
                    type="text"
                    value={client.name}
                    pattern="[A-Za-z]"
                    onChange={(e) =>
                      setClient((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    value={client.email}
                    onChange={(e) =>
                      setClient((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                  />
                </div>

                <div>
                  <input
                    type="date"
                    value={client.date}
                    onChange={(e) =>
                      setClient((prev) => ({ ...prev, date: e.target.value }))
                    }
                    required
                  />
                </div>

                {/* <select
                  // className="inputField select"
                  // id="time"
                  value={client.time}
                  // onChange={(e) =>
                  //   setClient((prev) => ({ ...prev, time: e.target.value }))
                  // }
                >
                  <option value="selecttime">Select time</option>

                  {availableTimes.map((time) => (
                    <option value={time} key={time}>
                      {time}
                    </option>
                  ))}
                </select> */}
              </div>

              <div className="dataControlsContainer">
                <div
                  className="dataControlButton approve"
                  onClick={(e) => {
                    // handleEdit(
                    //   user._id,
                    //   user.name,
                    //   user.email,
                    //   user.date,
                    //   user.time
                    // );
                  }}
                >
                  <i class="fa-solid fa-check"></i>
                </div>
                <div
                  className="dataControlButton cancel"
                  onClick={(e) => {
                    // handleDelete(
                    //   user._id,
                    //   user.name,
                    //   user.email,
                    //   user.date,
                    //   user.time
                    // );
                  }}
                >
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>
          </StyledEditDataContainer>
        )}

        {isLoading ? (
          <p>Loading ...</p>
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
                      handleEdit(
                        user._id,
                        user.name,
                        user.email,
                        user.date,
                        user.time
                      );
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
                      style="secondary"
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
