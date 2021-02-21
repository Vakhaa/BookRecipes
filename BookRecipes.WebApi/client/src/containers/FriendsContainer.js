import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { getProfile} from '../Redux/actions/profileAction'
import { getLittleInfromationAboutFriend, getUserFriends } from '../Redux/actions/friendsAction'

import Friends from '../components/Friends/Friends'

class FriendsContainer  extends Component {

    componentDidMount() {
        this.props.getProfile(2);        
    }

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
        profile: state.profiles.profile,
        isFetching: state.profiles.fetching,
        friendsId: state.friends.friends,
        friends: state.informator.friends
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfile: (id) => (dispatch(getProfile(id))),
        getUserFriends: (userId) => (dispatch(getUserFriends(userId))),
        getLittleInfoAboutFriends: (userId) => (dispatch(getLittleInfromationAboutFriend(userId)))
}}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)
 