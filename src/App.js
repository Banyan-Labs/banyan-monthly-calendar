import React from "react";
import './App.css';
import TrainingCards from "./components/TrainingCards";


import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import "./App.css";
import LandingPage from "./components/LandingPage";



const App = () => {
  return (

    <div>    
    <BrowserRouter>
    
      <LandingPage />
      <TrainingCards />
      <Footer />
    </BrowserRouter>
  </div>
  );
};

export default App;
