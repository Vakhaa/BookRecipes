import React, { useEffect} from 'react'  
import { connect } from 'react-redux'
import { compose } from 'redux'
import Messages from '../components/Messages/Messages'
import { withAuthUser } from '../hoc/withAuthUser'
import { getUserFriends } from '../Redux/actions/friendsAction'
import { getFriendsClipInfo, getFriendsId } from '../utiles/selectors/selectors'

const MessagesContainer  = (props) => {

    useEffect(() => {
        props.getUserFriends(props.loginUserId);
    }, [props.loginUserId]);


    const messages = () => <Messages {...props} />
    const loading = () => <div>"Loading"</div>

    return !props.friends ? loading() : messages();
}

const mapStateToProps = state => {
    return {
        friends: getFriendsId(state),
        /*friends: getFriendsClipInfo(state),*/
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserFriends: (userId) => (dispatch(getUserFriends(userId)))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthUser
)(MessagesContainer)
 