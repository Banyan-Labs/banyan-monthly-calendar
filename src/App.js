import React from "react";
import IntroCard from './components/IntroCard/IntroCard';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import CurrentDate from "./components/CurrentDate";
import "./App.css";

const App = () => {
  return (

    <div className="App">    
    <BrowserRouter>
      <CurrentDate />
        <IntroCard />
      <Footer />
    </BrowserRouter>
  </div>

  );
};

export default App;
