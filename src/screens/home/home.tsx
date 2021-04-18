import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./home.module.scss";
import { JumboImage, ErrorFallback } from "../../components";
import {
  Lottery,
  TeasersList,
  TrailerList,
  LanguageList,
  LanguageSwitch,
} from "../../containers";

function Home() {
  return (
    <>
      <JumboImage src="images/sindel-background.png" />
      <div className={styles.otherContents}>
        <LanguageSwitch>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Lottery />
          </ErrorBoundary>
          <TrailerList />
          <TeasersList />
          <LanguageList />
        </LanguageSwitch>
      </div>
    </>
  );
}

export default React.memo(Home);
