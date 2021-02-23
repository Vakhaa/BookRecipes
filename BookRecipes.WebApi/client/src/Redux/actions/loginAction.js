import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_CHECK,
    LOGUT
}
    from './actionTypes'

export function checkLogin(data) {
    return {
        type: LOGIN_CHECK,
        data: data
    }
}

export function successLogin() {
    return {
        type: LOGIN_SUCCESS
    }
}

export function logut() {
    return {
        type: LOGUT
    }
}

export function failedLogin() {
    return {
        type: LOGIN_FAILED
    }
}

/*export function logIn(userId) {
    return (dispatch) => {
        dispatch(requestUserPosts(userId))

        dispatch(receiveUserPosts())
    }
}*/


//генератор экшена

/*export function getProfile(id) {
    return (dispatch) => {
        dispatch(requestProfile(id))

        profilesAPI.getProfile().then(data => {
            dispatch(receiveProfile(data))
        }).catch(error => {
            dispatch(errorProfile(error))
        })
    }
}*/
