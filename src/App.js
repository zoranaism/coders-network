import React from "react";
import "./App.css";
import Home from "./pages/Home";
import PostsList from "./pages/PostsList";
import DevelopersList from "./pages/DevelopersList";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostsList} />
        <Route exact path="/posts/:id" component={PostDetails} />
        <Route exact path="/developers" component={DevelopersList} />
      </Switch>
    </div>
  );
}

export default App;
