import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
