import React from "react";
import IntroCard from './components/IntroCard/IntroCard';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  return (

    <div className="App">    
    <BrowserRouter>
        <IntroCard />
      <Footer />
    </BrowserRouter>
  </div>

  );
};

export default App;
