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

import { friendsAPI } from '../../DAL/friends-api'

export function requestUserFriends(){
    return {
        type: GET_FRIENDS_REQUEST
    }
}

export function receiveUserFriends(friends) {
    return {
        type: GET_FRIENDS_SUCCESS,
        friends: friends
    }
}

export function errorUserFriends(error) {
    return {
        type: GET_FRIENDS_ERROR,
        error: error
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

export function getUserFriends(userId) {
    return async (dispatch) => {
        dispatch(requestUserFriends())

        try {
            let response = await friendsAPI.getFriends(userId);
            dispatch(receiveUserFriends(response.data))
        } catch (error) {
            dispatch(errorUserFriends(error))
        }
    }
}
