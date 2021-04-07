import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./home.module.scss";
import { JumboImage, Language, ErrorFallback } from "../../components";
import { Lottery, TeasersList, Trailers } from "../../containers";

function Home() {
  return (
    <>
      <JumboImage src="images/sindel-background.png" />
      <div className={styles.otherContents}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Lottery />
        </ErrorBoundary>
        <Trailers />
        <TeasersList />
        <Language />
      </div>
    </>
  );
}

// interface HomeProps {
//   home: string;
// }

export default React.memo(Home);
