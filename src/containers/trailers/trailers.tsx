import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import styles from "./trailers.module.scss";
import { Heading, Image, Button } from "../../components";

function Trailers() {
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
      <div className={styles.content}>
        <Image
          classSelector="medium"
          src="images/sindel-background.png"
          alt="Movie"
        />
        <div className={styles.details}>
          <Heading classSelector="small" label="Sintel" />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <Button
            classSelector="primary"
            label="Watch Now"
            onClick={watchNow}
          />
        </div>
      </div>
    </div>
  );
}

// interface TrailersProps {
//   Trailers: string;
// }

export default React.memo(Trailers);
