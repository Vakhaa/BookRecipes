import {
    LOGIN_CHECK,
    LOGOUT
} from '../actions/actionTypes'

const loginMock = [
    {
        userId: 0,
        login: "admini",
        password: 1234
    },
    {
        userId: 1,
        login: "sub",
        password: 1234
    },
    {
        userId: 2,
        login: "god",
        password: 1234
    },
    {
        userId: 3,
        login: "wins",
        password: 1234
    }
]

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
            const person = loginMock.find((users) => (
                (users.login === action.data.login) && (users.password == action.data.fieldPassword) ? true : false
            ))
            const checkIsLogin = person ? true : false;
            const checkUserId = person ? person.userId : null;
            const checkLogin = person ? person.login : null;
            return {
                ...state,
                isLogin: checkIsLogin,
                login: checkLogin,
                userId: checkUserId
            }
        default:
            return state
    }
}
