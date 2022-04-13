import { PROFILE_CHANGE } from '../action/Constant';

const initialState = {
    image: '',
};

const ProfileReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case PROFILE_CHANGE :
        return {
            ...state,
            image: action.payload,
        }
        default:
            return state;
    }
};

export default ProfileReducer;
