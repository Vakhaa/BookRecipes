import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,
    ADD_POST_TO_PROFILE,
    UPDATE_POST_TITLE_INTO_PROFILE,
    UPDATE_POST_BODY_INTO_PROFILE
} from '../actions/actionTypes'

const initialState = {
    id: 0,
    name: "Johny Cage",
    photo: "https://source.unsplash.com/random",
    status: "So so",
    description: "To jest najliepsze co zrobily ludzi. Aromatny zapazch, a jaki kolor, smack wymbitny.",
    socailNetworkings: [
        {
            id: 1,
            name: "Git Hub"
        },
        {
            id: 2,
            name: "Facebook"
        },
        {
            id: 3,
            name: "Telegram"
        },
    ],
    posts: [
        {
            id: 0,
            title: "Tonight I'm cooked some fine cake!",
            main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            photo: "https://source.unsplash.com/random"
        },
        {
            id: 1,
            title: "Some photo for you! Duddde",
            main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            photo: "https://source.unsplash.com/random"
        }
    ],
    newPostTitle: "",
    newPostBody: ""
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                id: action.profile,
                fetching: true
            }
        case GET_PROFILE_SUCCESS:
            return {
                profile: action.profile,
                fetching: false
            }
        case GET_PROFILE_ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false
            }
        case UPDATE_POST_TITLE_INTO_PROFILE:
            return {
                ...state,
                newPostTitle : action.text
            }
        case UPDATE_POST_BODY_INTO_PROFILE:
            return {
                ...state,
                newPostBody : action.text
            }
        case ADD_POST_TO_PROFILE:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 3,
                    title: state.newPostTitle,
                    main: state.newPostBody,
                    photo: "https://source.unsplash.com/random"
                }]
            }
        default:
            return state
    }
}
