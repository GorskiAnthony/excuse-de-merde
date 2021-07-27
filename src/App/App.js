import React, { useState } from "react";
import Home from "./Home";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import "../assets/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = (data) => {
    setLogin(data);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
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
