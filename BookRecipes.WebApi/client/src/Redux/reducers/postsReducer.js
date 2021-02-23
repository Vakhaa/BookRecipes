import {
    ADD_POST_TO_PROFILE,
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
    ],
}

let postsMock = [
    {
        id: 0,
        userId: 0,
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
    },
    {
        id: 1,
        userId: 1,
        posts: [
            {
                id: 0,
                title: "SnowFlakes!",
                main: "It's so beautiful",
                photo: "https://source.unsplash.com/random"
            },
            {
                id: 1,
                title: "I win Scorpion",
                main: "Just look to this punch",
                photo: "https://source.unsplash.com/random"
            }
        ],
    },
    {
        id: 2,
        userId: 2,
        posts: [
            {
                id: 0,
                title: "God!",
                main: "Thunder god",
                photo: "https://source.unsplash.com/random"
            },
            {
                id: 1,
                title: "It's me",
                main: "Just look to the God",
                photo: "https://source.unsplash.com/random"
            },
            {
                id: 1,
                title: "Alarm",
                main: "We need to protect the Earth!",
                photo: "https://source.unsplash.com/random"
            }
        ],
    },
    {
        id: 3,
        userId: 3,
        posts: [
            {
                id: 0,
                title: "Wheres Subzero ?",
                main: "I need him now!",
                photo: "https://source.unsplash.com/random"
            }
        ],
    }
]

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST_TO_PROFILE:
            const newPost = {
                id: 3,
                title: action.post.postTitle,
                main: action.post.postBody,
                photo: "https://source.unsplash.com/random"
            }
            postsMock = postsMock.map((user) => (
                (state.userId === user.userId) ?
                    user = {
                        ...user,
                        posts : [...state.posts, newPost]
                    } : user
                ))
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case GET_USER_POSTS_REQUEST:
            return {
                ...state,
                userId: action.userId
            }
        case GET_USER_POSTS_SUCCESS:
            return {
                ...state,
                posts: postsMock.find( (posts) => (
                    posts.userId == state.userId
                )).posts
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
