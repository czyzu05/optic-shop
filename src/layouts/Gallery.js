import React from "react";
import GirlGlasses from "../IMG/g7.jpg";
import GirlGlasses2 from "../IMG/g2.jpg";
import GirlGlasses3 from "../IMG/g3.jpg";
import GirlGlasses4 from "../IMG/g4.jpg";
import GirlGlasses5 from "../IMG/g5.jpg";

import "../styles/Gallery.css";

const Gallery = () => {
  return (
    <div className="Container">
      <div className="grid-Gallery">
        <div className="grid grid-item-1">
          <img src={GirlGlasses} alt="GirlGlasses" />
        </div>
        <div className=" grid grid-item-2">
          <img src={GirlGlasses2} alt="GirlGlasses-2" />
        </div>
        <div className="grid grid-item-3">
          <img src={GirlGlasses3} alt="GirlGlasses-3" />
        </div>
        <div className="grid grid-item-4">
          <img src={GirlGlasses4} alt="GirlGlasses-4" />
        </div>
        <div className="grid grid-item-5">
          <img src={GirlGlasses5} alt="ManGlasses-5" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
