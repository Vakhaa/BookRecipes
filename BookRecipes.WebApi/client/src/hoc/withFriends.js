import React from 'react'  
import { connect } from 'react-redux'
import { getLittleInfromationAboutFriend, getUserFriends } from '../Redux/actions/friendsAction'

const mapStateToProps = state => {
    return {
        profile: state.profiles.profile,
        friendsId: state.friends.friends,
        friends: state.informator.friends
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserFriends: (userId) => (dispatch(getUserFriends(userId))),
        getLittleInfoAboutFriends: (userId) => (dispatch(getLittleInfromationAboutFriend(userId)))
    }
}


export const withFriends = (Component) => {

    class Friends extends React.Component {

        render() {
            this.props.getUserFriends(this.props.profile.id)

            if (this.props.friendsId.length > 0) {
                if (this.props.friends.length === 0) {
                    this.props.friendsId.forEach((friend) => this.props.getLittleInfoAboutFriends(friend.userId))
                }
            }        

            return <Component {...this.props} />
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Friends);
}
 