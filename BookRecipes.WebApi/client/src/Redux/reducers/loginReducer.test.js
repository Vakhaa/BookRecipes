import { successLogin, failedLogin, logout } from "../actions/loginAction";
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
        userId: 1,
        login: "sub",
        isLogin: true,
    }

    let action = successLogin(expectedLogin)

    //Act
    let newState = loginReducer(state, action)
    
    //Assert
    expect(newState.userId).toBe(1);
    expect(newState.login).toBe(expectedLogin.login);
});

it('login should be failed', () => {
    //Arrange
    
    let action = failedLogin("error");

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



