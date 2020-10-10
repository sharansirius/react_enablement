import React from 'react';
import './app.scss';
import { Header, Footer} from "./components";
import { Home, Hotels, BikeRentals, Restaurants } from "./pages";
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />        
        <Route path="/" exact component={Home} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/bikerentals" component={BikeRentals} />
        <Route path="/restaurants" component={Restaurants} />
        <Footer />
      </Router>  
    </>
  );
}

export default App;
