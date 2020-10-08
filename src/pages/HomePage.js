import React from "react";

import Slider from "../layouts/Slider";
import Gallery from "../layouts/Gallery";
import Arrivals from "../layouts/Arivals";
import Partners from "../layouts/Partners";
import Reviews from "../layouts/Reviews";
import OpticServices from "../layouts/OpticServices";

const HomePage = () => {
  return (
    <>
      {<Slider />}
      {<Gallery />}
      {<Arrivals ArrivalsProductTerm="men sunglasses" />}
      {<Partners />}
      {<Reviews />}
      {<OpticServices />}
    </>
  );
};

export default HomePage;
