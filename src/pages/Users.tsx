import React from "react";
import { useHistory } from "react-router-dom";

/**
 * This data is just a static object. We need to get it from out api.
 */
import { data } from "../data";

/**
 * Users endpoint: http://localhost:3334/users
 *
 * Look in package.json for scripts to start the server
 */

export const Users = () => {
  const history = useHistory();

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
                {/**
                 * It would be usefult to see whether the user was actually registered or not.
                 */}
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
