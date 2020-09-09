import React from "react";

const ArrivalsProduct = (props) => {
  let nameClass = `arivals arivals-item-`;

  return (
    <div className={nameClass}>
      <div className="testgl">
        <img src={`../${props.src}`} alt="glassesImg" />
      </div>
      <div className="describe">
        <h3 className="title">Tare Grey Fly Jacket</h3>
        <p>$157.00</p>
      </div>
    </div>
  );
};

export default ArrivalsProduct;
