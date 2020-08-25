import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Desc from "./Desc";
import Social from "./Social";
import Newsletter from "./Newsletter";
import "../styles/App.css";
import FooterNav from "./Footer-nav";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="top-bar">
          <Header />
          <Navigation />
        </header>

        <section>
          <Page />
        </section>
        <footer>
          <Social></Social>
          <FooterNav></FooterNav>
          <Newsletter></Newsletter>
        </footer>
        <Desc></Desc>
      </div>
    </Router>
  );
}

export default App;
