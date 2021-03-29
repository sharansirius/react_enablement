import React, { ReactChild, ReactChildren } from "react";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import store from "../../redux/store";
import { ErrorFallback } from "../../components";

function Main({ children }: MainProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>{children}</Provider>
    </ErrorBoundary>
  );
}

interface MainProps {
  children:
    | ReactChild
    | ReactChildren
    | Array<ReactChild>
    | Array<ReactChildren>;
}

export default Main;
