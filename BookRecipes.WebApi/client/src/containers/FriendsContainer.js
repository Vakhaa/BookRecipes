import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getLittleInfromationAboutFriend, getUserFriends } from '../Redux/actions/friendsAction'

import Friends from '../components/Friends/Friends'
import { withAuthUser } from '../hoc/withAuthUser'
import { getProfile, getFriendsClipInfo, getFriendsId, getProfileIsFetching} from '../utiles/selectors/selectors'

class FriendsContainer  extends Component {
    //TODO : friends current user
    refreshFriends() {
        this.props.getUserFriends(this.props.loginUserId)

        if (this.props.friendsId.length) {
            if (this.props.friends.length === 0) {
                this.props.friendsId.forEach((friend) => this.props.getLittleInfoAboutFriends(friend.userId))
            }
        }
    }

    componentDidMount() {
        this.refreshFriends()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.loginUserId !== this.props.loginUserId) {
            this.refreshFriends()
        }
    }

    friends = () => {
        return <Friends friends={this.props.friends} /> 
    }

    loading = () => {
        return <div>"loading"</div>
    }

    render() {
        return (
            !this.props.profile ? this.loading() : this.friends()
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
 