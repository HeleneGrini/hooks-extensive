import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types";

export const Users = () => {
  const [data, setData] = useState<User[]>([]);
  const history = useHistory();
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
      <h1>Users</h1>
      <div className="pt-4">
        {data.map((user) => (
          <button
            className="card text-white bg-secondary mb-3 w-100 text-left"
            key={user.id}
            onClick={() => history.push(`/user/${user.id}`)}
          >
            <div className="card-body d-flex w-100">
              <div>
                <p className="card-text">{user.name}</p>
                <p className="card-text">{user.username}</p>
              </div>
              <div className="ml-auto">
                {/* if user is registerd ? <span className="badge badge-success">Registered</span> : */}
                <span className="badge badge-warning">Not Registered</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
