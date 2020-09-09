import React from "react";
import ArrivalsProduct from "../components/ArrivalsProduct";

import glass1 from "../IMG/Layer_516.png";
import glass2 from "../IMG/Layer_508.png";
import glass3 from "../IMG/Layer_513.png";
import glass4 from "../IMG/Layer_514.png";
import glass5 from "../IMG/Layer_517.png";
import glass6 from "../IMG/Layer_511.png";

import "../styles/Arivals.css";

const ArivalsItems = [glass1, glass2, glass3, glass4, glass5, glass6];

const Arivals = () => {
  return (
    <div className="Arivals">
      <h4>New Arrivals</h4>
      <div className="grid-Arivals">
        {ArivalsItems.map((img, index) => {
          return <ArrivalsProduct src={img} key={index} />;
        })}
      </div>
      <button className="arivalsMoreBtn">LOAD MORE</button>
    </div>
  );
};

export default Arivals;
