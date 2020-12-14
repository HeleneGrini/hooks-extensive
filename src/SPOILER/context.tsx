import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";

import { User } from "../types";
import { useFetch } from "./useFetch";

export type ContextValue = {
  registerUser: (user: User) => void;
  unregisterUser: (user: User) => void;
  unregisteredUsers: User[];
  registeredUsers: User[];
  users: User[];
  loading: boolean;
  error: boolean;
};

const Context = React.createContext<ContextValue | undefined>(undefined);

export const Store: React.FC = (props) => {
  const { data, loading, error } = useFetch<User[]>({
    url: "http://localhost:3334/users",
  });
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);

  const unregisteredUsers =
    data?.filter(
      (user) => !registeredUsers.map((user) => user.id).includes(user.id)
    ) ?? [];

  const registerUser = (user: User) => {
    if (!registeredUsers.map((u) => u.id).includes(user.id)) {
      setRegisteredUsers([...registeredUsers, user]);
    }
  };

  const unregisterUser = (user: User) => {
    setRegisteredUsers(registeredUsers.filter((u) => u.id !== user.id));
  };

  const value = {
    registerUser,
    unregisterUser,
    unregisteredUsers,
    registeredUsers,
    users: data ?? [],
    loading,
    error,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
