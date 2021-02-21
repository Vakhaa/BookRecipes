import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { addPost,  getUserPosts,  updatePostBody, updatePostTitle } from '../Redux/actions/postsAction'
import Profile from '../components/Profile/Profile'
import { compose } from 'redux'
import { withAuthUser } from '../hoc/withAuthUser'
import { withFriends } from '../hoc/withFriends'

class ProfileContainer  extends Component {


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
        profile: state.profiles.profile,
        isFetching: state.profiles.fetching,
        posts: state.posts.posts,
        friends: state.informator.friends
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePostBody: (text) => (dispatch(updatePostBody(text))),
        updatePostTitle: (text) => (dispatch(updatePostTitle(text))),
        addPost: () => (dispatch(addPost())),
        getUserPosts: (userId) => (dispatch(getUserPosts(userId))),
}}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthUser,
    withFriends
)(ProfileContainer)
 