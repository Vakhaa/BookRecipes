import {
    LOGIN_CHECK,
    LOGUT
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
        case LOGUT:
            return {
                ...state,
                isLogin: false,
                login: null,
                userId: null
            }
        case LOGIN_CHECK:
            const person = loginMock.find((users) => (
                (users.login === action.data.login) && (users.password == action.data.password) ? true : false
            ))
            const checkLogin = person ? true : false;
            const checkUserId = person ? person.userId : null;
            const checklogin = person ? person.login : null;
            return {
                ...state,
                isLogin: checkLogin,
                login: checklogin,
                userId: checkUserId
            }
        default:
            return state
    }
}
