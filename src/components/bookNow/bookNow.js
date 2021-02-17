import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Button, RadioGroup, FinalPriceCalculator } from "../";
import * as _utils from "../../utils/staticData";
import STATIC_TEXT from "../../constants/staticText";
import UserContext from "../../context/userContext";
import "./bookNow.scss";

export const BookNow = React.memo(({flightInfo}) => {
  console.log("On BookNow Init");
      const user_info = useContext(UserContext);
    // const user_info = { name: "Sharan", prime: "true" };
    const memPeriodOptions = _utils.memOptions;
    const taxOptions = _utils.taxOptions;    
    const [memPeriod,setMemPeriod] = useState(memPeriodOptions[0].value);
    const [taxChange,setTaxChange] = useState(taxOptions[0].value);
    
  return (
    (flightInfo && Object.keys(flightInfo).length > 0) ?
    <div className="component_wrapper booknow_wrapper">
      <div className="row_wrapper">
        <h3 className="card_heading"> Book Now </h3>
        <img className={user_info?.prime === "false" ? "hide" : "prime_logo"} src={process.env.PUBLIC_URL + "/img/prime.png"} alt="prime" />
      </div>
      <FinalPriceCalculator memComp={memPeriod} taxComp={taxChange} basePrice={flightInfo?.price}/>
      <p>{STATIC_TEXT.BOOKNOW_MEMDISC}</p>
      <RadioGroup buttons={memPeriodOptions} name="years" onItemSelected={(eve)=>{setMemPeriod(eve.target.value)}}/>
      <p>{STATIC_TEXT.BOOKNOW_TAXCOMP}</p>
      <RadioGroup buttons={taxOptions} name="taxComponent" onItemSelected={(eve)=>{setTaxChange(eve.target.value)}}/>
      <p>{STATIC_TEXT.BOOKNOW_CONFIRMATION}</p>
      <Button selector="full" >Proceed To Pay</Button>
    </div>
    :''
  );
});

BookNow.propTypes = {
  flightInfo : PropTypes.object
};
