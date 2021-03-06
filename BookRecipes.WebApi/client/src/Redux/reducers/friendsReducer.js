import {
    GET_FRIENDS_REQUEST,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_ERROR,

} from '../actions/actionTypes'

const initialState = {
    friends: []
}

let friendsMock = [
    {
        userId:0,
        friends: [
            {
                userId:1
            },
            {
                userId:2
            },
            ,
            {
                userId:3
            }
        ]
    },
    {
        userId: 1,
        friends: [
            {
                userId: 0
            },
            {
                userId: 2
            }
        ]
    },
    {
        userId :2,
        friends: [
            {
                userId: 0
            },
            {
                userId: 1
            }
        ]
    },
    {
        userId: 3,
        friends: [
            {
                userId: 0
            }
        ]
    }
]

export default function friendsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FRIENDS_REQUEST:
            return {...state}
        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.friends
            }
        case GET_FRIENDS_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
