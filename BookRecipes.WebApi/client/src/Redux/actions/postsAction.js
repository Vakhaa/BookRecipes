import {
    ADD_POST_TO_PROFILE,
    GET_USER_POSTS_REQUEST,
    GET_USER_POSTS_SUCCESS,
    GET_USER_POSTS_ERROR
}
    from './actionTypes'

import {profilesAPI} from '../../DAL/api'

export function addPost(post) {
    return {
        type: ADD_POST_TO_PROFILE,
        post: post
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


//��������� ������

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
