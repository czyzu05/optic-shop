import React from "react";

const Product = ({ brandName, imageUrl, price }) => {
  return (
    <div>
      <img src={`https://${imageUrl}`} alt="sunglasses" />
      <h6>{brandName}</h6>
      <p>{price.current.text}</p>
    </div>
  );
};

export default Product;
