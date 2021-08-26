import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import CurrentDate from "./components/CurrentDate";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <CurrentDate />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
