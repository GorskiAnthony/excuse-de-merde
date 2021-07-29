import React, { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
import "../assets/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [isActive, setActive] = useState(false);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <Home {...props} isActive={isActive} setActive={setActive} />
          )}
        />
        <Route
          exact
          path="/add"
          component={(props) => (
            <Add {...props} isActive={isActive} setActive={setActive} />
          )}
        />
        {/* <Route
          path="/dashboard"
          component={(props) => <Dashboard {...props} />}
        /> */}
      </Switch>
    </Router>
  );
};

export default App;
