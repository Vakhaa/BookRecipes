import {
    ADD_POST_TO_PROFILE,
    GET_USER_POSTS_REQUEST,
    GET_USER_POSTS_SUCCESS,
    GET_USER_POSTS_ERROR
}
    from './actionTypes'

import { postsAPI } from '../../DAL/posts-api'

export function addPost(post) {
    return {
        type: ADD_POST_TO_PROFILE,
        post: post
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
            let response = await postsAPI.getPosts(currentUserId)
            dispatch(receiveUserPosts(response.data))
        } catch (error)
        {
            dispatch(errorUserPosts(error))
        }
    }
}
