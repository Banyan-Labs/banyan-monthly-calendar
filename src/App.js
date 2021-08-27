import React from "react";
import IntroCard from './components/IntroCard/IntroCard';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import CurrentDate from "./components/CurrentDate";
import IntroTitle from "./components/IntroTitle";
import TrainingTitle from "./components/TrainingTitle";
import Notes from "./components/Notes";
import "./App.css";



const App = () => {
  return (

    <div className="App">    
    <BrowserRouter>
      <CurrentDate />
      <IntroTitle />
     <IntroCard />
      <TrainingTitle />
      <Notes />
      <Footer />
    </BrowserRouter>
  </div>

  );
};

export default App;
