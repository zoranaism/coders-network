import React from "react";
import "./App.css";
import Home from "./pages/Home";
import PostsList from "./pages/PostsList";
import DevelopersList from "./pages/DevelopersList";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={PostsList} />
        <Route path="/developers" component={DevelopersList} />
      </Switch>
    </div>
  );
}

export default App;
