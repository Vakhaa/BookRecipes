import { authAPI } from '../../DAL/auth-api'
import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_CHECK,
    LOGOUT
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

/*export function logIn(userId) {
    return (dispatch) => {
        dispatch(requestUserPosts(userId))

        dispatch(receiveUserPosts())
    }
}*/


//генератор экшена

export function getAuth(login, password) {
    return async (dispatch) => {
        dispatch(checkLogin())
        
        try {
            let response = await authAPI.auth(login, password);
            
            if (response.data == null) {
                dispatch(failedLogin("505 problem with server"))
                return;
            } else if (!response.data.isAuth) {
                dispatch(failedLogin(response.data.message))
                return;
            }
            //dispatch token
            dispatch(successLogin(response.data))
        } catch (error) {
            dispatch(failedLogin(error))
        }
    }
}

export function getLogout() {
    return async (dispatch) => {
        dispatch(checkLogin())
        
        try {
            let response = await authAPI.logout();
            dispatch(logout);

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
            console.log("logout: " + error);
        }
    }
} //Dodaj action i odswiezs reducer

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
            console.log("register: " + error);
        }
    }
} //Dodaj action i odswiez reducer
