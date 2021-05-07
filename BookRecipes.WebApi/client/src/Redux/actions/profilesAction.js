import {
    GET_PROFILES_REQUEST,
    GET_PROFILES_SUCCESS,
    GET_PROFILES_ERROR,
 }
    from './actionTypes'

import { profilesAPI } from '../../DAL/api'
import { getRefreshToken } from './loginAction'

export function requestProfiles() {
    return {
        type: GET_PROFILES_REQUEST,
    }
}

export function receiveProfiles(item) {
    return {
        type: GET_PROFILES_SUCCESS,
        profiles: item
    }
}

export function errorProfiles(error) {
    return {
        type: GET_PROFILES_ERROR,
        error: error
    }
}

//генератор экшена

export function getProfiles() {
    return (dispatch) => {
        dispatch(requestProfiles())

        try {
            let response = await profilesAPI.getProfiles();

            dispatch(receiveProfiles(response.data))
        } catch (error) {

            if (error.response.status === 401) {
                dispatch(getRefreshToken());
            }
            dispatch(errorProfiles(error))
        }
    }
}
