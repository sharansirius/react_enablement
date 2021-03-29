import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Login, Movies, NowShowing } from "./screens";
import { Header } from "./components";
import "./App.scss";
import { Main } from "./containers";

function App(): React.ReactElement {
  return (
    <Router>
      <Main>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/movies" component={Movies} />
          <Route path="/nowShowing" component={NowShowing} />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
