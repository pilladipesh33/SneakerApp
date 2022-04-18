import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import eng from '../language/english.json';
import hin from '../language/hindi.json';

i18next.use(initReactI18next).init({
    lng: 'eng',
    fallbackLng: 'eng',
    resources: {
        eng: eng,
        hin: hin,
    },
    react: {
        useSuspense: false,
    },
});

export default i18next;
