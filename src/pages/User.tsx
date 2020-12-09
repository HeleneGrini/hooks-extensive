import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as t from "../types";

export const User = () => {
  const [user, setUser] = useState<t.User | undefined>();
  const { userId } = useParams<{ userId: string }>();

  const getUser = () =>
    fetch(`http://localhost:3334/users/${userId}`)
      .then((r) => r.json())
      .then((r) => {
        setUser(r);
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="pt-4">
      <h1>{user.name}</h1>
      <div className="card bg-light mb-3">
        <div className="card-body d-flex pb-5">
          <div className="card-text text-dark d-flex flex-column">
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
          </div>

          <div className="ml-auto">
            {/* if user is registerd ? <span className="badge badge-success">Registered</span> : */}
            <div
              className="card text-white bg-warning mb-3"
              style={{ maxWidth: "20rem" }}
            >
              <div className="card-body">
                <h4 className="card-title mb-0">Not registerd</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="card text-white bg-secondary w-50 m-3">
            <div className="card-header">Address</div>
            <div className="card-body">
              <p className="card-text">Zip code: {user.address.zipcode}</p>
              <p className="card-text">City: {user.address.city}</p>
              <p className="card-text">Street: {user.address.street}</p>
              <p className="card-text">Suite:{user.address.suite}</p>
            </div>
          </div>
          <div className="card text-white bg-secondary w-50 m-3">
            <div className="card-header">Company</div>
            <div className="card-body">
              <h4 className="card-title mb-0">{user.company.name}</h4>
              <small className="card-text d-block mb-4">
                {user.company.bs}
              </small>
              <p className="card-text">{user.company.catchPhrase}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
