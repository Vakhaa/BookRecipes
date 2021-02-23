import React from 'react'  
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { getProfile } from '../Redux/actions/profileAction'

const mapStateToProps = state => {
    return {
        isLogin: state.login.isLogin,
        loginUserId: state.login.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfile: (id) => (dispatch(getProfile(id))),
    }
}


export const withAuthUser = (Component) => {
    class AuthUser extends React.Component {

        componentDidUpdate(prevProps, prevState) {

            /*if (prevProps.loginUserId !== this.props.loginUserId) {
                this.props.getProfile(
                    this.props.loginUserId
                );
            }*/
        }

        render() {
            if (!this.props.isLogin) return <Redirect to='/recipes' />

            const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.loginUserId
            if (userId) this.props.getProfile(userId);

            return < Component {...this.props} />
        }
}
return withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthUser));
}
 