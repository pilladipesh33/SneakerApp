import { THEME_CHANGE, LANGUAGE_CHANGE } from './Constant';

export const switchMode = (mode) => {
    return {
        type: THEME_CHANGE,
        payload: mode,
    };
};

export const switchLanguage = (lang) => {
    return {
        type: LANGUAGE_CHANGE,
        payload: lang,
    };
};

