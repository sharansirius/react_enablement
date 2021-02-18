import "./App.scss";
import { Login, Home, Page404 } from "./screens";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() { 

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route component={Page404} />        
      </Switch>
    </Router>
  );
}

export default App;


  //Create a card component