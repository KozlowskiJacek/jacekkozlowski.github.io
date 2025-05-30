import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend";
import translationPL from '../../public/translations/pl.json';
import translationEN from '../../public/translations/en.json';

i18n 
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pl: { translation: translationPL },
      en: { translation: translationEN },
    },
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });


  export default i18n