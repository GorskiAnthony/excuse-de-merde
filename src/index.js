import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import Admin from "./App/pages/Admin";
import Dashboard from "./App/pages/Dashboard";
import "./assets/index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={(props) => <App {...props} />} />
        <Route path="/admin" component={(props) => <Admin {...props} />} />
        <Route
          path="/admin/dashboard"
          component={(props) => <Dashboard {...props} />}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
