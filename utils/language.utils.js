import i18n from 'i18next';
import en from '../language/en.json';
import hin from '../language/hin.json';

I18n.fallbacks = true;
I18n.missingBehaviour = 'guess';
I18n.defaultLocale = 'en';
I18n.locale = 'en';

I18n.translations = {
    hin,
    en,
  };

  export const setLocale = (locale) => {
    I18n.locale = locale;
  };

  export const getCurrentLocale = () => I18n.locale;

  export const translateHeaderText = (langKey) => ({screenProps}) => {
    const title = I18n.translate(langKey, screenProps.language);
    return {title};
  };

  export default I18n.translate.bind(I18n);