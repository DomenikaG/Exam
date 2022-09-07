import { useEffect, useState } from "react";
import axios from "axios";

import {
  StyledSection,
  StyledBookingsContainer,
  StyledClientWrapper,
  StyledList,
} from "./UsersList.style";
import usePagination from "../../hooks/usePagination";
import Button from "../Button/Button";

const UsersList = () => {
  // States
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  // -- Pagination
  const [page, setPage] = useState(1);
  const [amount] = useState(10);
  const [pagesArray, setPagesArray] = useState(null);

  if (data && !pagesArray) {
    const pagesTotal = Math.round(data.length / amount);

    setPagesArray(Array.from({ length: pagesTotal }, (_, i) => i + 1));
  }

  // Side effects
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/bookings/");

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    })();
  }, [page]);

  const bookings = usePagination(data, amount, page);

  console.log(bookings);

  return (
    <>
      <StyledSection>
        <h2>Client bookings list:</h2>

        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <StyledBookingsContainer>
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
                <div>
                  <i className="fa-regular fa-pen-to-square"></i>
                </div>
                <div>
                  <i className="fa-regular fa-trash-can"></i>
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
