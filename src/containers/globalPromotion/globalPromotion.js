import React, { useState, useEffect } from "react";
import * as _services from "../../services/TourismService";
import { PlaceList } from "../../components";
import "./globalPromotion.scss";

export const GlobalPromotions = React.memo(() => {
  console.log("Init GlobalPromotions");
  const [data, setData] = useState([]);
  useEffect(() => {
    _services
      .getTouristSpots("ALL")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="component_wrapper global_promotions">
      <h3 className="card_heading">The world is beautiful, keep traveling</h3>
      <PlaceList data={data} />
    </div>
  );
});
