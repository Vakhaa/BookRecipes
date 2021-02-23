import {
    ADD_MESSAGE_TO_FRIEND,
    GET_FRIEND_MESSAGES_REQUEST,
    GET_FRIEND_MESSAGES_SUCCESS,
    GET_FRIEND_MESSAGES_ERROR
}
    from './actionTypes'

import {profilesAPI} from '../../DAL/api'

export function addMessage(text) {
    return {
        type: ADD_MESSAGE_TO_FRIEND,
        text: text
    }
}

export function requestFriendMessages(userId) {
    return {
        type: GET_FRIEND_MESSAGES_REQUEST,
        userId: userId
    }
}

export function receiveFriendMessages() {
    return {
        type: GET_FRIEND_MESSAGES_SUCCESS,
    }
}

export function errorFriendMessages(error) {
    return {
        type: GET_FRIEND_MESSAGES_ERROR,
        error: error
    }
}

export function getFriendMessages(userId) {
    return (dispatch) => {
        dispatch(requestFriendMessages(userId))

        dispatch(receiveFriendMessages())
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