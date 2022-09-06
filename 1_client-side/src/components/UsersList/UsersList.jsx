import { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  // States
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Side effects
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/users");

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
      <h2>Bookings list:</h2>

      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {data.map((user) => (
            <ul key={user._id}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.date}</li>
              <li>{user.time}</li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default UsersList;
