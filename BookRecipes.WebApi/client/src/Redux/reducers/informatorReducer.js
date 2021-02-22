import {
    GET_FRIEND_LITTLE_INFROMATIONS_REQUEST,
    GET_FRIEND_LITTLE_INFROMATIONS_SUCCESS,
    GET_FRIEND_LITTLE_INFROMATIONS_ERROR,
    CLEAR_FRIEND_LITTLE_INFROMATIONS
} from '../actions/actionTypes'

import profilesMock from './profilesMock'

const initialState = {
    userId: null,
    friends: []
}


export default function informatorReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FRIEND_LITTLE_INFROMATIONS_REQUEST:
            return {
                ...state,
                userId: action.userId,
                fetching: true
            }
        case GET_FRIEND_LITTLE_INFROMATIONS_SUCCESS:
            const friend = profilesMock.find((friend) => (
                friend.id === state.userId
            ))
            return {
                ...state,
                friends: [...state.friends, {
                    id: friend.id,
                    name: friend.name,
                    state: "online",
                    photo: friend.photo
                }],
                fetching: false
            }
        case GET_FRIEND_LITTLE_INFROMATIONS_ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false
            }
        case CLEAR_FRIEND_LITTLE_INFROMATIONS:
            return {
                ...state,
                friends: []
            }
        default:
            return state
    }
}
