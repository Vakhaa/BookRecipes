import React, {Component, useEffect} from 'react'  
import { connect } from 'react-redux'
import { compose } from 'redux'
import Messages from '../components/Messages/Messages'
import { withAuthUser } from '../hoc/withAuthUser'
import { getUserFriends } from '../Redux/actions/friendsAction'
import { getFriendsClipInfo, getFriendsId } from '../utiles/selectors/selectors'

const friendsMock = [
    {
        id: 0,
        name: "Kun Lao",
        newMessages: 5,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 1,
        name: "Subzero",
        newMessages: 0,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 2,
        name: "Mortal Kombar Team",
        newMessages: 127,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 3,
        name: "Scorpion",
        newMessages: 1,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 4,
        name: "Raiden",
        newMessages: 0,
        photo: "https://source.unsplash.com/random"
    }
]


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
 