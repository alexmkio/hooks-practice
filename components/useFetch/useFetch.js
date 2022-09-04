import { useState, useRef, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          let data = await response.json();
          setData(data);
          setIsPending(false);
          setError(null);
        }
      } catch (error) {
        setIsPending(false);
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};
