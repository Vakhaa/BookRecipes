import {
    ADD_MESSAGE_TO_FRIEND,
    GET_FRIEND_MESSAGES_REQUEST,
    GET_FRIEND_MESSAGES_SUCCESS,
    GET_FRIEND_MESSAGES_ERROR
}
    from './actionTypes'

import { messagesAPI } from '../../DAL/messages-api'

export function addMessage(text) {
    return {
        type: ADD_MESSAGE_TO_FRIEND,
        text: text
    }
}

export function requestFriendMessages() {
    return {
        type: GET_FRIEND_MESSAGES_REQUEST
    }
}

export function receiveFriendMessages(messages) {
    return {
        type: GET_FRIEND_MESSAGES_SUCCESS,
        messages: messages
    }
}

export function errorFriendMessages(error) {
    return {
        type: GET_FRIEND_MESSAGES_ERROR,
        error: error
    }
}

//генератор экшена

export function getFriendMessages(currentUserId, friendId) {
    return async (dispatch) => {
        dispatch(requestFriendMessages())

        try {
            var response = await messagesAPI.getMessages(currentUserId, friendId);
            dispatch(receiveFriendMessages(response.data))
        } catch (error) {
            dispatch(errorFriendMessages(error))
        }
    }
}
