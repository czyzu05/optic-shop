import React from "react";

import women_in_shop from "../IMG/womenShop.jpg";

import "../styles/Reviews.css";

const Reviews = () => {
  return (
    <div className="Reviews">
      <div className="personal-reviews">
        <h3>Reviews</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ex
          adipisci iste sed totam eligendi praesentium fugiat reprehenderit
          quaerat natus quidem accusantium eius deleniti iusto, facilis
          laudantium eaque, tempora culpa?
        </p>
        <div className="reviews-footer">
          <img src={women_in_shop} alt="women_in_shop_avatar" />
          <div className="btns">
            <button className="btn-prev">prev</button>
            <button className="btn-next">next</button>
          </div>
        </div>
      </div>
      <div className="wrapper-img">
        <img src={women_in_shop} alt="women_in_shop" />
      </div>
    </div>
  );
};

export default Reviews;
