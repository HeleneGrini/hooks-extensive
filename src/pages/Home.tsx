import React, { useState } from "react";
import { User } from "../types";

/**
 * This data is just a static object. We need to get it from out api.
 */
import { data } from "../data";

/**
 * Users endpoint: http://localhost:3334/users
 *
 * Look in package.json for scripts to start the server
 */

export const Home = () => {
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

  return (
    <div className="pt-4">
      <h1>Registration</h1>
      <div className="pt-4 d-flex">
        <>
          <div className="w-50 p-2">
            {unregisteredUsers.length === 0 ? (
              <div
                className="card border-primary mb-3 h-100 d-flex justify-content-center align-content-center
            "
              >
                <div className="text-center">All users registered</div>
              </div>
            ) : null}
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
            {registeredUsers.length === 0 ? (
              <div
                className="card border-primary mb-3 h-100 d-flex justify-content-center align-content-center
            "
              >
                <div className="text-center">No registrations</div>
              </div>
            ) : null}
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
          </div>{" "}
        </>
      </div>
    </div>
  );
};
