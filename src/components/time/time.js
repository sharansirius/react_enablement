import React, { useEffect, useState } from "react";
import "./time.scss";
import * as _services from "../../services/TimeZoneService";

const Time = ({ init, session = false, current, type }) => {
  console.log("On Time Init", type);
  let sesstionTime=0, temp ='';
  const [estDate, setEstDate] = useState("");
  const [estTime, setEstTime] = useState("");
  if (session && current && init) {
    sesstionTime = current.getMinutes() - init.getMinutes();
  }

  useEffect(() => {
    if (type === "EST") {
      _services.getWorldClocks().then((res) => {
          if(res && res.data && res.data.currentDateTime) {
            temp = res.data.currentDateTime.split("T");
            setEstTime(temp[1].split("-")[0]);
            setEstDate(temp[0]);
          }
        },(err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      {session ? (
        <div className="time">
          <p>SESSION TIME</p>
          <h1>
            {sesstionTime}
            {sesstionTime < 2 ? " MIN" : " MINS"}
          </h1>
        </div>
      ) : type === "IST" ? (
        <div className="time">
          <p>  {/* Not a right way to implement IST thing, but not bothered right now */}
            {current.getFullYear() +"-" +current.getMonth() +"-" + current.getDate()} - {type}
          </p>
          <h1>{current.getHours() + ":" + current.getMinutes()}</h1>
        </div>
      ) : (
        <div className="time">
          <p>{estDate} - {type}</p>
          <h1>{estTime}</h1>
        </div>
      )}
    </>
  );
};

export default Time;
