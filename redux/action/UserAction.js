import { THEME_CHANGE } from './Constant';

export const switchMode = (mode) => {
    return {
        type: THEME_CHANGE,
        payload: mode,
    };
};
