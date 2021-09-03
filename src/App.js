import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import "./App.css";
import LandingPage from "./components/LandingPage";
import TraingsPage from "./components/TrainingsPage";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LandingPage} isProtected={false} />
      <Route
        path="/trainings-page"
        exact
        component={TraingsPage}
        isProtected={false}
      />
      <Route
        path="/archives-page"
        exact
        component={() => <h1>Put a Component in me!</h1>}
        isProtected={false}
      />
    </Switch>
    <Footer />
  </Router>
);

export default App;
