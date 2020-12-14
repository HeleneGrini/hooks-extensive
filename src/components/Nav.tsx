import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="navbar-nav mr-auto">
        <li>
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item nav-link" to="/users">
            Users
          </Link>
        </li>
        <li>
          <Link className="nav-item nav-link" to="/playground">
            Playground
          </Link>
        </li>
      </ul>
    </nav>
  );
};
