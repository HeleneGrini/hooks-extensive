import React, { useEffect, useState } from "react";
import { User } from "../types";
export const Home = () => {
  const [data, setData] = useState<User[]>([]);
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);

  const unregisteredUsers = data.filter(
    (user) => !registeredUsers.map((user) => user.id).includes(user.id)
  );

  const registerUser = (user: User) => {
    if (!registeredUsers.map((u) => u.id).includes(user.id)) {
      setRegisteredUsers([...registeredUsers, user]);
    }
  };

  const unregisterUser = (user: User) => {
    setRegisteredUsers(registeredUsers.filter((u) => u.id !== user.id));
  };

  const getUsers = () =>
    fetch("http://localhost:3334/users")
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setData(r);
      })
      .catch((err) => console.log(err));
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="pt-4">
      <h1>Registration</h1>
      <div className="pt-4 d-flex">
        <div className="w-50 p-2">
          {unregisteredUsers.map((user) => (
            <div className="card text-white bg-secondary mb-3" key={user.id}>
              <div className="card-body d-flex">
                <div>
                  <p className="card-text">{user.name}</p>
                  <p className="card-text">{user.username}</p>
                </div>
                <button
                  className="btn btn-success ml-auto"
                  onClick={() => registerUser(user)}
                >
                  Registrer
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-50 p-2">
          {registeredUsers.map((user) => (
            <div className="card text-white bg-secondary mb-3 " key={user.id}>
              <div className="card-body d-flex">
                <div>
                  <p className="card-text">{user.name}</p>
                  <p className="card-text">{user.username}</p>
                </div>
                <button
                  className="btn btn-warning ml-auto"
                  onClick={() => unregisterUser(user)}
                >
                  Unegistrer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
