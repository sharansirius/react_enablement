import React from "react";
import PropTypes from "prop-types";
import "./finalPriceCalculator.scss";

export const FinalPriceCalculator = React.memo(({ memComp, taxComp, basePrice }) => {
  console.log("On FinalPriceCalculator Init");
  memComp= parseInt(memComp);
  taxComp= parseInt(taxComp); 
  basePrice = parseInt(basePrice);

  let finalPrice = (basePrice)? (basePrice+((taxComp/100)*basePrice) - memComp):basePrice;
  return (
    <div className="final_price">
      <h2>${finalPrice}</h2>
      <div className="row_wrapper">
        <div>
          <p> Membership Discount</p>
          <h5> ${memComp} </h5>
        </div>
        <div>
          <p> Tax Amount</p>
          <h5> {taxComp}% </h5>
        </div>
      </div>
    </div>
  );
});

FinalPriceCalculator.propTypes = {
  memComp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  taxComp:  PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  basePrice:  PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
