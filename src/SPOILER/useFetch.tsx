import React, { useState, useEffect } from "react";

export const useFetch = <T extends {}>(params: {
  url: string;

  /**
   * @default 'GET'
   */
  method?: "POST" | "GET";
}) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = () => {
    setLoading(true);
    return fetch(params.url, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (params.method !== "POST") fetchData();
  }, []);

  const postData = (body: string) => {
    setLoading(true);
    return fetch(params.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    postData,
  };
};
