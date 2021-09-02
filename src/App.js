import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (

    <div>    
    <BrowserRouter>
      <NavBar />
      <LandingPage />
      <Footer />
    </BrowserRouter>
  </div>
  );
};

export default App;
