import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Partners from "./Partners";
import Reviews from "./Reviews";
import OpticServices from "./OpticServices";
import Desc from "./Desc";
import Social from "./Social";
import Newsletter from "./Newsletter";
import "../styles/App.css";
import FooterNav from "./Footer-nav";

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
        <OpticServices></OpticServices>
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
