import { LANGUAGE_CHANGE } from './Constant';


export const switchLanguage = (lang) => {
    return {
        type: LANGUAGE_CHANGE,
        payload: lang,
    };
};
