import { Button } from '@material-ui/core'
import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { compose } from 'redux'
import Login from '../components/common/Login'
import { checkLogin, logut } from '../Redux/actions/loginAction'
import { getIsLogin, getLogin } from '../utiles/selectors/selectors'

class LoginContainer  extends Component {

    onSubmit = (data) => {
        this.props.checkLogin(data);
    }

    login = () => {

        return <Login onSubmit={(data) => (this.onSubmit(data))} /> 
    }

    logined = () => {
        return (
            <Button onClick={this.props.logut} variant="outlined">{this.props.login}</Button>
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
        login: getLogin(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkLogin: (data) => (dispatch(checkLogin(data))),
        logut: () => (dispatch(logut())),
}}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(LoginContainer)
 