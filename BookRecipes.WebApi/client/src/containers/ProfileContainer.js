import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProfile} from '../Redux/actions/profileAction'
import { addPost,  getUserPosts,  updatePostBody, updatePostTitle } from '../Redux/actions/postsAction'
import Profile from '../components/Profile/Profile'
import { getLittleInfromationAboutFriend, getUserFriends } from '../Redux/actions/friendsAction'

class ProfileContainer  extends Component {

    componentDidMount() {
        this.props.getProfile(2);        
    }

    profile = () => {

        this.props.getUserPosts(this.props.profile.id)
        this.props.getUserFriends(this.props.profile.id)

        if (this.props.friendsId.length > 0) {
            if (this.props.friends.length===0) {
                this.props.friendsId.forEach((friend) => this.props.getLittleInfoAboutFriends(friend.userId))
            }
        }
        return <Profile
            profile={this.props.profile}

            posts={this.props.posts}
            friends={this.props.friends}

            updatePostBody={this.props.updatePostBody}
            updatePostTitle={this.props.updatePostTitle}
            addPost={this.props.addPost}
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
        posts: state.posts.posts,
        friendsId: state.friends.friends,
        friends: state.informator.friends
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePostBody: (text) => (dispatch(updatePostBody(text))),
        updatePostTitle: (text) => (dispatch(updatePostTitle(text))),
        addPost: () => (dispatch(addPost())),
        getProfile: (id) => (dispatch(getProfile(id))),
        getUserPosts: (userId) => (dispatch(getUserPosts(userId))),
        getUserFriends: (userId) => (dispatch(getUserFriends(userId))),
        getLittleInfoAboutFriends: (userId) => (dispatch(getLittleInfromationAboutFriend(userId)))
}}

let WithRouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterComponent)
 