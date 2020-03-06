import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';

function App() {
  return (
    <div className="App">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/friends">Friends</Link>
      <Link className="link" to="/friends-form">Add a friend</Link>
      <Route exact path="/" component ={LoginForm} />
      <PrivateRoute path="/friends" component={FriendsList} />
      <PrivateRoute path="/friends-form" component={FriendsForm} />
    </div>
  );
}

export default App;
