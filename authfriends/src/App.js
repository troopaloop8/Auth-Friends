import React from "react";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import { BrowserRouter as Router, Route } from "react-router-dom";
import FriendsList from './components/FriendsLists'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
        </header>
      </div>
    </Router>
  );
}

export default App;