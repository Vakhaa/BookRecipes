import {
    ADD_POST_TO_PROFILE_REQUEST,
    ADD_POST_TO_PROFILE_SUCCESS,
    ADD_POST_TO_PROFILE_ERROR,
    GET_USER_POSTS_REQUEST,
    GET_USER_POSTS_SUCCESS,
    GET_USER_POSTS_ERROR

} from '../actions/actionTypes'


const initialState = {
    id: 0,
    userId: null,
    posts: [
        {
            id: 0,
            title: "Tonight I'm cooked some fine cake!",
            main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            photo: "https://source.unsplash.com/random"
        }
    ]
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST_TO_PROFILE_REQUEST:
            return { ...state }
        case ADD_POST_TO_PROFILE_SUCCESS:
            return { ...state }
        case ADD_POST_TO_PROFILE_ERROR:
            return { ...state, error: action.error }
        case GET_USER_POSTS_REQUEST:
            return {...state}
        case GET_USER_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts
            }
        case GET_USER_POSTS_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
