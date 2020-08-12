import React from "react";

//import fastDelivery from "../IMG/footer/fast_delivery.png";
// import specialDiscounts from "../IMG/footer/special_discounts.png";
// import secureCheckout from "../IMG/footer/secure-checkout.png";
// import moneyReturns from "../IMG/footer/money-returns.png";

import "../styles/Newsletter.css";

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <p>SUBSCRIBE TO OUR NEWSLETTER</p>
      <div className="form-subscribe">
        <input type="text" value="test@zelando.com" />
        <input type="button" value="SUBSCRIBE" />
      </div>
    </div>
  );
};

export default Newsletter;
