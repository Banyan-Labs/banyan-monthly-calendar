import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import CurrentDate from "./components/CurrentDate";
import "./App.css";
import IntroTitle from "./components/IntroTitle";

const App = () => {
  return (
    <BrowserRouter>
      <CurrentDate />
      <IntroTitle />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
