import { useEffect, useState } from "react";
import axios from "axios";

import {
  StyledSection,
  StyledBookingsContainer,
  StyledClientWrapper,
  StyledList,
} from "./UsersList.style";

const UsersList = () => {
  // States
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Side effects
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/bookings");

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <StyledSection>
        <h2>Client bookings list:</h2>

        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <StyledBookingsContainer>
            {data.map((user) => (
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
          </StyledBookingsContainer>
        )}
      </StyledSection>
    </>
  );
};

export default UsersList;
