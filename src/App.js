import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import LandingPage from "./components/LandingPage";
import TraingsPage from "./components/TrainingsPage";
import NavBar from "./components/NavBar";
import ArchivesPage from "./components/ArchivesPage/ArchivesPage";
import AdminForm from "./components/adminForm/adminForm";

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact component={LandingPage} isProtected={false} />
      <Route
        path="/adminForm"
        exact
        component={AdminForm}
        isProtected={false}
      />
      <Route
        path="/trainings-page"
        exact
        component={TraingsPage}
        isProtected={false}
      />
      <Route
        path="/archives-page"
        exact
        component={ArchivesPage}
        isProtected={false}
      />
    </Switch>
    <Footer />
  </Router>
);

export default App;
