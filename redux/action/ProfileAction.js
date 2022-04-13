import { PROFILE_CHANGE } from "./Constant";

export const changeProfilePicture = (image) => {
    return {
        type: PROFILE_CHANGE,
        payload: image,
    };
};
