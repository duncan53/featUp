import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./component/Login/login";
import MyApp from "./component/myApp";
import 'bootstrap/dist/css/bootstrap.css';



const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={MyApp} />
      </Switch>

  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
