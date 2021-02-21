import {
    GET_PROFILES_REQUEST,
    GET_PROFILES_SUCCESS,
    GET_PROFILES_ERROR,
 }
    from './actionTypes'

import { profilesAPI } from '../../DAL/api'

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

        profilesAPI.getProfiles().then(data => {
            dispatch(receiveProfiles(data))
        }).catch(error => {
            dispatch(errorProfiles(error))
        })
    }
}
