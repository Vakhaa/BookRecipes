import {
    GET_FRIENDS_REQUEST,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_ERROR,
    GET_FRIEND_LITTLE_INFROMATIONS_REQUEST,
    GET_FRIEND_LITTLE_INFROMATIONS_SUCCESS,
    GET_FRIEND_LITTLE_INFROMATIONS_ERROR,
    CLEAR_FRIEND_LITTLE_INFROMATIONS
}
    from './actionTypes'

import {profilesAPI} from '../../DAL/api'

export function requestUserFriends(userId) {
    return {
        type: GET_FRIENDS_REQUEST,
        userId: userId
    }
}

export function receiveUserFriends() {
    return {
        type: GET_FRIENDS_SUCCESS,
    }
}

export function errorUserFriends() {
    return {
        type: GET_FRIENDS_ERROR,
    }
}

export function getUserFriends(userId) {
    return (dispatch) => {
        dispatch(requestUserFriends(userId))

        dispatch(receiveUserFriends())
    }
}

export function requestFriendLittleInformation(userId) {
    return {
        type: GET_FRIEND_LITTLE_INFROMATIONS_REQUEST,
        userId: userId
    }
}

export function receiveFriendLittleInfromation() {
    return {
        type: GET_FRIEND_LITTLE_INFROMATIONS_SUCCESS,
    }
}

export function errorFriendLittleInfromation() {
    return {
        type: GET_FRIEND_LITTLE_INFROMATIONS_ERROR,
    }
}

export function getLittleInfromationAboutFriend(userId) {
    return (dispatch) => {
        dispatch(requestFriendLittleInformation(userId))

        dispatch(receiveFriendLittleInfromation())
    }
}

export function clearFriends() {
    return {
        type: CLEAR_FRIEND_LITTLE_INFROMATIONS
    }
}
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
