import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import CurrentDate from "./components/CurrentDate";
import IntroTitle from "./components/IntroTitle";
import TrainingTitle from "./components/TrainingTitle";
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <CurrentDate />
      <IntroTitle />
      <TrainingTitle />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
