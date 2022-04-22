import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../language/english.json';
import hi from '../language/hindi.json';
import * as RNLocalize from 'react-native-localize';
import { changeLanguage } from '../api/RemoteConfig';

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
   i18next.language = locale;
};

export const getCurrentLocale = i18next.language;



i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: en,
      hi: hi,
    },
  });

export default i18next;
