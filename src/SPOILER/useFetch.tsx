import React, { useState, useEffect } from "react";

export const useFetch = <T extends {}>(params: { url: string }) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = () => {
    setLoading(true);
    fetch(params.url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};
