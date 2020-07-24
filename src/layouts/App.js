import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from './Page'

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
          <Page/>
        </section>

      </div>
    </Router>
  );
}

export default App;
