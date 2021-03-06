import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,
}
    from './actionTypes'

import { profilesAPI } from '../../DAL/profile-api'

/*export function requestProfile(id) {
    return {
        type: GET_PROFILE_REQUEST,
        id: id
    }
}
*/

export function requestProfile() {
    return {
        type: GET_PROFILE_REQUEST,
    }
}

export function receiveProfile(item) {
    return {
        type: GET_PROFILE_SUCCESS,
        profile: item
    }
}

/*export function receiveProfile() {
    return {
        type: GET_PROFILE_SUCCESS
    }
}*/


export function errorProfile(error) {
    return {
        type: GET_PROFILE_ERROR,
        error: error
    }
}


//генератор экшена
/*export function getProfile(id) {
    return (dispatch) => {
        dispatch(requestProfile(id))
        dispatch(receiveProfile())
    }
}*/


 export function getProfile(id) {
    return async (dispatch) => {
        dispatch(requestProfile())

        try {
            let response = await profilesAPI.getProfile(id);
            dispatch(receiveProfile(response.data))
        } catch(error) {
            dispatch(errorProfile(error))
        }
    }
}


