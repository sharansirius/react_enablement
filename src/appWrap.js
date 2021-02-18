import React from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./themeConfig";
import { GlobalStyles } from "./global";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { bookStore } from "./reducers"

function AppWrap({ children }) {
  const store = createStore(bookStore);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default AppWrap;
