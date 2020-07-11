import { globalActionTypes } from "./actionTypes";

export const loginRequest = () => ({
    type: globalActionTypes.LOGIN_REQUESTED
});

export const loginSuccessed = (userInfo, token) => ({
    type: globalActionTypes.LOGIN_SUCCESSED,
    payload: { userInfo, token }
});

export const loginFailed = () => ({
    type: globalActionTypes.LOGIN_FAILED,
});
