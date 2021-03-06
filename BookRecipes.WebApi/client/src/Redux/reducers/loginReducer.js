import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_CHECK,
    LOGOUT
} from '../actions/actionTypes'

const initialState = {
    login: null,
    isLogin: false,
    userId: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                isLogin: false,
                login: null,
                userId: null
            }
        case LOGIN_CHECK:
            return { ...state }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: action.isLogin,
                login: action.login,
                userId: action.userId,
                error: null
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
