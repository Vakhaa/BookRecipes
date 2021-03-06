import React, { Component } from 'react'  

import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Login from '../components/common/Login'
import { getAuth, logout } from '../Redux/actions/loginAction'
import { getErrorLoginMessage, getIsLogin, getLogin } from '../utiles/selectors/selectors'

class LoginContainer  extends Component {

    onSubmit = (data) => {
        this.props.checkLogin(data.login, data.fieldPassword);
    }

    login = () => {

        return <Login isLogin={this.props.isLogin} errorMessage={this.props.errorMessage} onSubmit={(data) => (this.onSubmit(data))} /> 
    }

    logined = () => {
        return (
            <Button onClick={this.props.logout} variant="outlined">{this.props.login}</Button>
            ) 
    }

    render() {
        return (
            !this.props.isLogin ? this.login() : this.logined()
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogin: getIsLogin(state),
        errorMessage: getErrorLoginMessage(state),
        login: getLogin(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkLogin: (login, password) => (dispatch(getAuth(login, password))),
        logout: () => (dispatch(logout())),
}}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(LoginContainer)
 