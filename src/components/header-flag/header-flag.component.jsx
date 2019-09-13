import React from "react";
import { ReactComponent as BritishFlag } from "../../img/united-kingdom.svg";
import { ReactComponent as RussianFlag } from "../../img/russia.svg";
import { LanguageContext } from "../../contexts/LanguageProvider";
import { useContext } from "react";

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
