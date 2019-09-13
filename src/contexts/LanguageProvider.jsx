import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("english");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
