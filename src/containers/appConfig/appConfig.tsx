import React, { ReactChildren, ReactChild } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import blogApp from "../../reducers";
import { ErrorBoundary } from "../../components/";

interface AppConfigProps {
  children: ReactChild | ReactChildren;
}
export const store = createStore(blogApp);

function AppConfig({ children }: AppConfigProps) {
  return (
    <ErrorBoundary>
      <Provider store={store}>{children}</Provider>
    </ErrorBoundary>
  );
}

export default AppConfig;
