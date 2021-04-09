import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Heading, Trailer } from "../../components";
import styles from "./trailerList.module.scss";

function TrailerList() {
  const userAuth = useSelector((state: CineStore) => state.auth);
  const history = useHistory();
  const watchNow = () => {
    if (userAuth?.isLoggedIn) {
      history.push("/nowShowing");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className={styles.trailers}>
      <Heading classSelector="medium" label="Trailers" />
      {userAuth?.isLoggedIn ? (
        ""
      ) : (
        <p className={styles.instruction}>
          You need to sign in to view Trailers.
          <Link to="/login">Sign In Now </Link>
        </p>
      )}
      <Trailer onClick={watchNow} />
    </div>
  );
}

// interface TrailersProps {
//   Trailers: string;
// }

export default React.memo(TrailerList);
