import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Slider from "./Slider";
import Gallery from "./Gallery";
import Arivals from "./Arivals";

import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header class="top-bar">
          <Header />
          <Navigation />
        </header>

        <section>
          <Slider />
        </section>
        <Gallery />
        <Arivals />
      </div>
    </Router>
  );
}

export default App;
