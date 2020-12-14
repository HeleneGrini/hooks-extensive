// import React, { useState } from "react";
// import { Switch, Route } from "react-router-dom";
// import { Playground, Home, Users, User } from "./pages";
// import * as t from "./types";
// import { data } from "./data";

// const App = () => {
//   const [registeredUsers, setRegisteredUsers] = useState<t.User[]>([]);

//   const unregisteredUsers = data.filter(
//     (user) => !registeredUsers.map((user) => user.id).includes(user.id)
//   );

//   const registerUser = (user: t.User) => {
//     if (!registeredUsers.map((u) => u.id).includes(user.id)) {
//       setRegisteredUsers([...registeredUsers, user]);
//     }
//   };

//   const unregisterUser = (user: t.User) => {
//     setRegisteredUsers(registeredUsers.filter((u) => u.id !== user.id));
//   };

//   const sharedProps = {
//     registerUser,
//     unregisterUser,
//     unregisteredUsers,
//     registeredUsers,
//     data,
//   };

//   return (
//     <Switch>
//       <Route exact path="/" component={() => <Home {...sharedProps} />} />
//       <Route path="/users" component={() => <Users {...sharedProps} />} />
//       <Route path="/user/:userId" component={() => <User {...sharedProps} />} />
//       <Route path="/playground" component={Playground} />
//       <Route component={() => <div>Not found</div>} />
//     </Switch>
//   );
// };
