import React from "react";

/**
 * Users endpoint: http://localhost:3334/users
 */

export const CreateUser = () => {
  /**
   * We need to take control of the inputs
   * ..... and create the user
   */

  return (
    <div className="pt-4">
      <h1>Create user</h1>

      <div className="pt-4">
        <div className="form-group d-flex flex-column w-50">
          <label className="col-form-label">
            Name
            <input id="name" type="text" className="form-control" />
          </label>
          <label className="col-form-label">
            Username
            <input id="username" type="text" className="form-control" />
          </label>

          <label className="col-form-label">
            Email
            <input id="email" type="text" className="form-control" />
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          + Create new user
        </button>
      </div>
    </div>
  );
};
