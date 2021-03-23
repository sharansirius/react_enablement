import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Home, Login, Movies, NowShowing } from "./screens";
import "./app.scss";
import { Header } from "./components";

function App(): React.ReactElement {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/movies" component={Movies} />
          <Route path="/nowShowing" component={NowShowing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
