 import LanguageDetector from 'i18next-browser-languagedetector';
 import en from './en/en.json';
 import es from './es/es.json';
 import i18n from 'i18next';
 import { initReactI18next } from 'react-i18next';
 
 const resources = {
     en: { translation: en},
     es: { translation: es}
 } as const;
 
 i18n.use(LanguageDetector)
     .use(initReactI18next)
     .init({
         debug: true,
         fallbackLng: 'en',
         resources
     });
 
 export default i18n;
 