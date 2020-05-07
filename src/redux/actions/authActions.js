import { globalActionTypes } from "./actionTypes";

export const login = (account, persistAccount) => ({
    type: globalActionTypes.ACCOUNT_LOGIN,
    payload: { account, persistAccount }
});

export const logout = () => ({
    type: globalActionTypes.ACCOUNT_LOGOUT
});