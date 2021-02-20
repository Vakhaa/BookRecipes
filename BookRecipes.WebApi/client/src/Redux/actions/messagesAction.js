import {
    ADD_MESSAGE_TO_FRIEND,
    UPDATE_MESSAGE_TO_FRIEND
}
    from './actionTypes'

import {profilesAPI} from '../../DAL/api'

/*export function requestProfileFriend(id) {
    return {
        type: GET_PROFILE_REQUEST,
        profile: id
    }
}*/

/*export function receiveProfileFriend(item) {
    return {
        type: GET_PROFILE_SUCCESS,
        profile: item
    }
}*/

export function addMessage() {
    return {
        type: ADD_MESSAGE_TO_FRIEND
    }
}

export function updateMessageBody(text) {
    return {
        type: UPDATE_MESSAGE_TO_FRIEND,
        text: text
    }
}

/*export function errorProfileFriend(error) {
    return {
        type: GET_PROFILE_ERROR,
        error: error
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