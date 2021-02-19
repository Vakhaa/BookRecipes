import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,
    ADD_POST_TO_PROFILE,
    UPDATE_POST_TITLE_INTO_PROFILE,
    UPDATE_POST_BODY_INTO_PROFILE
}
    from './actionTypes'

export function requestProfile(id) {
    return {
        type: GET_PROFILE_REQUEST,
        profile: id
    }
}

export function receiveProfile(item) {
    return {
        type: GET_PROFILE_SUCCESS,
        profile: item
    }
}

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

export function errorProfile(error) {
    return {
        type: GET_PROFILE_ERROR,
        error: error
    }
}

//генератор экшена

export function getProfile(id) {
    return (dispatch) => {
        dispatch(requestProfile(id))

        fetch(`api/Ingredients/Ingredient/${id}`)
            .then((response) => {
                return response.json()
            }).then(json => {
                dispatch(receiveProfile(json))
            }).catch((e) => {
                dispatch(errorProfile(e))
            });
    }
}