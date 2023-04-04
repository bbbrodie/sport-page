import React from "react";
import './App.css';
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";
import backgroundM from "./images/background.jpeg"

const App = () => {
  return (
      <div className="App">
          <Navigation />
          <Header />
          <div className="Main">
          <Main />
          <Aside />
          </div>
          <Footer />
      </div>
  );
};

export default App;
