import React from "react";

import fastDelivery from "../IMG/footer/fast_delivery.png";
import specialDiscounts from "../IMG/footer/special_discounts.png";
import secureCheckout from "../IMG/footer/secure-checkout.png";
import moneyReturns from "../IMG/footer/money-returns.png";

import "../styles/OpticServices.css";

const OpticServices = () => {
  return (
    <div className="optic-services">
      <div>
        <img src={fastDelivery} alt="fast-delivery" />
      </div>
      <div>
        <img src={specialDiscounts} alt="specialDiscount" />
      </div>
      <div>
        <img src={secureCheckout} alt="secureCheckout" />
      </div>
      <div>
        <img src={moneyReturns} alt="moneyReturns" />
      </div>
    </div>
  );
};

export default OpticServices;
