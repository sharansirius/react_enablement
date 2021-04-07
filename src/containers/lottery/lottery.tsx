import React, { useState } from "react";
import styles from "./lottery.module.scss";
import { Button, Heading, Input } from "../../components";
import * as _service from "../../services/LotteryService";

function Lottery() {
  const [mobileNo, setMobileNo] = useState(" ");
  const [formResponse, setFormResponse] = useState("");
  // throw new Error();
  const submitLottery = () => {
    _service
      .checkForPrize(mobileNo)
      .then((res) => {
        if (res && res.data && res.data.prize) {
          setFormResponse(
            "Hurray! you won a free ticket to Blind Data on Wednesday"
          );
        } else {
          setFormResponse("Sorry :( better luck next time");
          throw new Error();
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className={styles.lotteryWrapper}>
      {formResponse ? (
        <Heading label={formResponse} classSelector="medium" />
      ) : (
        <>
          <Input
            label="Your mobile number can win you exciting prices"
            type="text"
            placeholder="+91-8438120404"
            value={mobileNo}
            name="phno"
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <Button
            label="I'm Feeling Lucky"
            onClick={submitLottery}
            classSelector="secondary"
          />
        </>
      )}
    </div>
  );
}

export default React.memo(Lottery);
