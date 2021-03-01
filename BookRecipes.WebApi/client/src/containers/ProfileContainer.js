import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { addPost,  getUserPosts } from '../Redux/actions/postsAction'
import Profile from '../components/Profile/Profile'
import { compose } from 'redux'
import { withAuthUser } from '../hoc/withAuthUser'
import { withFriends } from '../hoc/withFriends'
import { getFriendsClipInfo, getProfile, getProfileIsFetching, getPosts } from '../utiles/selectors/selectors'

class ProfileContainer extends Component {

    // problems with user admini (maybe problems with auth and id 0?)

    getUser() {
        return this.props.match.params.userId ? this.props.match.params.userId : this.props.loginUserId
    }

    refreshUser() {
        const userId = this.getUser()
        if (userId) {
            this.props.getProfile(userId);
            this.refreshPosts()
        }
    }

    refreshPosts() {
        const userId = this.getUser()
        if (userId) this.props.getUserPosts(userId);
    }

    componentDidMount() {
        this.refreshUser();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.loginUserId !== this.props.loginUserId) {
            this.refreshUser();
        } else if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshUser();
        } else if (prevProps.posts !== this.props.posts) {
            this.refreshPosts()
        }
    }

    profile = () => {
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
 