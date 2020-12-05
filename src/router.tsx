import React from "react";
import { Switch, Route } from "react-router-dom";
import { Playground } from "./pages/Playground";
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <div>Home</div>} />
    <Route path="/users" component={() => <div>users</div>} />
    <Route path="/user?:id" component={() => <div>user</div>} />
    <Route path="/playground" component={Playground} />
    <Route component={() => <div>Not found</div>} />
  </Switch>
);
