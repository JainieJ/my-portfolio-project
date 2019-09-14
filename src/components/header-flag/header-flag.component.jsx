import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageProvider";
import { ReactComponent as BritishFlag } from "../../img/united-kingdom.svg";
import { ReactComponent as RussianFlag } from "../../img/russia.svg";

const HeaderFlag = props => {
  const { language, setLanguage } = useContext(LanguageContext);
  return language === "english" ? (
    <BritishFlag
      {...props}
      title="Switch to Russian"
      onClick={() => setLanguage("russian")}
    />
  ) : (
    <RussianFlag
      {...props}
      title="Переключить на английский"
      onClick={() => setLanguage("english")}
    />
  );
};

export default HeaderFlag;
