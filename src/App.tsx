import React from "react";
import "./App.scss";
import "./theme.scss";
import { Provider } from "react-redux";
import { ErrorBoundary } from "./components";
import store from "./redux/store";
import { Main } from "./containers";

function App() {
  console.log("--- Container --- App init");
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Main />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
