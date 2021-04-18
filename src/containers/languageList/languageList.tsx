import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Heading, Language } from "../../components";
import { LANGUAGES_HTML_EQUIVALENT } from "../../constants/appConstants";
import Context from "../../lang/languageInit";
import styles from "./languageList.module.scss";

function LanguageList() {
  const context = useContext(Context);
  return (
    <div className={styles.languageList}>
      <Heading label="View in Other Languages" classSelector="small" />
      <div className={styles.content}>
        {Object.entries(LANGUAGES_HTML_EQUIVALENT).map(
          (literal: [string, string]) => (
            <Language
              key={uuidv4()}
              literal={literal}
              onClick={() => context.selectLanguage(literal[0])}
            />
          )
        )}
      </div>
    </div>
  );
}

// interface LanguageListProps {
//   onLangChange: (lang: string) => void;
// }

export default LanguageList;
