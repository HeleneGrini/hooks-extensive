import React from "react";
import { Switch, Route } from "react-router-dom";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <div>Home</div>} />
    <Route path="/users" component={() => <div>users</div>} />
    <Route path="/user?:id" component={() => <div>user</div>} />
    <Route path="/playground" component={() => <div>Playground</div>} />
    <Route component={() => <div>Not found</div>} />
  </Switch>
);
