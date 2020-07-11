import { globalActionTypes } from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false,

    isAuthenticating: false,

    userInfo: null,

    token: null
};

export default function (state = initialState, action) {
    switch(action.type) {
        case globalActionTypes.LOGIN_REQUESTED: {
            return {
                ...state,
                isAuthenticating: true
            }
        }

        case globalActionTypes.LOGIN_SUCCESSED: {
            return {
                ...state,
                isAuthenticated: true,
                isAuthenticating: false,
                userInfo: action.userInfo,
                token: action.token
            }
        }

        case globalActionTypes.LOGIN_FAILED: {
            return {
                ...state,
                isAuthenticated: false,
                isAuthenticating: false,
            }
        }
      
        default: return state;
    }
};