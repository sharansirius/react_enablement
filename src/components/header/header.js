import React, {useContext} from "react";
import { TimeKeeper } from "../../components";
import UserContext from "../../context/userContext";
import "./header.scss";
export const Header = React.memo(() => {
    const user_info = useContext(UserContext);
  // const user_info = { name: "Sharan", prime: "true" };
  console.log("On Header init");
  return (
    <div className="header">
      <ul>
        <li className="logo">
          <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" /> 
          {/* move the image into Logo */}
        </li>
        <li className={user_info?.prime === "false" ? "hide" : "prime"}>
          <img src={process.env.PUBLIC_URL + "/img/prime.png"} alt="prime" />
           {/* Move the prime logo as a seperate component */}
        </li>
      </ul>
      <ul className="timeKeeper">
        <li>
          <TimeKeeper init={new Date()} />
        </li>
        <li>Hi, {user_info?.name}</li>
      </ul>
    </div>
  );
});


