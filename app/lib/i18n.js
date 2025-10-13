import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en", // 
      lng: "en", //
      supportedLngs: ["en", "bn"],
      ns: ["common"],
      defaultNS: "common",
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
      detection: {
        order: ["localStorage", "cookie", "navigator", "htmlTag"],
        caches: ["localStorage", "cookie"],
      },
      react: { useSuspense: false },
    });
}

export default i18n;
