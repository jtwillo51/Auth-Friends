import React from "react";

import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

//components
import PrivatRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import NewFriendForm from "./components/newFriendForm";

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">FriendsList</Link>
          </li>
          <li>
            <Link to = "/protected/create">Add to List</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <PrivatRoute exact path="/protected" component={FriendsList} />
        <PrivatRoute exact path = "/protected/create" component = {NewFriendForm}/>
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
