import { authAPI } from '../../DAL/auth-api'
import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_CHECK,
    LOGOUT,
    REFRESH_ACCESS_REQUEST,
    REFRESH_ACCESS_SUCCESS,
    REFRESH_ACCESS_ERROR
}
    from './actionTypes'

export function checkLogin() {
    return {
        type: LOGIN_CHECK
    }
}

export function successLogin(data) {
    return {
        type: LOGIN_SUCCESS,
        isLogin: data.isAuth,
        login: data.login,
        userId: data.userId
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function failedLogin(error) {
    return {
        type: LOGIN_FAILED,
        error: error
    }
}

export function requestRefreshToken() {
    return {
        type: REFRESH_ACCESS_REQUEST
    }
}

export function successRefreshToken() {
    return {
        type: REFRESH_ACCESS_SUCCESS
    }
}

export function failedRefreshToken(error) {
    return {
        type: REFRESH_ACCESS_ERROR,
        error: error
    }
}

//генератор экшена

export function getAuth(login, password) {
    return async (dispatch) => {
        dispatch(checkLogin());

        try {
            let response = await authAPI.auth(login, password);

            if (response.data == null) {
                dispatch(failedLogin("505 problem with server"))
                return;
            } else if (!response.data.isAuth) {
                dispatch(failedLogin(response.data.message))
                return;
            }

            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);

            dispatch(successLogin(response.data));
        } catch (error) {
            dispatch(failedLogin(error.response.data.message));
        }
    }
}

export function getLogout() {
    return async (dispatch) => {
        try {
            
            let response = await authAPI.logout();

            dispatch(logout());

        } catch (error) {

            console.log("logout: " + error.message);
        }
    }
}

export function getRefreshToken() {
    return async (dispatch) => {
        try {
            dispatch(requestRefreshToken())

            let response = await authAPI.refresh();

            if (response.data == null) {
                dispatch(failedLogin("505 problem with server")) //Special, we can't say current problem.
                return;
            }

            //save new tokens
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);

            dispatch(successRefreshToken());
            dispatch(successLogin(response.data))

        } catch (error) {
            dispatch(failedRefreshToken(error.message));
            dispatch(failedLogin("Your tokens aren't work"));
            dispatch(getLogout());
        }
    }
}

export function getRegister(login, password) {
    return async (dispatch) => {
        dispatch(checkLogin())

        try {
            let response = await authAPI.register(login, password);
            console.log("register: okay");
            /*if (response.data == null) {
                dispatch(failedLogin("505 problem with server"))
                return;
            } else if (!response.data.isAuth) {
                dispatch(failedLogin(response.data.message))
                return;
            }
            dispatch(successLogin(response.data))*/
        } catch (error) {
            /*dispatch(failedLogin(error))*/
            console.log("register: " + error.message);
        }
    }
} //Dodaj action i odswiez reducer
