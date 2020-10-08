import React from "react";

const ArrivalsProduct = ({ brandName, imageUrl, price }) => {
  let nameClass = `arivals arivals-item-`;

  return (
    <div className={nameClass}>
      <div className="testgl">
        <img src={`https://${imageUrl}`} alt="glassesImg" />
      </div>
      <div className="describe">
        <h3 className="title">{brandName}</h3>
        <p>{price.current.text}</p>
      </div>
    </div>
  );
};

export default ArrivalsProduct;
