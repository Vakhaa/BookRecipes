import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { getLittleInfromationAboutFriend, getUserFriends } from '../Redux/actions/friendsAction'

import Friends from '../components/Friends/Friends'
import { compose } from 'redux'
import { withAuthUser } from '../hoc/withAuthUser'
import { getProfile, getFriendsClipInfo, getFriendsId, getProfileIsFetching} from '../utiles/selectors/selectors'

class FriendsContainer  extends Component {
    //TODO : current friends
    profile = () => {

        this.props.getUserFriends(this.props.profile.id)

        if (this.props.friendsId.length > 0) {
            if (this.props.friends.length===0) {
                this.props.friendsId.forEach((friend) => this.props.getLittleInfoAboutFriends(friend.userId))
            }
        }
        return <Friends
            friends={this.props.friends}
        /> 
    }

    loading = () => {
        return <div>"loading"</div>
    }

    render() {
        return (
            !this.props.profile ? this.loading() : this.profile()
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: getProfile(state),
        isFetching: getProfileIsFetching(state),
        friendsId: getFriendsId(state),
        friends: getFriendsClipInfo(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserFriends: (userId) => (dispatch(getUserFriends(userId))),
        getLittleInfoAboutFriends: (userId) => (dispatch(getLittleInfromationAboutFriend(userId)))
}}

export default compose(
    withAuthUser,
    connect(mapStateToProps, mapDispatchToProps),
)(FriendsContainer)
 