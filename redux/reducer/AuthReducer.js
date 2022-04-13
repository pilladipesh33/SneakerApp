import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../action/Constant';
const initialState = {
    user: {},
    error: '',
    isFetching: false,
    accessToken: '',
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log('action', action.payload)
            return {
                ...state,
                user: action.payload,
                accessToken: action.payload.uid,
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                accessToken: '',
                user: {},
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                ...initialState,
                error: action.payload,
            }

            case LOGIN_REQUEST:
                return{
                    ...state,
                    uid: action.payload
                }
        default:
            return state;
    }
}

export default AuthReducer;