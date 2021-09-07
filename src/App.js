import React from "react";
import './App.css';
import TrainingCards from "./components/LandingPage/TrainingCards";


import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import "./App.css";
import LandingPage from "./components/LandingPage";



const App = () => {
  return (

    <div>    
    <BrowserRouter>
    
      <LandingPage />
      <Footer />
    </BrowserRouter>
  </div>
  );
};

export default App;
