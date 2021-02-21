import {
    ADD_POST_TO_PROFILE,
    UPDATE_POST_TITLE_INTO_PROFILE,
    UPDATE_POST_BODY_INTO_PROFILE,
    GET_USER_POSTS_REQUEST,
    GET_USER_POSTS_SUCCESS,
    GET_USER_POSTS_ERROR
}
    from './actionTypes'

import {profilesAPI} from '../../DAL/api'

export function addPost() {
    return {
        type: ADD_POST_TO_PROFILE
    }
}

export function updatePostBody(text) {
    return {
        type: UPDATE_POST_BODY_INTO_PROFILE,
        text: text
    }
}

export function updatePostTitle(text) {
    return {
        type: UPDATE_POST_TITLE_INTO_PROFILE,
        text: text
    }
}

export function requestUserPosts(userId) {
    return {
        type: GET_USER_POSTS_REQUEST,
        userId: userId
    }
}

export function receiveUserPosts() {
    return {
        type: GET_USER_POSTS_SUCCESS,
    }
}

export function errorUserPosts() {
    return {
        type: GET_USER_POSTS_ERROR,
    }
}

export function getUserPosts(userId) {
    return (dispatch) => {
        dispatch(requestUserPosts(userId))

        dispatch(receiveUserPosts())
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
