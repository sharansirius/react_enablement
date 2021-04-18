import { createContext } from "react";

const initValue = {
  lang: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectLanguage: (lang: string) => {},
};

const Context = createContext(initValue);

export default Context;
