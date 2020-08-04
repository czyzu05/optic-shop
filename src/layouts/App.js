import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Partners from "./Partners";
import Reviews from "./Reviews";

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
          <Page />
        </section>
        <Partners></Partners>
        <Reviews></Reviews>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
