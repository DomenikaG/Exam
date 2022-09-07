import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  // States
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Side effects
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/bookings/${endpoint}`
        );

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    })();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetch;
