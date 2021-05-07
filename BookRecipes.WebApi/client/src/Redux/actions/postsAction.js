import {
    ADD_POST_TO_PROFILE_REQUEST,
    ADD_POST_TO_PROFILE_SUCCESS,
    ADD_POST_TO_PROFILE_ERROR,
    GET_USER_POSTS_REQUEST,
    GET_USER_POSTS_SUCCESS,
    GET_USER_POSTS_ERROR
}
    from './actionTypes'

import { postsAPI } from '../../DAL/posts-api'
import { getRefreshToken } from './loginAction'

export function requestAddPost() {
    return {
        type: ADD_POST_TO_PROFILE_REQUEST,
    }
}

export function receiveAddPost() {
    return {
        type: ADD_POST_TO_PROFILE_SUCCESS,
    }
}

export function failedAddPost(error) {
    return {
        type: ADD_POST_TO_PROFILE_ERROR,
        error: error
    }
}

export function requestUserPosts() {
    return {
        type: GET_USER_POSTS_REQUEST
    }
}

export function receiveUserPosts(posts) {
    return {
        type: GET_USER_POSTS_SUCCESS,
        posts: posts
    }
}

export function errorUserPosts(error) {
    return {
        type: GET_USER_POSTS_ERROR,
        error: error
    }
}

//генератор экшена

export function getUserPosts(currentUserId) {
    return async (dispatch) => {
        dispatch(requestUserPosts())

        try {
            let response = await postsAPI.getPosts(currentUserId);

            dispatch(receiveUserPosts(response.data));
        } catch (error)
        {

            if (error.response.status === 401) {
                dispatch(getRefreshToken());
            }

            dispatch(errorUserPosts(error))
        }
    }
}

export function addPost(currentUserId, title, body, authorId, conectionId) {
    return async (dispatch) => {
        dispatch(requestAddPost())

        try {
            let response = await postsAPI.postPost(currentUserId, title, body, authorId, conectionId)

            dispatch(receiveAddPost())

        } catch (error)
        {
            if (error.response.status === 401) {

                dispatch(getRefreshToken());
            }

            dispatch(failedAddPost(error))
        }
    }
}
