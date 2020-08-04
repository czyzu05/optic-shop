import React from "react";

import gucci from "../IMG/Partners-Brands/Slice_5.png";
import MichaelKors from "../IMG/Partners-Brands/Slice_4.png";
import RayBan from "../IMG/Partners-Brands/Slice_3.png";
import Oakley from "../IMG/Partners-Brands/Slice_1.png";

import "../styles/Partners.css";

const Partners = () => {
  return (
    <div className="Partners">
      <div className="Partners-desc">
        <p>partners</p>
      </div>
      <div className="Brands">
        <img src={gucci} alt="gucci" />
        <img src={MichaelKors} alt="MichaelKors" />
        <img src={RayBan} alt="RayBan" />
        <img src={Oakley} alt="Oakley" />
      </div>
    </div>
  );
};

export default Partners;
