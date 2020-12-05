import * as React from "react";
import { Nav } from "./components/Nav";
import { Routes } from "./router";

export const App = () => (
  <div className="h-100">
    <Nav />
    <div className="container h-100">
      <Routes />
    </div>
  </div>
);
