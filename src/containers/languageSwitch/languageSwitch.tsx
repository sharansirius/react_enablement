import React, { ReactChild, ReactChildren, useState } from "react";
import { IntlProvider } from "react-intl";
import { ENGLISH, HINDI, MALAYALAM, TAMIL, TELUGU } from "../../lang";
import { LANGUAGES } from "../../constants/appConstants";
import Context from "../../lang/languageInit";
// import styles from "./languageSwitch.module.scss";

function LanguageSwitch({ children }: LanguageSwitchProps) {
  const [lang, setLang] = useState(LANGUAGES.ENGLISH);
  const [messages, setMessages] = useState(ENGLISH);

  const selectLanguage = (newLang: string) => {
    setLang(newLang);
    switch (newLang) {
      case LANGUAGES.ENGLISH:
        setMessages(ENGLISH);
        break;
      case LANGUAGES.TAMIL:
        setMessages(TAMIL);
        break;
      case LANGUAGES.TELEGU:
        setMessages(TELUGU);
        break;
      case LANGUAGES.MALAYALAM:
        setMessages(MALAYALAM);
        break;
      case LANGUAGES.HINDI:
        setMessages(HINDI);
        break;
      default:
        setMessages(ENGLISH);
        break;
    }
  };

  return (
    <Context.Provider value={{ lang, selectLanguage }}>
      <IntlProvider locale={lang} messages={messages}>
        <>{children}</>
      </IntlProvider>
    </Context.Provider>
  );
}

interface LanguageSwitchProps {
  children:
    | ReactChild
    | ReactChildren
    | Array<ReactChild>
    | Array<ReactChildren>;
}

export default React.memo(LanguageSwitch);
