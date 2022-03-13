import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import isAuthenticated from "./Services/auth.service";
import routes from "./routes";
import AppHeader from "./Components/AppHeader";

const getAuth = () => {
  return isAuthenticated();
};

function App() {
  return (
    <React.Fragment>
      <Router>
        <AppHeader />
        <Routes>
          {getAuth() &&
            routes.privateRoutes.map((route) => {
              return <Route path={route.path} element={route.component} />;
            })}
          {routes.publicRoutes.map((route) => {
            return <Route path={route.path} element={route.component} />;
          })}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
