import {LANGUAGE_CHANGE} from './Constant';

export const handleLang = lang => ({
    type: LANGUAGE_CHANGE,
    payload: lang,
});

