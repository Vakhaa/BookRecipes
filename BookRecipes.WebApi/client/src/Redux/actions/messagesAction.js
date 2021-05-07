import {
    ADD_MESSAGE_TO_FRIEND_REQUEST,
    ADD_MESSAGE_TO_FRIEND_SUCCESS,
    ADD_MESSAGE_TO_FRIEND_ERROR,
    GET_FRIEND_MESSAGES_REQUEST,
    GET_FRIEND_MESSAGES_SUCCESS,
    GET_FRIEND_MESSAGES_ERROR,
}
    from './actionTypes'

import { messagesAPI } from '../../DAL/messages-api'
import { getRefreshToken } from './loginAction'

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

export function requestAddMessage() {
    return {
        type: ADD_MESSAGE_TO_FRIEND_REQUEST
    }
}

export function receiveAddMessage() {
    return {
        type: ADD_MESSAGE_TO_FRIEND_SUCCESS
    }
}

export function failedAddMessage(error) {
    return {
        type: ADD_MESSAGE_TO_FRIEND_ERROR,
        error: error
    }
}


//генератор экшена

export function addMessage(currentUserId, friendId, message, conectionId) {
    return async (dispatch) => {
        dispatch(requestAddMessage())

        try {
            var response = await messagesAPI.postMessage(currentUserId, friendId, message, conectionId);

            //chathubConnection.invoke("Send", response);
            dispatch(receiveAddMessage())
            /*chathubConnection.on("Send", function (data) {
                console.log(data);
            });*/
        } catch (error) {

            if (error.response.status === 401) {
                dispatch(getRefreshToken()); 
            }

            dispatch(failedAddMessage(error))
        }
    }
}

export function getFriendMessages(currentUserId, friendId) {
    return async (dispatch) => {
        dispatch(requestFriendMessages())

        try {
            var response = await messagesAPI.getMessages(currentUserId, friendId);

            dispatch(receiveFriendMessages(response.data))
        } catch (error) {

            if (error.response.status  === 401) {
                dispatch(getRefreshToken()); 
            }

            dispatch(errorFriendMessages(error))
        }
    }
}
