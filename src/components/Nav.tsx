import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/users">Users</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/playground">Playground</Link>
        </li>
      </ul>
    </nav>
  );
};
