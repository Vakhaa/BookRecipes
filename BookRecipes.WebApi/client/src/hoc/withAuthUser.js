import React from 'react'  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProfile } from '../Redux/actions/profileAction'

const mapDispatchToProps = dispatch => {
    return {
        getProfile: (id) => (dispatch(getProfile(id))),
    }
}


export const withAuthUser = (Component) => {

    class AuthUser extends React.Component {
        
        render() {
            this.props.getProfile(this.props.match.params.userId);        

            return <Component {...this.props} />
        }
    }
    return withRouter(connect(null, mapDispatchToProps)(AuthUser));
}
 