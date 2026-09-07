import { useEffect, useState } from "react";

function useFetch(url, fallbackData = []) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API Error");
        }

        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setData(fallbackData);
        setError("");
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    loading,
    error
  };
}

export default useFetch;