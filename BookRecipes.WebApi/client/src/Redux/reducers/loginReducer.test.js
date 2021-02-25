import { checkLogin, logout } from "../actions/loginAction";
import loginReducer from "./loginReducer";

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

const state = {
    login: null,
    isLogin: false,
    userId: null
}

it('login should be success', () => {
    //Arrange
    const expectedLogin = {
        login: "sub",
        password: 1234
    }

    let action = checkLogin(expectedLogin)

    //Act
    let newState = loginReducer(state, action)

    
    //Assert
    expect(newState.userId).toBe(1);
    expect(newState.login).toBe(expectedLogin.login);
    expect(newState.isLogin).toBe(true);
});

it('login should be failed', () => {
    //Arrange
    const expectedLogin = {
        login: "subzero",
        password: 1234
    }

    let action = checkLogin(expectedLogin)

    //Act
    let newState = loginReducer(state, action)


    //Assert
    expect(newState.userId).toBe(null);
    expect(newState.login).toBe(null);
    expect(newState.isLogin).toBe(false);
});

it('logout should be success', () => {
    //Arrange
    const initState = {
        ...state,
        userId: 1,
        login: "sub"
    }

    /*console.log(initState)*/

    let action = logout()

    //Act
    let newState = loginReducer(initState, action)

    
    //Assert
    expect(newState.userId).toBe(null);

    expect(newState.login).toBe(null);
    expect(newState.isLogin).toBe(false);
});



