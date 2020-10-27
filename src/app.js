import React from 'react';
import './app.scss';
import { Header, Footer } from "./components";
import { Home, Hotels, BikeRentals, Restaurants, LocationInsight, Page404 } from "./pages";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/bikerentals" component={BikeRentals} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/details" component={LocationInsight} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
