import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationPL from '../translations/pl.json';
import translationEN from '../translations/en.json';

i18n 
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