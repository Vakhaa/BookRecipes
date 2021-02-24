import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { addPost,  getUserPosts } from '../Redux/actions/postsAction'
import Profile from '../components/Profile/Profile'
import { compose } from 'redux'
import { withAuthUser } from '../hoc/withAuthUser'
import { withFriends } from '../hoc/withFriends'
import { getFriendsClipInfo, getProfile, getProfileIsFetching, getPosts } from '../utiles/selectors/selectors'

class ProfileContainer  extends Component {

    // problems with user admini (maybe problems with auth and id 0?)
    profile = () => {

        this.props.getUserPosts(this.props.profile.id)

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
        profile: getProfile(state),
        isFetching: getProfileIsFetching(state),
        posts: getPosts(state),
        friends: getFriendsClipInfo(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: (post) => (dispatch(addPost(post))),
        getUserPosts: (userId) => (dispatch(getUserPosts(userId))),
}}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withFriends,
    withAuthUser,
)(ProfileContainer)
 