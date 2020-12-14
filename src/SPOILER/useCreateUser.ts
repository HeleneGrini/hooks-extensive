import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "src/SPOILER/useFetch";

export const useCreateUser = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const { data, loading, error, postData: createUser } = useFetch({
    url: "http://localhost:3334/users",
    method: "POST",
  });

  const handleSubmit = () => {
    const body = JSON.stringify({ name, username, email });
    createUser(body).then(() => history.push("/users"));
  };
  const handleChange = (key: "name" | "username" | "email") => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (key === "name") setName(e.target.value);
    if (key === "username") setUsername(e.target.value);
    if (key === "email") setEmail(e.target.value);
  };
  return {
    values: {
      name,
      username,
      email,
    },
    handleChange,
    handleSubmit,
  };
};
