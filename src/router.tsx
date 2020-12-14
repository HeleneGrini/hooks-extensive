import React from "react";
import { Switch, Route } from "react-router-dom";
import { Playground, Home, Users, CreateUser, User } from "./pages";
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users/create" component={CreateUser} />
    <Route path="/users" component={Users} />
    <Route path="/user/:userId" component={User} />
    <Route path="/playground" component={Playground} />
    <Route component={() => <div>Not found</div>} />
  </Switch>
);
