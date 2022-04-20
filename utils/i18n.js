import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../language/english.json';
import hi from '../language/hindi.json';
import * as RNLocalize from 'react-native-localize';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

export const setLocale = locale => {
    RNLocalize.getLocales()[0].languageCode = locale;
};

export const getCurrentLocale = RNLocalize.getLocales()[0].languageCode;




i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: en,
      hi: hi,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
