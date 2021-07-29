import React, { useState } from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
import "../assets/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [login, setLogin] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleLogin = (data) => {
    setLogin(data);
  };

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
        {login ? (
          <Route
            path="/admin/dashboard"
            component={(props) => <Dashboard {...props} login={login} />}
          />
        ) : (
          <Route
            path="/admin"
            component={(props) => <Admin {...props} handleLog={handleLogin} />}
          />
        )}
        <Route
          path="/admin"
          component={(props) => <Admin {...props} handleLog={handleLogin} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
